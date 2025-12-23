<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryCollection("index").first(),
);

const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;
const fourStep = ref([
  {
    title: "Discover",
    description:
      "First, we dive in to what problems your facing and determine what types of videos will best address those challenges.",
    icon: "i-lucide-target",
  },
  {
    title: "Define",
    description:
      "Next, we outline a clear messaging framework that your clients will understand and connect with.",
    icon: "i-lucide-video",
  },
  {
    title: "Develop",
    description:
      "Then, we produce high-quality marketing assets that resonate with your audience.",
    icon: "i-lucide-globe",
  },
  {
    title: "Deploy",
    description:
      "Last, we distribute the marketing assets and analyze performance to optimize results.",
    icon: "i-lucide-bar-chart-2",
  },
]);
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<!-- TODO: fix fourStep data structure to match ProcessTab component's steps prop
TODO: add in secondary call to action in hero and CTA footer -->
<template>
  <div v-if="page?.title">
    <FadeInUp :delay="0.3">
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
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <HomeSections :sections="page.sections" />
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <UPageSection
        title="We've Got You Covered... Here's How."
        description="Our proven 4-step approach to creating marketing content that converts prospects into clients"
      >
        <UStepper
          :items="fourStep"
          orientation="vertical"
          :active="-1"
          class="max-w-4xl mx-auto"
          size="xl"
        />
      </UPageSection>
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <HomeFeatures
        :title="page.features.title"
        :description="page.features.description"
        :items="page.features.items"
      />
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <ClientLogos />
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <UContainer>
        <PromotionalVideo class="rounded-lg shadow-md" />
      </UContainer>
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <ProjectsPortfolio />
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <HomeTestimonials
        :headline="page.testimonials.headline"
        :title="page.testimonials.title"
        :description="page.testimonials.description"
        :items="page.testimonials.items"
      />
    </FadeInUp>

    <FadeInUp :delay="0.2">
      <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden" />
    </FadeInUp>
  </div>
</template>
