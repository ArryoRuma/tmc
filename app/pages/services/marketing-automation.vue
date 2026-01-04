<script setup lang="ts">
const { data: page } = await useAsyncData("marketingautomation", () =>
  queryCollection("marketingautomation").first(),
);
const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<template>
  <div v-if="page?.title">
    <BackToIndexButton />
    <UPageHero
      :title="page.title"
      :description="page.description"
      :headline="page.hero.headline"
      :links="page.hero.links"
    >
      <template #title>
        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          Turn
          <span class="text-primary italic"> conversations</span>
          into
          <span class="text-primary italic"> clients</span>
          with a video growth engine.
        </h1>
      </template>
      <!-- <template #top>
        <HeroBackground />
      </template> -->

      <PromotionalVideo />
    </UPageHero>
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
    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden">
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
