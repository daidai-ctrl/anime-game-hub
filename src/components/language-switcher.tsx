'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage, locales } from '@/components/language-provider';
import type { Locale } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(code: Locale) {
    setLocale(code);
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-muted"
        aria-label="Select language"
        aria-expanded={open}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="hidden sm:inline">{currentLocale.label}</span>
        <span className="sm:hidden">{currentLocale.code.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 rounded-lg border border-border bg-card shadow-lg z-50 py-1">
          {locales.map((loc) => (
            <button
              key={loc.code}
              type="button"
              onClick={() => handleSelect(loc.code)}
              className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-muted ${
                locale === loc.code ? 'text-primary bg-primary/5' : 'text-foreground'
              }`}
            >
              <span className="text-base">{loc.flag}</span>
              <span className="font-medium">{loc.label}</span>
              {locale === loc.code && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="ml-auto text-primary">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
