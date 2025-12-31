import { defineCollection, z } from "@nuxt/content";
const variantEnum = z.enum([
  "solid",
  "outline",
  "subtle",
  "soft",
  "ghost",
  "link",
]);
const badgeVariantEnum = z.enum(["solid", "outline", "subtle", "soft"]);
const colorEnum = z.enum([
  "primary",
  "secondary",
  "neutral",
  "error",
  "warning",
  "success",
  "info",
]);
const sizeEnum = z.enum(["xs", "sm", "md", "lg", "xl"]);
const orientationEnum = z.enum(["vertical", "horizontal"]);

const createBaseSchema = () =>
  z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    headline: z.string().optional(),
  });
const createFeatureItemSchema = () =>
  z.object({
    name: z.string().optional(),
    title: z.string().optional(),
    description: z.string().nonempty(),
    icon: z.string().nonempty().editor({ input: "icon" }),
    price: createPriceSchema().optional(),
    link: createLinkSchema().optional(),
  });
const createPriceSchema = () =>
  z.union([
    z.string(),
    z.object({
      display: z.string().optional(),
      amount: z.number().optional(),
      billing: z.string().optional(),
    }),
  ]);
const createLinkSchema = () =>
  z.object({
    label: z.string().nonempty(),
    to: z.string().nonempty(),
    icon: z.string().optional().editor({ input: "icon" }),
    size: sizeEnum.optional(),
    trailing: z.boolean().optional(),
    target: z.string().optional(),
    color: colorEnum.optional(),
    variant: variantEnum.optional(),
    headline: z.string().optional(),
    active: z.boolean().optional(),
  });
const createVideoSchema = () =>
  z.object({
    src: z.string().nonempty().editor({ input: "media" }),
    poster: z.string().optional().editor({ input: "media" }),
    title: z.string().optional(),
  });

const createImageSchema = () =>
  z.object({
    src: z.string().nonempty().editor({ input: "media" }),
    alt: z.string().optional(),
    loading: z.string().optional(),
    srcset: z.string().optional(),
  });

const createProcessStepSchema = () =>
  z.object({
    id: z.string().nonempty(),
    title: z.string().nonempty(),
    subtitle: z.string().nonempty(),
    description: z.string().nonempty(),
    icon: z.string().optional().editor({ input: "icon" }),
    content: z.string().optional(),
    image: createImageSchema().optional(),
    link: z
      .object({
        url: z.string().nonempty(),
        text: z.string().nonempty(),
      })
      .optional(),
  });

const createPricingSchema = () =>
  z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    items: z.array(
      z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional(),
          }),
        ]),
        discount: z.string().optional(),
        billingPeriod: z.string().optional(),
        billingCycle: z.string().optional(),
        tagline: z.string().optional(),
        terms: z.string().optional(),
        badge: z
          .union([
            z.string(),
            z.object({
              label: z.string().nonempty(),
              color: colorEnum.optional(),
              variant: badgeVariantEnum.optional(),
            }),
          ])
          .optional(),
        button: createLinkSchema().optional(),
        features: z
          .array(
            z.union([
              z.string().nonempty(),
              z.object({
                title: z.string().nonempty(),
                icon: z.string().optional().editor({ input: "icon" }),
              }),
            ]),
          )
          .optional(),
        variant: z.enum(["soft", "solid", "outline", "subtle"]).optional(),
        orientation: orientationEnum.optional(),
        highlight: z.boolean().optional(),
        scale: z.boolean().optional(),
        icon: z.string().optional().editor({ input: "icon" }),
        links: z.array(createLinkSchema()).optional(),
      }),
    ),
  });

// Shared schema components for common sections
const createHeroSchema = () =>
  z.object({
    headline: z.string().nonempty(),
    description: z.string().nonempty(),
    links: z.array(createLinkSchema()),
    photo: createImageSchema().optional(),
    orientation: orientationEnum.optional(),
    title: z.string().optional(),
  });

