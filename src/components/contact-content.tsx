'use client';

import { useLanguage } from '@/components/language-provider';

const reasonItems = [
  { key: 'corrections', icon: '✏️' },
  { key: 'codeUpdates', icon: '🔔' },
  { key: 'partnership', icon: '🤝' },
  { key: 'questions', icon: '❓' },
] as const;

export function ContactContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">{t('contact.title')}</h1>
      <p className="text-muted-foreground mb-8">{t('contact.description')}</p>

      {/* Contact Reasons */}
      <div className="rounded-lg border border-border bg-card p-6 mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-1">{t('contact.reasons')}</h2>
        <p className="text-sm text-muted-foreground mb-4">{t('contact.reasonsDesc')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {reasonItems.map((item) => (
            <div
              key={item.key}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 px-4 py-3"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm text-muted-foreground">
                {t(`contact.reason.${item.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Email Card */}
      <div className="rounded-lg border border-border bg-card p-6 mb-6">
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

      {/* Partnership Note */}
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366f1]/10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#6366f1]">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{t('contact.partnership')}</p>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="mt-10 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground text-center">
          {t('contact.disclaimer')}
        </p>
      </div>
    </div>
  );
}
