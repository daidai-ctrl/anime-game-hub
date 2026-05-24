'use client';

import Link from 'next/link';
import type { ArticleMeta } from '@/lib/content';
import { useLanguage } from '@/components/language-provider';
import { ArticleCard } from '@/components/article-card';
import { AdSlot } from '@/components/ad-slot';

interface CategoryPageContentProps {
  category: 'codes' | 'tier-list' | 'guides';
  articles: ArticleMeta[];
}

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

export function CategoryPageContent({ category, articles }: CategoryPageContentProps) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">{t('breadcrumb.home')}</Link></li>
          <li>/</li>
          <li className="text-foreground">{t(titleKeys[category])}</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-foreground mb-2">{t(titleKeys[category])}</h1>
      <p className="text-muted-foreground mb-8">{t(descKeys[category])}</p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {articles.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {articles.map((article) => (
                <ArticleCard key={`${article.game}-${article.slug}`} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">{t(emptyKeys[category])}</p>
          )}
        </div>
        <aside className="space-y-6">
          <AdSlot slot="sidebar" />
        </aside>
      </div>
    </div>
  );
}
