import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getGame, games } from '@/lib/games';
import { getArticle, getAllArticles, getAllArticleSlugs } from '@/lib/content';
import { AdSlot } from '@/components/ad-slot';

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

  const game = getGame(gameSlug);

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

function extractTOC(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    headings.push({ id, text, level });
  }
  return headings;
}

function renderMarkdownToHtml(content: string): string {
  // Simple markdown to HTML conversion for server rendering
  let html = content;

  // Headers
  html = html.replace(/^### (.+)$/gm, '<h3 id="$1">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 id="$1">$1</h2>');

  // Fix header IDs
  html = html.replace(/<h([23]) id="([^"]+)">/g, (_match: string, level: string, text: string) => {
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return `<h${level} id="${id}">`;
  });
  // Add text back after the opening tag
  html = html.replace(/<h([23]) id="([^"]+)">/g, (_match: string, level: string, _id: string) => {
    // We need to capture the text differently
    return _match;
  });

  // Let me do this more carefully - parse headers
  html = content;

  // Process headers with IDs
  html = html.replace(/^### (.+)$/gm, (_match: string, text: string) => {
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return `<h3 id="${id}">${text}</h3>`;
  });
  html = html.replace(/^## (.+)$/gm, (_match: string, text: string) => {
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return `<h2 id="${id}">${text}</h2>`;
  });

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, (_match: string, content: string) => {
    const cells = content.split('|').map((c: string) => c.trim());
    if (cells.every((c: string) => /^[-:\s]+$/.test(c))) return ''; // separator row
    const isHeader = content.includes('---');
    if (!isHeader) {
      const tag = 'td';
      return '<tr>' + cells.map((c: string) => `<${tag}>${c}</${tag}>`).join('') + '</tr>';
    }
    return '';
  });

  // Wrap table rows
  html = html.replace(/((?:<tr>.*<\/tr>\n?)+)/g, '<table>$1</table>');

  // Paragraphs - wrap lines that aren't already wrapped in tags
  html = html
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('<')) return trimmed;
      return `<p>${trimmed}</p>`;
    })
    .join('\n');

  return html;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { game: gameSlug, article: articleSlug } = await params;
  const article = getArticle(gameSlug, articleSlug);
  if (!article) notFound();

  const game = getGame(gameSlug);
  const toc = extractTOC(article.content);
  const contentHtml = renderMarkdownToHtml(article.content);

  // Related articles (same game, different article)
  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter((a) => a.game === gameSlug && a.slug !== articleSlug)
    .slice(0, 3);

  const categoryLabel = article.category === 'codes' ? 'Codes' : article.category === 'tier-list' ? 'Tier List' : 'Guide';

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: 'AnimeGameHub' },
    publisher: { '@type': 'Organization', name: 'AnimeGameHub' },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: extractFAQs(article.content).map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd.mainEntity.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Breadcrumb */}
      <nav className="border-b border-border bg-card/50" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link href={`/${gameSlug}`} className="hover:text-primary">{game?.name || gameSlug}</Link></li>
            <li>/</li>
            <li className="text-foreground">{categoryLabel}</li>
          </ol>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Top Ad */}
            <div className="mb-6">
              <AdSlot slot="header-banner" />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <span className="inline-block rounded bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-3">
                {categoryLabel}
              </span>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                {article.title}
              </h1>
              <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
                <time>Last Updated: {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
              </div>
            </header>

            {/* Article Content */}
            <div
              className="prose-game"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* In-content Ad */}
            <div className="my-8">
              <AdSlot slot="in-content" />
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-10">
                <h2 className="mb-4 text-xl font-bold text-foreground">Related Articles</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedArticles.map((related) => (
                    <Link
                      key={`${related.game}-${related.slug}`}
                      href={`/${related.game}/${related.slug}`}
                      className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50"
                    >
                      <span className="text-xs font-medium text-primary">
                        {related.category === 'codes' ? 'Codes' : related.category === 'tier-list' ? 'Tier List' : 'Guide'}
                      </span>
                      <h3 className="mt-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* TOC */}
            {toc.length > 0 && (
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">Table of Contents</h3>
                <nav>
                  <ul className="space-y-1.5">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`text-sm text-muted-foreground transition-colors hover:text-primary ${
                            item.level === 3 ? 'pl-4' : ''
                          }`}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}

            <AdSlot slot="sidebar" />
          </aside>
        </div>
      </div>

      {/* Footer Ad */}
      <div className="mx-auto max-w-7xl px-4 pb-8">
        <AdSlot slot="footer" />
      </div>
    </>
  );
}

function extractFAQs(content: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const lines = content.split('\n');
  let inFaq = false;
  let currentQuestion = '';
  let currentAnswer = '';

  for (const line of lines) {
    if (line.startsWith('## Frequently Asked Questions') || line.startsWith('## FAQ')) {
      inFaq = true;
      continue;
    }
    if (inFaq && line.startsWith('### ')) {
      if (currentQuestion) {
        faqs.push({ question: currentQuestion, answer: currentAnswer.trim() });
      }
      currentQuestion = line.replace('### ', '').trim();
      currentAnswer = '';
    } else if (inFaq && line.startsWith('## ')) {
      if (currentQuestion) {
        faqs.push({ question: currentQuestion, answer: currentAnswer.trim() });
      }
      break;
    } else if (inFaq && currentQuestion) {
      currentAnswer += line + ' ';
    }
  }
  if (currentQuestion) {
    faqs.push({ question: currentQuestion, answer: currentAnswer.trim() });
  }

  return faqs;
}
