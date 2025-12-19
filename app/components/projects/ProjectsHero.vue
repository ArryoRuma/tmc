<script setup lang="ts">
interface Project {
  title: string
  description: string
  year?: number
  client?: string
  services?: string[]
  websiteUrl?: string
}

const { project } = defineProps<{ project: Project }>()
</script>

<template>
  <div class="relative bg-gradient-to-br from-blue/10 to-primary-600/10 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
          {{ project.title }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap justify-center gap-4 text-sm mb-8">
          <span class="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow">
            <strong>Year:</strong> {{ project.year }}
          </span>
          <span class="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow">
            <strong>Client:</strong> {{ project.client }}
          </span>
        </div>

        <a
          v-if="project.websiteUrl"
          :href="project.websiteUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          <span>View Live Website</span>
          <svg
            class="w-5 h-5"
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
        </a>
      </div>
    </div>
  </div>
</template>
