'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';

export function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {t('site.name')}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              {t('site.tagline')}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">{t('footer.games')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blox-fruits" className="hover:text-primary transition-colors">Blox Fruits</Link></li>
              <li><Link href="/anime-rangers" className="hover:text-primary transition-colors">Anime Rangers</Link></li>
              <li><Link href="/anime-vanguards" className="hover:text-primary transition-colors">Anime Vanguards</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">{t('footer.categories')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/codes" className="hover:text-primary transition-colors">{t('category.codes')}</Link></li>
              <li><Link href="/tier-list" className="hover:text-primary transition-colors">{t('category.tierList')}</Link></li>
              <li><Link href="/guides" className="hover:text-primary transition-colors">{t('category.guides')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">{t('footer.disclaimer')}</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">{t('footer.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>{t('footer.copyright', { year: String(new Date().getFullYear()) })}</p>
        </div>
      </div>
    </footer>
  );
}
