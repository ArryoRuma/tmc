<script setup lang="ts">
interface LazyVideoProps {
  src?: string;
  poster?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
  class?: string;
  type?: string;
}

const props = withDefaults(defineProps<LazyVideoProps>(), {
  controls: true,
  autoplay: false,
  loop: false,
  muted: false,
  preload: "none",
  type: "video/mp4",
});

const videoRef = ref<HTMLVideoElement | null>(null);
const isIntersecting = ref(false);
const hasLoaded = ref(false);
const observer = ref<IntersectionObserver | null>(null);

// Use Intersection Observer to detect when video enters viewport
onMounted(() => {
  if (!videoRef.value) return;

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasLoaded.value) {
          isIntersecting.value = true;
          hasLoaded.value = true;
        }
      });
    },
    {
      rootMargin: "50px", // Start loading slightly before video enters viewport
      threshold: 0.1,
    },
  );

  observer.value.observe(videoRef.value);
});

onUnmounted(() => {
  if (observer.value) {
    if (videoRef.value) {
      observer.value.unobserve(videoRef.value);
    }
    observer.value.disconnect();
  }
});
</script>

<template>
  <video
    ref="videoRef"
    :class="props.class"
    :controls="props.controls"
    :autoplay="props.autoplay"
    :loop="props.loop"
    :muted="props.muted"
    :preload="props.preload"
    :poster="props.poster"
  >
    <source v-if="isIntersecting && props.src" :src="props.src" :type="props.type" />
    <slot />
  </video>
</template>
