'use client';

import Link from 'next/link';
import type { Game } from '@/lib/games';
import type { ArticleMeta } from '@/lib/content';
import { useLanguage } from '@/components/language-provider';
import { getCategoryLabel, getGameDescription, t as translate } from '@/lib/i18n';
import { ArticleCard } from '@/components/article-card';
import { AdSlot } from '@/components/ad-slot';

const categorySlugs = ['codes', 'tier-list', 'guides', 'updates', 'fixes'] as const;

export function GamePageContent({ game, articles }: { game: Game; articles: ArticleMeta[] }) {
  const { locale } = useLanguage();
  const description = getGameDescription(game.slug, locale);

  return (
    <>
      {/* Game Banner */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{game.name}</h1>
              <p className="mt-2 max-w-xl text-muted-foreground">{description}</p>
            </div>
            <a
              href={game.robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.164 0L0 18.627 18.836 24 24 5.373 5.164 0zM14.838 15.975l-6.814-1.806 1.806-6.814 6.814 1.806-1.806 6.814z" />
              </svg>
              {translate('game.playOnRoblox', locale)}
            </a>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex gap-1 overflow-x-auto py-2" aria-label="Game categories">
            {categorySlugs.map((cat) => {
              const hasContent = articles.some((a) => a.category === cat);
              return (
                <Link
                  key={cat}
                  href={`/${game.slug}/${cat}`}
                  className={`shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    hasContent
                      ? 'text-foreground hover:bg-muted hover:text-primary'
                      : 'text-muted-foreground/50 pointer-events-none'
                  }`}
                >
                  {getCategoryLabel(cat, locale)}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-bold text-foreground">{translate('game.latestContent', locale)}</h2>
            {articles.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {articles.map((article) => (
                  <ArticleCard key={`${article.game}-${article.slug}`} article={article} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">{translate('game.noContent', locale, { game: game.name })}</p>
            )}
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
