import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';
import { getRankingItem } from '@/lib/ranking-items';
import { createHash } from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { game_slug, category, item_id, score } = body;

    // Validate required fields
    if (!game_slug || !category || !item_id || !score) {
      return NextResponse.json(
        { error: 'Missing required fields: game_slug, category, item_id, score' },
        { status: 400 }
      );
    }

    // Validate score
    const numericScore = Number(score);
    if (!Number.isInteger(numericScore) || numericScore < 1 || numericScore > 5) {
      return NextResponse.json(
        { error: 'Score must be an integer between 1 and 5' },
        { status: 400 }
      );
    }

    // Validate item exists
    const item = getRankingItem(game_slug, category, item_id);
    if (!item) {
      return NextResponse.json(
        { error: 'Invalid game_slug, category, or item_id combination' },
        { status: 400 }
      );
    }

    // Generate IP hash for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
    const ipHash = createHash('sha256').update(ip).digest('hex').slice(0, 32);

    const client = getSupabaseClient();

    // Check if this IP already voted for this item in this game+category today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { data: existingVote, error: checkError } = await client
      .from('votes')
      .select('id')
      .eq('game_slug', game_slug)
      .eq('category', category)
      .eq('item_id', item_id)
      .eq('ip_hash', ipHash)
      .gte('created_at', today.toISOString())
      .maybeSingle();

    if (checkError) {
      throw new Error(`Vote check failed: ${checkError.message}`);
    }

    if (existingVote) {
      return NextResponse.json(
        { error: 'You have already voted for this item today' },
        { status: 429 }
      );
    }

    // Insert vote
    const { error: insertError } = await client.from('votes').insert({
      game_slug,
      category,
      item_id,
      score: numericScore,
      ip_hash: ipHash,
    });

    if (insertError) {
      throw new Error(`Vote insert failed: ${insertError.message}`);
    }

    return NextResponse.json({ success: true, message: 'Vote recorded' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[Vote API Error]', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
