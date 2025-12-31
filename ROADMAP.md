# TruMedia Creative Website — Execution Roadmap

This roadmap is designed as a **build-and-operate system**, not a finish-line checklist. It is organized by phases, each with a clear objective, concrete work, durable artifacts, and explicit exit criteria so you always know what to do next.

---

## Phase 0 — Strategic Guardrails (Lock Before You Build)

**Objective**

Eliminate rework and scope drift by freezing the decisions that everything else depends on.

### Inputs

- [x] Positioning statement
- [x] ICP tiers (Primary / Secondary / Tertiary)
- [ ] Core revenue motions (Video → Outreach → Retainers)
- [ ] Explicit non-goals (what the site is _not_ responsible for)

### Work

- [x] Define **primary CTA per audience**
  - [x] Cold traffic → Strategy Call
  - [x] Warm traffic → Package / Offer pages
  - [x] Existing clients → Resources / Docs
- [x] Define **conversion hierarchy**
  - [x] Hero CTA
  - [x] Inline CTAs
  - [x] Exit-intent or last-chance CTAs
- [x] Lock **success metrics**
  - [x] Macro: booked calls, qualified leads
  - [x] Micro: scroll depth, video plays, CTA clicks

### Artifacts Produced

- [x] `docs/positioning.md`
- [x] `docs/cta-map.yml`
- [x] `docs/metrics.yml`

**Exit Criteria**

You can answer "what should this page make someone do?" in one sentence.

---

## Phase 1 — System Architecture & Developer Ergonomics

**Objective**

Make it easy to build pages quickly without thinking about structure or conventions.

### Work

- [ ] Finalize Nuxt 4 conventions
  - [ ] File and folder naming
  - [ ] Slug rules
  - [ ] Content collection taxonomy
- [ ] Normalize content schemas
  - [ ] Services
  - [ ] Industries
  - [ ] Solutions
  - [ ] Resources
- [ ] Document "golden paths"
  - [ ] How to add a new service
  - [ ] How to add a new industry
  - [ ] How to clone an existing page safely

### Tooling

- [ ] pnpm scripts documented and enforced
- [ ] Optional pre-commit hooks (lint, typecheck)
- [ ] CI expectations documented (lint, typecheck, build)

### Artifacts Produced

- [ ] `docs/content-architecture.md`
- [ ] `docs/dev-workflow.md`
- [ ] Finalized `content.config.ts`

**Exit Criteria**

You can scaffold a new page in under five minutes without second-guessing structure.

---

## Phase 2 — Content Inventory & Gap Mapping

**Objective**

Stop rewriting pages blindly and focus effort where it matters.

### Work

- [ ] Inventory all existing YAML and MD content
- [ ] Classify each item
  - [ ] Keep
  - [ ] Rewrite
  - [ ] Merge
  - [ ] Kill
- [ ] Map every page to a buyer journey stage
  - [ ] Problem-aware
  - [ ] Solution-aware
  - [ ] Vendor-aware
- [ ] Identify missing assets
  - [ ] Case studies
  - [ ] Objection handlers
  - [ ] Proof blocks

### Artifacts Produced

- [ ] Content audit (spreadsheet or Notion database)
- [ ] `docs/journey-map.md`
- [ ] Page priority list (P0 / P1 / P2)

**Exit Criteria**

You know exactly which pages matter for revenue versus polish.

---

## Phase 3 — Design System & UX Rules

**Objective**

Remove design decisions from daily work.

### Work

- [ ] Finalize visual foundations
  - [ ] Type scale
  - [ ] Spacing tokens
  - [ ] Dark/light mode behavior
- [ ] Standardize animation usage
  - [ ] Entry timing
  - [ ] Scroll triggers
  - [ ] Clear rules for when _not_ to animate
- [ ] Lock iconography and illustration direction
- [ ] Define media rules
  - [ ] Video aspect ratios
  - [ ] Poster image standards
  - [ ] Fallback behavior

### Artifacts Produced

- [ ] `docs/design-system.md`
- [ ] `docs/animation-rules.md`
- [ ] `/assets/design/` reference set

**Exit Criteria**

You stop tweaking spacing, fonts, and animations mid-build.

---

## Phase 4 — Revenue Pages (Money First)

**Objective**

Ship pages that can close deals without you present.

### Build Order (Strict)

- [ ] Home
- [ ] Video Growth Engine
- [ ] Outreach Engine
- [ ] Pricing
- [ ] Contact / Booking

### For Each Page

- [ ] One primary promise
- [ ] One primary CTA
- [ ] One proof mechanism
- [ ] One objection handler

### Artifacts Produced

- [ ] Final YAML per page
- [ ] CTA tracking events
- [ ] Page-level QA checklist

**Exit Criteria**

A prospect can understand, trust, and book without emailing you.

---

## Phase 5 — Expansion Pages (Industries, Solutions, Resources)

**Objective**

Scale relevance without creating a maintenance nightmare.

### Work

- [ ] Use base templates only
- [ ] Enforce copy constraints (no essays)
- [ ] Ensure every page
  - [ ] Mentions the buyer role
  - [ ] Shows proof
  - [ ] Links back to a revenue page

### Automation

- [ ] Programmatic OG images
- [ ] Shared SEO defaults
- [ ] Collection-level navigation

### Artifacts Produced

- [ ] Industry coverage matrix
- [ ] Solution cross-link map

**Exit Criteria**

Adding pages increases surface area without increasing workload.

---

## Phase 6 — Tracking, SEO, and Feedback Loops

**Objective**

Know what is working without guessing.

### Work

- [ ] Finalize analytics stack
- [ ] Define conversion events
- [ ] Implement SEO hygiene
  - [ ] `useSeoMeta` everywhere
  - [ ] Sitemap validation
  - [ ] OG image coverage
- [ ] Add lightweight reporting dashboards

### Artifacts Produced

- [ ] `docs/analytics-events.md`
- [ ] SEO checklist
- [ ] Post-launch review cadence

**Exit Criteria**

You can answer "what page is pulling its weight?" in under two minutes.

---

## Phase 7 — Iteration & Scale

**Objective**

Turn the site into an asset, not a recurring project.

### Ongoing Cadence

- [ ] Weekly: friction log
- [ ] Monthly: page-level optimizations
- [ ] Quarterly: offer and positioning review

### Backlog Themes

- [ ] Personalization
- [ ] Industry-specific demos
- [ ] Interactive proof (calculators, flows)

**Exit Criteria**

Changes are incremental, intentional, and revenue-driven.

---

## Operating Note

Treat this document as a living system. Each phase should be marked:

- [ ] Not Started
- [ ] In Progress
- [ ] Locked

Once a phase is locked, changes require intent—not impulse.
