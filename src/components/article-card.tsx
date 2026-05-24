'use client';

import Link from 'next/link';
import type { ArticleMeta } from '@/lib/content';
import { useLanguage } from '@/components/language-provider';
import { getCategoryLabel, formatShortDate } from '@/lib/i18n';

export function ArticleCard({ article }: { article: ArticleMeta }) {
  const { locale } = useLanguage();
  const href = `/${article.game}/${article.slug}`;
  const categoryLabel = getCategoryLabel(article.category, locale);

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50"
    >
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="inline-block rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            {categoryLabel}
          </span>
          <span className="text-xs text-muted-foreground">
            {formatShortDate(article.date, locale)}
          </span>
        </div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {article.description}
        </p>
      </div>
    </Link>
  );
}
