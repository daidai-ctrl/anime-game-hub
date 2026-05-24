import { Metadata } from 'next';
import { getAllArticles } from '@/lib/content';
import { SearchContent } from '@/components/search-content';

export const metadata: Metadata = {
  title: 'Search - AnimeGameHub',
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  const articles = getAllArticles();
  return <SearchContent articles={articles} />;
}
