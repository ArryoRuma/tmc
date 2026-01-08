<script setup lang="ts">
//TODO: Move logos to a content collection and create it so that it can have links associated with them as well as the ability to turn them on and off.
const logos = [
  {
    src: "/images/clients/amazon.png",
    alt: "Amazon",
  },
  {
    src: "/images/clients/autodrill.png",
    alt: "AutoDrill",
  },
  {
    src: "/images/clients/bidchip.svg",
    alt: "BidChip",
  },
  {
    src: "/images/clients/chickfila.png",
    alt: "Chick-fil-A",
  },
  {
    src: "/images/clients/colsonfellows.png",
    alt: "Colson Fellows",
  },
  {
    src: "/images/clients/cru.png",
    alt: "Cru",
  },
  {
    src: "/images/clients/fca.png",
    alt: "FCA",
  },
  {
    src: "/images/clients/ici.png",
    alt: "ICI Consulting",
  },
  {
    src: "/images/clients/nae.png",
    alt: "NAE",
  },
  {
    src: "/images/clients/nascar.png",
    alt: "NASCAR",
  },
  {
    src: "/images/clients/pjpolke.png",
    alt: "PJ Polke",
  },
  {
    src: "/images/clients/ritas.png",
    alt: "Rita's Italian Ice",
  },
  {
    src: "/images/clients/sp.png",
    alt: "Samaritan's Purse",
  },
  {
    src: "/images/clients/steiger.png",
    alt: "Steiger International",
  },
  {
    src: "/images/clients/treestaple.png",
    alt: "TreeStaple",
  },
  {
    src: "/images/clients/uwm.png",
    alt: "UWM",
  },
  {
    src: "/images/clients/wheaton.png",
    alt: "Wheaton College",
  },
  {
    src: "/images/clients/zerosurge.png",
    alt: "ZeroSurge",
  },
];
</script>

<template>
  <FadeInUp>
    <UPageLogos
      title="Who We've Partnered with and Served"
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
        
      />
    </UPageLogos>
  </FadeInUp>
</template>
