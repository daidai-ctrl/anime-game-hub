'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Locale } from '@/lib/i18n';
import { t, isValidLocale, defaultLocale, locales } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Read from cookie on mount
    const match = document.cookie.match(/NEXT_LOCALE=(\w+)/);
    if (match && isValidLocale(match[1])) {
      setLocaleState(match[1]);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    // Save to cookie (1 year expiry)
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000;SameSite=Lax`;
    // Update html lang attribute
    document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : newLocale === 'pt' ? 'pt-BR' : newLocale;
  }, []);

  const translate = useCallback(
    (key: string, params?: Record<string, string>) => t(key, locale, params),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export { locales };
