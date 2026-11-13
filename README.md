# illogan.app

Official website for **Learning Numbers Kids Games – Learn 123 Counting**
(Google Play: `com.Ilugon.counting.learning.numbers.tracing`).

English by default, with Spanish (`/es`) and French (`/fr`). Every page is
prerendered to static HTML, so it is fast, works without JavaScript and is
fully indexable.

## Pages

| Page | English | Spanish | French |
|---|---|---|---|
| Home (hero, features, video, screenshots, Teacher Approved, parents, FAQ) | `/` | `/es` | `/fr` |
| Help Centre (searchable FAQ) | `/support` | `/es/support` | `/fr/support` |
| Contact | `/contact` | `/es/contact` | `/fr/contact` |
| Privacy Policy (incl. children's privacy) | `/privacy` | `/es/privacy` | `/fr/privacy` |
| Terms of Use | `/terms` | `/es/terms` | `/fr/terms` |
| Cookie Policy | `/cookies` | `/es/cookies` | `/fr/cookies` |
| 404 | any unknown URL | | |

The build also writes `sitemap.xml` (with hreflang alternates), `robots.txt`
and `llms.txt`.

## Commands

```bash
npm install
npm run dev        # development server
npm run build      # typecheck + client build + server build + prerender -> dist/
npm run preview    # serve dist/ with the same clean-URL rules as the host
npm run assets     # regenerate images in public/ from assets-src/ (only when a source image changes)
```

On this Windows machine use `npm.cmd` instead of `npm` in PowerShell.

## Where things live

- `src/data/site.ts`: contact details, store facts (rating, downloads), video id, legal date. Change facts here only.
- `src/i18n/dictionaries/{en,es,fr}.ts`: all copy, FAQ and legal texts. `en.ts` defines the shape; the other two must match it (TypeScript enforces this).
- `src/seo/head.ts`: titles, descriptions, canonical/hreflang, Open Graph, JSON-LD.
- `scripts/prerender.mjs`: writes one HTML file per page and language, plus sitemap/robots/llms.txt. It fails the build if a page renders empty or contains unformatted copy.
- `scripts/make-assets.mjs`: crops the caption strip off the store screenshots, makes the icons, favicons, badges and the three Open Graph images.
- `assets-src/`: original images (screenshots, app icon, Teacher Approved medal, video poster, Google Play badges).

## Design

- Theme: **Powder Blue** by serafimcloud from 21st.dev, extended with the game's own colours (`src/index.css`).
- Screenshot carousel: adapted from **Coverflow Carousel** by educalvolpz on 21st.dev (`src/components/CoverflowCarousel.tsx`).
- Fonts: Fredoka (headings) and DM Sans (text), self-hosted. Icons: Phosphor.
- The YouTube video loads only after the visitor presses play (youtube-nocookie.com), so the site sets no cookies and needs no cookie banner.

## Deploying

`vercel.json` is ready for Vercel (build `npm run build`, output `dist`, clean URLs).
Any static host works as long as `/privacy` serves `privacy.html` and unknown
paths serve `404.html` (Netlify and Cloudflare Pages do this by default; for
nginx use `try_files $uri $uri.html =404;` and `error_page 404 /404.html;`).
