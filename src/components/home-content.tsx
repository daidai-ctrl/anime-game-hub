'use client';

import Link from 'next/link';
import { games } from '@/lib/games';
import { useLanguage } from '@/components/language-provider';
import { getGameDescription } from '@/lib/i18n';
import { GameCard } from '@/components/game-card';
import { ArticleListItem } from '@/components/article-list-item';
import { AdSlot } from '@/components/ad-slot';
import type { ArticleMeta } from '@/lib/content';

export function HomeContent({ articles }: { articles: ArticleMeta[] }) {
  const { t, locale } = useLanguage();
  const codesArticles = articles.filter((a) => a.category === 'codes').slice(0, 5);
  const tierListArticles = articles.filter((a) => a.category === 'tier-list').slice(0, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
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
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {games.map((game) => (
              <Link
                key={game.slug}
                href={`/${game.slug}`}
                className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                {game.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Ad Banner */}
        <div className="mb-8">
          <AdSlot slot="header-banner" />
        </div>

        {/* Popular Games */}
        <section id="games" className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">{t('home.popularGames')}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Latest Codes */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">{t('home.latestCodes')}</h2>
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
                <h2 className="text-xl font-bold text-foreground">{t('home.latestTierLists')}</h2>
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
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <AdSlot slot="sidebar" />
          </aside>
        </div>
      </div>
    </>
  );
}
