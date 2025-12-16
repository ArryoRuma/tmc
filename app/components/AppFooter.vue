<script setup lang="ts">
const columns = [{
  label: 'Solutions',
  children: [{
    label: 'Clarify Your Message', to: '/solutions/clarify-your-message'
  }, {
    label: 'Get More Leads', to: '/solutions/get-more-leads'
  }, {
    label: 'Speed Up Sales', to: '/solutions/speed-up-sales'
  }, {
    label: 'Reach More Buyers', to: '/solutions/reach-more-buyers'
  }, {
    label: 'Keep Customers Longer', to: '/solutions/keep-customers-longer'
  }, {
    label: 'Fix Your Live Stream', to: '/solutions/fix-your-live-stream-and-events'
  }]
}, {
  label: 'Services',
  children: [{
    label: 'Video Production', to: '/services/video-growth-engine'
  }, {
    label: 'Outbound Marketing', to: '/services/outreach-engine'
  }, {
    label: 'Website Design', to: '/services/web-design'
  }, {
    label: 'SEO & Paid Ads', to: '/services/seo-and-paid-ads'
  }, {
    label: 'Marketing Automation', to: '/services/marketing-automation'
  }, {
    label: 'Content Creation', to: '/services/content-creation'
  }]
},
{
  label: 'Industries We Serve',
  children: [{
    label: 'Industrial', to: '/industries/contractors-manufactures'
  }, {
    label: 'Financial Services', to: '/industries/financial-services'
  }, {
    label: 'Food Services', to: '/industries/food-services'
  }, {
    label: 'Health & Wellness', to: '/industries/health-and-wellness'
  }, {
    label: 'Non-Profits', to: '/industries/non-profits'
  }]
},
{
  label: 'Resources',
  children: [{
    label: 'Guides'
  }, {
    label: 'Tutorials'
  }, {
    label: 'Case Studies'
  }, {
    label: 'Blog'
  },
  { label: 'Media Kit'
  }]
}
]
</script>

<template>
  <USeparator
    class="h-px"
    color="primary"
  />

  <UFooter :ui="{ top: 'border-b border-default' }" class="bg-primary-900 text-primary-50 dark:bg-primary-900 dark:text-primary-400">
    <template #top>
      <UContainer class="text-primary-500">
        <UFooterColumns :columns="columns" :ui="{ link: 'text-primary-50 hover:text-primary-400' }"
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
