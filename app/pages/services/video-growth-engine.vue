<script setup lang="ts">
const { data: page } = await useAsyncData("video-growth-engine", () =>
  queryCollection("videoengine").first(),
);
const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;

// Handle smooth scrolling for anchor links
onMounted(() => {
  // Add smooth scrolling behavior to the document
  if (import.meta.client) {
    document.documentElement.style.scrollBehavior = "smooth";
    // Add scroll offset to account for sticky header
    document.documentElement.style.scrollPaddingTop = "80px";
  }
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
      :headline="section.headline"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :links="section.links"
      :features="section.features"
      :price="section.price"
    >
      <template #title>
        <div class="space-y-4">
          <h2
            class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
          >
            {{ section.title }}
          </h2>
          <div>
            <p
              class="text-lg text-gray-900 dark:text-white font-normal tracking-normal"
            >
              {{ section.description }}
            </p>
          </div>
          <div v-if="section.price" class="flex justify-start">
            <div
              class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-normal"
            >
              {{
                typeof section.price === "string"
                  ? section.price
                  : section.price.display
              }}
            </div>
          </div>
        </div>
      </template>

      <div
        v-if="section.video"
        class="relative overflow-hidden shadow-xl rounded-lg"
      >
        <video
          :src="section.video.src"
          :poster="section.video.poster"
          controls
          class="w-full h-auto aspect-video"
          preload="thumbnail"
        >
          <p>Your browser doesn't support video playback.</p>
        </video>
      </div>
      <div
        v-else-if="section.image"
        class="relative overflow-hidden shadow-xl rounded-lg"
      >
        <img
          :src="section.image.src"
          :alt="section.image.alt || section.title || 'Section Image'"
          class="w-full h-auto aspect-auto object-cover rounded-lg"
        />
      </div>
      <ImagePlaceholder v-else class="aspect-video" />
    </UPageSection>
    <USeparator />

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
    <!-- <UPageSection
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
            <UAvatar
              v-bind="testimonial.user"
              size="lg"
            />
          </template>
        </UPageCard>
      </div>
    </UPageSection>
    <USeparator /> -->
    <ServicesVideoShowcaseGallery
      v-if="page.videoShowcase"
      :title="page.videoShowcase.title"
      :description="page.videoShowcase.description"
      :headline="page.videoShowcase.headline"
      :videos="page.videoShowcase.videos"
    />
    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden">
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
