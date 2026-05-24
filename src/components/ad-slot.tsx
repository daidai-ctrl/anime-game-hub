'use client';

import { useEffect } from 'react';

interface AdSlotProps {
  slot: 'header-banner' | 'sidebar' | 'in-content' | 'footer' | 'mobile-sticky';
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export function AdSlot({ slot, format = 'auto', responsive = true }: AdSlotProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet or blocked by ad blocker
    }
  }, []);

  // In development, show placeholder
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  const slotIds: Record<string, string> = {
    'header-banner': 'auto',
    'sidebar': 'auto',
    'in-content': 'auto',
    'footer': 'auto',
    'mobile-sticky': 'auto',
  };

  const sizeClasses: Record<string, string> = {
    'header-banner': 'h-[90px] w-full',
    'sidebar': 'h-[250px] w-full',
    'in-content': 'h-[250px] w-full',
    'footer': 'h-[90px] w-full',
    'mobile-sticky': 'h-[50px] w-full',
  };

  if (isDev) {
    return (
      <div
        className={`${sizeClasses[slot]} flex items-center justify-center rounded border border-dashed border-border bg-muted/30 text-xs text-muted-foreground`}
      >
        Ad Space ({slot})
      </div>
    );
  }

  return (
    <div className="ad-container my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4857703822591488"
        data-ad-slot={slotIds[slot]}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
