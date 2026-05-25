import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGame, games } from '@/lib/games';
import { getArticle, getAllArticles, getAllArticleSlugs } from '@/lib/content';
import { ArticlePageContent } from '@/components/article-page-content';

interface ArticlePageProps {
  params: Promise<{ game: string; article: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { game: gameSlug, article: articleSlug } = await params;
  const article = getArticle(gameSlug, articleSlug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | AnimeGameHub`,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
    alternates: {
      canonical: `/${gameSlug}/${articleSlug}`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { game: gameSlug, article: articleSlug } = await params;
  const article = getArticle(gameSlug, articleSlug);
  if (!article) notFound();

  const game = getGame(gameSlug);

  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter((a) => a.game === gameSlug && a.slug !== articleSlug)
    .slice(0, 6);

  return (
    <ArticlePageContent
      article={article}
      game={game}
      relatedArticles={relatedArticles}
    />
  );
}
