<script setup lang="ts">
const props = defineProps<{
  title?: string;
  sections?: Array<{
    heading: string;
    content: string;
  }>;
}>();
</script>

<template>
  <div class="bg-white dark:bg-gray-950 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-3xl font-bold mb-2 text-center">
          {{ props.title || "Case Study" }}
        </h3>
        <p class="text-center text-gray-600 dark:text-gray-300 mb-12">
          In-depth analysis and insights from this project
        </p>

        <!-- Display actual case study content if provided -->
        <div
          v-if="props.sections && props.sections.length > 0"
          class="space-y-8"
        >
          <div
            v-for="(section, index) in props.sections"
            :key="index"
            class="prose dark:prose-invert max-w-none"
          >
            <h4 class="text-xl font-semibold mb-3">{{ section.heading }}</h4>
            <p class="text-gray-600 dark:text-gray-300">
              {{ section.content }}
            </p>
          </div>
        </div>

        <!-- Show placeholder if no content -->
        <div
          v-else
          class="relative overflow-hidden rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700"
        >
          <div
            class="p-12 bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-[400px]"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-300 dark:stroke-gray-700"
              fill="none"
            >
              <defs>
                <pattern
                  id="case-study-pattern"
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
                fill="url(#case-study-pattern)"
                width="100%"
                height="100%"
              />
            </svg>
            <div class="relative z-10 text-center max-w-md">
              <svg
                class="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p
                class="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2"
              >
                Detailed Case Study Coming Soon
              </p>
              <p class="text-sm text-gray-400 dark:text-gray-500">
                We're preparing an in-depth analysis of this project with
                insights, metrics, and lessons learned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
