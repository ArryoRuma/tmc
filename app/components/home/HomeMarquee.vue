<script setup lang="ts">
const marqueeImages = [
  "images/blocks/image1.png",
  "images/blocks/image2.png",
  "images/blocks/image3.png",
  "images/blocks/image4.png",
  "images/blocks/image5.png",
  "images/blocks/image6.png",
  "images/blocks/image7.png",
  "images/blocks/image8.png",
  "images/blocks/image9.png",
  "images/blocks/image10.png",
  "images/blocks/image11.png",
  "images/blocks/image12.png",
  "images/blocks/image13.png",
  "images/blocks/image14.png",
  "images/blocks/image15.png",
];
</script>

<template>
  <FadeInUp :delay="0.3" :duration="1.2">
    <div
      class="relative w-full bg-muted overflow-hidden shadow-2xl drop-shadow-2xl rounded-2xl p-6"
    >
      <UMarquee :pause-on-hover="true" :repeat="2">
        <NuxtImg
          v-for="src in marqueeImages"
          :key="src"
          :src="src"
          width="360"
          height="202"
          alt=""
          aria-hidden="true"
          loading="lazy"
          class="aspect-video border border-default rounded-lg bg-white shadow-lg drop-shadow-lg object-cover w-80 mx-2"
        />
      </UMarquee>
    </div>
  </FadeInUp>
</template>
