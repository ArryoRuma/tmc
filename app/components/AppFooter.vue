<script setup lang="ts">
const columns = [{
  label: 'Solutions',
  children: [{
    label: 'Clarify Your Message', to: '/solutions/clarify-your-message', disabled: true
  }, {
    label: 'Get More Leads', to: '/solutions/get-more-leads', disabled: true
  }, {
    label: 'Speed Up Sales', to: '/solutions/speed-up-sales', disabled: true
  }, {
    label: 'Reach More Buyers', to: '/solutions/reach-more-buyers', disabled: true
  }, {
    label: 'Keep Customers Longer', to: '/solutions/keep-customers-longer', disabled: true
  }, {
    label: 'Fix Your Live Stream', to: '/solutions/fix-your-live-stream-and-events', disabled: true
  }]
}, {
  label: 'Services',
  children: [{
    label: 'Video Production', to: '/services/video-growth-engine', disabled: true
  }, {
    label: 'Outbound Marketing', to: '/services/outreach-engine', disabled: true
  }, {
    label: 'Website Design', to: '/services/web-design', disabled: true
  }, {
    label: 'SEO & Paid Ads', to: '/services/seo-and-paid-ads', disabled: true
  }, {
    label: 'Marketing Automation', to: '/services/marketing-automation', disabled: true
  }, {
    label: 'Content Creation', to: '/services/content-creation', disabled: true
  }]
},
{
  label: 'Industries We Serve',
  children: [{
    label: 'Industrial', to: '/industries/contractors-manufactures', disabled: true
  }, {
    label: 'Financial Services', to: '/industries/financial-services', disabled: true
  }, {
    label: 'Food Services', to: '/industries/food-services', disabled: true
  }, {
    label: 'Health & Wellness', to: '/industries/health-and-wellness', disabled: true
  }, {
    label: 'Non-Profits', to: '/industries/non-profits', disabled: true
  }]
},
{
  label: 'Resources',
  children: [{
    label: 'Guides', disabled: true
  }, {
    label: 'Tutorials', disabled: true
  }, {
    label: 'Case Studies', disabled: true
  }, {
    label: 'Blog', disabled: true
  },
  { label: 'Media Kit', disabled: true
  }]
}
]
</script>

<template>
  <USeparator
    class="h-px"
    color="primary"
  />

  <UFooter
    :ui="{ top: 'border-b border-default' }"
    class="bg-primary-900 text-primary-50 dark:bg-primary-900 dark:text-primary-400"
  >
    <template #top>
      <UContainer class="text-primary-500">
        <UFooterColumns
          :columns="columns"
          :ui="{ link: 'text-primary-50 hover:text-primary-400' }"
        />
      </UContainer>
    </template>

    <template #left>
      <p class="font-semibold text-sm">
        TruMedia Creative • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        to="https://www.linkedin.com/company/trumedia-creative/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="TruMedia Creative on LinkedIn"
        color="primary"
        variant="ghost"
        size="lg"
      />
      <UButton
        to="https://www.youtube.com/@TruMedia-Creative"
        target="_blank"
        icon="i-simple-icons-youtube"
        aria-label="TruMedia Creative on YouTube"
        color="primary"
        variant="ghost"
        size="lg"
      />
    </template>
  </UFooter>
</template>
