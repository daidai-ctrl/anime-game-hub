'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { ArticleMeta } from '@/lib/content';
import { games } from '@/lib/games';
import { useLanguage } from '@/components/language-provider';
import { ArticleCard } from '@/components/article-card';
import { Pagination } from '@/components/pagination';

const AdSlot = dynamic(
  () => import('@/components/ad-slot').then((mod) => mod.AdSlot),
  {
    ssr: false,
    loading: () => <div className="h-[250px] w-full rounded border border-dashed border-[#2a2d3e] bg-[#1a1d2e]/30" />,
  }
);

interface CategoryPageContentProps {
  category: 'codes' | 'tier-list' | 'guides';
  articles: ArticleMeta[];
  currentPage?: number;
}

const ITEMS_PER_PAGE = 10;

const titleKeys: Record<string, string> = {
  codes: 'codes.title',
  'tier-list': 'tierlist.title',
  guides: 'guides.title',
};

const descKeys: Record<string, string> = {
  codes: 'codes.description',
  'tier-list': 'tierlist.description',
  guides: 'guides.description',
};

const emptyKeys: Record<string, string> = {
  codes: 'codes.noArticles',
  'tier-list': 'tierlist.noArticles',
  guides: 'guides.noArticles',
};

const basePathMap: Record<string, string> = {
  codes: '/codes',
  'tier-list': '/tier-list',
  guides: '/guides',
};

