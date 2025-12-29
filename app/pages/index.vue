<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryCollection("index").first(),
);

const title = page.value?.seo?.title || page.value?.title;
const description = page.value?.seo?.description || page.value?.description;
const fourStep = ref([
  {
    id: "1",
    title: "Step 1",
    subtitle: "Discover",
    description:
      "First, we dive in to what problems your facing and determine what types of videos will best address those challenges.",
    icon: "i-lucide-target",
    content:
      "Our discovery process involves deep research into your market, competitors, and audience to create a foundation for success.",
  },
  {
    id: "2",
    title: "Step 2",
    subtitle: "Define",
    description:
      "Next, we outline a clear messaging framework that your clients will understand and connect with.",
    icon: "i-lucide-video",
    content:
      "We implement your strategy using best practices and cutting-edge tools, ensuring every detail aligns with your objectives.",
  },
  {
    id: "3",
    title: "Step 3",
    subtitle: "Develop",
    description:
      "Then, we produce high-quality marketing assets that resonate with your audience.",
    icon: "i-lucide-globe",
    content:
      "Our production team creates compelling content that captures your brand's essence and engages your target audience effectively.",
  },
  {
    id: "4",
    title: "Step 4",
    subtitle: "Deploy",
    description:
      "Last, we distribute the marketing assets and analyze performance to optimize results.",
    icon: "i-lucide-bar-chart-2",
    content:
      "Continuous monitoring and optimization ensure your investment delivers measurable results and long-term success.",
  },
]);
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<!-- TODO: add in secondary call to action in hero and CTA footer -->
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
