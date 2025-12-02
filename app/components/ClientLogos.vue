<script setup lang="ts">
const logos = [
  {
    src: '/images/clients/amazon.png',
    alt: 'Amazon'
  }, {
    src: '/images/clients/chickfila.png',
    alt: 'Chick-fil-A'
  }, {
    src: '/images/clients/nascar.png',
    alt: 'NASCAR'
  }, {
    src: '/images/clients/pjpolke.png',
    alt: 'PJ Polke'
  }, {
    src: '/images/clients/ritas.png',
    alt: 'Rita\'s Italian Ice'
  }, {
    src: '/images/clients/sp.png',
    alt: 'Samaritan\'s Purse'
  }
  // add more here as you go:
  // { src: '/images/clients/whatever.png', alt: 'Whatever Co.' }
]
</script>

<template>
  <UPageLogos
    title="Who We've Served"
    :marquee="{ pauseOnHover: true }"
    class="py-10 sm:py-12"
  >
    <img
      v-for="(logo, index) in logos"
      :key="index"
      :src="logo.src"
      :alt="logo.alt"
      class="h-20 sm:h-28 md:h-32 object-contain brightness-0 dark:brightness-0 dark:invert transition"
      loading="lazy"
    >
  </UPageLogos>
</template>
