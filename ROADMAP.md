# TruMedia Creative Website Roadmap

## Vision & Alignment
- Clarify audience segments (prospects, existing clients, event organizers) and primary calls-to-action (contact, demos, signup)
- Anchor success metrics: qualified leads, form completions, time-on-page, SEO rankings
- Keep positioning statement and messaging pillars documented for quick reference

## Foundation & Infrastructure
- Confirm Nuxt 4 + pnpm setup; keep `pnpm lint`, `pnpm typecheck`, `pnpm test` in the daily loop
- Track environment/config: color modes, SEO defaults, analytics, HoneyBook forms, GTM if added later
- Document deployment flow (Git branching, preview URLs, production target)

## Content Model & Data
- Review `content.config.ts` schemas and note changes before editing YAML
- Audit `/content` collections (home, services, industries, docs, blog, etc.) to identify gaps and outdated copy
- Define workflow for new content: copy source → YAML/MD location → approval → publish

## UX & Visual System
- Maintain typography, spacing, and dark/light token references; note Adobe font kit usage
- List animation conventions (FadeInUp delays, intersection triggers, marquee rules)
- Capture iconography and illustration direction; log any new assets needed per section

## Primary Pages & Flows
1. **Home**: hero, value props, social proof, CTA; sync with `content/0.index.yml`
2. **Services & Solutions**: consistent layout per offering; ensure case studies + CTA buttons
3. **Industries**: tailored messaging per vertical; verify dynamic routes and sidebar nav
4. **Projects/Portfolio**: update assets for BaseProject, ProjectsPortfolio, before/after sliders
5. **Resources (docs/blog/changelog)**: navigation, search/filter, SEO metadata, RSS if needed
6. **Pricing**: tier cards, feature matrix, FAQs, contact CTA
7. **Contact/Signup/Login**: HoneyBook form integration + fallback contact info

## Components & Interactions
- Inventory existing components; checklist for props, slots, and content sources
- Plan upcoming components (testimonials carousel, CTA banner, comparison tables) with data contracts
- Standardize animation timings, auto-import rules, and any scrolling behaviors

## Technical Enhancements
- Performance checklist: `@nuxt/image`, video lazy loading, critical CSS strategies
- Accessibility passes (color contrast, keyboard nav, aria labels, dark-mode parity)
- Analytics and tracking: `window.trackingFunctions` typings, gtag custom events, conversion logging

## Quality & Testing
- Automate lint/format/type scripts via CI; keep pre-commit hooks optional but documented
- Add targeted unit tests for composables (e.g., `useRotatingText`) and snapshot tests for UI
- Maintain manual QA list per page: responsive states, animation timing, form submissions

## SEO & Marketing Ops
- Ensure every route calls `useSeoMeta`; document OG/tw requirements and @nuxtjs/seo configs
- Track OG image generation assets inside `/app/components/OgImage`
- Define content cadence for blog/resources (naming, scheduling, RSS or newsletter tie-ins)

## Launch & Iteration
- Pre-launch checklist: Lighthouse, 404/500 pages, form success, analytics events, sitemap
- Post-launch backlog: personalization ideas, A/B tests, new industries, interactive demos
- Schedule recurring reviews (weekly triage of feedback, monthly roadmap refinement)

> Treat this file as a living artifact—update sections as scope evolves so you can always jump back in with clear direction.
