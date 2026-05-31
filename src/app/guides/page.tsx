import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

const BASE_DESCRIPTION = 'In-depth guides for Roblox anime games. Learn strategies, tips, and tricks to level up fast in Blox Fruits, Anime Rangers X, and more!';

const baseUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://animegamehub.xyz';

// Revalidate every 6 hours
export const revalidate = 21600;

export const metadata: Metadata = {
  title: 'Roblox Anime Game Guides',
  description: BASE_DESCRIPTION,
  alternates: { canonical: `${baseUrl}/guides` },
  openGraph: {
    title: 'Roblox Anime Game Guides',
    description: BASE_DESCRIPTION,
  },
};

export default function GuidesPage() {
  const articles = getAllArticles().filter((a) => a.category === 'guides');
  return <CategoryPageContent category="guides" articles={articles} currentPage={1} />;
}
