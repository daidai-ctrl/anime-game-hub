import Link from 'next/link';
import type { Game } from '@/lib/games';

export function GameCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/${game.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-chart-2/20">
          <span className="text-3xl font-bold text-primary/60">{game.name.charAt(0)}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {game.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {game.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
          View Game
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
