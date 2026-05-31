'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
        <Image
          src={game.coverImage}
          alt={game.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
        {/* Stats row */}
        <div className="mt-3 flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#00d4aa]">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
            </svg>
            {game.guidesCount} {t('game.guidesLabel')}
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#6366f1]">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
            {game.tierListCount} {t('game.tierListLabel')}
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f59e0b]">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            {game.codesCount} {t('game.codesLabel')}
          </span>
        </div>
        {/* Tags row */}
        <div className="mt-2 flex items-center gap-2">
          {game.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Footer */}
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
