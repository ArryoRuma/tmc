<script setup lang="ts">
const { data: page } = await useAsyncData("outreachengine", () =>
  queryCollection("outreachengine").first(),
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
      </template> -->
      <template #title>
        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          Turn
          <span class="text-secondary italic"> cold outreach</span>
          into
          <span class="text-primary italic"> warm conversations</span>
          with an outbound machine on autopilot.
        </h1>
      </template>

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
      v-if="page.pricing"
      :title="page.pricing.title"
      :description="page.pricing.description"
      orientation="vertical"
      class="bg-neutral-50 dark:bg-neutral-900"
    >
      <UPricingPlans :plans="page.pricing.items as any" />
    </UPageSection>
    <USeparator />
    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden">
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
