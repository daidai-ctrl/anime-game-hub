'use client';

import { useLanguage } from '@/components/language-provider';

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">{t('about.title')}</h1>
      
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-base">{t('about.description')}</p>
        
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Our Mission</h2>
          <p className="text-sm">{t('about.mission')}</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Our Community</h2>
          <p className="text-sm">{t('about.community')}</p>
        </div>
      </div>
    </div>
  );
}
