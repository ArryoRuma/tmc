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
    url: 'https://outreach.trumediacreative.com'
  },

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      // Aggressive memory optimization
      concurrency: 1,
      interval: 100
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
            if (id.includes('nuxt-og-image')) return 'og-image'
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

  // Aggressive optimizations for memory-constrained environments
  experimental: {
    payloadExtraction: false,
    inlineRouteRules: true,
    typedPages: false
  },

  // Disable features that consume memory during build
  devtools: {
    enabled: process.env.NODE_ENV !== 'production'
  },
  
  debug: false,

  // Optimize module loading
  build: {
    transpile: ['@headlessui/vue'],
    extractCSS: process.env.NODE_ENV === 'production'
  },

  // Reduce telemetry and debugging overhead
  telemetry: false,
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
