import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getAllArticles } from '@/lib/content';
import { SearchContent } from '@/components/search-content';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ q?: string }> }): Promise<Metadata> {
  const params = await searchParams;
  const query = params.q || '';

  if (!query) {
    return {
      title: 'Search',
      description: 'Search AnimeGameHub for Roblox anime game codes, tier lists, guides, and updates.',
      robots: { index: false, follow: true },
    };
  }

  return {
    title: `Search results for "${query}"`,
    description: `Search AnimeGameHub for Roblox anime game codes, tier lists, guides, and updates related to "${query}".`,
    robots: { index: false, follow: true },
  };
}

export default function SearchPage() {
  const articles = getAllArticles();

  return (
    <Suspense fallback={<div className="mx-auto max-w-4xl px-4 py-8 text-muted-foreground">Loading search results...</div>}>
      <SearchContent articles={articles} />
    </Suspense>
  );
}
