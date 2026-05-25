import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

export const metadata: Metadata = {
  title: 'Guides - Roblox Anime Game Strategies - AnimeGameHub',
  description: 'In-depth guides for Roblox anime games. Learn strategies, tips, and tricks to level up fast in Blox Fruits, Anime Rangers X, and more!',
  openGraph: {
    title: 'Guides | AnimeGameHub',
    description: 'In-depth guides for Roblox anime games. Learn strategies, tips, and tricks to level up fast!',
  },
};

export default async function GuidesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10) || 1);
  const articles = getAllArticles().filter((a) => a.category === 'guides');
  return <CategoryPageContent category="guides" articles={articles} currentPage={currentPage} />;
}
