import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

export const metadata: Metadata = {
  title: 'Tier List - Roblox Anime Game Rankings',
  description: 'Comprehensive tier lists for Roblox anime games. Find the best characters, fruits, and strategies!',
  openGraph: {
    title: 'Tier List | AnimeGameHub',
    description: 'Comprehensive tier lists for Roblox anime games. Find the best characters, fruits, and strategies!',
  },
};

export default function TierListPage() {
  const articles = getAllArticles().filter((a) => a.category === 'tier-list');
  return <CategoryPageContent category="tier-list" articles={articles} />;
}
