<script setup lang="ts">
const { data: page } = await useAsyncData("clarifyyourmessage", () =>
  queryCollection("clarifyyourmessage").first(),
);
const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;
useHead({
  title: title,
  meta: [{ name: "description", content: description }],
});
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
      </template> -->

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
    <USeparator />
    <UPageCTA v-bind="page.cta" variant="solid" class="overflow-hidden">
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
