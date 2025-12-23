<script setup lang="ts">
const props = defineProps<{
  results?: string[];
}>();
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <h3 class="text-2xl font-bold mb-8 text-center">Results Achieved</h3>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="result in props.results"
          :key="result"
          class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        >
          <div
            class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p class="font-semibold">
            {{ result }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
