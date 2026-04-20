@AGENTS.md

# Nest Portfolio

Landing page for the Nest team (KSU CCSE C-Day 2026 · Project UC-151-197).

## Team

- **Stephen Sookra** — frontend + pitch lead
- **Tylin Delaney** — backend / RAG / FastAPI
- **Brenden Bryant** — design / light coding
- Advisor: Dr. Richard Gesick (KSU CCSE)
- Partner: Lauren Padgett, KSU ASCEND

## Flagship project — Nest

- Live: https://nest-zeta-nine.vercel.app
- API: https://nest-backend-ehl9.onrender.com
- GitHub: https://github.com/tylinndd/nest
- One-line: AI-powered transition navigator for Georgia foster youth aging out of care
- Real stats to cite: ~700 GA foster youth age out yearly · nearly 1 in 4 experience homelessness within a year · fewer than 3% earn a degree by 26
- What it actually does: onboarding → personalized 90-day plan, six curated GA benefits, RAG-backed Ask Navigator with source citations, deterministic crisis routing to 988 / 211 GA, document vault stub, success-card micro-celebrations

## Stack

Next.js 15 (App Router, Turbopack) · TypeScript · Tailwind 4 · shadcn/ui · framer-motion · Lenis smooth scroll · Vercel

## Conventions

- **No emojis** in UI copy. Anywhere.
- **No AI-slop** filler ("empowering the next generation of…"). Real words, scannable, sparse.
- Borrow Nest brand tokens where appropriate — amber `#D97706` accent reads well on a dark base.
- Optimize every image via `next/image`. No raw `<img>` tags for content.
- Wrap the root in `<MotionConfig reducedMotion="user">` so all motion respects `prefers-reduced-motion`.
- Lighthouse target before launch: **95+ Performance, 100 Accessibility / SEO / Best Practices.**
- Server components by default. Only mark a component `"use client"` when it needs state, effects, or event handlers.

## Site structure (single-scroll landing)

1. **Hero** — team name, one-line mission, primary CTA to Nest live demo
2. **About** — 2–3 sentence mission paragraph
3. **Team** — three cards (headshot + name + role + short bio + socials)
4. **Featured project** — Nest card (screenshot, description, live + GitHub links, stack chips)
5. **Tech we work with** — logo marquee
6. **Contact** — email + socials

## Motion direction

- Stagger fade-in-up on scroll (`useInView` threshold 0.3)
- Team cards: grayscale → color on hover, subtle tilt
- Magnetic primary CTA (pointer-tracked 6–10px nudge)
- Lenis for the whole page
- Hero name reveal: clip-path or blur-to-focus

## Design direction

- Dark-first base: bg `#0A0A0A`, text `#FAFAFA`
- Single accent: amber `#D97706` (CTAs, hover states)
- Display type: a serif (Instrument Serif, Fraunces) for the hero; Inter or Geist for UI
- Generous whitespace, large type (hero 96–128px desktop)
- Minimal decoration. No gradient blobs unless purposeful.

## Assets

- Team headshots (in place):
  - `public/team/stephen.jpg` (source: `~/Library/Mobile Documents/com~apple~CloudDocs/photos of myself/ssookra@students.kennesaw.edu-121a9915.JPG`)
  - `public/team/tylin.png` (source: `~/Desktop/Tylin Headshot .png`)
  - `public/team/brenden.png` (source: `~/Desktop/Brenden Headshot .png`)
  - Sizes are large (1.5–2.8 MB); consider cropping to 1:1 and compressing to ≤500 KB before shipping.
- Nest screenshots: drop into `public/projects/` as captured. Suggested: `nest-home.png`, `nest-navigator.png`, `nest-emergency.png`.

## Commit cadence

Per user preference: **one completed task = one commit + push.** No asking. Local commits now, push once a GitHub repo is set up.

## Deploy

Vercel (connect GitHub → main → done). Use `vercel:deployment-expert` subagent when ready.

## Tools to lean on

- `mcp__magic__21st_magic_component_builder` — generate hero, team cards, project showcase
- `mcp__magic__21st_magic_component_inspiration` — scope a section
- `mcp__magic__21st_magic_component_refiner` — iterate on a generated component
- `mcp__magic__logo_search` — tech stack chips
- `mcp__plugin_context7_context7` — Next.js 15 / framer-motion / Tailwind 4 syntax
- `mcp__plugin_vercel_vercel` — deploy
- `mcp__plugin_github_github` — repo + push
- `mcp__plugin_playwright_playwright` — live preview testing

## Sub-agents

- `vercel:deployment-expert` — Vercel setup + domain
- `vercel:performance-optimizer` — Lighthouse + CWV pass pre-launch
- `visual-designer` (banana MCP) — ONLY for abstract hero accents if needed, NEVER for team or project imagery
