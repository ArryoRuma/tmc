<script setup lang="ts">
const { data: page } = await useAsyncData('video-growth-engine', () => queryCollection('videoengine').first())
const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description
const items = ref([
  { title: 'Discover', description: 'First, we dive in to what problems your facing and determine what types of videos will best address those challenges.', icon: 'i-lucide-target' },
  { title: 'Define', description: 'Next, we outline a clear video strategy tailored to your goals.', icon: 'i-lucide-video' },
  { title: 'Develop', description: 'Then, we film and produce high-quality videos that resonate with your audience.', icon: 'i-lucide-globe' },
  { title: 'Deploy', description: 'Last, we distribute the videos and analyze performance to optimize results.', icon: 'i-lucide-bar-chart-2' }
])

useSeoMeta({
  titleTemplate: '',
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
      :description="page.description"
      :headline="page.hero.headline"
      :links="page.hero.links"
    >
      <template #top>
        <HeroBackground />
      </template>

      <PromotionalVideo />
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :headline="section.headline"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
      :price="section.price"
    >
      <ImagePlaceholder />
    </UPageSection>
    <USeparator />
    <UPageSection
      title="Our Process"
      description="Our proven 4-step approach to creating video content that converts prospects into clients"
    >
      <UStepper
        :items="items"
        orientation="vertical"
        :active="-1"
        class="max-w-4xl mx-auto"
        size="xl"
      />
      <USeparator />
    </UPageSection>
    <UPageSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
    </UPageSection>
    <UPageSection
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <UPageCard
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
        >
          <template #footer>
            <UUser
              v-bind="testimonial.user"
              size="lg"
            />
          </template>
        </UPageCard>
      </div>
    </UPageSection>
    <USeparator />
    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
