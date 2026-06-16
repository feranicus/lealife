# lealife — תוכנית 12 שבועות לתמיכה בעור (DLE)

A single-page, mobile-first web app that delivers a  12-week, evidence-aware support program for Discoid Lupus Erythematosus (DLE)  in Hebrew (RTL). It packages photoprotection, anti-inflammatory nutrition, antioxidant berries, evidence-based supplements, an advanced "biohacking" layer, and a safety/avoid list into one interactive, self-contained page — with direct iHerb and Amazon search links for every purchasable item.

🔗  Live:  https://feranicus.github.io/lealife/

> ⚠️  Medical disclaimer.  This is  educational material only  — not a diagnosis, prescription, or substitute for medical care. DLE is diagnosed and treated by a physician (usually after biopsy and blood work). Sun protection, diet, and supplements are a  support layer around  medical treatment (e.g. hydroxychloroquine, topical therapy), never a replacement. Some supplements interact with medications or require monitoring — consult a doctor and pharmacist before any change.

---

## Table of contents

- [What this is](#what-this-is)
- [Content structure](#content-structure)
- [The biohacking layer](#the-biohacking-layer)
- [Tech stack](#tech-stack)
- [Architecture](#architecture)
- [Project structure](#project-structure)
- [Data model](#data-model)
- [Run locally](#run-locally)
- [Deployment](#deployment)
- [Editing content](#editing-content)
- [Design & accessibility](#design--accessibility)
- [Safety & editorial rules](#safety--editorial-rules)
- [License](#license)

---

## What this is

The app turns a clinician-reviewed support plan into a guided, scrollable experience. Each of the 12 weeks explains  why  a step matters in depth (immunology, not just instructions), grouped into four cumulative phases. Around the week-by-week plan sit reference sections on berries, supplements, an optional advanced "biohacking" layer, a balanced take on the ketogenic diet, and — most importantly — a clearly separated list of immune-stimulating supplements to  avoid , because in lupus the immune system is already over-active.

The entire experience is  client-side and self-contained : the production build inlines all JS and CSS into a single `index.html` that runs with no server, even when opened directly from a phone (`file://`). The only network dependency is Google Fonts (Heebo + Rubik).

## Content structure

The page is one continuous scroll with a fixed bottom tab bar. Sections (and their anchor IDs):

| # | Section | ID | What it covers |
|---|---------|-----|----------------|
| 1 | המסע — 12 weeks | `#weeks` | 4 phases, 12 accordion weeks, each with a deep "why" and weekly tasks |
| 2 | פירות יער — Berries | `#berries` | Sea buckthorn, cranberry, blueberry/raspberry, pomegranate/aronia — antioxidant cards with buy links |
| 3 | תוספים — Supplements | `#supps` | 6 evidence-based core supplements (Vit D3+K2, Omega-3, Curcumin, Sea buckthorn, Cranberry, Vit C) with buy links |
| 4 | ביוהאקינג — Biohacking | `#biohack` | Advanced/optional layer — everything beyond the core, grouped and tier-rated (see below) |
| 5 | תזונה — Keto | — | Honest pro/con on the ketogenic diet for autoimmune skin disease |
| 6 | בטיחות — Safety | `#safety` | Immune-stimulating supplements to avoid + a permanent disclaimer and sources |

A scroll-spy highlights the active tab, a top progress bar tracks reading position, and an animated particle field + ECG signature line render in the hero.

## The biohacking layer

`#biohack` is the most recently added section. It surfaces  everything from the supporting biohacking reference that isn't already in the core program , organized into six groups, each card carrying an evidence  Tier  (A = strong, B = moderate/emerging, C = mechanistic/community) plus iHerb + Amazon search buttons:

1.  תוספים סיסטמיים נוספים  — NAC, melatonin, vitamin A
2.  מינרלים  — magnesium glycinate, zinc picolinate, selenium
3.  בוטניקה אנטי-דלקתית  — quercetin, resveratrol, sulforaphane, luteolin, berberine, ginger
4.  תמיכה במעי ובמחסום  — probiotics, L-glutamine, inulin/FOS, butyrate, lactoferrin, colostrum, collagen
5.  קורטיזול ואדפטוגנים  — rhodiola, phosphatidylserine, L-theanine, B-complex
6.  טיפוח עור מקומי צמחי  — centella (Cica), colloidal oatmeal, calendula/chamomile, niacinamide, azelaic acid, plant oils, aloe

By design, items that conflict with the app's own avoid-list —  ashwagandha, licorice, and high-dose green tea extract  (all immune-stimulating or otherwise flagged in autoimmune disease) — are  deliberately excluded  from the buy cards, with an inline note pointing readers to the Safety section.

## Tech stack

-  [React 18](https://react.dev/)  (`react` / `react-dom` 18.3) — no router, no state library; a single `App` component composed of small presentational components and hooks.
-  [Vite 5](https://vitejs.dev/)  — dev server and build tool, with `@vitejs/plugin-react`.
-  [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile)  — inlines all JS/CSS into one HTML file for zero-dependency, offline-capable distribution.
-  Vanilla CSS  (`src/styles.css`) — custom properties for theming, no framework. RTL throughout.
-  Canvas 2D + SVG  — hand-rolled particle animation and animated ECG line; all icons are inline SVG (no icon library).
-  GitHub Pages + GitHub Actions  — CI builds on every push to `main` and publishes `dist/`.

## Architecture

The app is intentionally simple and  data-driven : all content lives in `src/data.js` as exported arrays, and `src/App.jsx` maps over those arrays to render the UI. Adding or changing program content almost never requires touching component logic — you edit data.

 Component breakdown (`src/App.jsx`): 

- `Icon` — inline-SVG icon set (sun, drop, fish, flask, berry, leaf, shield, heart, moon, capsule, sprout, sparkle, mineral, dna).
- `useReveal` — `IntersectionObserver` hook that fades sections in on scroll.
- `Particles` — `<canvas>` floating-cell animation (respects `prefers-reduced-motion`).
- `Ecg` — procedurally generated, animated ECG trace in the hero.
- `BuyRow` — the iHerb + Amazon button pair; URLs are built at runtime from a keyword:
  - `iherb(kw)  → https://www.iherb.com/search?kw=...`
  - `amazon(kw) → https://www.amazon.com/s?k=...`
- `Week` — a single expandable/collapsible week (animated `max-height` accordion).
- `App` — composes the page, manages open-week / scroll-progress / active-tab state, and renders the fixed bottom tab bar.

 Build pipeline:  `main.jsx` mounts `App` → Vite bundles → `vite-plugin-singlefile` inlines everything → output is a single `dist/index.html` (~200 KB, ~70 KB gzipped). `base: './'` in `vite.config.js` keeps asset paths relative so the build works both under the GitHub Pages sub-path (`/lealife/`) and from a local file.

## Project structure

```
lealife/
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages
├── src/
│   ├── App.jsx                    # all components + page composition
│   ├── data.js                    # ALL content (phases, weeks, berries, supplements, biohack, avoid, keto, sources)
│   ├── main.jsx                   # React entry point
│   └── styles.css                 # full stylesheet (theme tokens, layout, components, RTL)
├── index.html                     # HTML shell (RTL, fonts, #root)
├── vite.config.js                 # Vite + react + singlefile, base './'
├── package.json
└── README.md
```

## Data model

Everything renderable is exported from `src/data.js`:

| Export | Type | Drives |
|--------|------|--------|
| `PHASES` | array of `{ cls, n, d }` | the four-phase bar |
| `WEEKS` | array of `{ n, color, phase, theme, focus, why, tasks[], tip }` | the 12 week accordions |
| `BERRIES` | array of `{ name, latin, icon, body, tags[], kw }` | berry cards |
| `SUPPLEMENTS` | array of `{ name, latin, icon, dose, body, tags[], kw }` | core supplement cards |
| `BIOHACK` | array of `{ group, icon, intro, items[] }` | the grouped biohacking section |
| `AVOID` | array of `{ name, why }` | the safety "avoid" list |
| `KETO_PRO` / `KETO_CON` | arrays of strings | the keto pro/con columns |
| `SOURCES` | array of `[label, url]` | the sources footer |

Card `tags` are `[className, label]` pairs. Tag styles: `ev` (green — evidence), `sk` (blue — area/mechanism), `ca` (amber — caution), `ti` (violet — tier/label). The `kw` field is the search keyword used to build the iHerb/Amazon links.

## Run locally

Requires Node 18+ (CI uses Node 20).

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server (hot reload)
npm run build      # produce single-file dist/index.html
npm run preview    # serve the production build locally
```

Open the dev URL Vite prints (default `http://localhost:5173`). The built `dist/index.html` can also be opened directly in a browser with no server.

## Deployment

Deployment is automatic via  GitHub Actions  (`.github/workflows/deploy.yml`):

1. On every push to `main` (or a manual `workflow_dispatch`), the workflow checks out the repo, runs `npm install` and `npm run build`, and uploads `dist/` as a Pages artifact.
2. A second job publishes it to GitHub Pages.

No manual build is committed — just push source and Pages rebuilds. The site serves from `https://feranicus.github.io/lealife/`.

## Editing content

To add or change program content, edit the relevant array in  `src/data.js`  — no component changes needed in the common case:

-  Add a supplement / berry / biohacking item:  push a new object onto `SUPPLEMENTS`, `BERRIES`, or the right `BIOHACK` group's `items`. Provide `name`, `latin`, `icon`, `dose` (where applicable), `body`, `tags`, and a `kw` for the buy links.
-  Add a week:  push onto `WEEKS` with `n`, `color`, `phase`, `theme`, `focus`, `why`, `tasks`, `tip`.
-  Flag something to avoid:  push `{ name, why }` onto `AVOID`.
-  Add an icon:  add an SVG `<g>` to the `paths` map in the `Icon` component in `App.jsx`, then reference it by key.

Keep the editorial rules below in mind when adding items.

## Design & accessibility

-  Mobile-first, RTL Hebrew , with a fixed bottom tab bar and safe-area insets for notched phones.
-  `prefers-reduced-motion`  is honored — particle/ECG animation and reveal transitions are disabled for users who opt out.
- Dark theme via CSS custom properties (`--bg`, `--teal`, `--coral`, `--sky`, etc.) defined once in `:root`.
- All external links open with `target="_blank"` + `rel="noopener noreferrer"`.
- Fonts:  Heebo  (body) and  Rubik  (display), loaded from Google Fonts.

## Safety & editorial rules

This project encodes a clear clinical stance that any content change must preserve:

- In lupus the immune system is  over-active  — the goal is to *calm and rebalance* it, never to "boost" it. Immune-stimulating items belong in the  Avoid  list, not the supplement/biohacking cards.
- Most biohacking items are  Tier C (experimental)  — present them as optional experiments layered on after the medical foundation, not as pillars.
- Keep the  disclaimer and the red-flag note  visible. Symptoms like chest pain, pain on breathing, breathlessness, fever, or new systemic symptoms need same-day medical evaluation — no supplement addresses that.
- Doses shown are illustrative; the actual dose is set by a physician.

## License

[MIT](LICENSE) — educational material, provided as-is with no warranty. See the medical disclaimer above.
