import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

const BASE_DESCRIPTION = 'Comprehensive tier lists for Roblox anime games. Find the best characters, fruits, and strategies for Blox Fruits, Anime Rangers X, and more!';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ page?: string }> }): Promise<Metadata> {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || '1', 10) || 1);

  const baseUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://animegamehub.xyz';
  const canonicalUrl = page <= 1 ? `${baseUrl}/tier-list` : undefined;

  if (page <= 1) {
    return {
      title: 'Roblox Anime Game Tier Lists',
      description: BASE_DESCRIPTION,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: 'Roblox Anime Game Tier Lists',
        description: BASE_DESCRIPTION,
      },
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

export default async function TierListPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10) || 1);
  const articles = getAllArticles().filter((a) => a.category === 'tier-list');
  return <CategoryPageContent category="tier-list" articles={articles} currentPage={currentPage} />;
}
