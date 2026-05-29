'use client';

import Link from 'next/link';
import { games, latestUpdates } from '@/lib/games';
import { useLanguage } from '@/components/language-provider';
import { getGameDescription, getCategoryLabel, formatMonthDay } from '@/lib/i18n';
import { GameCard } from '@/components/game-card';
import { ArticleListItem } from '@/components/article-list-item';
import { AdSlot } from '@/components/ad-slot';
import type { ArticleMeta } from '@/lib/content';

const trendingSearches = [
  { label: 'Blox Fruits Codes', href: '/blox-fruits/codes' },
  { label: 'Anime Rangers Tier List', href: '/anime-rangers/tier-list' },
  { label: 'Anime Vanguards Codes', href: '/anime-vanguards/codes' },
  { label: 'Blox Fruits Update 24', href: '/blox-fruits/guides' },
];

export function HomeContent({ articles }: { articles: ArticleMeta[] }) {
  const { t, locale } = useLanguage();
  const codesArticles = articles.filter((a) => a.category === 'codes').slice(0, 10);
  const tierListArticles = articles.filter((a) => a.category === 'tier-list').slice(0, 10);
  const guidesArticles = articles.filter((a) => a.category === 'guides').slice(0, 10);

  return (
    <>
      {/* Hero Section - Compressed */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:py-12">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            {(() => {
              const raw = t('hero.title');
              const codesLabel = t('category.codes');
              const tierListLabel = t('category.tierList');
              const guidesLabel = t('category.guides');
              const parts = raw.split(/(\{codes\}|\{tierLists\}|\{guides\})/);
              return parts.map((part, i) => {
                if (part === '{codes}') return <span key={i} className="text-primary">{codesLabel}</span>;
                if (part === '{tierLists}') return <span key={i} className="text-chart-2">{tierListLabel}</span>;
                if (part === '{guides}') return <span key={i} className="text-chart-3">{guidesLabel}</span>;
                return <span key={i}>{part}</span>;
              });
            })()}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-base text-muted-foreground">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Trending Searches */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-1">
              {t('home.trendingSearches')}:
            </span>
            {trendingSearches.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary hover:bg-primary/5"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Ad Banner */}
        <div className="mb-8">
          <AdSlot slot="header-banner" />
        </div>

        {/* Popular Games */}
        <section id="games" className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">{t('home.popularGames')}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        {/* Community Rankings */}
        <section className="mb-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">{t('home.communityRankings')}</h2>
            <span className="text-sm text-muted-foreground">{t('home.basedOnVotes')}</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.slice(0, 6).map((game) => (
              <Link
                key={game.slug}
                href={`/${game.slug}/community-rankings`}
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary hover:bg-primary/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xl">
                  🔥
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{game.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{t('home.viewRankings')}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Latest Codes */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">{t('home.latestCodes')}</h2>
                <Link href="/codes" className="text-sm font-medium text-primary hover:underline">
                  {t('home.viewAll')}
                </Link>
              </div>
              <div className="rounded-lg border border-border bg-card">
                {codesArticles.length > 0 ? (
                  codesArticles.map((article) => (
                    <ArticleListItem key={`${article.game}-${article.slug}`} article={article} />
                  ))
                ) : (
                  <p className="p-4 text-sm text-muted-foreground">{t('home.noCodes')}</p>
                )}
              </div>
            </section>

            {/* Latest Tier Lists */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">{t('home.latestTierLists')}</h2>
                <Link href="/tier-list" className="text-sm font-medium text-primary hover:underline">
                  {t('home.viewAll')}
                </Link>
              </div>
              <div className="rounded-lg border border-border bg-card">
                {tierListArticles.length > 0 ? (
                  tierListArticles.map((article) => (
                    <ArticleListItem key={`${article.game}-${article.slug}`} article={article} />
                  ))
                ) : (
                  <p className="p-4 text-sm text-muted-foreground">{t('home.noTierLists')}</p>
                )}
              </div>
            </section>

            {/* Popular Guides */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">{t('home.popularGuides')}</h2>
                <Link href="/guides" className="text-sm font-medium text-primary hover:underline">
                  {t('home.viewAll')}
                </Link>
              </div>
              <div className="rounded-lg border border-border bg-card">
                {guidesArticles.length > 0 ? (
                  guidesArticles.map((article) => (
                    <ArticleListItem key={`${article.game}-${article.slug}`} article={article} />
                  ))
                ) : (
                  <p className="p-4 text-sm text-muted-foreground">{t('home.noGuides')}</p>
                )}
              </div>
            </section>

            {/* Latest Updates */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-foreground">{t('home.latestUpdates')}</h2>
              </div>
              <div className="rounded-lg border border-border bg-card divide-y divide-border">
                {latestUpdates.map((update, i) => {
                  const typeLabel = t(`update.type.${update.type}`);
                  return (
                    <Link
                      key={i}
                      href={update.href || `/${update.gameSlug}`}
                      className="group flex items-center gap-4 p-4 transition-colors hover:bg-muted/30"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                          {update.type === 'new-character' ? (
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                          ) : update.type === 'patch' ? (
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          ) : (
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                          )}
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                          {update.title}
                        </h3>
                        <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="inline-block rounded bg-primary/10 px-1.5 py-0.5 text-primary">{typeLabel}</span>
                          <span>{update.game}</span>
                        </div>
                      </div>
                      <time className="shrink-0 text-xs text-muted-foreground">
                        {formatMonthDay(update.date, locale)}
                      </time>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <AdSlot slot="sidebar" />

            {/* Popular Posts */}
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-3 text-sm font-semibold text-foreground">{t('sidebar.popularPosts')}</h3>
              <ul className="space-y-3">
                {articles.slice(0, 5).map((article) => (
                  <li key={`${article.game}-${article.slug}`}>
                    <Link
                      href={`/${article.game}/${article.slug}`}
                      className="group block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </span>
                      <span className="mt-0.5 block text-xs">
                        {getCategoryLabel(article.category, locale)} · {formatMonthDay(article.date, locale)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trending Codes */}
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-3 text-sm font-semibold text-foreground">{t('sidebar.trendingCodes')}</h3>
              <ul className="space-y-2">
                {codesArticles.slice(0, 4).map((article) => (
                  <li key={`${article.game}-${article.slug}`}>
                    <Link
                      href={`/${article.game}/${article.slug}`}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-primary">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
                      </svg>
                      <span className="truncate">{article.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Most Viewed Tier Lists */}
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-3 text-sm font-semibold text-foreground">{t('sidebar.mostViewedTierLists')}</h3>
              <ul className="space-y-2">
                {tierListArticles.slice(0, 4).map((article) => (
                  <li key={`${article.game}-${article.slug}`}>
                    <Link
                      href={`/${article.game}/${article.slug}`}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-chart-2">
                        <path d="M12 20V10M18 20V4M6 20v-4" />
                      </svg>
                      <span className="truncate">{article.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
