<script setup lang="ts">
const props = defineProps<{ results?: string[] }>();
</script>

<template>
  <div
    class="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur"
  >
    <p class="text-sm font-semibold text-slate-900">Results</p>
    <ul class="mt-4 space-y-3 text-sm text-slate-600">
      <li
        v-for="result in props.results"
        :key="result"
        class="flex items-start gap-3"
      >
        <span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" />
        <span>{{ result }}</span>
      </li>
    </ul>
  </div>
</template>
