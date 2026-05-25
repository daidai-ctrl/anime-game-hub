'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/language-provider';

const coverItems = [
  { key: 'codes', icon: '🔑', color: 'text-[#00d4aa]' },
  { key: 'tierLists', icon: '🏆', color: 'text-[#6366f1]' },
  { key: 'guides', icon: '📖', color: 'text-[#f59e0b]' },
  { key: 'updates', icon: '🆕', color: 'text-[#3b82f6]' },
] as const;

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">{t('about.title')}</h1>
      <p className="text-sm text-muted-foreground mb-8">{t('about.lastUpdated')}</p>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-base">{t('about.description')}</p>

        {/* Our Mission */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Our Mission</h2>
          <p className="text-sm">{t('about.mission')}</p>
        </div>

        {/* What We Cover */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t('about.whatWeCover')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {coverItems.map((item) => (
              <div
                key={item.key}
                className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 px-4 py-3"
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`text-sm font-medium ${item.color}`}>
                  {t(`about.cover.${item.key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Community */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Our Community</h2>
          <p className="text-sm">{t('about.community')}</p>
        </div>

        {/* Disclaimer */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">Disclaimer</h2>
          <p className="text-sm mb-3">{t('about.disclaimer')}</p>
          <Link
            href="/disclaimer"
            className="inline-flex items-center text-sm text-[#00d4aa] hover:underline"
          >
            Read full disclaimer →
          </Link>
        </div>
      </div>

      {/* Bottom disclaimer line */}
      <div className="mt-10 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground text-center">
          AnimeGameHub is not affiliated with Roblox Corporation. All trademarks belong to their
          respective owners.
        </p>
      </div>
    </div>
  );
}
