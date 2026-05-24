import { getAllArticles } from '@/lib/content';
import { HomeContent } from '@/components/home-content';

export default function HomePage() {
  const articles = getAllArticles();
  return <HomeContent articles={articles} />;
}