export function CategoryPageContent({ category, articles, currentPage = 1 }: CategoryPageContentProps) {
  const { t, locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles by search
  const filteredArticles = searchQuery
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.game.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articles;

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Get latest update date from articles
  const latestDate = articles.length > 0
    ? new Date(Math.max(...articles.map((a) => new Date(a.date).getTime())))
    : new Date();
  const formattedDate = latestDate.toLocaleDateString(locale === 'zh' ? 'zh-CN' : locale === 'ja' ? 'ja-JP' : locale === 'es' ? 'es-ES' : locale === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Trending links - point to real content pages instead of search
  const trendingLinks = [
    { label: 'Blox Fruits Codes', href: '/blox-fruits/codes' },
    { label: 'Anime Rangers Tier List', href: '/anime-rangers/tier-list' },
    { label: 'Anime Vanguards Codes', href: '/anime-vanguards/codes' },
    { label: 'Best Fruits Tier List', href: '/blox-fruits/tier-list' },
    { label: 'Blox Fruits Guides', href: '/blox-fruits' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-primary flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              {t('breadcrumb.home')}
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">{t(titleKeys[category])}</li>
        </ol>
      </nav>

      {/* Last Updated Badge */}
      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <svg className="w-4 h-4 text-[#00d4aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        {t('codes.lastUpdated', { date: formattedDate })}
      </div>

      {/* H1 Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        {t(titleKeys[category])}
      </h1>

      {/* Description */}
      <p className="text-muted-foreground text-lg leading-relaxed mb-2">
        {t(descKeys[category])}
      </p>
      {category === 'codes' && (
        <p className="text-muted-foreground/80 text-base leading-relaxed mb-8">
          {t('codes.descriptionExtra')}
        </p>
      )}

      {/* Featured Games - only for codes page */}
      {category === 'codes' && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">{t('codes.featuredGames')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {games.map((game) => (
              <Link
                key={game.slug}
                href={`/${game.slug}`}
                className="group flex items-center gap-3 p-4 rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] hover:border-[#00d4aa]/50 transition-all"
              >
                <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  {game.coverImage ? (
                    <Image src={game.coverImage} alt={game.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-[#00d4aa]/20 flex items-center justify-center text-[#00d4aa] font-bold text-lg">
                      {game.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground group-hover:text-[#00d4aa] transition-colors truncate">{game.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {t('game.codesLabel', { count: String(game.codesCount) })} · {t('game.tierListLabel', { count: String(game.tierListCount) })}
                  </div>
                </div>
                <svg className="w-4 h-4 text-muted-foreground group-hover:text-[#00d4aa] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Trending Codes - only for codes page */}
      {category === 'codes' && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">{t('codes.trendingCodes')}</h2>
          <div className="flex flex-wrap gap-3">
            {games.map((game) => (
              <Link
                key={game.slug}
                href={`/${game.slug}/codes`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1a1d2e] border border-[#2a2d3e] text-foreground hover:border-[#00d4aa]/50 hover:text-[#00d4aa] transition-all text-sm font-medium"
              >
                <svg className="w-4 h-4 text-[#00d4aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                {t('codes.trendingItem', { game: game.name })}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Main layout: Content + Sidebar */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                {paginatedArticles.map((article) => (
                  <ArticleCard key={`${article.game}-${article.slug}`} article={article} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath={basePathMap[category]}
              />
            </>
          ) : (
            <p className="text-muted-foreground">{t(emptyKeys[category])}</p>
          )}

          {/* Category-specific SEO content */}
          {category === 'codes' && (
            <div className="mt-8 space-y-6">
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">{t('cat.codesHowTrack')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('cat.codesHowTrackText')}</p>
              </section>
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">{t('cat.codesWhatGive')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('cat.codesWhatGiveText')}</p>
              </section>
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">{t('cat.codesSafety')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('cat.codesSafetyText')}</p>
              </section>
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">{t('cat.codesFAQ')}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cat.codesFAQ1Q')}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t('cat.codesFAQ1A')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cat.codesFAQ2Q')}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t('cat.codesFAQ2A')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cat.codesFAQ3Q')}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t('cat.codesFAQ3A')}</p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {category === 'guides' && (
            <div className="mt-8 space-y-6">
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">{t('cat.guidesWhatLearn')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('cat.guidesWhatLearnText')}</p>
              </section>
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">{t('cat.guidesCategories')}</h2>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">{t('cat.guidesCatBeginner')}</p>
                  <p className="text-muted-foreground text-sm">{t('cat.guidesCatFarming')}</p>
                  <p className="text-muted-foreground text-sm">{t('cat.guidesCatPvP')}</p>
                  <p className="text-muted-foreground text-sm">{t('cat.guidesCatTeam')}</p>
                  <p className="text-muted-foreground text-sm">{t('cat.guidesCatUpdate')}</p>
                </div>
              </section>
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">{t('cat.guidesFAQ')}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cat.guidesFAQ1Q')}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t('cat.guidesFAQ1A')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cat.guidesFAQ2Q')}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t('cat.guidesFAQ2A')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cat.guidesFAQ3Q')}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t('cat.guidesFAQ3A')}</p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {category === 'tier-list' && (
            <div className="mt-8 space-y-6">
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">{t('cat.tierHowWork')}</h2>
                <p className="text-muted-foreground leading-relaxed">{t('cat.tierHowWorkText')}</p>
              </section>
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">S &amp; A Tier</h2>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">{t('cat.tierS')}</p>
                  <p className="text-muted-foreground text-sm">{t('cat.tierA')}</p>
                </div>
              </section>
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">B &amp; C Tier</h2>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">{t('cat.tierB')}</p>
                  <p className="text-muted-foreground text-sm">{t('cat.tierC')}</p>
                </div>
              </section>
              <section className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">{t('cat.tierFAQ')}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cat.tierFAQ1Q')}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t('cat.tierFAQ1A')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cat.tierFAQ2Q')}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t('cat.tierFAQ2A')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('cat.tierFAQ3Q')}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t('cat.tierFAQ3A')}</p>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Popular Posts */}
          <div className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-5">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#6366f1]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              {t('sidebar.popularPosts')}
            </h3>
            <ul className="space-y-3">
              {articles.slice(0, 5).map((article) => (
                <li key={`${article.game}-${article.slug}`}>
                  <Link
                    href={`/${article.game}/${article.slug}`}
                    className="block text-sm text-muted-foreground hover:text-[#00d4aa] transition-colors line-clamp-2"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Updates */}
          <div className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-5">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#00d4aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {t('sidebar.latestUpdates')}
            </h3>
            <ul className="space-y-3">
              {games.map((g) => g.name).slice(0, 4).map((name, idx) => (
                <li key={idx}>
                  <span
                    className="block text-sm text-muted-foreground"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 bg-[#00d4aa]" />
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending Pages */}
          <div className="rounded-xl bg-[#1a1d2e] border border-[#2a2d3e] p-5">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              {t('sidebar.trendingPages')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {trendingLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-block px-3 py-1.5 rounded-full bg-[#2a2d3e] text-xs text-muted-foreground hover:text-[#00d4aa] hover:bg-[#2a2d3e]/80 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ad Slot */}
          <AdSlot slot="sidebar" />
        </aside>
      </div>
    </div>
  );
}
