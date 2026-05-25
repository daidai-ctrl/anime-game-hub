import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

export const metadata: Metadata = {
  title: 'Latest Roblox Anime Game Codes - AnimeGameHub',
  description: 'Find the latest Roblox anime game codes, including Anime Rangers X, Anime Vanguards, Blox Fruits and more. Redeem free gems, boosts, rerolls, currencies and exclusive rewards.',
  openGraph: {
    title: 'Latest Roblox Anime Game Codes | AnimeGameHub',
    description: 'Find the latest Roblox anime game codes, including Anime Rangers X, Anime Vanguards, Blox Fruits and more. Redeem free gems, boosts, rerolls, currencies and exclusive rewards.',
  },
};

export default async function CodesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10) || 1);
  const articles = getAllArticles().filter((a) => a.category === 'codes');
  return <CategoryPageContent category="codes" articles={articles} currentPage={currentPage} />;
}
