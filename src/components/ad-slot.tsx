export function AdSlot({ slot }: { slot: 'header-banner' | 'sidebar' | 'in-content' | 'footer' | 'mobile-sticky' }) {
  // Placeholder for ad integration - will be replaced with real ad code
  const sizeClasses: Record<string, string> = {
    'header-banner': 'h-[90px] w-full',
    'sidebar': 'h-[250px] w-full',
    'in-content': 'h-[250px] w-full',
    'footer': 'h-[90px] w-full',
    'mobile-sticky': 'h-[50px] w-full',
  };

  return (
    <div
      className={`${sizeClasses[slot]} flex items-center justify-center rounded border border-dashed border-border bg-muted/30 text-xs text-muted-foreground`}
      data-ad-slot={slot}
    >
      Ad Space ({slot})
    </div>
  );
}
