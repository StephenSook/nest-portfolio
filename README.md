# Nest — Portfolio

The team portfolio for **Nest**: an AI transition navigator for Georgia foster youth
aging out of state care. This repo is the marketing site and case study. The live app
it points to lives at a different repo.

**Live:** https://nest-portfolio-pi.vercel.app
**Nest app (RAG + FastAPI):** https://github.com/tylinndd/nest

---

## What this is

A two-page editorial site:

| Route   | Purpose                                                              |
| ------- | -------------------------------------------------------------------- |
| `/`     | Team introduction, flagship project teaser, recruiter-facing summary |
| `/nest` | Long-form case study of the Nest project — problem, approach, architecture, outcomes, audio deep-dive, sources |

Built to carry Nest through [Kennesaw State C-Day 2026](https://ccse.kennesaw.edu/cday/)
(April 29, UC-151–197) and the recruiting cycle that follows it.

## Stack

- **Next.js 16** · App Router, Turbopack, React Server Components
- **Tailwind CSS v4** · `@theme` tokens, CSS variables flipped under `@media print`
- **framer-motion** · scroll-triggered reveals, magnetic links, scroll progress
- **Lenis** · smooth wheel with `prefers-reduced-motion` respect
- **next/og + satori** · editorial 1200×630 OG cards generated at runtime from
  code (see `app/opengraph-image.tsx`, `app/nest/opengraph-image.tsx`)
- **@fontsource/instrument-serif** · self-hosted serif for OG fonts
- **@vercel/analytics** · pageview + custom event collection
- **Hosted on Vercel**

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build      # production build
npm run lint       # eslint
```

## Notable files

```
app/
  layout.tsx              root shell, skip-link, providers
  page.tsx                home page
  nest/page.tsx           case study + Article JSON-LD
  opengraph-image.tsx     home OG card (satori)
  nest/opengraph-image.tsx  case-study OG card
  icon.tsx                serif-N favicon generator
  robots.ts, sitemap.ts   crawler routes
  not-found.tsx           RAG-voiced 404
  globals.css             theme tokens, reduced-motion, print stylesheet

components/
  nest-case-study/        case-study blocks (hero, stakes, architecture,
                          audio-deep-dive, sources, etc.)
  sections/               home sections (hero, team, featured project, etc.)
  providers/              framer-motion config + Lenis reduced-motion bridge
  ui/                     shared primitives (team card, magnetic link)

lib/
  citations.ts            sources for case-study stats
  team.ts                 team data for the home page
```

## Editorial principles

The brief was "editorial longform, not startup landing page." A few non-obvious
rules that shaped the build:

- **No emojis, no AI-generated hero copy.** Every line was hand-written.
- **No blog, no Cmd-K palette, no light mode.** One voice, one route per idea.
- **Cite everything.** Stats in the case study carry footnote refs that link to
  a dedicated Sources block (Georgia DFCS, Chapin Hall's Midwest Study, Casey
  Family Programs, etc.).
- **Accessibility isn't optional.** If we can't serve screen-reader and reduced-
  motion users on the portfolio, it's hypocrisy against the mission.
- **Print like a foundation PDF.** The case study recolors to black-on-white
  under `@media print` with page-break hints and external-link URLs inline.

## Team

- **Stephen Sookra** — frontend, pitch lead · [LinkedIn](https://www.linkedin.com/in/stephen-sookra-633682339/) · [GitHub](https://github.com/StephenSook) · [stephensookra.com](https://stephensookra.com)
- **Tylin Delaney** — backend, RAG, FastAPI · [LinkedIn](https://www.linkedin.com/in/tylin-delaney/) · [GitHub](https://github.com/tylinndd) · [tylindelaney.dev](https://tylindelaney.dev/)
- **Brenden Bryant** — design, light coding · [LinkedIn](https://www.linkedin.com/in/brenden-bryant-422464329/)

Kennesaw State University · College of Computing and Software Engineering · 2026.
