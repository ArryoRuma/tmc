import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])

const createBaseSchema = () => z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  headline: z.string().optional()
})
const createFeatureItemSchema = () => z.object({
  name: z.string().optional(),
  title: z.string().optional(),
  description: z.string().nonempty(),
  icon: z.string().nonempty().editor({ input: 'icon' }),
  price: z.string().optional()
})

const createLinkSchema = () => z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional().editor({ input: 'icon' }),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional(),
  headline: z.string().optional()

})

const createImageSchema = () => z.object({
  src: z.string().nonempty().editor({ input: 'media' }),
  alt: z.string().optional(),
  loading: z.string().optional(),
  srcset: z.string().optional()
})

export const collections = {
  index: defineCollection({
    source: '0.index.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema()),
        photo: createImageSchema().optional(),
        orientation: orientationEnum.optional()
      }),

      // Sections
      sections: z.array(
        createBaseSchema().extend({
          id: z.string().nonempty(),
          headline: z.string().optional(),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema()),
          photo: createImageSchema().optional()
        })
      ),

      // Clients
      clients: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            name: z.string().nonempty(),
            logo: z.string().nonempty().editor({ input: 'media' })
          })
        )
      }),

      // Features
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())
      }),

      // Testimonials – make `to` and `target` optional so your current YAML is valid
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),

      // CTA
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  contractorsmanufactures: defineCollection({
    source: '2.contractors-manufactures.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),
      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(
        createBaseSchema().extend({
          id: z.string().nonempty(),
          headline: z.string().optional(),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema())
        })
      ),
      clients: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            name: z.string().nonempty(),
            logo: z.string().nonempty().editor({ input: 'media' })
          })
        )
      }),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())
      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  foodservices: defineCollection({
    source: '2.food-services.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),
      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(
        createBaseSchema().extend({
          id: z.string().nonempty(),
          headline: z.string().optional(),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema())
        })
      ),
      clients: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            name: z.string().nonempty(),
            logo: z.string().nonempty().editor({ input: 'media' })
          })
        )
      }),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())
      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  healthandwellness: defineCollection({
    source: '2.health-and-wellness.yaml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),
      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(
        createBaseSchema().extend({
          id: z.string().nonempty(),
          headline: z.string().optional(),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema())
        })
      ),
      clients: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            name: z.string().nonempty(),
            logo: z.string().nonempty().editor({ input: 'media' })
          })
        )
      }),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())
      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  nonprofits: defineCollection({
    source: '2.non-profits.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),
      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(
        createBaseSchema().extend({
          id: z.string().nonempty(),
          headline: z.string().optional(),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema())
        })
      ),
      clients: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            name: z.string().nonempty(),
            logo: z.string().nonempty().editor({ input: 'media' })
          })
        )
      }),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())
      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  financialservices: defineCollection({
    source: '2.financial-services.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),
      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(
        createBaseSchema().extend({
          id: z.string().nonempty(),
          headline: z.string().optional(),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema())
        })
      ),
      clients: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        items: z.array(
          z.object({
            name: z.string().nonempty(),
            logo: z.string().nonempty().editor({ input: 'media' })
          })
        )
      }),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())
      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  webdesign: defineCollection({
    source: '0.web-design.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  seoandpaidads: defineCollection({
    source: '0.seo-and-paid-ads.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  marketingautomation: defineCollection({
    source: '0.marketing-automation.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  getmoreleads: defineCollection({
    source: '1.get-more-leads.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  clarifyyourmessage: defineCollection({
    source: '1.clarify-your-message.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  speedupsales: defineCollection({
    source: '1.speed-up-sales.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  keepcustomerslonger: defineCollection({
    source: '1.keep-customers-longer.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  reachmorebuyers: defineCollection({
    source: '1.reach-more-buyers.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  fixyourlivestreamandevents: defineCollection({
    source: '1.fix-your-live-stream-and-events.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),

  videoengine: defineCollection({
    source: '0.videoengine.yml',
    type: 'page',
    schema: z.object({
      // Top-level meta used in content and SEO
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      headline: z.string().optional(),
      seo: z
        .object({
          title: z.string().nonempty(),
          description: z.string().nonempty()
        })
        .optional(),
      navigation: z.boolean().optional(),

      // Hero section
      hero: z.object({
        headline: z.string().nonempty(),
        description: z.string().nonempty(),
        links: z.array(createLinkSchema())
      }),

      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        video: z.object({
          src: z.string().nonempty(),
          poster: z.string().optional(),
          title: z.string().optional()
        }).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  outreachengine: defineCollection({
    source: '0.outreachengine.yml',
    type: 'page',
    schema: z.object({
      hero: z.object(({
        headline: z.string().nonempty(),
        links: z.array(createLinkSchema())
      })),
      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      image: createBaseSchema().extend({
        src: z.string().nonempty().editor({ input: 'media' }),
        alt: z.string().optional(),
        loading: z.string().optional(),
        srcset: z.string().optional()
      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  portfolio: defineCollection({
    source: '0.portfolio.yml',
    type: 'page',
    schema: z.object({
      hero: z.object(({
        headline: z.string().nonempty(),
        links: z.array(createLinkSchema())
      })),
      sections: z.array(createBaseSchema().extend({
        id: z.string().nonempty(),
        headline: z.string().optional(),
        orientation: orientationEnum.optional(),
        reverse: z.boolean().optional(),
        features: z.array(createFeatureItemSchema()).optional(),
        price: z.union([
          z.string(),
          z.object({
            display: z.string().optional(),
            amount: z.number().optional(),
            billing: z.string().optional()
          })
        ]).optional()
      })),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())

      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().optional(),
              target: z.string().optional(),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),

  docs: defineCollection({
    source: '1.docs/**/*',
    type: 'page'
  }),
  pricing: defineCollection({
    source: '2.pricing.yml',
    type: 'page',
    schema: z.object({
      plans: z.array(
        z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          price: z.object({
            month: z.string().nonempty(),
            year: z.string().nonempty()
          }),
          billing_period: z.string().nonempty(),
          billing_cycle: z.string().nonempty(),
          button: createLinkSchema(),
          features: z.array(z.string().nonempty()),
          highlight: z.boolean().optional()
        })
      ),
      logos: z.object({
        title: z.string().nonempty(),
        icons: z.array(z.string())
      }),
      faq: createBaseSchema().extend({
        items: z.array(
          z.object({
            label: z.string().nonempty(),
            content: z.string().nonempty(),
            defaultOpen: z.boolean().optional()
          })
        )
      })
    })
  }),
  blog: defineCollection({
    source: '3.blog.yml',
    type: 'page'
  }),
  posts: defineCollection({
    source: '3.blog/**/*',
    type: 'page',
    schema: z.object({
      image: z.object({ src: z.string().nonempty().editor({ input: 'media' }) }),
      authors: z.array(
        z.object({
          name: z.string().nonempty(),
          to: z.string().nonempty(),
          avatar: z.object({ src: z.string().nonempty().editor({ input: 'media' }) })
        })
      ),
      date: z.date(),
      badge: z.object({ label: z.string().nonempty() })
    })
  }),
  resources: defineCollection({
    source: '3.resources.yml',
    type: 'page'
  }),
  resources_posts: defineCollection({
    source: '3.resources/**/*',
    type: 'page',
    schema: z.object({
      image: z.object({ src: z.string().nonempty().editor({ input: 'media' }) }),
      authors: z.array(
        z.object({
          name: z.string().nonempty(),
          to: z.string().nonempty(),
          avatar: z.object({ src: z.string().nonempty().editor({ input: 'media' }) })
        })
      ),
      date: z.date(),
      badge: z.object({ label: z.string().nonempty() })
    })
  }),
  changelog: defineCollection({
    source: '4.changelog.yml',
    type: 'page'
  }),
  versions: defineCollection({
    source: '4.changelog/**/*',
    type: 'page',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string(),
      date: z.date(),
      image: z.string()
    })
  }),

  projects: defineCollection({
    source: 'projects/*.md',
    type: 'page',
    schema: z.object({
      title: z.string().nonempty(),
      thumbnail: z.string().nonempty(),
      hero: z.string().optional(),
      tags: z.array(z.string()).optional(),
      link: z.string().optional(),
      year: z.number().optional()
    })
  })
}
