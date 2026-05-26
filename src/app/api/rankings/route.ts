import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';
import { getRankingCategories, type RankingResult } from '@/lib/ranking-items';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const gameSlug = searchParams.get('game');
    const category = searchParams.get('category');

    if (!gameSlug) {
      return NextResponse.json(
        { error: 'Missing required parameter: game' },
        { status: 400 }
      );
    }

    const client = getSupabaseClient();

    // Determine which categories to query
    const categories = getRankingCategories(gameSlug);
    const categoriesToQuery = category
      ? categories.filter((c) => c.id === category)
      : categories;

    if (categoriesToQuery.length === 0) {
      return NextResponse.json({ rankings: {} });
    }

    // Build results per category
    const rankings: Record<string, RankingResult[]> = {};

    for (const cat of categoriesToQuery) {
      // Fetch all votes for this game+category
      const { data: votes, error: votesError } = await client
        .from('votes')
        .select('item_id, score, created_at')
        .eq('game_slug', gameSlug)
        .eq('category', cat.id);

      if (votesError) {
        throw new Error(`Rankings query failed: ${votesError.message}`);
      }

      // Calculate stats per item
      const itemStats: Record<string, { totalScore: number; count: number; recentCount: number }> = {};

      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      for (const vote of votes || []) {
        if (!itemStats[vote.item_id]) {
          itemStats[vote.item_id] = { totalScore: 0, count: 0, recentCount: 0 };
        }
        itemStats[vote.item_id].totalScore += vote.score;
        itemStats[vote.item_id].count += 1;

        const voteDate = new Date(vote.created_at);
        if (voteDate >= sevenDaysAgo) {
          itemStats[vote.item_id].recentCount += 1;
        }
      }

      // Build ranking results with item names
      const results: RankingResult[] = cat.items
        .map((item) => {
          const stats = itemStats[item.id];
          return {
            item_id: item.id,
            item_name: item.name,
            avg_score: stats ? Math.round((stats.totalScore / stats.count) * 10) / 10 : 0,
            total_votes: stats?.count || 0,
            recent_votes: stats?.recentCount || 0,
          };
        })
        .sort((a, b) => {
          // Sort by avg_score desc, then by total_votes desc
          if (b.avg_score !== a.avg_score) return b.avg_score - a.avg_score;
          return b.total_votes - a.total_votes;
        });

      rankings[cat.id] = results;
    }

    // If single category requested, also get total vote count for the game
    let totalVotes = 0;
    const { count, error: countError } = await client
      .from('votes')
      .select('*', { count: 'exact', head: true })
      .eq('game_slug', gameSlug);

    if (countError) {
      throw new Error(`Vote count failed: ${countError.message}`);
    }
    totalVotes = count || 0;

    return NextResponse.json({ rankings, totalVotes });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[Rankings API Error]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
