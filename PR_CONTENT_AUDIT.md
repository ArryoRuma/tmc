# PR Title

Content audit scaffolding and loader cleanup

## Summary

- Document a reusable PR body for the content audit effort, including TODO tracking.
- Capture a baseline inventory of current content collections to guide the audit.
- Preserve recent formatting cleanups in SocialLinks, contact, home loader, and pricing loader components.

## TODOs

- [x] Capture baseline content inventory by collection (home, services, solutions, industries, people, blog/resources, changelog, navigation/footer/contact).
- [ ] Validate SocialLinks usage across pages and expand if gaps exist.
- [ ] Audit loader states for key pages (home, pricing) to ensure accessibility text is consistent.
- [ ] Cross-check contact card data with `content/contact.yml` for accuracy and completeness.
- [ ] Identify any missing CTA or SEO fields in audited content files.
- [x] Run `pnpm check` and update this file with results before merging.

### Initial Content Inventory Snapshot

- Home: `content/home/index.yml`
- Services (5): marketing-automation, seo-and-paid-ads, video-growth-engine, web-design, web-design-comparison
- Solutions (8): clarify-your-message, clarity-to-clients, fix-your-live-stream-and-events, get-more-leads, keep-customers-longer, outreach-engine, portfolio, reach-more-buyers, speed-up-sales
- Industries (6): contractors-manufactures, financial-services, food-services, health-and-wellness, live-events-and-entertainment, non-profits
- People (3): han, lar, syd
- Blog (6) & Resources (6): numbered markdown entries under `content/3.blog` and `content/3.resources`
- Changelog (10): entries under `content/4.changelog`
- Global: navigation, footer, contact, pricing, services index, resources index

## Testing

- [x] `pnpm check` (2026-01-04)
