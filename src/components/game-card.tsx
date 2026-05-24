'use client';

import Link from 'next/link';
import type { Game } from '@/lib/games';
import { useLanguage } from '@/components/language-provider';
import { getGameDescription, formatMonthDay } from '@/lib/i18n';

export function GameCard({ game }: { game: Game }) {
  const { t, locale } = useLanguage();
  const description = getGameDescription(game.slug, locale);
  const isToday = game.lastUpdated === new Date().toISOString().split('T')[0];

  return (
    <Link
      href={`/${game.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
        <img
          src={game.coverImage}
          alt={game.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {game.name}
          </h3>
          {isToday && (
            <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-500">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500" />
              {t('game.updatedToday')}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {t('game.guides', { count: String(game.articleCount) })}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
          <span className="text-xs text-muted-foreground">
            {t('game.lastUpdated', { date: formatMonthDay(game.lastUpdated, locale) })}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            {t('game.viewGame')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
