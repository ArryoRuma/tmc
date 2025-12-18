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

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
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
  site: {
    url: 'https://outreach.trumediacreative.com'
  }
})
