<script setup lang="ts">
interface VideoItem {
  title?: string;
  description?: string;
  src: string;
  poster?: string;
  thumbnail?: string;
}

interface VideoShowcaseProps {
  title?: string;
  description?: string;
  headline?: string;
  videos?: VideoItem[];
}

const props = withDefaults(defineProps<VideoShowcaseProps>(), {
  title: "Video Showcase",
  description: "Explore our video work and client success stories",
  videos: () => [],
});
</script>

<template>
  <UPageSection
    v-if="props.videos && props.videos.length > 0"
    :title="props.title"
    :description="props.description"
    :headline="props.headline"
  >
    <UPageGrid>
      <FadeInUp
        v-for="(video, index) in props.videos"
        :key="index"
        :delay="0.1 * (index + 1)"
      >
        <UPageCard variant="subtle" spotlight>
          <template v-if="video.title" #title>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ video.title }}
            </h3>
          </template>

          <div class="relative overflow-hidden rounded-lg shadow-xl">
            <LazyVideo
              :src="video.src"
              :poster="video.poster || video.thumbnail"
              controls
              class="w-full h-auto aspect-video rounded-lg"
              preload="metadata"
            >
              <p>Your browser doesn't support video playback.</p>
            </LazyVideo>
          </div>

          <template v-if="video.description" #description>
            <p class="text-gray-600 dark:text-gray-300 mt-3">
              {{ video.description }}
            </p>
          </template>
        </UPageCard>
      </FadeInUp>
    </UPageGrid>
  </UPageSection>
</template>
