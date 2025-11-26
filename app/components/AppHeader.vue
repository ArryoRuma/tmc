<script setup lang="ts">
const route = useRoute()

const items = computed(() => [
  {
    label: 'Solutions',
    children: [
      { label: 'Lead Generation', icon: 'i-lucide-user-search', to: '/lead-generation' },
      { label: 'Shorten Sales Cycles', icon: 'i-lucide-refresh-ccw', to: '/shorten-sales-cycles' },
      { label: 'Expand Your Reach', icon: 'i-lucide-expand', to: '/expand-your-reach' },
      { label: 'Increase Retention', icon: 'i-lucide-chart-no-axes-combined', to: '/increase-retention' },
      { label: 'Boost Engagement', icon: 'i-lucide-message-circle-heart', to: '/boost-engagement' }
    ]
  },
  {
    label: 'Services',
    children: [
      { label: 'Video Production', icon: 'i-lucide-video', to: '/video-growth-engine' },
      { label: 'SEO', icon: 'i-lucide-search-code', to: '/seo-growth-engine' },
      { label: 'PPC', icon: 'i-lucide-mouse-pointer-click', to: '/ppc-growth-engine' },
      { label: 'Outbound Campaigns', icon: 'i-lucide-send', to: '/outreach-engine' },
      { label: 'Web Design', icon: 'i-lucide-layout-dashboard', to: '/siteforge' }
    ]

  }, {
    label: 'Industries',
    children: [
      { label: 'Industrial & Manufacturing', icon: 'i-lucide-factory', to: '/industrial' },
      { label: 'Contractors', icon: 'i-lucide-hammer', to: '/contractors' },
      { label: 'Financial Services', icon: 'i-lucide-banknote', to: '/financial-services' },
      { label: 'Food Services', icon: 'i-lucide-utensils', to: '/food-services' },
      { label: 'Non-Profits', icon: 'i-lucide-heart', to: '/non-profits' }
    ]
  },

  /// {label: 'Docs', to: '/docs', active: route.path.startsWith('/docs')},
  { label: 'Resources', to: '/resources'},
  //{ label: 'Resources', to: '/portfolio' },
  ///{ label: 'Pricing', to: '/pricing'}

])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
      <TemplateMenu />
    </template>

    <UNavigationMenu
      orientation="horizontal"
      size="xl"
      :items="items"
      
      class="w-full justify-center"
      :ui="{
  viewport: 'w-full',
  viewportWrapper: 'absolute top-full left-0 flex w-full',

  /* Force dropdown width to match trigger & prevent autosizing */
  content: 'w-(--reka-navigation-menu-trigger-width) min-w-0',

  linkLabel: 'whitespace-normal break-words',

  /* Force consistent 2-column layout across all groups */

  /* Ensure every item fills full column width */
  childItem: 'w-full',

  /* Ensure the clickable link spans the entire column */
  childLink: 'w-full flex items-center px-3 py-2 rounded-md',
  childLinkLabel: 'flex-1 whitespace-normal'
}"
      
    />

    <template #right>
      <UColorModeButton />

      <UButton
        icon="i-lucide-log-in"
        color="neutral"
        variant="ghost"
        to="/login"
        class="lg:hidden"
      />

      <UButton
        label="Sign in"
        color="neutral"
        variant="outline"
        to="/login"
        class="hidden lg:inline-flex"
      />

      <UButton
        label="Sign up"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:inline-flex"
        to="/signup"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="Sign in"
        color="neutral"
        variant="subtle"
        to="/login"
        block
        class="mb-3"
      />
      <UButton
        label="Sign up"
        color="neutral"
        to="/signup"
        block
      />
    </template>
  </UHeader>
</template>
