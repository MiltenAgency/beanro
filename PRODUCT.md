# Beanro — Coffee Shop Template (Next.js rebuild)

## Register

Warm, confident, unhurried. Boldonse shouts the display lines in roasted brown; Bayon (condensed) handles card titles, prices and nav; Manrope keeps body copy calm. Everything sits on a sand ground with faint vertical rules, so the page reads like a printed menu card rather than a website.

## Users

People deciding where to get coffee — and people who already have and want the hours, the address, or a table. The site's job: show the drinks large, keep Order Now within reach, and make the three cafés findable in one scroll.

## Product Purpose

Marketing site for a specialty coffee brand: 11 drinks across three categories, three café locations with hours and reviews, nine blog articles, a table-booking form, and a privacy policy. 16 routes total.

## Brand Personality

Roast brown `#7d2c0f` against sand `#f9f0e1`, with orange `#ff8342` doing the pointing. Accent pills in yellow, forest and peach break up the big brown panel. Food photography sells; type does the shouting.

## Design Principles

- Every section sits on the same sand ground with 260px-spaced hairlines, the middle rule on the page centre
- One signature spring everywhere: `stiffness 100, damping 30, mass 1` — lifted verbatim from the export's `<script type="framer/appear">` payload
- Content column is 1320px inside a 1440 frame; cards are 384×539 (drinks), 413×359 (features), 520×502 (testimonials)
- Scroll-linked set pieces: the clip in "A New Standard" expands 440→1320px while pinned; the closing drinks drift in from `translate(±40px, 200px) rotate(∓11deg)`
- Reduced motion turns off Lenis, all springs, the marquee and the word rotator

## Accessibility & Inclusion

Semantic landmarks, labelled form controls, `aria-expanded` on the FAQ and mobile menu, `role="tablist"`/`aria-selected` on the drink tabs, alt text on every photograph, and a full `prefers-reduced-motion` path.

## Fidelity

Verified against the original export running side by side at 1440px. Section landmarks, card boxes and panel geometry match to the pixel in most places; total page heights land within 2% on every route:

| Route | Original | Rebuild |
|---|---|---|
| `/` | 11901 | 11835 |
| `/about` | 7817 | 7997 |
| `/menu` | 5828 | 5735 |
| `/location` | 4371 | 4279 |
| `/reservation` | 2843 | 2767 |
| `/blog` | 3906 | 3972 |
| `/blog/[slug]` | 5820 | 5725 |
| `/legal-page/privacy-policy` | 3314 | 3441 |

Mobile checked at 390px: no horizontal overflow on any route.

## Deviations from the original Framer template

- **Hero cup** — the original paints it into a WebGL `<canvas>` that the static export cannot carry. Rebuilt by compositing the same `Coffee Cup ☕` asset over the splash at the original's measured geometry, with a slow float in place of the canvas animation.
- **Section video** — Framer's exporter left the clip pointing at `framerusercontent.com`. Downloaded to `public/assets/video/` so the site is self-contained.
- **FAQ answers 2–5** — the original ships an answer for the first question only; clicking the other four does nothing (verified against the running original: card height unchanged). Written here in the template's voice so the accordion works. `lib/content/shared.ts` marks each item `verbatim: true/false`.
- **Counter targets** — the export renders every reel parked at `00`; the real values (15+, 10+, 25+, 98%) were read off the hydrated original.
- **Booking form's location field** — the export labels it "Services \*" but gives it the placeholder "Select Location" and four dental-practice options left over from the template it was branched from. Relabelled "Location \*" and pointed at the three cafés. Original strings are recorded in the comment in `lib/content/reservation.ts`.
- **Framer promo chrome** — the floating "Get this Template Free" / "Explore More Templates" buttons are Framer's marketplace overlay, not part of the design, and are not reproduced.
- **Fonts** — served from the export's own `.woff2` subsets via `app/fonts.css` rather than `next/font/google`, so rendering is byte-identical to the original and needs no network at build time. Trimmed to the latin and latin-ext subsets (19 of 51 `@font-face` rules).
- **Forms** post nowhere, matching the original's demo behaviour; the booking form confirms inline.

## Working with the export

`scripts/extract.mjs` mines the original export (`../beanro - framer`) — it decodes the HTML string literal out of each `route.ts` and can dump routes, text, images, colours, headings, sections, metadata, `@font-face` rules, or a raw window around any needle. Run `node scripts/extract.mjs` with no arguments for usage.
