<script setup lang="ts">
const { data: page } = await useAsyncData("solutions-index", () =>
  queryCollection("solutionsIndex").first(),
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
    <FadeInUp :delay="0.2">
      <UPageHero
        :title="page.title"
        :description="page.hero.description"
        :headline="page.hero.headline"
        :links="page.hero.links"
      />
    </FadeInUp>

    <FadeInUp :delay="0.3">
      <UContainer>
        <UPageSection
          title="Our Solutions"
          description="Targeted solutions designed to address your specific business challenges."
        >
          <UPageGrid>
            <FadeInUp
              v-for="(item, index) in page.items"
              :key="item.to"
              :delay="index * 0.1"
            >
              <NuxtLink :to="item.to" class="group block h-full">
                <UPageCard
                  :title="item.title"
                  :description="item.description"
                  :icon="item.icon"
                  class="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                  spotlight
                >
                  <template #footer>
                    <div
                      class="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn more
                      <UIcon name="i-lucide-arrow-right" class="ml-2 w-4 h-4" />
                    </div>
                  </template>
                </UPageCard>
              </NuxtLink>
            </FadeInUp>
          </UPageGrid>
        </UPageSection>
      </UContainer>
    </FadeInUp>
  </div>
  <div v-else class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <UIcon
        name="i-lucide-loader-circle"
        class="w-12 h-12 animate-spin mx-auto mb-4 text-primary"
      />
      <p class="text-muted">Loading content...</p>
    </div>
  </div>
</template>
