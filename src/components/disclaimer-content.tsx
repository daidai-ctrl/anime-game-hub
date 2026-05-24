'use client';

import { useLanguage } from '@/components/language-provider';

export function DisclaimerContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">{t('disclaimer.title')}</h1>

      <div className="space-y-6">
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
          <p className="text-sm font-medium text-foreground">{t('disclaimer.intro')}</p>
        </div>

        <div className="prose-game space-y-4">
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Roblox Trademarks</h2>
            <p className="text-sm text-muted-foreground">{t('disclaimer.roblox')}</p>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Content Accuracy</h2>
            <p className="text-sm text-muted-foreground">{t('disclaimer.accuracy')}</p>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Advertising</h2>
            <p className="text-sm text-muted-foreground">{t('disclaimer.ads')}</p>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Contact</h2>
            <p className="text-sm text-muted-foreground">{t('disclaimer.contact')}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
