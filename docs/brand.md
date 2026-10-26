# Arki Tech Solutions — brand identity

Files:

| File | Use |
| --- | --- |
| `public/brand/arki-mark.svg` | Symbol only, 64×64 viewBox, one path. Avatars, app icons, loaders, bullets. |
| `public/brand/arki-logo.svg` | Horizontal lockup for light backgrounds (147×46 viewBox, ≈3.2:1). Header, footer, documents. |
| `public/brand/arki-logo-white.svg` | Same lockup for dark navy / black backgrounds. |
| `public/favicon.svg` | Tile version (green rounded square, white mark) tuned for 16–32 px. |
| `docs/brand-tokens.css` | Tailwind v4 `@theme` colour tokens, ready to paste into `globals.css`. |

All SVGs are hand-written vector paths. The wordmark and tagline are Plus Jakarta Sans Bold (700) converted to outlines, so the files need no fonts.

## What we held the mark to

Before this version the mark was redesigned against the criteria working designers use for logos ([Smashing Magazine's "Vital tips for effective logo design"](https://www.smashingmagazine.com/2009/08/vital-tips-for-effective-logo-design/), [Paul Rand, "Logos, flags and escutcheons" (1991)](https://www.paulrand.design/writing/articles/1991-logos-flags-and-escutcheons.html), [Just Creative, "What makes a good logo"](https://justcreative.com/what-makes-a-good-logo/)):

- **One concept, executed strongly.** A mark that glues two ideas together (an eye plus a check, a letter plus an eye) reads as a rebus, not a brand. The mark is one shape.
- **Simple, memorable, timeless, versatile, appropriate.** Designed in black first; tested at postage-stamp size (16 px) and at 512 px, in one colour and reversed.
- **It identifies, it does not explain.** Rand: "the role of the logo is to point, to designate." The meaning below is a second layer the reader can discover, not something the mark has to spell out.
- **No clichés.** No eye drawing, no globe, no swoosh, no gradient, no "A in a circle".

## Concept — the aperture

The mark is a rounded equilateral triangle with a circular aperture set high, where the counter of a capital **A** sits.

- **A** for Arki: the silhouette is the letter without needing a crossbar.
- **See / observe / be conscious** (*arki*, Afaan Oromo): the aperture is a point of view, the opening a lens looks through. On any background the aperture shows what is behind it, so the mark literally frames what it sits on.
- **Satisfying / satisfied** (*arki*, Amharic): the form is full, solid and sits on its base. Nothing is open, broken or in motion; it is the settled shape.
- A quiet Ethiopian note: a peak with the light coming through, the highlands rather than the flag. No emblem, no flag colours.

Construction (64-unit grid): apex at (32,8), base at y 55, half-width 27, corner radius 5, aperture r 8.5 centred at (32,34). Bounding box 54 × 47. The aperture is above the centroid (y 39.3) on purpose: at the centroid the shape reads as a mountain or a warning sign; higher it reads as a letter.

## Palette

Backgrounds referenced: white `#ffffff`, sand `#f4efe6`, navy `#0b1221`. Ratios computed with a script (WCAG 2.x relative luminance).

| Token | Name | Hex | Role | Contrast |
| --- | --- | --- | --- | --- |
| `primary` | Juniper | `#137a4e` | The one accent: text links, outlined pill buttons, solid button fill, icons, tagline | on white **5.36:1** (AA text) · white on it **5.36:1** (AA) · on sand 4.68:1 · on navy **3.49:1** (AA large text / UI components only) |
| `primary-dark` | Deep juniper | `#0f5f3c` | Hover / pressed on light backgrounds | on white 7.71:1 |
| `primary-light` | Mint | `#7fd6a4` | Primary's stand-in for text and outlines on navy; tagline in the white lockup | on navy **10.74:1** · ink on it 9.37:1 · on white 1.74:1 (never on white) |
| `primary-soft` | Juniper tint | `#e4f3ea` | Tinted cards, badges, selected states | ink on it 14.23:1 · primary on it 4.67:1 (large text only) |
| `accent` | Clay | `#c9683b` | Highlights, one chart series, hover glow on dark | on white 3.80:1 (large text / UI only) · on navy 4.92:1 |
| `accent-dark` | Fired clay | `#9c4a21` | Clay as text on white | on white 6.15:1 |
| `accent-light` | Apricot | `#f0a37a` | Clay on dark sections | on navy 9.11:1 |
| `ink` | Ink | `#0f2419` | Headings, display type, wordmark | on white 16.32:1 · on sand 14.25:1 |
| `navy` | Navy | `#0b1221` | Dark sections (already used by the layout) | white on it 18.70:1 |
| `body` | Body | `#363b36` | Long-form body copy | on white 11.44:1 |
| `muted` | Stone | `#6b6f66` | Secondary text, captions | on white 5.13:1 |
| `border` | Linen | `#e3ded3` | Dividers, input borders | — |
| `surface` | Sand | `#f4efe6` | Warm off-white section background | — |

Why this palette: deep green is the colour of the highlands and of coffee leaf, it is calm (the "satisfied" half of the name), and almost no software or AI brand owns it, while blue, purple and purple-to-blue gradients are the category default. The neutrals are warm (sand, linen, stone) rather than cool greys so the white site feels like paper, not a dashboard. Clay is the single warm note. Green is never paired with yellow and red together, so the system never drifts toward the flag.

Rules of thumb:

- One accent per surface. On white, `primary` does links, outlined pills (`border-primary text-primary`) and solid buttons (`bg-primary text-white`, hover `bg-primary-dark`).
- On navy, anything read as text or as a thin outline uses `primary-light`. Solid `bg-primary text-white` buttons are fine on navy (white on primary is 5.36:1 wherever it sits); only `primary` used *as text or a 1 px border* on navy drops to 3.49:1.
- Clay is a seasoning: a highlighted word on navy, one chart series, an illustration. Never clay body text on white; use `accent-dark` for clay text.

## Clear space and minimum size

- **Clear space** = the aperture diameter `x` (17/64 ≈ 27 % of the mark's height). Keep at least `x` of empty space around the mark and around the whole lockup; at least `2x` from other logos.
- **Mark**: minimum 16 px (favicon tile) / 20 px standalone on a flat background. Prefer `favicon.svg` (tile) below 24 px.
- **Lockup**: minimum height 32 px (Tailwind `h-8`, ≈ 102 px wide). "TECH SOLUTIONS" is readable from about 48 px (`h-12`) upward; below that it is intentionally a texture line, like most header logos. For very small placements use the mark alone.
- Keep the lockup's aspect ratio; never stretch.

## Do / Don't

Do:

- Use the mark in juniper on white/sand, or white on navy/black/juniper. The aperture is always transparent: it shows the background.
- Use it in any single colour where needed (ink for print, white for embossing, black for stamps). The mark was designed in black first and needs no second colour.
- Place the lockup on photos only over a calm, dark area, using the white version.
- Keep the wordmark in Plus Jakarta Sans 700 if it is ever re-set (e.g. a vertical lockup): `Arki` tight tracking (−0.01 em), `TECH SOLUTIONS` uppercase, +0.06 em tracking, width matched to the wordmark.

Don't:

- Don't add gradients, shadows, glows, outlines or 3D to the mark; it is a flat single-colour shape.
- Don't fill the aperture, move it, shrink it, or add an eye, dot or icon inside it.
- Don't rotate the mark (apex always up), skew it, or change the corner radius.
- Don't put the juniper mark directly on navy (3.49:1); use the white lockup.
- Don't recolour with green + yellow + red together, and don't use `primary-light` or `accent` as text on white.
- Don't set the tagline in another typeface or tracking; don't add "Tech Solutions" after "Arki" on one line.
- Don't put a second symbol (eye, lens, camera, mountain, check) next to the mark.
