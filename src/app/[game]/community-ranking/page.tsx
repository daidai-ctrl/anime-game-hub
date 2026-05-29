import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGame, games } from '@/lib/games';
import { getRankingCategories } from '@/lib/ranking-items';
import { CommunityRankingContent } from '@/components/community-ranking-content';

interface CommunityRankingPageProps {
  params: Promise<{ game: string }>;
}

export async function generateStaticParams() {
  return games.map((game) => ({
    game: game.slug,
  }));
}

export async function generateMetadata({ params }: CommunityRankingPageProps): Promise<Metadata> {
  const { game: gameSlug } = await params;
  const game = getGame(gameSlug);
  if (!game) return {};

  const categories = getRankingCategories(gameSlug);
  const categoryNames = categories.map((c) => c.label.toLowerCase()).join(', ');

  const title = `${game.name} Community Rankings (2026) – Player Votes & Starter Unit Rankings`;
  const description = gameSlug === 'anime-story-2'
    ? `Vote on Anime Story 2 units and compare community rankings with our editor starter list while player votes are still being collected.`
    : `Vote and view community rankings for ${game.name} ${categoryNames}. Updated daily based on player votes.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | AnimeGameHub`,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/${gameSlug}/community-ranking`,
    },
  };
}

export default async function CommunityRankingPage({ params }: CommunityRankingPageProps) {
  const { game: gameSlug } = await params;
  const game = getGame(gameSlug);
  if (!game) notFound();

  const categories = getRankingCategories(gameSlug);
  if (categories.length === 0) notFound();

  return <CommunityRankingContent gameSlug={gameSlug} />;
}
