'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';
import { getCategoryLabel, formatShortDate } from '@/lib/i18n';
import type { ArticleMeta } from '@/lib/content';

export function SearchContent({ articles }: { articles: ArticleMeta[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const { locale } = useLanguage();
  const { t } = useLanguage();

  const lowerQuery = query.toLowerCase();
  const results = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(lowerQuery) ||
      a.description.toLowerCase().includes(lowerQuery) ||
      a.game.replace(/-/g, ' ').toLowerCase().includes(lowerQuery) ||
      a.category.toLowerCase().includes(lowerQuery)
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">{t('search.title')}</h1>
      <p className="text-muted-foreground mb-6">
        {results.length > 0
          ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`
          : t('search.noResults', { query })}
      </p>

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((article) => {
            const categoryLabel = getCategoryLabel(article.category, locale);
            const categoryColors: Record<string, string> = {
              codes: 'bg-primary/10 text-primary',
              'tier-list': 'bg-chart-2/10 text-chart-2',
              guides: 'bg-chart-3/10 text-chart-3',
            };
            return (
              <Link
                key={`${article.game}-${article.slug}`}
                href={`/${article.game}/${article.slug}`}
                className="group block rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`inline-block rounded px-1.5 py-0.5 text-xs ${categoryColors[article.category] || 'bg-muted text-muted-foreground'}`}>
                    {categoryLabel}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.game.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatShortDate(article.date, locale)}
                  </span>
                </div>
                <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {article.description}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
