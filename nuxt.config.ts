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
    '@nuxtjs/seo',
    'nuxt-gtag',
    'motion-v/nuxt',
    '@nuxt/scripts'
  ],
  components: true,
  devtools: {
    enabled: true
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
    url: 'https://trumediacreative.com'
  },

  // Optimize module loading
  build: {
    transpile: ['@headlessui/vue']
  },
  routeRules: {
    '/docs': { redirect: '/docs/getting-started' }
  },
  compatibilityDate: '2024-07-11',
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },
  debug: true,

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
  },
  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-EG22P0WJNVM'
      }
    }
  }
})
