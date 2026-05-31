import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

const BASE_DESCRIPTION = 'Find the latest Roblox anime game codes, including Anime Rangers X, Anime Vanguards, Blox Fruits and more. Redeem free gems, boosts, rerolls, currencies and exclusive rewards.';

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page: pageStr } = await params;
  const page = Math.max(1, parseInt(pageStr, 10) || 1);

  if (page <= 1) {
    return {
      title: 'Roblox Anime Game Codes',
      description: BASE_DESCRIPTION,
    };
  }

  return {
    title: `Roblox Anime Game Codes - Page ${page}`,
    description: `Browse more Roblox anime game codes for Blox Fruits, Anime Vanguards, Anime Rangers, Anime Story 2, and other anime games. Page ${page} of updated code lists.`,
    robots: { index: false, follow: true },
    openGraph: {
      title: `Roblox Anime Game Codes - Page ${page}`,
      description: `Browse more codes. Page ${page}.`,
    },
  };
}

export default async function CodesPagePaginated({ params }: { params: Promise<{ page: string }> }) {
  const { page: pageStr } = await params;
  const currentPage = parseInt(pageStr, 10) || 1;

  if (currentPage <= 1) {
    redirect('/codes');
  }

  const articles = getAllArticles().filter((a) => a.category === 'codes');
  return <CategoryPageContent category="codes" articles={articles} currentPage={currentPage} />;
}
