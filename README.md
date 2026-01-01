# TruMedia Creative

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

TruMedia Creative's marketing website - a modern, content-driven web application showcasing our services in web design, video production, and digital marketing. Built with Nuxt 4 and Nuxt UI components, featuring a powerful content management system and responsive design.

## Features

- 🎨 **Services Showcase**: Dedicated pages for Video Growth Engine and Web Design services
- 📱 **Responsive Design**: Mobile-first approach with dark/light mode support
- 📝 **Content Management**: YAML-based content system with schema validation
- 🎬 **Project Portfolio**: Case studies and client success stories
- 🔍 **SEO Optimized**: Built-in SEO capabilities with OG image generation
- 🎯 **Lead Generation**: Integrated forms with HoneyBook
- 📊 **Analytics**: Google Analytics integration via nuxt-gtag

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/)
- **UI Components**: [Nuxt UI](https://ui.nuxt.com)
- **Content**: [Nuxt Content](https://content.nuxt.com/) with YAML schema
- **Styling**: Tailwind CSS
- **Fonts**: Adobe Fonts integration
- **Icons**: Iconify with Lucide and Simple Icons
- **Images**: @nuxt/image for optimization
- **Type Safety**: TypeScript with Zod validation

## Quick Start

Clone and install:

```bash
git clone https://github.com/ArryoRuma/tmc.git
cd tmc
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Development Commands

```bash
# Lint code
pnpm lint

# Type check
pnpm typecheck

# Format code
pnpm format

# Fix formatting and linting issues
pnpm fix

# Run all checks (format, lint, typecheck)
pnpm check
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Project Structure

```
tmc/
├── app/
│   ├── components/      # Vue components organized by feature
│   ├── layouts/         # Page layouts (default, etc.)
│   └── pages/          # Route-based pages
├── content/            # YAML content files with schema validation
│   ├── services/       # Service pages content
│   └── *.yml          # Other content collections
├── public/            # Static assets
└── content.config.ts  # Content schema definitions
```

## Content Management

Content is managed through YAML files in the `/content/` directory. All content follows schema validation defined in `content.config.ts`:

- Edit YAML files to update page content
- Changes reflect automatically in dev mode
- Schema validation ensures type safety
- Supports structured data for hero sections, features, testimonials, etc.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm check` to ensure quality
4. Submit a pull request
