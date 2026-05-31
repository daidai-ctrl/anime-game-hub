import { getAllArticles } from '@/lib/content';
import { HomeContent } from '@/components/home-content';

// Revalidate homepage every 6 hours for ISR
export const revalidate = 21600;

export default function HomePage() {
  const articles = getAllArticles();
  return <HomeContent articles={articles} />;
}
