import { Suspense } from 'react';
import { getAllArticles } from '@/lib/content';
import { SearchContent } from '@/components/search-content';

export default function SearchPage() {
  const articles = getAllArticles();

  return (
    <Suspense fallback={<div className="mx-auto max-w-4xl px-4 py-8 text-muted-foreground">Loading search results...</div>}>
      <SearchContent articles={articles} />
    </Suspense>
  );
}
