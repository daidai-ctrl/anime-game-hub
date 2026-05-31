import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGame, games } from '@/lib/games';
import { getArticlesByGame } from '@/lib/content';
import { GamePageContent } from '@/components/game-page-content';

// Revalidate game pages every 6 hours for ISR
export const revalidate = 21600;

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
    title: `${game.name} Codes & Guides`,
    description: game.description,
    openGraph: {
      title: `${game.name} Codes & Guides | AnimeGameHub`,
      description: game.description,
    },
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { game: gameSlug } = await params;
  const game = getGame(gameSlug);
  if (!game) notFound();

  const articles = getArticlesByGame(gameSlug);

  return <GamePageContent game={game} articles={articles} />;
}
