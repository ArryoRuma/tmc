// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    // OG Image module completely disabled for production builds
    // 'nuxt-og-image',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxtjs/seo'
  ],
  devtools: {
    enabled: process.env.NODE_ENV !== 'production',
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
    url: 'https://outreach.trumediacreative.com'
  },

  // Optimize module loading
  build: {
    transpile: ['@headlessui/vue']
  },

  routeRules: {
    '/': { prerender: false },
    '/docs': { redirect: '/docs/getting-started', prerender: false },
    '/**': { prerender: false }, // Disable all prerendering
    '/__og-image__/**': { prerender: false },
    '/api/__og-image__/**': { prerender: false }
  },

  // Aggressive optimizations for memory-constrained environments
  experimental: {
    payloadExtraction: false,
    inlineRouteRules: true,
    typedPages: false
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [],
      crawlLinks: false // Completely disable prerendering to avoid initialization errors
    },
    rollupConfig: {
      cache: false, // Disable cache to reduce memory usage
      output: {
        manualChunks: (id) => {
          // More aggressive chunking
          if (id.includes('node_modules')) {
            // Split large libraries
            if (id.includes('@nuxt/ui')) return 'nuxt-ui'
            if (id.includes('@nuxt/content')) return 'nuxt-content'
            if (id.includes('@nuxtjs/seo')) return 'seo'
            if (id.includes('vue')) return 'vue'
            if (id.includes('@vue')) return 'vue-ecosystem'
            if (id.includes('@iconify')) return 'icons'
            if (id.includes('marked')) return 'markdown'
            return 'vendor'
          }
        }
      }
    },
    minify: process.env.NODE_ENV === 'production',
    // Reduce memory usage during build
    experimental: {
      wasm: false
    }
  },

  // Reduce telemetry and debugging overhead
  telemetry: false,

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
  robots: {
    disallow: ['/admin', '/private'],
    groups: [
      { userAgent: ['GPTBot', 'ChatGPT-User'], disallow: ['/'] }
    ]
  }
})
