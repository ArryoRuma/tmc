<script setup lang="ts">
const marqueeImages = [
  "images/blocks/image1.png",
  "images/blocks/image2.png",
  "images/blocks/image3.png",
  "images/blocks/image4.png",
  "images/blocks/image5.png",
  "images/blocks/image6.png",
];
</script>

<template>
  <FadeInUp :delay="0.3" :duration="1.2">
    <div
      class="relative w-full bg-muted overflow-hidden shadow-2xl drop-shadow-2xl rounded-2xl p-6"
    >
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        <NuxtImg
          v-for="src in marqueeImages"
          :key="src"
          :src="src"
          width="360"
          height="202"
          alt=""
          aria-hidden="true"
          loading="lazy"
          class="aspect-video border border-default rounded-lg bg-white shadow-lg drop-shadow-lg object-cover w-full"
        />
      </div>
    </div>
  </FadeInUp>
</template>
