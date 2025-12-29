<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  challenge?: string;
  solution?: string;
  services?: string[];
}>();

const gridCols = computed(() => {
  const visibleSections = [props.challenge, props.solution, props.services].filter(Boolean).length;
  
  if (visibleSections === 3) return 'md:grid-cols-3';
  if (visibleSections === 2) return 'md:grid-cols-2';
  return 'md:grid-cols-1';
});
</script>

<template>
  <div class="bg-primary-50 dark:bg-primary-900 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="grid gap-12" :class="gridCols">
          <div v-if="props.challenge">
            <h3 class="text-2xl font-bold mb-6">The Challenge</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ props.challenge }}
            </p>
          </div>
          <div v-if="props.solution">
            <h3 class="text-2xl font-bold mb-6">Our Solution</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ props.solution }}
            </p>
          </div>
          <div v-if="props.services">
            <h3 class="text-2xl font-bold mb-6">Services Provided</h3>
            <div class="space-y-3">
              <div
                v-for="service in props.services"
                :key="service"
                class="flex items-center space-x-3"
              >
                <div class="w-2 h-2 bg-primary rounded-full" />
                <span>{{ service }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
