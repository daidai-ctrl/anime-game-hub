'use client';

import Link from 'next/link';
import { getRelatedGrouped, type ArticleEntry } from '@/lib/articles';
import { useLanguage } from '@/components/language-provider';
import { t as translate } from '@/lib/i18n';

interface RelatedArticlesProps {
  /** 当前文章所属游戏的 slug */
  game: string;
  /** 当前文章的 slug（排除自身） */
  currentSlug: string;
  /** 当前文章的 type（高亮当前分类） */
  currentType: string;
}

const sectionConfig: {
  key: 'codes' | 'tier-list' | 'guides';
  icon: string;
  labelKey: string;
  accentClass: string;
  dotClass: string;
}[] = [
  {
    key: 'codes',
    icon: '🎁',
    labelKey: 'related.codes',
    accentClass: 'border-green-500/30 bg-green-500/5',
    dotClass: 'bg-green-400',
  },
  {
    key: 'tier-list',
    icon: '🏆',
    labelKey: 'related.tierList',
    accentClass: 'border-purple-500/30 bg-purple-500/5',
    dotClass: 'bg-purple-400',
  },
  {
    key: 'guides',
    icon: '📖',
    labelKey: 'related.guides',
    accentClass: 'border-blue-500/30 bg-blue-500/5',
    dotClass: 'bg-blue-400',
  },
];

export function RelatedArticles({ game, currentSlug, currentType }: RelatedArticlesProps) {
  const { locale } = useLanguage();
  const grouped = getRelatedGrouped(game, currentSlug);

  // 过滤掉当前文章所属的分类（已在页面中作为主内容）或空分类
  const sections = sectionConfig.filter((sec) => {
    const items = grouped[sec.key];
    return items && items.length > 0;
  });

  if (sections.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="mb-5 text-xl font-bold text-foreground">
        {translate('related.title', locale)}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((sec) => {
          const items = grouped[sec.key] ?? [];
          const isCurrentType = currentType === sec.key || (currentType === 'update' && sec.key === 'guides');

          return (
            <div
              key={sec.key}
              className={`rounded-lg border p-4 transition-colors ${sec.accentClass} ${
                isCurrentType ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              {/* Section header */}
              <div className="mb-3 flex items-center gap-2">
                <span className="text-lg">{sec.icon}</span>
                <h3 className="text-sm font-bold text-foreground">
                  {translate(sec.labelKey, locale)}
                </h3>
                <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  {items.length}
                </span>
              </div>

              {/* Article links */}
              <ul className="space-y-2">
                {items.slice(0, 5).map((item: ArticleEntry) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${game}/${item.slug}`}
                      className="group flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${sec.dotClass}`} />
                      <span className="line-clamp-2 group-hover:underline">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* View all link */}
              {items.length > 5 && (
                <Link
                  href={sec.key === 'codes' ? `/${game}/codes` : sec.key === 'tier-list' ? `/${game}/tier-list` : `/${game}`}
                  className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
                >
                  {translate('related.viewAll', locale)} →
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
