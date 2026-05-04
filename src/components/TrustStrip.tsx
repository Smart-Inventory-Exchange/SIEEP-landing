import type { ReactNode } from 'react';

type IconKind = 'shield' | 'ring' | 'leaf' | 'dot';

const ITEMS: ReadonlyArray<{ readonly label: string; readonly icon: IconKind }> = [
  { label: 'DED-licensed sellers', icon: 'shield' },
  { label: 'Halal-certified flagged', icon: 'ring' },
  { label: 'AED · VAT-inclusive pricing', icon: 'dot' },
  { label: 'Net Zero 2050 aligned', icon: 'leaf' },
];

const ICONS: Record<IconKind, ReactNode> = {
  shield: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5l5.5 2v4.2c0 3-2.3 5.6-5.5 6.8-3.2-1.2-5.5-3.8-5.5-6.8V3.5L8 1.5z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.8 8L7.4 9.6 10.4 6.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ring: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  leaf: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 13c0-5 4-9 10-10-1 6-5 10-10 10z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M3 13L8 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  dot: (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3" fill="currentColor" />
    </svg>
  ),
};

export function TrustStrip() {
  return (
    <div className="trust-strip" role="region" aria-label="UAE trust signals">
      <div className="shell">
        {ITEMS.map((it, i) => (
          <span key={it.label} className="item">
            {ICONS[it.icon]}
            {it.label}
            {i < ITEMS.length - 1 && <span className="sep" aria-hidden="true" />}
          </span>
        ))}
      </div>
    </div>
  );
}
