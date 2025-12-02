<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

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
      <template #title>
        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          A Video-Powered
          <span class="text-primary italic"> Growth Agency</span>
          for Industrial, Financial &amp; Service Brands.
        </h1>
      </template>

      <PromotionalVideo />
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :id="section.id"
      :key="index"
      :title="section.title"
      :description="section.description"
      :headline="section.headline"
      :photo="section.photo"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
    >
      <div
        v-if="section.photo"
        class="relative overflow-hidden rounded-lg"
      >
        <img
          :src="section.photo.src"
          :alt="section.photo.alt || section.title"
          :loading="(section.photo.loading as 'lazy' | 'eager') || 'lazy'"
          class="w-full h-auto object-cover aspect-video"
        >
      </div>
      <ImagePlaceholder v-else />
    </UPageSection>

    <ClientLogos />

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
