import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

const BASE_DESCRIPTION = 'In-depth guides for Roblox anime games. Learn strategies, tips, and tricks to level up fast in Blox Fruits, Anime Rangers X, and more!';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ page?: string }> }): Promise<Metadata> {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || '1', 10) || 1);

  const baseUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://animegamehub.xyz';
  const canonicalUrl = page <= 1 ? `${baseUrl}/guides` : undefined;

  if (page <= 1) {
    return {
      title: 'Roblox Anime Game Guides',
      description: BASE_DESCRIPTION,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: 'Roblox Anime Game Guides',
        description: BASE_DESCRIPTION,
      },
    };
  }

  return {
    title: `Roblox Anime Game Guides - Page ${page}`,
    description: `Browse more Roblox anime game guides, including codes, tier lists, farming routes, upgrade tips, team builds, and beginner guides. Page ${page}.`,
    robots: { index: false, follow: true },
    openGraph: {
      title: `Roblox Anime Game Guides - Page ${page}`,
      description: `Browse more guides. Page ${page}.`,
    },
  };
}

export default async function GuidesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10) || 1);
  const articles = getAllArticles().filter((a) => a.category === 'guides');
  return <CategoryPageContent category="guides" articles={articles} currentPage={currentPage} />;
}
