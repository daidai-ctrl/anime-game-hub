'use client';

import Link from 'next/link';
import type { ArticleMeta } from '@/lib/content';
import { useLanguage } from '@/components/language-provider';
import { getCategoryLabel, formatShortDate } from '@/lib/i18n';

export function ArticleListItem({ article }: { article: ArticleMeta }) {
  const { locale } = useLanguage();
  const href = `/${article.game}/${article.slug}`;
  const categoryLabel = getCategoryLabel(article.category, locale);
  const gameName = article.game.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  // Color map for category badges
  const categoryColors: Record<string, string> = {
    codes: 'bg-primary/10 text-primary',
    'tier-list': 'bg-chart-2/10 text-chart-2',
    guides: 'bg-chart-3/10 text-chart-3',
    updates: 'bg-blue-500/10 text-blue-400',
    fixes: 'bg-orange-500/10 text-orange-400',
  };

  // Thumbnail image map for categories
  const categoryThumbs: Record<string, string> = {
    codes: '/images/codes-thumb.jpeg',
    'tier-list': '/images/tier-list-thumb.jpeg',
    guides: '/images/guides-thumb.jpeg',
    updates: '/images/codes-thumb.jpeg',
    fixes: '/images/guides-thumb.jpeg',
  };

  return (
    <Link
      href={href}
      className="group flex items-center gap-4 border-b border-border py-3 transition-colors hover:bg-muted/30 last:border-0 px-2 -mx-2 rounded"
    >
      {/* Thumbnail */}
      <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg overflow-hidden">
        <img
          src={categoryThumbs[article.category] || '/images/guides-thumb.jpeg'}
          alt={categoryLabel}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
          {article.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <span className={`inline-block rounded px-1.5 py-0.5 ${categoryColors[article.category] || 'bg-muted text-muted-foreground'}`}>
            {categoryLabel}
          </span>
          <span>{gameName}</span>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-1">
        <time className="text-xs text-muted-foreground">
          {formatShortDate(article.date, locale)}
        </time>
        <span className="inline-flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          {''}
        </span>
      </div>
    </Link>
  );
}
