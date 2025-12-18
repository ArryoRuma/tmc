<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

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
      :description="page.description"
      :headline="page.hero.headline"
      :links="page.hero.links"
      :orientation="page.hero.orientation"
    >
      <template #title>
        <HomeHeroTitle />
      </template>
      <HomeMarquee />
    </UPageHero>

    <HomeSections :sections="page.sections" />

    <HomeFeatures
      :title="page.features.title"
      :description="page.features.description"
      :items="page.features.items"
    />

    <ClientLogos />
    <ProjectsPortfolio />

    <HomeTestimonials
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
    />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    />
  </div>
</template>
