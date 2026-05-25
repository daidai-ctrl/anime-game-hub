'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Game } from '@/lib/games';
import type { Article, ArticleMeta } from '@/lib/content';
import { useLanguage } from '@/components/language-provider';
import { getCategoryLabel, formatDate, t as translate } from '@/lib/i18n';
import { AdSlot } from '@/components/ad-slot';

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

export function ArticlePageContent({
  article,
  game,
  relatedArticles,
  allArticles,
}: {
  article: Article;
  game: Game | undefined;
  relatedArticles: ArticleMeta[];
  allArticles: ArticleMeta[];
}) {
  const { locale, t } = useLanguage();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const toc = extractTOC(article.content);
  const categoryLabel = getCategoryLabel(article.category, locale);
  const isCodesArticle = article.category === 'codes';

  // Parse codes from content
  const activeCodes = isCodesArticle ? parseCodesFromContent(article.content, 'active') : [];
  const expiredCodes = isCodesArticle ? parseCodesFromContent(article.content, 'expired') : [];

  // Get related codes articles from other games
  const relatedCodesArticles = isCodesArticle
    ? allArticles.filter(
        (a) => a.category === 'codes' && a.game !== article.game && a.slug !== article.slug
      )
    : [];

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

  const faqItems = extractFAQs(article.content);
  const faqJsonLd = faqItems.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((q) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: { '@type': 'Answer', text: q.answer },
        })),
      }
    : null;

  const contentHtml = renderMarkdownToHtml(article.content);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    });
  };

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Breadcrumb - Reduced spacing */}
      <nav className="border-b border-border bg-card/50" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 py-1.5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline -mt-0.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="ml-1">{translate('breadcrumb.home', locale)}</span>
              </Link>
            </li>
            <li className="text-muted-foreground/50">/</li>
            <li><Link href={`/${article.game}`} className="hover:text-primary transition-colors">{game?.name || article.game}</Link></li>
            <li className="text-muted-foreground/50">/</li>
            <li>
              <Link
                href={`/${article.category === 'codes' ? 'codes' : article.category === 'tier-list' ? 'tier-list' : 'guides'}`}
                className="hover:text-primary transition-colors"
              >
                {categoryLabel}
              </Link>
            </li>
            <li className="text-muted-foreground/50">/</li>
            <li className="text-foreground font-medium truncate max-w-[200px]">{article.title}</li>
          </ol>
        </div>
      </nav>

      {/* Main Content - Reduced top padding */}
      <div className="mx-auto max-w-7xl px-4 py-4 lg:py-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Article Header - Compact */}
            <header className="mb-4">
              <span className="inline-block rounded bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-2">
                {categoryLabel}
              </span>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                {article.title}
              </h1>

              {/* Stats row for codes articles */}
              {isCodesArticle && (
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <span className="flex items-center gap-1 text-green-400">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
                    {t('article.activeCodes')}: {activeCodes.length}
                  </span>
                  <span className="flex items-center gap-1 text-red-400">
                    <span className="inline-block w-2 h-2 rounded-full bg-red-400" />
                    {t('article.expiredCodes')}: {expiredCodes.length}
                  </span>
                  <span className="text-muted-foreground">
                    {t('article.lastChecked')}: {today}
                  </span>
                </div>
              )}

              {!isCodesArticle && (
                <div className="mt-2 text-sm text-muted-foreground">
                  {translate('article.lastUpdated', locale)}: {formatDate(article.date, locale)}
                </div>
              )}
            </header>

            {/* Top Ad */}
            <div className="mb-4">
              <AdSlot slot="header-banner" />
            </div>

            {/* What Are [Game] Codes - SEO section */}
            {isCodesArticle && (
              <div className="mb-5 rounded-lg border border-border bg-card/50 p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('article.whatAreCodesDesc', { game: game?.name || article.game })}
                </p>
              </div>
            )}

            {/* Active Codes Table */}
            {isCodesArticle && activeCodes.length > 0 && (
              <section className="mb-6">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-400" />
                  {t('article.activeCodes')} ({activeCodes.length})
                </h2>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-card/80">
                        <th className="px-4 py-2.5 text-left font-semibold text-foreground">{t('article.codeLabel')}</th>
                        <th className="px-4 py-2.5 text-left font-semibold text-foreground">{t('article.rewardLabel')}</th>
                        <th className="px-4 py-2.5 text-left font-semibold text-foreground w-20">{t('article.statusLabel')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeCodes.map((code, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-card/30 transition-colors">
                          <td className="px-4 py-2.5">
                            <div className="flex items-center gap-2">
                              <code className="rounded bg-primary/10 px-2 py-0.5 text-primary font-mono text-sm font-semibold">
                                {code.code}
                              </code>
                              <button
                                onClick={() => handleCopy(code.code)}
                                className="shrink-0 rounded px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                              >
                                {copiedCode === code.code ? '✓' : t('article.copyBtn')}
                              </button>
                            </div>
                          </td>
                          <td className="px-4 py-2.5 text-muted-foreground">{code.reward}</td>
                          <td className="px-4 py-2.5">
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                              Active
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Expired Codes Table */}
            {isCodesArticle && expiredCodes.length > 0 && (
              <section className="mb-6">
                <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
                  <span className="inline-block w-3 h-3 rounded-full bg-red-400" />
                  {t('article.expiredCodes')} ({expiredCodes.length})
                </h2>
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-card/80">
                        <th className="px-4 py-2.5 text-left font-semibold text-foreground">{t('article.codeLabel')}</th>
                        <th className="px-4 py-2.5 text-left font-semibold text-foreground">{t('article.rewardLabel')}</th>
                        <th className="px-4 py-2.5 text-left font-semibold text-foreground w-20">{t('article.statusLabel')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {expiredCodes.map((code, i) => (
                        <tr key={i} className="border-b border-border/50 opacity-60">
                          <td className="px-4 py-2.5">
                            <code className="rounded bg-red-500/10 px-2 py-0.5 text-red-400 font-mono text-sm line-through">
                              {code.code}
                            </code>
                          </td>
                          <td className="px-4 py-2.5 text-muted-foreground">{code.reward}</td>
                          <td className="px-4 py-2.5">
                            <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                              Expired
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Article Content (non-codes content like How To Redeem, FAQ, etc.) */}
            <div
              className="prose-game"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* How To Get More Codes - SEO section for codes articles */}
            {isCodesArticle && (
              <section className="mt-8 rounded-lg border border-border bg-card/50 p-5">
                <h2 className="mb-3 text-lg font-bold text-foreground">{t('article.howToGetMoreCodes')}</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">🎮</span>
                    <span>{t('article.getMoreDiscord')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">👥</span>
                    <span>{t('article.getMoreCommunity')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">📢</span>
                    <span>{t('article.getMoreUpdates')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">⭐</span>
                    <span>{t('article.getMoreBookmark')}</span>
                  </li>
                </ul>
              </section>
            )}

            {/* Why Codes Are Not Working - SEO section */}
            {isCodesArticle && (
              <section className="mt-6 rounded-lg border border-border bg-card/50 p-5">
                <h2 className="mb-3 text-lg font-bold text-foreground">{t('article.whyCodesNotWorking')}</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">⏰</span>
                    <span><strong className="text-foreground">{t('article.reasonExpired')}</strong> — {t('article.reasonExpiredDesc')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">🔤</span>
                    <span><strong className="text-foreground">{t('article.reasonSpelling')}</strong> — {t('article.reasonSpellingDesc')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">✅</span>
                    <span><strong className="text-foreground">{t('article.reasonRedeemed')}</strong> — {t('article.reasonRedeemedDesc')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-red-400">📊</span>
                    <span><strong className="text-foreground">{t('article.reasonLevel')}</strong> — {t('article.reasonLevelDesc')}</span>
                  </li>
                </ul>
              </section>
            )}

            {/* In-content Ad */}
            <div className="my-8">
              <AdSlot slot="in-content" />
            </div>

            {/* Related Articles - Include other games' codes */}
            {(relatedArticles.length > 0 || relatedCodesArticles.length > 0) && (
              <section className="mt-8">
                <h2 className="mb-4 text-xl font-bold text-foreground">{t('article.relatedArticles')}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedArticles.map((related) => (
                    <Link
                      key={`${related.game}-${related.slug}`}
                      href={`/${related.game}/${related.slug}`}
                      className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50"
                    >
                      <span className="text-xs font-medium text-primary">
                        {getCategoryLabel(related.category, locale)}
                      </span>
                      <h3 className="mt-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  ))}
                  {relatedCodesArticles.map((related) => (
                    <Link
                      key={`${related.game}-${related.slug}`}
                      href={`/${related.game}/${related.slug}`}
                      className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50"
                    >
                      <span className="text-xs font-medium text-primary">
                        {getCategoryLabel(related.category, locale)}
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

            {/* Trending Searches */}
            <section className="mt-8">
              <h2 className="mb-3 text-lg font-bold text-foreground">{t('sidebar.trendingSearches')}</h2>
              <div className="flex flex-wrap gap-2">
                {getTrendingSearches(article.game, game?.name || '').map((search, i) => (
                  <Link
                    key={i}
                    href={search.href}
                    className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {search.label}
                  </Link>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* TOC */}
            {toc.length > 0 && (
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">{translate('article.tableOfContents', locale)}</h3>
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

            {/* Quick Codes Summary for codes articles */}
            {isCodesArticle && activeCodes.length > 0 && (
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">{t('article.quickCodes')}</h3>
                <div className="space-y-2">
                  {activeCodes.slice(0, 5).map((code, i) => (
                    <div key={i} className="flex items-center justify-between gap-2">
                      <code className="rounded bg-primary/10 px-2 py-0.5 text-primary font-mono text-xs font-semibold">
                        {code.code}
                      </code>
                      <button
                        onClick={() => handleCopy(code.code)}
                        className="shrink-0 rounded px-1.5 py-0.5 text-xs font-medium bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                      >
                        {copiedCode === code.code ? '✓' : t('article.copyBtn')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Posts in sidebar */}
            {relatedArticles.length > 0 && (
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">{t('sidebar.popularPosts')}</h3>
                <div className="space-y-3">
                  {relatedArticles.slice(0, 4).map((related) => (
                    <Link
                      key={`sidebar-${related.game}-${related.slug}`}
                      href={`/${related.game}/${related.slug}`}
                      className="block group"
                    >
                      <span className="text-xs text-primary">{getCategoryLabel(related.category, locale)}</span>
                      <p className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </p>
                    </Link>
                  ))}
                </div>
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

function getTrendingSearches(gameSlug: string, gameName: string): { label: string; href: string }[] {
  return [
    { label: `${gameName} Tier List`, href: `/${gameSlug}/tier-list` },
    { label: `${gameName} Update`, href: `/${gameSlug}` },
    { label: `${gameName} Best Units`, href: `/${gameSlug}/tier-list` },
    { label: `${gameName} Beginner Guide`, href: `/${gameSlug}/guides` },
  ];
}

interface ParsedCode {
  code: string;
  reward: string;
  status: 'active' | 'expired';
}

function parseCodesFromContent(content: string, filter: 'active' | 'expired'): ParsedCode[] {
  const codes: ParsedCode[] = [];
  const lines = content.split('\n');
  let inTable = false;
  let tableHeader = true;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('|')) {
      inTable = false;
      tableHeader = true;
      continue;
    }

    // Skip separator rows
    if (/^\|[\s\-:|]+\|$/.test(trimmed)) {
      tableHeader = false;
      inTable = true;
      continue;
    }

    if (tableHeader) {
      tableHeader = false;
      inTable = true;
      continue;
    }

    if (inTable) {
      const cells = trimmed.split('|').map((c) => c.trim()).filter(Boolean);
      if (cells.length >= 2) {
        const codeText = cells[0].replace(/`/g, '').replace(/\*\*/g, '').trim();
        const reward = cells[1].replace(/\*\*/g, '').trim();
        const statusCell = cells.length >= 3 ? cells[2].toLowerCase() : '';

        // Determine if active or expired
        const isExpired =
          statusCell.includes('expired') ||
          statusCell.includes('inactive') ||
          codeText.includes('~~');

        const cleanedCode = codeText.replace(/~~/g, '').trim();

        if (filter === 'active' && !isExpired) {
          codes.push({ code: cleanedCode, reward, status: 'active' });
        } else if (filter === 'expired' && isExpired) {
          codes.push({ code: cleanedCode, reward, status: 'expired' });
        }
      }
    }
  }

  return codes;
}

function renderMarkdownToHtml(content: string): string {
  let html = content;

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

  // Tables - render as before but with proper thead/tbody
  html = html.replace(/^\|(.+)\|$/gm, (_match: string, content: string) => {
    const cells = content.split('|').map((c: string) => c.trim());
    if (cells.every((c: string) => /^[-:\s]+$/.test(c))) return '';
    return '<tr>' + cells.map((c: string) => `<td>${c}</td>`).join('') + '</tr>';
  });
  html = html.replace(/((?:<tr>.*<\/tr>\n?)+)/g, '<table>$1</table>');

  // Paragraphs
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
