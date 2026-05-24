import Link from 'next/link';
import type { ArticleMeta } from '@/lib/content';

export function ArticleCard({ article }: { article: ArticleMeta }) {
  const href = `/${article.game}/${article.slug}`;
  const categoryLabel = article.category === 'codes' ? 'Codes' : article.category === 'tier-list' ? 'Tier List' : 'Guide';

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
            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
