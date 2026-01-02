<script setup lang="ts">
const { data: page } = await useAsyncData("contact", () =>
  queryCollection("contact").first(),
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
  <div v-if="page">
    <!-- Hero Section -->
    <UPageHero>
      <template #title>
        <h1
          class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted"
        >
          {{ page.hero.headline }}
          <span
            class="text-primary block"
            :style="{
              fontFamily: 'new-spirit, serif',
              fontWeight: 700,
            }"
          >
            {{ page.hero.highlightedWord }}
          </span>
        </h1>
      </template>

      <template #description>
        <p class="text-lg sm:text-xl/8 text-muted">
          {{ page.hero.description }}
        </p>
      </template>
    </UPageHero>
    <h2 class="text-3xl text-center font-bold text-highlighted mb-8">
      {{ page.sections.contactInfoTitle }}
    </h2>
    <UPageSection class="py-6">
      <!-- TODO: Render these contact cards from a schema-driven array instead of one-off markup to keep icons, copy, and layout consistent. -->
      <!-- Contact Information - 2 Column Layout -->
      <div>
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Column A: Email and Phone -->
          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-lg">
                <UIcon name="i-lucide-mail" class="text-primary text-xl" />
              </div>
              <div>
                <h3 class="font-semibold text-highlighted">Email</h3>
                <a
                  :href="`mailto:${page.contactInfo.email}`"
                  class="text-primary hover:underline"
                >
                  {{ page.contactInfo.email }}
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-lg">
                <UIcon name="i-lucide-phone" class="text-primary text-xl" />
              </div>
              <div>
                <h3 class="font-semibold text-highlighted">Phone</h3>
                <a
                  :href="`tel:${page.contactInfo.phone}`"
                  class="text-primary hover:underline"
                >
                  {{ page.contactInfo.phone }}
                </a>
              </div>
            </div>
          </div>

          <!-- Column B: Address and Hours -->
          <div class="space-y-6">
            <!-- Address -->
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-lg">
                <UIcon name="i-lucide-map-pin" class="text-primary text-xl" />
              </div>
              <div>
                <h3 class="font-semibold text-highlighted">Address</h3>
                <p class="text-muted">
                  {{ page.contactInfo.address.street }}<br />
                  {{ page.contactInfo.address.city }},
                  {{ page.contactInfo.address.state }}
                  {{ page.contactInfo.address.zip }}
                </p>
              </div>
            </div>

            <!-- Hours -->
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-lg">
                <UIcon name="i-lucide-clock" class="text-primary text-xl" />
              </div>
              <div>
                <h3 class="font-semibold text-highlighted">Hours</h3>
                <p class="text-muted">
                  {{ page.contactInfo.hours.weekdays }}<br />
                  {{ page.contactInfo.hours.weekend }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 Column Section: Quick Response Promise (center) and Follow Us -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Empty left column for spacing -->
          <div></div>

          <!-- Center Column: Quick Response Promise -->
          <div
            class="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6"
          >
            <div class="flex items-center gap-3 mb-3">
              <UIcon name="i-lucide-zap" class="text-primary text-xl" />
              <h3 class="font-semibold text-highlighted">
                {{ page.sections.responseGuarantee.title }}
              </h3>
            </div>
            <p class="text-muted text-sm">
              {{ page.sections.responseGuarantee.description }}
            </p>
          </div>
        </div>
      </div>
    </UPageSection>
    <UPageSection>
      <div>
        <h2 class="text-3xl font-bold text-center text-highlighted mb-6">
          {{ page.sections.formSection.title }}
        </h2>
        <p class="text-muted mb-8">
          {{ page.sections.formSection.description }}
        </p>

        <!-- Contact Form -->
        <!-- TODO: Move HoneyBook form ID into runtime config + provide fallback native form for users with blockers. -->
        <HoneyBookForm2 />
      </div>
    </UPageSection>
    <!-- Main Contact Section -->
  </div>
</template>
