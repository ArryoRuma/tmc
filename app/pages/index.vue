<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

// Rotating text for the hero title
const rotatingWords = ['Contracts', 'Products', 'Appointments', 'Services', 'Solutions', 'Deals', 'Projects', 'Retainers', 'Accounts', 'Work']
const currentWordIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentWordIndex.value = (currentWordIndex.value + 1) % rotatingWords.length
  }, 1200) // Change word every 1 second
})

useSeoMeta({
  titleTemplate: '',
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
        <h1 class="page-hero-headline text-5xl sm:text-7xl text-pretty tracking-tight text-highlighted">
          We Fix Your Marketing, <br>So You Can Sell More
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
        </h1>
      </template>

      <NuxtImg
        v-if="page.hero?.photo"
        :src="page.hero?.photo?.src"
        :alt="page.hero?.photo?.alt || page.title"
        loading="lazy"
        class="w-full h-auto object-cover aspect-square rounded-lg shadow-lg"
      />
    </UPageHero>

    <UContainer>
      <PromotionalVideo class="rounded-lg shadow-md" />
    </UContainer>

    <template
      v-for="(section, index) in page.sections"
      :key="index"
    >
      <UPageSection
        :id="section.id"
        :title="section.title"
        :description="section.description"
        :headline="section.headline"
        :orientation="section.orientation"
        :reverse="section.reverse"
      >
        <UPageGrid
          v-if="section.features"
          :class="[
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
            section.features.length < 4 ? 'lg:grid-cols-3 max-w-5xl mx-auto' : ''
          ]"
        >
          <UPageCard
            v-for="(feature, featureIndex) in section.features"
            :key="featureIndex"
            :title="feature.name"
            :description="feature.description"
            :icon="feature.icon"
            spotlight
          />
        </UPageGrid>
      </UPageSection>

      <div
        v-if="section.photo"
        class="flex justify-center px-6 mb-8"
      >
        <div class="relative overflow-hidden rounded-lg max-w-4xl w-2/3">
          <NuxtImg
            :src="section.photo.src"
            :alt="section.photo.alt || section.title"
            loading="lazy"
            class="w-full h-auto object-cover aspect-video"
          />
        </div>
      </div>
    </template>

    <ClientLogos />

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

    <ProjectsPortfolio />
    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
