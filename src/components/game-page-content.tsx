'use client';

import { useState } from 'react';
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Split articles by category
  const codesArticles = articles.filter((a) => a.category === 'codes').slice(0, 3);
  const tierListArticles = articles.filter((a) => a.category === 'tier-list').slice(0, 3);
  const guidesArticles = articles.filter((a) => a.category === 'guides').slice(0, 6);
  
  // Filtered articles for the list section
  const filteredArticles = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  return (
    <>
      {/* Game Banner */}
      <section className="border-b border-border relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={game.coverImage}
            alt={game.name}
            className="h-full w-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1117] via-[#0f1117]/80 to-[#0f1117]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{game.name}</h1>
              <p className="mt-2 max-w-xl text-muted-foreground">{game.whatIs.slice(0, 120)}...</p>
              {/* Stats row */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>
                  {game.codesCount} {translate('related.codes', locale)}
                </span>
                <span className="flex items-center gap-1.5 text-purple-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  {game.tierListCount} Tier Lists
                </span>
                <span className="flex items-center gap-1.5 text-blue-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                  {game.guidesCount} {translate('related.guides', locale)}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {translate('game.lastUpdated', locale, { date: game.lastUpdated })}
                </span>
              </div>
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

      {/* Popular Topics Navigation */}
      {game.popularTopics && game.popularTopics.length > 0 && (
        <div className="border-b border-border bg-[#1a1d2e]/60">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <h2 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {translate('game.popularTopics', locale)}
            </h2>
            <div className="flex flex-wrap gap-2">
              {game.popularTopics.map((topic) => (
                <Link
                  key={topic.label}
                  href={`/${game.slug}/${topic.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                >
                  {topic.icon && (
                    <span className="text-xs opacity-70">{topic.icon}</span>
                  )}
                  {topic.label}
                </Link>
              ))}
              <Link
                href={`/${game.slug}/community-ranking`}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/20"
              >
                <span className="text-xs opacity-70">🔥</span>
                {translate('ranking.title', locale)}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Category Navigation - local filter */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex gap-1 overflow-x-auto py-2" aria-label="Game categories">
            <button
              onClick={() => { setActiveCategory(null); document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className={`shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                !activeCategory
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
            >
              {translate('game.allContent', locale)}
            </button>
            {categorySlugs.map((cat) => {
              const hasContent = articles.some((a) => a.category === cat);
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  disabled={!hasContent}
                  className={`shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : hasContent
                        ? 'text-foreground hover:bg-muted hover:text-primary'
                        : 'text-muted-foreground/50 cursor-not-allowed'
                  }`}
                >
                  {getCategoryLabel(cat, locale)}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Section 1: What is [Game]? */}
            <section className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground">
                {translate('game.whatIs', locale, { game: game.name })}
              </h2>
              <p className="leading-relaxed text-muted-foreground">{game.whatIs}</p>
            </section>

            {/* Section 2: Latest Codes */}
            {codesArticles.length > 0 && (
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>
                    </span>
                    {translate('game.latestCodes', locale)}
                  </h2>
                  <Link
                    href={`/${game.slug}/codes`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {translate('related.viewAll', locale)} →
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {codesArticles.map((article) => (
                    <Link
                      key={`${article.game}-${article.slug}`}
                      href={`/${article.game}/${article.slug}`}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary truncate">{article.title}</h3>
                        <p className="text-xs text-muted-foreground">{article.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Section 3: Best Items (Tier List highlight) */}
            {tierListArticles.length > 0 && (
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-purple-500/10 text-purple-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </span>
                    {game.bestItemLabel}
                  </h2>
                  <Link
                    href={`/${game.slug}/${game.bestItemSlug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {translate('related.viewAll', locale)} →
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {tierListArticles.map((article) => (
                    <Link
                      key={`${article.game}-${article.slug}`}
                      href={`/${article.game}/${article.slug}`}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-purple-500/50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-purple-500/10 text-purple-400">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-purple-400 truncate">{article.title}</h3>
                        <p className="text-xs text-muted-foreground">{article.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Section 4: Best Guides */}
            {guidesArticles.length > 0 && (
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 text-blue-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                    </span>
                    {translate('game.bestGuides', locale)}
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {guidesArticles.map((article) => (
                    <ArticleCard key={`${article.game}-${article.slug}`} article={article} />
                  ))}
                </div>
              </section>
            )}

            {/* Section 5: FAQ */}
            {game.faqs && game.faqs.length > 0 && (
              <section>
                <h2 className="mb-4 text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  </span>
                  {game.name} FAQ
                </h2>
                <div className="space-y-3">
                  {game.faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>
            )}

            {/* All Articles List */}
            <section id="articles" className="scroll-mt-20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">{translate('game.latestContent', locale)}</h2>
                {activeCategory && (
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="text-sm text-primary hover:underline"
                  >
                    {translate('common.viewAll', locale)}
                  </button>
                )}
              </div>
              {filteredArticles.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={`${article.game}-${article.slug}`} article={article} />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">{translate('game.noContent', locale, { game: game.name })}</p>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <AdSlot slot="sidebar" />
            {/* Quick Links */}
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-3 text-sm font-semibold text-foreground">{translate('sidebar.quickLinks', locale)}</h3>
              <div className="space-y-2">
                {game.popularTopics && game.popularTopics.slice(0, 6).map((topic) => (
                  <Link key={topic.label} href={`/${game.slug}/${topic.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <span className="text-xs">{topic.icon}</span>
                    {topic.label}
                  </Link>
                ))}
                <Link href={`/${game.slug}/community-ranking`} className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  <span className="text-xs">🔥</span>
                  {translate('ranking.title', locale)}
                </Link>
              </div>
            </div>
            <AdSlot slot="footer" />
          </aside>
        </div>
      </div>
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
      >
        <span>{question}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
