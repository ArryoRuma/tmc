<script setup lang="ts">
const { data: page } = await useAsyncData('clarity-to-clients-workshop', () => queryCollection('claritytoclients').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

// Helper function to normalize features for UPricingPlan
const normalizeFeatures = (features?: any[]) => {
  if (!features) return []
  return features.map(feature =>
    typeof feature === 'string'
      ? { title: feature }
      : feature
  )
}

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <div v-if="page?.title">
    <UPageHero
      :title="page.title"
      :description="page.hero?.description"
      :headline="page.hero?.headline"
      :links="page.hero?.links"
    />

    <UPageSection
      v-for="section in page.sections"
      :key="section.id"
      :title="section.title"
      :description="section.description"
      :headline="section.headline"
      :orientation="section.orientation"
      :features="section.features"
    >
      <ImagePlaceholder v-if="section.orientation === 'horizontal'" />
    </UPageSection>

    <UPageSection
      v-if="page.pricing"
      :title="page.pricing.title"
      :description="page.pricing.description"
    >
      <div class="max-w-md mx-auto grid gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
        <UPricingPlan
          v-for="(item, i) in page.pricing.items"
          :key="i"
          :title="item.title"
          :description="item.description"
          :price="typeof item.price === 'string' ? item.price : item.price.display"
          :discount="item.discount"
          :billing-period="item.billingPeriod"
          :billing-cycle="item.billingCycle"
          :tagline="item.tagline"
          :terms="item.terms"
          :button="item.links?.[0] || item.button"
          :features="normalizeFeatures(item.features)"
          :variant="item.variant"
          :orientation="item.orientation"
          :highlight="item.highlight"
          :scale="item.scale"
        />
      </div>
    </UPageSection>
    <UPageSection
      v-if="page.testimonials"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      class="bg-gray-50 dark:bg-gray-900"
    >
      <div class="grid gap-6">
        <UCard
          v-for="(item, i) in page.testimonials.items"
          :key="i"
          class="text-left"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <UAvatar
                :src="item.user?.avatar?.src"
                :alt="item.user?.name"
                size="sm"
              />
              <div class="text-sm">
                <div class="font-semibold">
                  {{ item.user?.name }}
                </div>
                <div class="text-gray-500 dark:text-gray-400">
                  {{ item.user?.description }}
                </div>
              </div>
            </div>
          </template>

          <blockquote class="italic">
            "{{ item.quote }}"
          </blockquote>
        </UCard>
      </div>
    </UPageSection>

    <USeparator />

    <UPageCTA
      v-if="page.cta"
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
