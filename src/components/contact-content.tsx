'use client';

import { useLanguage } from '@/components/language-provider';

export function ContactContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">{t('contact.title')}</h1>
      <p className="text-muted-foreground mb-8">{t('contact.description')}</p>

      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">{t('contact.email')}</h2>
            <a
              href={`mailto:${t('contact.emailAddress')}`}
              className="mt-1 inline-block text-primary hover:underline"
            >
              {t('contact.emailAddress')}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">{t('contact.response')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
