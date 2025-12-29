<script setup lang="ts">
const props = defineProps<{
  videoUrl?: string;
  title?: string;
  poster?: string;
}>();
</script>

<template>
  <div v-if="props.videoUrl" class="container mx-auto px-4 py-16">
    <div class="max-w-6xl mx-auto">
      <FadeInUp>
        <div class="relative">
          <UPageCard variant="subtle" class="rounded-2xl">
            <video
              class="rounded-xl w-full"
              preload="none"
              :poster="props.poster"
              :controls="true"
              :aria-label="props.title || 'Project video'"
            >
              <source :src="props.videoUrl" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </UPageCard>
        </div>
      </FadeInUp>
    </div>
  </div>
</template>
