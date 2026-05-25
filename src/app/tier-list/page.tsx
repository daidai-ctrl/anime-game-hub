import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

export const metadata: Metadata = {
  title: 'Tier List - Roblox Anime Game Rankings - AnimeGameHub',
  description: 'Comprehensive tier lists for Roblox anime games. Find the best characters, fruits, and strategies for Blox Fruits, Anime Rangers X, and more!',
  openGraph: {
    title: 'Tier List | AnimeGameHub',
    description: 'Comprehensive tier lists for Roblox anime games. Find the best characters, fruits, and strategies!',
  },
};

export default async function TierListPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10) || 1);
  const articles = getAllArticles().filter((a) => a.category === 'tier-list');
  return <CategoryPageContent category="tier-list" articles={articles} currentPage={currentPage} />;
}
