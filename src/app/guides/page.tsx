import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticles } from '@/lib/content';
import { ArticleCard } from '@/components/article-card';
import { AdSlot } from '@/components/ad-slot';

const CATEGORY = 'guides';
const LABEL = 'Guides';
const DESCRIPTION = 'In-depth guides for Roblox anime games. Learn strategies, tips, and tricks to level up fast!';

export const metadata: Metadata = {
  title: `${LABEL} - Roblox Anime Game Strategies`,
  description: DESCRIPTION,
  openGraph: {
    title: `${LABEL} | AnimeGameHub`,
    description: DESCRIPTION,
  },
};

export default function GuidesPage() {
  const articles = getAllArticles().filter((a) => a.category === CATEGORY);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li>/</li>
          <li className="text-foreground">{LABEL}</li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold text-foreground mb-2">Guides</h1>
      <p className="text-muted-foreground mb-8">{DESCRIPTION}</p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {articles.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {articles.map((article) => (
                <ArticleCard key={`${article.game}-${article.slug}`} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No guides yet.</p>
          )}
        </div>
        <aside className="space-y-6">
          <AdSlot slot="sidebar" />
        </aside>
      </div>
    </div>
  );
}
