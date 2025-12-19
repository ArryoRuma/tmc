<script setup lang="ts">
const props = defineProps<{
  image?: string
  title?: string
  websiteUrl?: string
}>()
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-6xl mx-auto">
      <a
        v-if="props.websiteUrl"
        :href="props.websiteUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="block group"
      >
        <div class="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            v-if="props.image"
            :src="props.image"
            :alt="props.title || 'Project image'"
            class="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-105"
          >
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="bg-white/90 dark:bg-gray-900/90 px-4 py-2 rounded-lg flex items-center space-x-2">
              <span class="font-semibold">Visit Website</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
      <div
        v-else
        class="relative overflow-hidden rounded-2xl shadow-2xl"
      >
        <img
          v-if="props.image"
          :src="props.image"
          :alt="props.title || 'Project image'"
          class="w-full aspect-video object-cover object-top"
        >
      </div>
    </div>
  </div>
</template>
