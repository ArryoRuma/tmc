<script setup lang="ts">
const { data: page } = await useAsyncData("webdesign", () =>
  queryCollection("webdesign").first(),
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
      <!-- <template #top>
        <HeroBackground />
      </template>

      <PromotionalVideo /> -->
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
      :links="section.links"
    >
    </UPageSection>
    <USeparator />

    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden">
    </UPageCTA>
  </div>
</template>
