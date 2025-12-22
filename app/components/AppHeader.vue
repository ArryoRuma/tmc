<script setup lang="ts">
import { computed } from 'vue'

const items = computed(() => [
  {
    label: 'Who We Help',
    children: [
      { label: 'Contractors & Manufacturing', icon: 'i-lucide-hammer', to: '/industries/contractors-manufactures', disabled: true },
      { label: 'Financial Services', icon: 'i-lucide-banknote', to: '/industries/financial-services', disabled: true },
      { label: 'Food Services', icon: 'i-lucide-utensils', to: '/industries/food-services', disabled: true },
      { label: 'Non-Profits', icon: 'i-lucide-heart', to: '/industries/non-profits', disabled: true },
      { label: 'Health & Wellness', icon: 'i-lucide-heart-pulse', to: '/industries/health-and-wellness', disabled: true },
      { label: 'Live Events & Entertainment', icon: 'i-lucide-music', to: '/industries/live-events-and-entertainment', disabled: true }
    ]
  },
  {
    label: 'How We Help',
    children: [
      { label: 'Clarify Your Message', icon: 'i-lucide-award', to: '/solutions/clarify-your-message', disabled: true },
      { label: 'Get More Leads', icon: 'i-lucide-user-search', to: '/solutions/get-more-leads', disabled: true },
      { label: 'Speed Up Sales', icon: 'i-lucide-refresh-ccw', to: '/solutions/speed-up-sales', disabled: true },
      { label: 'Reach More Buyers', icon: 'i-lucide-expand', to: '/solutions/reach-more-buyers', disabled: true },
      { label: 'Keep Customers Longer', icon: 'i-lucide-chart-no-axes-combined', to: '/solutions/keep-customers-longer', disabled: true },
      { label: 'Fix Your Live Stream & Events', icon: 'i-lucide-video', to: '/solutions/fix-your-live-stream-and-events', disabled: true }

    ]
  },
  {
    label: 'Ways We Work Together',
    children: [
      { label: 'Video Production', icon: 'i-lucide-video', to: '/services/video-growth-engine', disabled: false },
      { label: 'Outbound Campaigns', icon: 'i-lucide-send', to: '/services/outreach-engine', disabled: true },
      { label: 'Web Design & Development', icon: 'i-lucide-layout-dashboard', to: '/services/web-design', disabled: true },
      { label: 'SEO & Paid Ads', icon: 'i-lucide-mouse-pointer-click', to: '/services/seo-and-paid-ads', disabled: true },
      { label: 'Marketing Automation', icon: 'i-lucide-bot', to: '/services/marketing-automation', disabled: true },
      { label: 'Content Creation', icon: 'i-lucide-edit-3', to: '/services/content-creation', disabled: true }

    ]

  }

  /// {label: 'Docs', to: '/docs', active: route.path.startsWith('/docs')},
  /// { label: 'Resources', to: '/resources' },
  /// { label: 'About', to: '/who-we-are' }
  // { label: 'Resources', to: '/portfolio' },
  /// { label: 'Pricing', to: '/pricing'}

])

const mobileItems = computed(() => [
  {
    label: 'Who We Help',
    open: true,
    children: [
      { label: 'Contractors & Manufacturing', icon: 'i-lucide-hammer', to: '/industries/contractors-manufactures', disabled: true },
      { label: 'Financial Services', icon: 'i-lucide-banknote', to: '/industries/financial-services', disabled: true },
      { label: 'Food Services', icon: 'i-lucide-utensils', to: '/industries/food-services', disabled: true },
      { label: 'Non-Profits', icon: 'i-lucide-heart', to: '/industries/non-profits', disabled: true },
      { label: 'Health & Wellness', icon: 'i-lucide-heart-pulse', to: '/industries/health-and-wellness', disabled: true },
      { label: 'Live Events & Entertainment', icon: 'i-lucide-music', to: '/industries/live-events-and-entertainment', disabled: true }
    ]
  },
  {
    label: 'How We Help',
    open: true,
    children: [
      { label: 'Clarify Your Message', icon: 'i-lucide-award', to: '/solutions/clarify-your-message', disabled: true },
      { label: 'Get More Leads', icon: 'i-lucide-user-search', to: '/solutions/get-more-leads', disabled: true },
      { label: 'Speed Up Sales', icon: 'i-lucide-refresh-ccw', to: '/solutions/speed-up-sales', disabled: true },
      { label: 'Reach More Buyers', icon: 'i-lucide-expand', to: '/solutions/reach-more-buyers', disabled: true },
      { label: 'Keep Customers Longer', icon: 'i-lucide-chart-no-axes-combined', to: '/solutions/keep-customers-longer', disabled: true },
      { label: 'Fix Your Live Stream & Events', icon: 'i-lucide-video', to: '/solutions/fix-your-live-stream-and-events', disabled: true }
    ]
  },
  {
    label: 'Ways We Work Together',
    open: true,
    children: [
      { label: 'Video Production', icon: 'i-lucide-video', to: '/services/video-growth-engine', disabled: false },
      { label: 'Outbound Campaigns', icon: 'i-lucide-send', to: '/services/outreach-engine', disabled: true },
      { label: 'Web Design & Development', icon: 'i-lucide-layout-dashboard', to: '/services/web-design', disabled: true },
      { label: 'SEO & Paid Ads', icon: 'i-lucide-mouse-pointer-click', to: '/services/seo-and-paid-ads', disabled: true },
      { label: 'Marketing Automation', icon: 'i-lucide-bot', to: '/services/marketing-automation', disabled: true },
      { label: 'Content Creation', icon: 'i-lucide-edit-3', to: '/services/content-creation', disabled: true }
    ]
  }
  /// { label: 'Resources', to: '/resources' },
  /// { label: 'About', to: '/who-we-are' }
])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-full" />
      </NuxtLink>
      <!-- <TemplateMenu /> -->
    </template>

    <UNavigationMenu
      orientation="horizontal"
      size="xl"
      :items="items"
      class="w-full justify-center"
      :ui="{
        viewport: 'w-full',
        viewportWrapper: 'absolute top-full left-0 flex w-full',
        link: 'hover:bg-gray-100 hover:text-primary-400 dark:hover:bg-gray-800 dark:hover:text-primary-400',

        linkLabel: 'whitespace-normal break-words text-lg font-medium',

        /* Force consistent 2-column layout across all groups */

        /* Ensure every item fills full column width */
        childItem: 'w-full',

        /* Ensure the clickable link spans the entire column */
        childLink: 'w-full flex items-center px-3 py-2 rounded-md hover:bg-gray-100 hover:text-primary-400',
        childLinkLabel: 'flex-1 whitespace-normal text-base font-normal'

      }"
    />

    <template #right>
      <UButton
        icon="i-lucide-phone-call"
        color="primary"
        variant="solid"
        to="/contact"
        class="lg:hidden"
      />

      <UButton
        label="Contact Us"
        color="primary"
        variant="solid"
        to="/contact"
        class="hidden lg:inline-flex text-lg"
        style="font-family: 'new-spirit', serif !important; font-weight: 600 !important;"
      />
      <UColorModeButton />
      <!-- <UButton
        label="Sign up"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:inline-flex"
        to="/signup"
      /> -->
    </template>

    <template #body>
      <UNavigationMenu
        :items="mobileItems"
        orientation="vertical"
        color="primary"
        class="-mx-2.5 "
        multiple
      />

      <USeparator class="my-6" />

      <!-- <UButton
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
      /> -->
    </template>
  </UHeader>
</template>
