'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/components/language-provider';

export function SearchBox() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { t } = useLanguage();

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setOpen(false);
      setQuery('');
    }
  }

  return (
    <div className="relative">
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Search"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </button>

      {/* Search overlay */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setOpen(false)}
          />
          {/* Search panel */}
          <div className="fixed left-0 right-0 top-0 z-50 bg-background border-b border-border p-4 shadow-xl">
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-muted-foreground">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('nav.search')}
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
              >
                ESC
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
