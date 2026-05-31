import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

const BASE_DESCRIPTION = 'Comprehensive tier lists for Roblox anime games. Find the best characters, fruits, and strategies for Blox Fruits, Anime Rangers X, and more!';

const baseUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://animegamehub.xyz';

export const metadata: Metadata = {
  title: 'Roblox Anime Game Tier Lists',
  description: BASE_DESCRIPTION,
  alternates: { canonical: `${baseUrl}/tier-list` },
  openGraph: {
    title: 'Roblox Anime Game Tier Lists',
    description: BASE_DESCRIPTION,
  },
};

export default function TierListPage() {
  const articles = getAllArticles().filter((a) => a.category === 'tier-list');
  return <CategoryPageContent category="tier-list" articles={articles} currentPage={1} />;
}
