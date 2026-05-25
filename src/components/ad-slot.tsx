'use client';

import { useEffect, useState } from 'react';

interface AdSlotProps {
  slot: 'header-banner' | 'sidebar' | 'in-content' | 'footer' | 'mobile-sticky';
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
}

export function AdSlot({ slot, format = 'auto', responsive = true }: AdSlotProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      (window as unknown as { adsbygoogle: Array<Record<string, unknown>> }).adsbygoogle =
        (window as unknown as { adsbygoogle: Array<Record<string, unknown>> }).adsbygoogle || [];
      (window as unknown as { adsbygoogle: Array<Record<string, unknown>> }).adsbygoogle.push({});
    } catch {
      // AdSense not loaded yet or blocked by ad blocker
    }
  }, [mounted]);

  const sizeClasses: Record<string, string> = {
    'header-banner': 'h-[90px] w-full',
    'sidebar': 'h-[250px] w-full',
    'in-content': 'h-[250px] w-full',
    'footer': 'h-[90px] w-full',
    'mobile-sticky': 'h-[50px] w-full',
  };

  // Always render placeholder first (SSR-safe), then replace with ad on client
  if (!mounted) {
    return (
      <div
        className={`${sizeClasses[slot]} flex items-center justify-center rounded border border-dashed border-[#2a2d3e] bg-[#1a1d2e]/30 text-xs text-[#94a3b8]`}
      >
        Ad Space ({slot})
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[slot]} overflow-hidden rounded`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '100%' }}
        data-ad-client="ca-pub-4857703822591488"
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
