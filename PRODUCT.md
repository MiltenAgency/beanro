# Komorebi Teahouse (`木漏れ日`) — Artisan Japanese Tea & Ceremonial Matcha

Rebranded from the `beanro` specialty coffee template into an authentic, serene Japanese tea lounge and ceremonial matcha sanctuary showcasing first-harvest Uji tencha, traditional bamboo chasen whisking, and tranquil tatami tea pavilions.

## Register & Voice

Serene, mindful, grounded, and unhurried. Boldonse delivers the display headlines in deep forest matcha green (`#23410b`); Bayon (condensed) structures card titles, prices, and navigation; Manrope keeps body copy quiet and contemplative. Everything sits on a calming bamboo washi paper ground (`#f5fbed`) with delicate 260px-spaced hairlines echoing Japanese shoji paper screens and tatami floor rules.

## Brand Identity & Personality

* **Brand Name**: **Komorebi Teahouse** (`木漏れ日`)
* **Core Philosophy**: Honoring centuries of Uji tea heritage through mindful presence, artisanal Takayama bamboo whisks, and single-estate first-harvest tencha.
* **Palette** (Inspired by Mori Matcha aesthetics):
  - Bamboo Washi Ground (`#f5fbed` / `#f9fdf5`) — Page ground & soft misted cream surfaces
  - Mori Matcha Cream (`#eafbcf` / `#edf8e4`) — Card backgrounds, active tabs, pill containers
  - Deep Forest Matcha (`#23410b` / `#325814`) — Dominant brand color, headings, footer
  - Spring Tencha Jade (`#3a6919`) — Interactive accents, buttons, tea leaf graphics
  - Chasen Bamboo Gold (`#eec585`) — Whisk wood highlights, rating badges, accents
  - Roasted Hojicha Earth (`#3e2a1e`) — Subtext, navigation, and warm accents
  - Deep Ancient Pine (`#172a08`) — Dark contrast badges

## Product Purpose & Routes (16 Routes)

Marketing platform for an artisan Japanese tea house brand:
* `/` — Hero with kinetic matcha splash and iced float, brand philosophy statement with inline tea leaf tokens, signature tea menu tabs, scroll-expanding ceremonial standard video, interactive rotating ritual panel, feature cards, guest reflections, heritage teaser, FAQ accordion, and closing tea bowl call-to-action.
* `/about` — Heritage story, four counter metrics (12k+ bowls whisked, 18+ micro-lots, 300+ years heritage farms, 99% organic tencha), harvest photography, and tea master leadership team.
* `/menu` — Comprehensive catalogue across 3 curated categories:
  - **Single-Estate Ceremonial Matcha** (6 items: Uji Horizon Koicha, Gion Cloud Usucha, Yuzu Mist Matcha, Oat Silk Ceremonial Latte, Kinako Matcha Float, Kyoto Morning Usucha)
  - **Cold-Drip & Rare Infusions** (3 items: Gyokuro Dewdrop, Sencha Emerald Drip, Genmaicha Glacier)
  - **Roasted Hojicha & Herbal Tonics** (2 items: Toasted Hojicha Cream Cloud, Kurogoma Sesame Roast)
* `/location` — Three flagship sanctuaries (Kyoto Higashiyama Machiya, Venice Beach Coastal Pavilion, SoHo New York Tea Cellar) with operating hours, reviews, and Google Maps directions.
* `/reservation` — Tatami table and private tea ceremony booking form with sanctuary selection.
* `/blog` + 9 `/blog/[slug]` articles — Rich editorial chronicles exploring *Ichigo Ichie*, shade-grown tencha biology, Takayama bamboo chasen carving, usucha vs. koicha, cold-drip gyokuro, and home whisking science.
* `/legal-page/privacy-policy` — Guest privacy policy and reservation transparency.

## Design & Motion Principles

* Shoji-style faint vertical rules (`rgba(35, 65, 11, 0.07)` 260px apart) anchored at 50% repeat.
* One signature spring everywhere: `stiffness 100, damping 30, mass 1`.
* Custom vector mon crest derived from the square botanical canopy motif (`public/assets/img/komorebi-logo.svg` & `tree_mark_raw.svg`).
* Oversized architectural footer mark (`public/assets/img/komorebi-footer-mark.svg`).
* Full `prefers-reduced-motion` compliance.

## Build & Static Generation

All 19 routes compile cleanly via Next.js 14 App Router static site generation (SSG). Run:
```bash
npm run dev     # Starts local server
npm run build   # Compiles all 19 static HTML routes
```
