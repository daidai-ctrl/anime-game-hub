'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

function getPageHref(basePath: string, page: number): string {
  if (page <= 1) return basePath;
  return `${basePath}/page/${page}`;
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const { t } = useLanguage();

  if (totalPages <= 1) return null;

  const pages: (number | 'ellipsis')[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push('ellipsis');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('ellipsis');
    pages.push(totalPages);
  }

  return (
    <nav className="flex items-center justify-center gap-2 mt-8" aria-label="Pagination">
      {currentPage > 1 ? (
        <Link
          href={getPageHref(basePath, currentPage - 1)}
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#1a1d2e] text-muted-foreground hover:text-foreground hover:bg-[#2a2d3e] transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          {t('pagination.prev')}
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#1a1d2e]/50 text-muted-foreground/40 text-sm cursor-not-allowed">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          {t('pagination.prev')}
        </span>
      )}

      <div className="flex items-center gap-1">
        {pages.map((page, idx) =>
          page === 'ellipsis' ? (
            <span key={`ellipsis-${idx}`} className="px-2 text-muted-foreground">...</span>
          ) : (
            <Link
              key={page}
              href={getPageHref(basePath, page)}
              className={`min-w-[36px] h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                page === currentPage
                  ? 'bg-[#00d4aa] text-[#0f1117]'
                  : 'bg-[#1a1d2e] text-muted-foreground hover:text-foreground hover:bg-[#2a2d3e]'
              }`}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {currentPage < totalPages ? (
        <Link
          href={getPageHref(basePath, currentPage + 1)}
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#1a1d2e] text-muted-foreground hover:text-foreground hover:bg-[#2a2d3e] transition-colors text-sm"
        >
          {t('pagination.next')}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#1a1d2e]/50 text-muted-foreground/40 text-sm cursor-not-allowed">
          {t('pagination.next')}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </span>
      )}
    </nav>
  );
}
