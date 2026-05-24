import Link from 'next/link';
import type { ArticleMeta } from '@/lib/content';

export function ArticleListItem({ article }: { article: ArticleMeta }) {
  const href = `/${article.game}/${article.slug}`;
  const categoryLabel = article.category === 'codes' ? 'Codes' : article.category === 'tier-list' ? 'Tier List' : 'Guide';

  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 border-b border-border py-3 transition-colors hover:bg-muted/30 last:border-0 px-2 -mx-2 rounded"
    >
      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
          {article.title}
        </h3>
        <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
          <span>{article.game.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}</span>
          <span>&middot;</span>
          <span>{categoryLabel}</span>
        </div>
      </div>
      <time className="shrink-0 text-xs text-muted-foreground">
        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </time>
    </Link>
  );
}
