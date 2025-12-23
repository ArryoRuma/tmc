# Copilot Instructions: TruMedia Creative SaaS Website

This is a Nuxt.js 4 application for TruMedia Creative's marketing website built with the Nuxt UI template architecture.

## Architecture Overview

**Content-Driven Design**: Content is managed through YAML files in `/content/` with structured schema validation via `content.config.ts`. Pages query content using `queryCollection()` pattern.

**Component Structure**:

- `/app/components/` - Reusable components organized by feature (home/, services/, projects/)
- `/app/pages/` - Route-based pages with async data fetching from content collections
- `/app/layouts/` - Layout wrappers (default.vue provides app structure with AppHeader/AppFooter)

**Content Pattern**: Each page follows this data flow:

```ts
const { data: page } = await useAsyncData("page-name", () =>
  queryCollection("collection-name").first(),
);
```

## Development Workflow

**Package Management**: Uses `pnpm` (not npm/yarn). Key commands:

- `pnpm dev` - Development server
- `pnpm build` - Production build
- `pnpm lint` - ESLint (configured with @nuxt/eslint)
- `pnpm typecheck` - TypeScript validation

**Content Updates**: Edit YAML files in `/content/` which automatically sync with pages. Schema validation in `content.config.ts` ensures type safety.

## Key Conventions

**Component Naming**:

- Page-specific components use prefix (HomeHeroTitle, HomeSections)
- Generic components use descriptive names (FadeInUp, ProcessTab)
- All components auto-imported via `components: true`

**Animation Pattern**: FadeInUp wrapper with staggered delays:

```vue
<FadeInUp :delay="0.2">
  <component />
</FadeInUp>
```

**SEO Structure**: Every page implements:

```ts
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
```

## Content Schema System

**Validation**: Content uses Zod schemas defined in `content.config.ts` with reusable schema builders:

- `createLinkSchema()` for buttons/links
- `createImageSchema()` for media
- `createFeatureItemSchema()` for feature lists

**Collection Pattern**: Content files use numeric prefixes (0.index.yml, 1.services.yml) for ordering.

## Styling & UI

**Framework**: Nuxt UI 4 components with Tailwind CSS
**Theme**: Supports dark/light mode via `useColorMode()`
**Fonts**: Adobe Fonts integration (orr3dhh kit)
**Icons**: Uses Iconify with Lucide icons (`i-lucide-*`)

## Service Integration

**Analytics**: Google Analytics via nuxt-gtag
**SEO**: @nuxtjs/seo module with OG image generation
**Forms**: HoneyBook integration for lead capture
**Performance**: Image optimization via @nuxt/image

## Critical Files to Reference

- `content.config.ts` - Schema definitions and validation
- `nuxt.config.ts` - Module configuration and app settings
- `app/app.vue` - Global meta tags and navigation data
- `/content/0.index.yml` - Homepage content example
- `app/pages/index.vue` - Content query and component usage pattern

## Development Notes

- TypeScript enabled with strict type checking
- ESLint uses @nuxt/eslint with 1tbs brace style
- All components auto-imported, no manual imports needed
- Content changes reflect immediately in dev mode
- Build targets static generation for deployment