const createSectionSchema = () =>
  createBaseSchema().extend({
    id: z.string().nonempty(),
    headline: z.string().optional(),
    orientation: orientationEnum.optional(),
    reverse: z.boolean().optional(),
    features: z.array(createFeatureItemSchema()).optional(),
    photo: createImageSchema().optional(),
    video: createVideoSchema().optional(),
    links: z.array(createLinkSchema()).optional(),
    price: createPriceSchema().optional(),
    image: createImageSchema().optional(),
  });

const createTestimonialsSchema = () =>
  createBaseSchema().extend({
    headline: z.string().optional(),
    items: z.array(
      z.object({
        quote: z.string().nonempty(),
        user: z.object({
          name: z.string().nonempty(),
          description: z.string().nonempty(),
          to: z.string().optional(),
          target: z.string().optional(),
          avatar: createImageSchema(),
        }),
      }),
    ),
  });

const createCTASchema = () =>
  createBaseSchema().extend({
    links: z.array(createLinkSchema()),
  });

const createClientsSchema = () =>
  z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    items: z.array(
      z.object({
        name: z.string().nonempty(),
        logo: z.string().nonempty().editor({ input: "media" }),
      }),
    ),
  });

// Standardized page type schemas based on content-architecture.md
const createPageMetaSchema = () =>
  z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    headline: z.string().optional(),
    seo: z
      .object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
      })
      .optional(),
    navigation: z.boolean().optional(),
  });

const createServicePageSchema = () =>
  createPageMetaSchema().extend({
    hero: createHeroSchema(),
    sections: z.array(createSectionSchema()),
    features: createBaseSchema().extend({
      items: z.array(createFeatureItemSchema()),
    }),
    testimonials: createTestimonialsSchema(),
    cta: createCTASchema(),
  });

const createSolutionPageSchema = () =>
  createPageMetaSchema().extend({
    hero: createHeroSchema(),
    sections: z.array(createSectionSchema()),
    features: createBaseSchema().extend({
      items: z.array(createFeatureItemSchema()),
    }),
    testimonials: createTestimonialsSchema(),
    cta: createCTASchema(),
  });

const createIndustryPageSchema = () =>
  createPageMetaSchema().extend({
    hero: createHeroSchema(),
    sections: z.array(createSectionSchema()),
    clients: createClientsSchema(),
    features: createBaseSchema().extend({
      items: z.array(createFeatureItemSchema()),
    }),
    testimonials: createTestimonialsSchema(),
    cta: createCTASchema(),
  });

