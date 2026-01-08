<script setup lang="ts">
const { data: clientLogos } = await useAsyncData("client-logos", () =>
  queryCollection("clientlogos").first(),
);

// Filter to only show enabled logos
const enabledLogos = computed(
  () =>
    clientLogos.value?.logos?.filter((logo) => logo.enabled !== false) || [],
);
</script>

<template>
  <FadeInUp>
    <UPageLogos
      :title="clientLogos?.title || 'Who We\'ve Partnered with and Served'"
      :marquee="{ pauseOnHover: true }"
      class="py-10 sm:py-12"
    >
      <a
        v-for="(logo, index) in enabledLogos"
        :key="index"
        :href="logo.link || undefined"
        :target="logo.link ? '_blank' : undefined"
        :rel="logo.link ? 'noopener noreferrer' : undefined"
        :class="logo.link ? 'cursor-pointer' : 'cursor-default'"
      >
        <img
          :src="logo.logo"
          :alt="logo.alt"
          class="h-20 sm:h-28 md:h-32 object-contain brightness-0 dark:brightness-0 dark:invert transition"
          loading="lazy"
        />
      </a>
    </UPageLogos>
  </FadeInUp>
</template>
