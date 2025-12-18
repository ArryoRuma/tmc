// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxtjs/seo'
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://use.typekit.net',
          crossorigin: ''
        },
        {
          rel: 'preconnect',
          href: 'https://p.typekit.net',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/orr3dhh.css'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://outreach.trumediacreative.com'
  },

  build: {
    transpile: ['@headlessui/vue']
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  // Optimize build performance
  experimental: {
    payloadExtraction: false,
    inlineRouteRules: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      // Limit concurrent routes to reduce memory usage
      concurrency: 1
    },
    rollupConfig: {
      output: {
        manualChunks: (id) => {
          // Split vendor chunks to reduce memory usage
          if (id.includes('node_modules')) {
            if (id.includes('@nuxt') || id.includes('nuxt')) {
              return 'nuxt-vendor'
            }
            if (id.includes('vue')) {
              return 'vue-vendor'
            }
            return 'vendor'
          }
        }
      }
    },
    // Reduce build memory usage
    minify: process.env.NODE_ENV === 'production'
  },
  debug: false,
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  fonts: {
    adobe: {
      id: 'orr3dhh'
    }
  },

  linkChecker: {
    enabled: false // Disable in production to save memory
  },
  robots: {
    disallow: ['/admin', '/private'],
    groups: [
      { userAgent: ['GPTBot', 'ChatGPT-User'], disallow: ['/'] }
    ]
  }

})
