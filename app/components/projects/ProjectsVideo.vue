<script setup lang="ts">
const props = defineProps<{
  videoUrl?: string;
  title?: string;
  description?: string;
  posterImage?: string;
}>();
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-950 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-3xl font-bold mb-2 text-center">
          {{ props.title || "Project Video" }}
        </h3>
        <p
          v-if="props.description"
          class="text-center text-gray-600 dark:text-gray-300 mb-12"
        >
          {{ props.description }}
        </p>
        <p
          v-else
          class="text-center text-gray-600 dark:text-gray-300 mb-12"
        >
          See the project in action
        </p>

        <!-- Display actual video if URL is provided -->
        <div v-if="props.videoUrl" class="relative rounded-xl overflow-hidden shadow-2xl">
          <video
            class="w-full"
            :poster="props.posterImage"
            controls
            preload="metadata"
          >
            <source :src="props.videoUrl" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <!-- Show placeholder if no video URL -->
        <div
          v-else
          class="relative overflow-hidden rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 aspect-video"
        >
          <div
            class="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-300 dark:stroke-gray-700"
              fill="none"
            >
              <defs>
                <pattern
                  id="video-pattern"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
                </pattern>
              </defs>
              <rect
                stroke="none"
                fill="url(#video-pattern)"
                width="100%"
                height="100%"
              />
            </svg>
            <div class="relative z-10 text-center p-4">
              <svg
                class="w-16 h-16 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Video Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