export const collections = {
  // Home page
  index: defineCollection({
    source: "home/index.yml",
    type: "page",
    schema: createPageMetaSchema().extend({
      hero: createHeroSchema(),
      sections: z.array(createSectionSchema()),
      clients: createClientsSchema(),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema()),
      }),
      process: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          steps: z.array(createProcessStepSchema()),
        })
        .optional(),
      testimonials: createTestimonialsSchema(),
      cta: createCTASchema(),
    }),
  }),

  // Services
  webdesign: defineCollection({
    source: "services/web-design.yml",
    type: "page",
    schema: createServicePageSchema(),
  }),
  seoandpaidads: defineCollection({
    source: "services/seo-and-paid-ads.yml",
    type: "page",
    schema: createServicePageSchema(),
  }),
  marketingautomation: defineCollection({
    source: "services/marketing-automation.yml",
    type: "page",
    schema: createServicePageSchema(),
  }),
  videoengine: defineCollection({
    source: "services/video-growth-engine.yml",
    type: "page",
    schema: createPageMetaSchema().extend({
      hero: createHeroSchema(),
      sections: z.array(createSectionSchema()),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema()),
      }),
      testimonials: createTestimonialsSchema(),
      videoShowcase: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          headline: z.string().optional(),
          videos: z.array(
            z.object({
              title: z.string().optional(),
              description: z.string().optional(),
              src: z.string().nonempty(),
              poster: z.string().optional(),
              thumbnail: z.string().optional(),
            }),
          ),
        })
        .optional(),
      cta: createCTASchema(),
    }),
  }),
  webdesigncomparison: defineCollection({
    source: "services/web-design-comparison.yml",
    type: "page",
    schema: createPageMetaSchema().extend({
      hero: z.object({
        headline: z.string().nonempty(),
        title: z.string().optional(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema()),
      }),
      comparison: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            title: z.string().nonempty(),
            description: z.string().nonempty(),
            price: z.string().optional(),
            discount: z.string().optional(),
            billingPeriod: z.string().optional(),
            billingCycle: z.string().optional(),
            tagline: z.string().optional(),
            terms: z.string().optional(),
            badge: z
              .union([
                z.string(),
                z.object({
                  label: z.string().nonempty(),
                  color: colorEnum.optional(),
                  variant: badgeVariantEnum.optional(),
                }),
              ])
              .optional(),
            button: createLinkSchema().optional(),
            features: z
              .union([
                z.array(z.string()),
                z.array(
                  z.object({
                    title: z.string(),
                    icon: z.string().optional(),
                  }),
                ),
              ])
              .optional(),
            variant: z.enum(["soft", "solid", "outline", "subtle"]).optional(),
            orientation: orientationEnum.optional(),
            highlight: z.boolean().optional(),
            scale: z.boolean().optional(),
            icon: z.string().optional().editor({ input: "icon" }),
            links: z.array(createLinkSchema()).optional(),
          }),
        ),
      }),
      sections: z.array(createSectionSchema()),
      cta: createCTASchema(),
    }),
  }),

  // Solutions
  getmoreleads: defineCollection({
    source: "solutions/get-more-leads.yml",
    type: "page",
    schema: createSolutionPageSchema(),
  }),
  clarifyyourmessage: defineCollection({
    source: "solutions/clarify-your-message.yml",
    type: "page",
    schema: createSolutionPageSchema(),
  }),
  speedupsales: defineCollection({
    source: "solutions/speed-up-sales.yml",
    type: "page",
    schema: createSolutionPageSchema(),
  }),
  keepcustomerslonger: defineCollection({
    source: "solutions/keep-customers-longer.yml",
    type: "page",
    schema: createSolutionPageSchema(),
  }),
  reachmorebuyers: defineCollection({
    source: "solutions/reach-more-buyers.yml",
    type: "page",
    schema: createSolutionPageSchema(),
  }),
  fixyourlivestreamandevents: defineCollection({
    source: "solutions/fix-your-live-stream-and-events.yml",
    type: "page",
    schema: createSolutionPageSchema(),
  }),
  outreachengine: defineCollection({
    source: "solutions/outreach-engine.yml",
    type: "page",
    schema: z.object({
      hero: createHeroSchema(),
      sections: z.array(createSectionSchema()),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema()),
      }),
      image: createBaseSchema().extend({
        src: z.string().nonempty().editor({ input: "media" }),
        alt: z.string().optional(),
        loading: z.string().optional(),
        srcset: z.string().optional(),
      }),
      testimonials: createTestimonialsSchema(),
      cta: createCTASchema(),
    }),
  }),
  portfolio: defineCollection({
    source: "solutions/portfolio.yml",
    type: "page",
    schema: z.object({
      hero: createHeroSchema(),
      sections: z.array(createSectionSchema()),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema()),
      }),
      testimonials: createTestimonialsSchema(),
      cta: createCTASchema(),
    }),
  }),
  claritytoclients: defineCollection({
    source: "solutions/clarity-to-clients.yml",
    type: "page",
    schema: createPageMetaSchema().extend({
      hero: createHeroSchema(),
      sections: z.array(createSectionSchema()),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema()),
      }),
      pricing: createPricingSchema(),
      testimonials: createTestimonialsSchema(),
      cta: createCTASchema(),
    }),
  }),

  // Industries
  contractorsmanufactures: defineCollection({
    source: "industries/contractors-manufactures.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  foodservices: defineCollection({
    source: "industries/food-services.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  healthandwellness: defineCollection({
    source: "industries/health-and-wellness.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  nonprofits: defineCollection({
    source: "industries/non-profits.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  financialservices: defineCollection({
    source: "industries/financial-services.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  liveeventsandentertainment: defineCollection({
    source: "industries/live-events-and-entertainment.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),

  // Industries
  contractorsmanufactures: defineCollection({
    source: "industries/contractors-manufactures.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  foodservices: defineCollection({
    source: "industries/food-services.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  healthandwellness: defineCollection({
    source: "industries/health-and-wellness.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  nonprofits: defineCollection({
    source: "industries/non-profits.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  financialservices: defineCollection({
    source: "industries/financial-services.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),
  liveeventsandentertainment: defineCollection({
    source: "industries/live-events-and-entertainment.yml",
    type: "page",
    schema: createIndustryPageSchema(),
  }),

  // Projects
  projects: defineCollection({
    source: "projects/*.md",
    type: "page",
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      year: z.number().optional(),
      client: z.string().optional(),
      services: z.array(z.string()).optional(),
      heroImage: z.string().optional(),
      beforeImage: z.string().optional(),
      afterImage: z.string().optional(),
      websiteUrl: z.string().optional(),
      challenge: z.string().optional(),
      approach: z.string().optional(),
      solution: z.string().optional(),
      results: z.array(z.string()).optional(),
    }),
  }),

  // Resources & Blog
  docs: defineCollection({
    source: "1.docs/**/*",
    type: "page",
  }),
  blog: defineCollection({
    source: "3.blog.yml",
    type: "page",
  }),
  posts: defineCollection({
    source: "3.blog/**/*",
    type: "page",
    schema: z.object({
      image: z.object({
        src: z.string().nonempty().editor({ input: "media" }),
      }),
      authors: z.array(
        z.object({
          name: z.string().nonempty(),
          to: z.string().nonempty(),
          avatar: z.object({
            src: z.string().nonempty().editor({ input: "media" }),
          }),
        }),
      ),
      date: z.date(),
      badge: z.object({ label: z.string().nonempty() }),
    }),
  }),
  resources: defineCollection({
    source: "3.resources.yml",
    type: "page",
  }),
  resources_posts: defineCollection({
    source: "3.resources/**/*",
    type: "page",
    schema: z.object({
      image: z.object({
        src: z.string().nonempty().editor({ input: "media" }),
      }),
      authors: z.array(
        z.object({
          name: z.string().nonempty(),
          to: z.string().nonempty(),
          avatar: z.object({
            src: z.string().nonempty().editor({ input: "media" }),
          }),
        }),
      ),
      date: z.date(),
      badge: z.object({ label: z.string().nonempty() }),
    }),
  }),
  changelog: defineCollection({
    source: "4.changelog.yml",
    type: "page",
  }),
  versions: defineCollection({
    source: "4.changelog/**/*",
    type: "page",
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string(),
      date: z.date(),
      image: z.string(),
    }),
  }),

  // Pricing
  pricing: defineCollection({
    source: "2.pricing.yml",
    type: "page",
    schema: z.object({
      plans: z.array(
        z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          price: z.string().nonempty(),
          discount: z.string().optional(),
          billingPeriod: z.string().optional(),
          billingCycle: z.string().optional(),
          tagline: z.string().optional(),
          terms: z.string().optional(),
          badge: z
            .union([
              z.string(),
              z.object({
                label: z.string().nonempty(),
                color: colorEnum.optional(),
                variant: variantEnum.optional(),
              }),
            ])
            .optional(),
          button: createLinkSchema(),
          features: z.array(
            z.union([
              z.string().nonempty(),
              z.object({
                title: z.string().nonempty(),
                icon: z.string().optional().editor({ input: "icon" }),
              }),
            ]),
          ),
          variant: z.enum(["soft", "solid", "outline", "subtle"]).optional(),
          orientation: orientationEnum.optional(),
          highlight: z.boolean().optional(),
          scale: z.boolean().optional(),
        }),
      ),
      logos: z.object({
        title: z.string().nonempty(),
        icons: z.array(z.string()),
      }),
      faq: createBaseSchema().extend({
        items: z.array(
          z.object({
            label: z.string().nonempty(),
            content: z.string().nonempty(),
            defaultOpen: z.boolean().optional(),
          }),
        ),
      }),
    }),
  }),
};
