import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

export const metadata: Metadata = {
  title: 'Guides - Roblox Anime Game Strategies',
  description: 'In-depth guides for Roblox anime games. Learn strategies, tips, and tricks to level up fast!',
  openGraph: {
    title: 'Guides | AnimeGameHub',
    description: 'In-depth guides for Roblox anime games. Learn strategies, tips, and tricks to level up fast!',
  },
};

export default function GuidesPage() {
  const articles = getAllArticles().filter((a) => a.category === 'guides');
  return <CategoryPageContent category="guides" articles={articles} />;
}
