import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getGame, games } from '@/lib/games';
import { getArticlesByGame } from '@/lib/content';
import { ArticleCard } from '@/components/article-card';
import { AdSlot } from '@/components/ad-slot';

interface GamePageProps {
  params: Promise<{ game: string }>;
}

export async function generateStaticParams() {
  return games.map((g) => ({ game: g.slug }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { game: gameSlug } = await params;
  const game = getGame(gameSlug);
  if (!game) return {};
  return {
    title: `${game.name} - Codes, Tier List & Guides`,
    description: game.description,
    openGraph: {
      title: `${game.name} - Codes, Tier List & Guides | AnimeGameHub`,
      description: game.description,
    },
  };
}

const categoryNav = [
  { label: 'Codes', slug: 'codes' },
  { label: 'Tier List', slug: 'tier-list' },
  { label: 'Guides', slug: 'guides' },
  { label: 'Updates', slug: 'updates' },
  { label: 'Fixes', slug: 'fixes' },
];

export default async function GamePage({ params }: GamePageProps) {
  const { game: gameSlug } = await params;
  const game = getGame(gameSlug);
  if (!game) notFound();

  const articles = getArticlesByGame(gameSlug);

  return (
    <>
      {/* Game Banner */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{game.name}</h1>
              <p className="mt-2 max-w-xl text-muted-foreground">{game.description}</p>
            </div>
            <a
              href={game.robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.164 0L0 18.627 18.836 24 24 5.373 5.164 0zM14.838 15.975l-6.814-1.806 1.806-6.814 6.814 1.806-1.806 6.814z" />
              </svg>
              Play on Roblox
            </a>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex gap-1 overflow-x-auto py-2" aria-label="Game categories">
            {categoryNav.map((cat) => {
              const hasContent = articles.some((a) => a.category === cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={`/${gameSlug}/${cat.slug}`}
                  className={`shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    hasContent
                      ? 'text-foreground hover:bg-muted hover:text-primary'
                      : 'text-muted-foreground/50 pointer-events-none'
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-bold text-foreground">Latest Content</h2>
            {articles.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {articles.map((article) => (
                  <ArticleCard key={`${article.game}-${article.slug}`} article={article} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No content available yet for {game.name}.</p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <AdSlot slot="sidebar" />
          </aside>
        </div>
      </div>
    </>
  );
}
