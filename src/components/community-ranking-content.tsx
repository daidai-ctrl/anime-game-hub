'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { getRankingCategories, type RankingCategory, type RankingResult, scoreLabels, scoreEmojis } from '@/lib/ranking-items';
import { getGame } from '@/lib/games';
import { AdSlot } from '@/components/ad-slot';

interface CommunityRankingContentProps {
  gameSlug: string;
}

export function CommunityRankingContent({ gameSlug }: CommunityRankingContentProps) {
  const { t } = useLanguage();
  const game = getGame(gameSlug);
  const categories = getRankingCategories(gameSlug);

  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || '');
  const [rankings, setRankings] = useState<Record<string, RankingResult[]>>({});
  const [totalVotes, setTotalVotes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [votingItem, setVotingItem] = useState<string | null>(null);
  const [voteMessage, setVoteMessage] = useState<{ itemId: string; text: string; type: 'success' | 'error' } | null>(null);

  const fetchRankings = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/rankings?game=${gameSlug}`);
      if (!res.ok) throw new Error('Failed to fetch rankings');
      const data = await res.json();
      setRankings(data.rankings || {});
      setTotalVotes(data.totalVotes || 0);
    } catch (err) {
      console.error('Failed to fetch rankings:', err);
    } finally {
      setLoading(false);
    }
  }, [gameSlug]);

  useEffect(() => {
    fetchRankings();
  }, [fetchRankings]);

  const handleVote = async (itemId: string, score: number) => {
    setVotingItem(itemId);
    setVoteMessage(null);

    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          game_slug: gameSlug,
          category: activeCategory,
          item_id: itemId,
          score,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setVoteMessage({ itemId, text: t('ranking.voteSuccess'), type: 'success' });
        fetchRankings();
      } else {
        setVoteMessage({ itemId, text: data.error || t('ranking.voteFailed'), type: 'error' });
      }
    } catch {
      setVoteMessage({ itemId, text: t('ranking.voteFailed'), type: 'error' });
    } finally {
      setVotingItem(null);
      setTimeout(() => setVoteMessage(null), 3000);
    }
  };

  if (!game) return null;

  const currentRankings = rankings[activeCategory] || [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/${gameSlug}`} className="hover:text-primary transition-colors">{game.name}</Link>
        <span>/</span>
        <span className="text-foreground">{t('ranking.title')}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          {game.name} {t('ranking.title')} (2026)
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t('ranking.description', { game: game.name })}
        </p>
        <div className="mt-3 flex items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-primary font-medium">
            {totalVotes.toLocaleString()} {t('ranking.totalVotes')}
          </span>
          <span className="text-muted-foreground">{t('ranking.updatedDaily')}</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat: RankingCategory) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-card text-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Rankings List */}
          <div className="rounded-lg border border-border bg-card">
            {loading ? (
              <div className="p-8 text-center text-muted-foreground">
                <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                {t('ranking.loading')}
              </div>
            ) : currentRankings.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                {t('ranking.noRankings')}
              </div>
            ) : (
              <div className="divide-y divide-border">
                {currentRankings.map((item, index) => (
                  <RankingItemRow
                    key={item.item_id}
                    item={item}
                    rank={index + 1}
                    onVote={handleVote}
                    votingItem={votingItem}
                    voteMessage={voteMessage}
                    t={t}
                  />
                ))}
              </div>
            )}
          </div>

          <AdSlot slot="ranking-mid" />

          {/* Recent Activity */}
          {currentRankings.filter((r) => r.recent_votes > 0).length > 0 && (
            <section>
              <h2 className="mb-4 text-lg font-bold text-foreground">{t('ranking.recentActivity')}</h2>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {currentRankings
                    .filter((r) => r.recent_votes > 0)
                    .slice(0, 6)
                    .map((item) => (
                      <div key={item.item_id} className="flex items-center gap-3 rounded-lg bg-background/50 p-3">
                        <span className="text-lg font-bold text-primary">+{item.recent_votes}</span>
                        <div>
                          <div className="text-sm font-medium text-foreground">{item.item_name}</div>
                          <div className="text-xs text-muted-foreground">{t('ranking.votesThisWeek')}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ */}
          <section>
            <h2 className="mb-4 text-lg font-bold text-foreground">FAQ</h2>
            <div className="space-y-3">
              <FaqItem
                question={t('ranking.faq1Q')}
                answer={t('ranking.faq1A')}
              />
              <FaqItem
                question={t('ranking.faq2Q')}
                answer={t('ranking.faq2A')}
              />
              <FaqItem
                question={t('ranking.faq3Q')}
                answer={t('ranking.faq3A')}
              />
              <FaqItem
                question={t('ranking.faq4Q')}
                answer={t('ranking.faq4A')}
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <AdSlot slot="ranking-sidebar" />

          {/* Back to Game */}
          <div className="rounded-lg border border-border bg-card p-4">
            <Link
              href={`/${gameSlug}`}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {t('ranking.backToGame', { game: game.name })}
            </Link>
          </div>

          {/* Other Games */}
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold text-foreground">{t('ranking.otherGames')}</h3>
            <ul className="space-y-2">
              {['blox-fruits', 'anime-rangers', 'anime-vanguards', 'anime-last-stand', 'anime-defenders', 'arise-crossover', 'blue-lock-rivals', 'anime-saga']
                .filter((slug) => slug !== gameSlug)
                .slice(0, 5)
                .map((slug) => {
                  const g = getGame(slug);
                  if (!g) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/${slug}/community-ranking`}
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                          <path d="M12 20V10M18 20V4M6 20v-4" />
                        </svg>
                        {g.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </aside>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${game.name} Community Rankings (2026)`,
            description: `Vote and view community rankings for ${game.name}. Updated daily based on player votes.`,
            url: `/${gameSlug}/community-ranking`,
            isPartOf: {
              '@type': 'WebSite',
              name: 'AnimeGameHub',
              url: '/',
            },
          }),
        }}
      />
    </div>
  );
}

function RankingItemRow({
  item,
  rank,
  onVote,
  votingItem,
  voteMessage,
  t,
}: {
  item: RankingResult;
  rank: number;
  onVote: (itemId: string, score: number) => void;
  votingItem: string | null;
  voteMessage: { itemId: string; text: string; type: 'success' | 'error' } | null;
  t: (key: string, params?: Record<string, string>) => string;
}) {
  const [showVoteButtons, setShowVoteButtons] = useState(false);

  const rankBadge = () => {
    if (rank === 1) return <span className="text-xl">🥇</span>;
    if (rank === 2) return <span className="text-xl">🥈</span>;
    if (rank === 3) return <span className="text-xl">🥉</span>;
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  };

  const stars = item.avg_score > 0
    ? '★'.repeat(Math.round(item.avg_score)) + '☆'.repeat(5 - Math.round(item.avg_score))
    : '☆☆☆☆☆';

  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        {/* Rank */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
          {rankBadge()}
        </div>

        {/* Item Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground">{item.item_name}</h3>
            {item.avg_score > 0 && (
              <span className="text-sm text-yellow-500">{stars}</span>
            )}
          </div>
          <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
            {item.avg_score > 0 && (
              <span className="font-medium text-foreground">{item.avg_score.toFixed(1)}</span>
            )}
            <span>{item.total_votes} {t('ranking.votes')}</span>
            {item.recent_votes > 0 && (
              <span className="text-primary">+{item.recent_votes} {t('ranking.thisWeek')}</span>
            )}
          </div>
        </div>

        {/* Vote Button */}
        <button
          onClick={() => setShowVoteButtons(!showVoteButtons)}
          className="shrink-0 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
        >
          {t('ranking.vote')}
        </button>
      </div>

      {/* Vote Options */}
      {showVoteButtons && (
        <div className="mt-3 ml-14 space-y-2">
          <p className="text-xs text-muted-foreground">{t('ranking.selectRating')}</p>
          <div className="flex flex-wrap gap-2">
            {[5, 4, 3, 2, 1].map((score) => (
              <button
                key={score}
                onClick={() => onVote(item.item_id, score)}
                disabled={votingItem === item.item_id}
                className="flex flex-col items-center rounded-lg border border-border bg-background px-3 py-2 text-xs transition-colors hover:border-primary hover:bg-primary/5 disabled:opacity-50"
              >
                <span className="text-sm">{scoreEmojis[score]}</span>
                <span className="mt-1 text-muted-foreground">{scoreLabels[score]}</span>
              </button>
            ))}
          </div>
          {voteMessage && voteMessage.itemId === item.item_id && (
            <p className={`text-xs ${voteMessage.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {voteMessage.text}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <span className="text-sm font-medium text-foreground">{question}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
}
