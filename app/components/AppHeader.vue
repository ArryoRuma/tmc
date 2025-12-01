<script setup lang="ts">
const route = useRoute()

const items = computed(() => [
  {
    label: 'Solutions',
    children: [
      { label: 'Clarify Your Message', icon: 'i-lucide-award', to: '/clarify-your-message' },
      { label: 'Get More Leads', icon: 'i-lucide-user-search', to: '/get-more-leads' },
      { label: 'Speed Up Sales', icon: 'i-lucide-refresh-ccw', to: '/speed-up-sales' },
      { label: 'Reach More Buyers', icon: 'i-lucide-expand', to: '/reach-more-buyers' },
      { label: 'Keep Customers Longer', icon: 'i-lucide-chart-no-axes-combined', to: '/keep-customers-longer' },
      { label: 'Fix Your Live Stream & Events', icon: 'i-lucide-video', to: '/fix-your-live-stream-and-events' }


    ]
  },
  {
    label: 'Services',
    children: [
      { label: 'Video Production', icon: 'i-lucide-video', to: '/video-growth-engine' },
      { label: 'Outbound Campaigns', icon: 'i-lucide-send', to: '/outreach-engine' },
      { label: 'Web Design & Development', icon: 'i-lucide-layout-dashboard', to: '/web-design' },
      { label: 'SEO & Paid Ads', icon: 'i-lucide-mouse-pointer-click', to: '/seo-and-paid-ads' },
      { label: 'Marketing Automation', icon: 'i-lucide-bot', to: '/marketing-automation' },
      { label: 'Content Creation', icon: 'i-lucide-edit-3', to: '/content-creation' },


    ]

  }, {
    label: 'Industries',
    children: [
      { label: 'Contractors & Manufacturing', icon: 'i-lucide-hammer', to: '/contractors-manufactures' },
      { label: 'Financial Services', icon: 'i-lucide-banknote', to: '/financial-services' },
      { label: 'Food Services', icon: 'i-lucide-utensils', to: '/food-services' },
      { label: 'Non-Profits', icon: 'i-lucide-heart', to: '/non-profits' },
      { label: 'Health & Wellness', icon: 'i-lucide-heart-pulse', to: '/health-wellness' }
    ]
  },

  /// {label: 'Docs', to: '/docs', active: route.path.startsWith('/docs')},
  { label: 'Resources', to: '/resources' },
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

    <UNavigationMenu orientation="horizontal" size="xl" :items="items" class="w-full justify-center" :ui="{
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
    }" />

    <template #right>
      <UColorModeButton />

      <UButton icon="i-lucide-log-in" color="neutral" variant="ghost" to="/login" class="lg:hidden" />

      <UButton label="Sign in" color="neutral" variant="outline" to="/login" class="hidden lg:inline-flex" />

      <UButton label="Sign up" color="neutral" trailing-icon="i-lucide-arrow-right" class="hidden lg:inline-flex"
        to="/signup" />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />

      <USeparator class="my-6" />

      <UButton label="Sign in" color="neutral" variant="subtle" to="/login" block class="mb-3" />
      <UButton label="Sign up" color="neutral" to="/signup" block />
    </template>
  </UHeader>
</template>
