// Minimal Nuxt config for memory-constrained builds
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],
  
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
      routes: ['/'],
      crawlLinks: false, // Disable crawling to save memory
      concurrency: 1
    },
    minify: true,
    experimental: {
      wasm: false
    }
  },

  experimental: {
    payloadExtraction: false,
    inlineRouteRules: true,
    typedPages: false
  },

  devtools: false,
  debug: false,
  telemetry: false,

  build: {
    transpile: ['@headlessui/vue']
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  robots: {
    disallow: ['/admin', '/private'],
    groups: [
      { userAgent: ['GPTBot', 'ChatGPT-User'], disallow: ['/'] }
    ]
  }
})