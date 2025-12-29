<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  challenge?: string;
  approach?: string;
  solution?: string;
}>();

const gridCols = computed(() => {
  const visibleSections = [props.challenge, props.approach, props.solution].filter(Boolean).length;
  
  if (visibleSections === 3) return 'md:grid-cols-3';
  if (visibleSections === 2) return 'md:grid-cols-2';
  return 'md:grid-cols-1';
});
</script>

<template>
  <div class="bg-primary-50 dark:bg-primary-900 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Case Study</h2>
        <div class="grid gap-12" :class="gridCols">
          <div v-if="props.challenge">
            <h3 class="text-2xl font-bold mb-6">The Challenge</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ props.challenge }}
            </p>
          </div>
          <div v-if="props.approach">
            <h3 class="text-2xl font-bold mb-6">Our Approach</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ props.approach }}
            </p>
          </div>
          <div v-if="props.solution">
            <h3 class="text-2xl font-bold mb-6">The Solution</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ props.solution }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
