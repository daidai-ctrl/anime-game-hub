import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

const BASE_DESCRIPTION = 'Find the latest Roblox anime game codes, including Anime Rangers X, Anime Vanguards, Blox Fruits and more. Redeem free gems, boosts, rerolls, currencies and exclusive rewards.';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ page?: string }> }): Promise<Metadata> {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || '1', 10) || 1);

  const baseUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://animegamehub.xyz';
  const canonicalUrl = page <= 1 ? `${baseUrl}/codes` : undefined;

  if (page <= 1) {
    return {
      title: 'Roblox Anime Game Codes',
      description: BASE_DESCRIPTION,
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: 'Roblox Anime Game Codes',
        description: BASE_DESCRIPTION,
      },
    };
  }

  return {
    title: `Roblox Anime Game Codes - Page ${page}`,
    description: `Browse more Roblox anime game codes for Blox Fruits, Anime Vanguards, Anime Rangers, Anime Story 2, and other anime games. Page ${page} of updated code lists.`,
    robots: { index: false, follow: true },
    openGraph: {
      title: `Roblox Anime Game Codes - Page ${page}`,
      description: `Browse more Roblox anime game codes. Page ${page}.`,
    },
  };
}

export default async function CodesPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || '1', 10) || 1);
  const articles = getAllArticles().filter((a) => a.category === 'codes');
  return <CategoryPageContent category="codes" articles={articles} currentPage={currentPage} />;
}
