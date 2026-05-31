import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

const BASE_DESCRIPTION = 'Comprehensive tier lists for Roblox anime games. Find the best characters, fruits, and strategies for Blox Fruits, Anime Rangers X, and more!';

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page: pageStr } = await params;
  const page = Math.max(1, parseInt(pageStr, 10) || 1);

  if (page <= 1) {
    return {
      title: 'Roblox Anime Game Tier Lists',
      description: BASE_DESCRIPTION,
    };
  }

  return {
    title: `Roblox Anime Game Tier Lists - Page ${page}`,
    description: `Browse more Roblox anime game tier lists for units, fruits, traits, teams, and characters across popular anime Roblox games. Page ${page}.`,
    robots: { index: false, follow: true },
    openGraph: {
      title: `Roblox Anime Game Tier Lists - Page ${page}`,
      description: `Browse more tier lists. Page ${page}.`,
    },
  };
}

export default async function TierListPagePaginated({ params }: { params: Promise<{ page: string }> }) {
  const { page: pageStr } = await params;
  const currentPage = parseInt(pageStr, 10) || 1;

  if (currentPage <= 1) {
    redirect('/tier-list');
  }

  const articles = getAllArticles().filter((a) => a.category === 'tier-list');
  return <CategoryPageContent category="tier-list" articles={articles} currentPage={currentPage} />;
}
