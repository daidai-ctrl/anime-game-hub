import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { CategoryPageContent } from '@/components/category-page-content';

const BASE_DESCRIPTION = 'Find the latest Roblox anime game codes, including Anime Rangers X, Anime Vanguards, Blox Fruits and more. Redeem free gems, boosts, rerolls, currencies and exclusive rewards.';

const baseUrl = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://animegamehub.xyz';

export const metadata: Metadata = {
  title: 'Roblox Anime Game Codes',
  description: BASE_DESCRIPTION,
  alternates: { canonical: `${baseUrl}/codes` },
  openGraph: {
    title: 'Roblox Anime Game Codes',
    description: BASE_DESCRIPTION,
  },
};

export default function CodesPage() {
  const articles = getAllArticles().filter((a) => a.category === 'codes');
  return <CategoryPageContent category="codes" articles={articles} currentPage={1} />;
}
