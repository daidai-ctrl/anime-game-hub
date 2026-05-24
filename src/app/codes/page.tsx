import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

export const metadata: Metadata = {
  title: 'Codes - Roblox Anime Game Codes',
  description: 'All the latest Roblox anime game codes. Get free rewards, XP boosts, and more!',
  openGraph: {
    title: 'Codes | AnimeGameHub',
    description: 'All the latest Roblox anime game codes. Get free rewards, XP boosts, and more!',
  },
};

export default function CodesPage() {
  const articles = getAllArticles().filter((a) => a.category === 'codes');
  return <CategoryPageContent category="codes" articles={articles} />;
}
