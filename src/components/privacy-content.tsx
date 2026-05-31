'use client';

import { useLanguage } from '@/components/language-provider';

export function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">{t('privacy.title')}</h1>
      <p className="text-sm text-muted-foreground mb-8">{t('privacy.lastUpdated')}</p>

      <div className="prose-game space-y-6">
        <p className="text-muted-foreground">{t('privacy.intro')}</p>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">{t('privacy.info')}</h2>
          <p className="text-sm text-muted-foreground">{t('privacy.infoContent')}</p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">{t('privacy.cookies')}</h2>
          <p className="text-sm text-muted-foreground">{t('privacy.cookiesContent')}</p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">{t('privacy.ads')}</h2>
          <p className="text-sm text-muted-foreground">{t('privacy.adsContent')}</p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">{t('privacy.thirdParty')}</h2>
          <p className="text-sm text-muted-foreground">{t('privacy.thirdPartyContent')}</p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">{t('privacy.children')}</h2>
          <p className="text-sm text-muted-foreground">{t('privacy.childrenContent')}</p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">{t('privacy.data')}</h2>
          <p className="text-sm text-muted-foreground">{t('privacy.dataContent')}</p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">{t('privacy.voting')}</h2>
          <p className="text-sm text-muted-foreground">{t('privacy.votingContent')}</p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">{t('privacy.changes')}</h2>
          <p className="text-sm text-muted-foreground">{t('privacy.changesContent')}</p>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">{t('privacy.contactInfo')}</h2>
          <p className="text-sm text-muted-foreground">{t('privacy.contactInfoContent')}</p>
        </section>
      </div>
    </div>
  );
}
