<script setup lang="ts">
const props = defineProps<{
  images?: string[];
  title?: string;
}>();

// Default placeholder count if no images provided
const placeholderCount = props.images?.length || 6;
</script>

<template>
  <div class="bg-white dark:bg-gray-950 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl font-bold mb-2 text-center">
          {{ props.title || "Photo Gallery" }}
        </h3>
        <p class="text-center text-gray-600 dark:text-gray-300 mb-12">
          Project highlights and behind-the-scenes moments
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Display actual images if provided -->
          <div
            v-for="(image, index) in props.images"
            :key="`image-${index}`"
            class="relative overflow-hidden rounded-xl shadow-lg group aspect-square"
          >
            <img
              :src="image"
              :alt="`Gallery image ${index + 1}`"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Show placeholders if no images -->
          <template v-if="!props.images || props.images.length === 0">
            <div
              v-for="i in placeholderCount"
              :key="`placeholder-${i}`"
              class="relative overflow-hidden rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 aspect-square"
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
                      :id="`gallery-pattern-${i}`"
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
                    :fill="`url(#gallery-pattern-${i})`"
                    width="100%"
                    height="100%"
                  />
                </svg>
                <div class="relative z-10 text-center p-4">
                  <svg
                    class="w-12 h-12 mx-auto mb-2 text-gray-400 dark:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p
                    class="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Photo {{ i }}
                  </p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
