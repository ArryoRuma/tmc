<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

// Rotating text for the hero title
const rotatingWords = ['Services', 'Products', 'Appointments', 'Contracts', 'Solutions', 'Deals', 'Projects', 'Retainers', 'Accounts', 'Work']
const currentWordIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % rotatingWords.length
  }, 1200) // Change word every 1 second
})
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
      <!-- <template #top>
        <HeroBackground />
      </template> -->

      <template #title>
        <div class="page-hero-headline text-5xl sm:text-7xl text-pretty tracking-tight text-highlighted">
          We Help Brands Sell More
          <span class="block">
            <Transition
              name="slide"
              mode="out-in"
            >
              <span
                :key="currentWordIndex"
                class="text-primary"
                style="font-family: 'new-spirit', serif !important; font-weight: 700 !important;"
              >{{ rotatingWords[currentWordIndex] }}</span>
            </Transition>
          </span>
        </div>
      </template>
      <HomeMarquee />
    </UPageHero>

    <!-- <UContainer>
      <PromotionalVideo class="rounded-lg shadow-md" />
    </UContainer> -->

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :headline="section.headline"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
    >
      <template #title>
        <div class="space-y-4">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            {{ section.title }}
          </h2>
        </div>
      </template>
      <div
        v-if="section.photo"
        class="flex justify-center px-6 mb-8"
      >
        <div class="relative overflow-hidden rounded-lg w-full h-full max-w-4xl shadow-lg">
          <NuxtImg
            :src="section.photo.src"
            :alt="section.photo.alt || section.title"
            loading="lazy"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </UPageSection>
    <UPageCTA
      title="Title CTA"
      description="Description CTA"
      variant="naked"
    />

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
    <ClientLogos />
    <ProjectsPortfolio />
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
              :name="testimonial.user.name"
              :description="testimonial.user.description"
              :to="testimonial.user.to"
              :target="testimonial.user.target"
              :avatar="{
                ...testimonial.user.avatar,
                loading: testimonial.user.avatar.loading as 'lazy' | 'eager' | undefined
              }"
            />
          </template>
        </UPageCard>
      </div>
    </UPageSection>

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <!-- <LazyStarsBg /> -->
    </UPageCTA>
  </div>
</template>
