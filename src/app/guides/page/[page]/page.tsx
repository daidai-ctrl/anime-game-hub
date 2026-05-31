import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

const BASE_DESCRIPTION = 'In-depth guides for Roblox anime games. Learn strategies, tips, and tricks to level up fast in Blox Fruits, Anime Rangers X, and more!';

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page: pageStr } = await params;
  const page = Math.max(1, parseInt(pageStr, 10) || 1);

  if (page <= 1) {
    return {
      title: 'Roblox Anime Game Guides',
      description: BASE_DESCRIPTION,
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

export default async function GuidesPagePaginated({ params }: { params: Promise<{ page: string }> }) {
  const { page: pageStr } = await params;
  const currentPage = parseInt(pageStr, 10) || 1;

  if (currentPage <= 1) {
    redirect('/guides');
  }

  const articles = getAllArticles().filter((a) => a.category === 'guides');
  return <CategoryPageContent category="guides" articles={articles} currentPage={currentPage} />;
}
