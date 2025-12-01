<script setup lang="ts">
const columns = [{
  label: 'Solutions',
  children: [{
    label: 'Clarify Your Message', to: '/clarify-your-message'
  }, {
    label: 'Get More Leads', to: '/get-more-leads'
  }, {
    label: 'Speed Up Sales', to: '/speed-up-sales'
  }, {
    label: 'Reach More Buyers', to: '/reach-more-buyers'
  }, {
    label: 'Keep Customers Longer', to: '/keep-customers-longer'
  }, {
    label: 'Fix Your Live Stream', to: '/fix-your-live-stream-and-events'
  }]
}, {
  label: 'Services',
  children: [{
    label: 'Video Production', to: '/video-growth-engine'
  }, {
    label: 'Outbound Marketing', to: '/outreach-engine'
  }, {
    label: 'Website Design', to: '/web-design'
  }, {
    label: 'SEO & Paid Ads', to: '/seo-and-paid-ads'
  }, {
    label: 'Marketing Automation', to: '/marketing-automation'
  }, {
    label: 'Content Creation', to: '/content-creation'
  }]
},
{
  label: 'Industries We Serve',
  children: [{
    label: 'Contractors & Manufacturers'
  }, {
    label: 'Financial Services'
  }, {
    label: 'Food Services'
  }, {
    label: 'Health & Wellness'
  }, {
    label: 'Non-Profits'
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
{    label: 'Media Kit'
  }]
}, 
]
const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: 'Subscribed!',
    description: 'You\'ve been subscribed to our newsletter.'
  })
}
</script>

<template>
  <USeparator
    icon="i-simple-icons-nuxtdotjs"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                label="Subscribe to our newsletter"
                size="lg"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  placeholder="Enter your email"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      color="neutral"
                      label="Subscribe"
                    />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
       TruMedia Creative • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        to="https://www.linkedin.com/company/trumedia-creative/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="TruMedia Creative on LinkedIn"
        color="neutral"
        variant="ghost"
        size="lg"
      />
      <UButton
        to="https://www.youtube.com/@TruMedia-Creative"
        target="_blank"
        icon="i-simple-icons-youtube"
        aria-label="TruMedia Creative on YouTube"
        color="neutral"
        variant="ghost"
        size="lg"
      />
    </template>
  </UFooter>
</template>
