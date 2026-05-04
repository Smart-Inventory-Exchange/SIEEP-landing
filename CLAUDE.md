# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server (http://localhost:5173, falls through to 5174/5175 if busy)
npm run build    # tsc -b && vite build → dist/
npm run preview  # serve the production build
npm run lint     # tsc --noEmit (no ESLint configured)
```

There is no test framework configured. Type-checking via `tsc -b` is the only static gate.

## Stack

Vite 5 + React 18 + TypeScript (strict, `verbatimModuleSyntax`, `noUnusedLocals/Parameters`) + framer-motion 11. No router, no state library, no CSS-in-JS — a single static marketing page.

## Architecture

This is a one-page editorial landing page for **Expirium**, a UAE B2B marketplace for near-expiry wholesale inventory. The page is composed of independent section components rendered linearly inside `App.tsx`:

```
Nav → Hero (HeroCard) → TrustStrip → Stats → HowItWorks → Features → Market (ProductCard ×8) → Quote → CTA → Footer
```

Three architectural patterns drive everything:

**1. Single data module.** All copy and content lives in [src/data.ts](src/data.ts) as `readonly` exports: `PRODUCTS`, `STEPS`, `FEATURES`, `STATS`, `NAV_ITEMS`. Section components are pure render functions that map over these. To change content, edit the data — never the component. `formatAED()` and `productImage()` helpers also live here. Note `Product.halal?: boolean` — set true only on food categories so the Halal pill renders on those cards.

**2. Animations are split deliberately by purpose.**

- **Entrance reveals** use the [`Reveal`](src/components/Reveal.tsx) wrapper (framer-motion `whileInView`, fires once, respects `useReducedMotion`). Pass `delay={n * 90}` for staggers. Only supports `as="div" | "span"`.
- **Continuous animations** (the pulsing dots in HeroCard / ProductCard) use `motion.span` with infinite keyframe `animate` props.
- **Hover states are pure CSS** in [src/styles.css](src/styles.css), not framer-motion. This is intentional: an earlier version used `whileHover={{ backgroundColor: 'var(--paper-2)' }}` which produced flicker because spring physics on color + CSS variables don't interpolate cleanly. New hover effects belong in CSS.

**3. The CSS is a thin design token system, not utility classes.** [src/styles.css](src/styles.css) is one file, ordered top-down by section. Custom properties on `:root` (`--paper`, `--ink`, `--green`, `--accent`, `--font-display`, `--section-y`, `--pad-x`, `--focus-ring`) are the design system. Spacing is fluid via `clamp()` — never use fixed pixel values for vertical section padding; use `var(--section-y)` or a `clamp(min, vw, max)`. The display font is **Fraunces** (loaded from Google Fonts in `index.html` with `opsz`/`SOFT`/`WONK` axes — the `WONK` glyphs are intentional, not a bug). Body is **Inter Tight**.

## Things that look weird but are intentional

- Display headings have `font-variation-settings: 'opsz' 96, 'SOFT' 30, 'WONK' 1` — gives Fraunces its alt glyphs (curled `y`, etc). Removing them breaks the editorial character.
- `.how-grid .section-head` is `position: sticky` and the section-head has explicit body copy below the H2 — both are required to balance the lopsided 2-col layout (left-col content was shorter than the steps in the right col). Don't restructure to a single column without checking that the dead air doesn't return.
- The `Reveal` wrapper hard-codes `as: 'div' | 'span'` instead of accepting a generic `ElementType`. This is because typing `motion(as)` for arbitrary tags fights TypeScript and isn't worth the complexity for two call sites.
- Currency formatting: `formatAED(value)` shows decimals only when `value < 1000` (so AED 18.00 / AED 65.00 / AED 2,400). This matches B2B wholesale pricing convention — don't "fix" it to always show decimals.

## UAE market context

The page is UAE-specific by design. Copy references Dubai neighbourhoods (Al Quoz, JAFZA, Jebel Ali, DIP, DSO, Deira, Marina, Jumeirah, Sharjah). Trust signals on the [TrustStrip](src/components/TrustStrip.tsx) component — DED licence, Halal certification, AED VAT-inclusive pricing, Net Zero 2050 — are required positioning, not decoration. The `+971` phone format and `TRN` (UAE Tax Registration Number) in the footer are similarly specific. When adding/changing copy, keep this regional anchoring.
