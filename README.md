# TruMedia Creative Website

Marketing website for TruMedia Creative, a New Jersey-based digital marketing agency focused on video-led growth for B2B and expert-led companies. Built with Nuxt 4 and Nuxt UI, with content managed in `content/` and SEO handled via `@nuxtjs/seo` and `nuxt-og-image`.

## Highlights

- Nuxt 4 app with Nuxt UI components and Motion One (`motion-v`) animations.
- Content-driven pages powered by `@nuxt/content`.
- SEO defaults configured in `nuxt.config.ts` with Open Graph image support.
- Google Analytics tag configured via `nuxt-gtag`.

## Local Development

Install dependencies:

```bash
pnpm install
```

Run the dev server (defaults to `http://localhost:3000`):

```bash
pnpm dev
```

## Production

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Useful Scripts

- `pnpm lint` - lint the codebase
- `pnpm format` - check formatting
- `pnpm format:fix` - format files
- `pnpm typecheck` - run Nuxt type checks

## Deployment

Follow the Nuxt deployment guide for your target platform: https://nuxt.com/docs/getting-started/deployment
