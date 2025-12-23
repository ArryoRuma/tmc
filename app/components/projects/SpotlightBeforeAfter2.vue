<script setup lang="ts">
const props = defineProps<{
  beforeImage?: string;
  afterImage?: string;
  client?: string;
}>();
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <div class="rounded-2xl border border-primary-100 bg-white p-4 shadow-lg">
      <p
        class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500"
      >
        Before
      </p>
      <div class="mt-3 overflow-hidden rounded-xl bg-slate-100">
        <NuxtImg
          v-if="props.beforeImage"
          :src="props.beforeImage"
          :alt="props.client ? `${props.client} before` : 'Before image'"
          class="h-40 w-full object-cover"
        />
      </div>
    </div>
    <div class="rounded-2xl border border-amber-100 bg-white p-4 shadow-lg">
      <p
        class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600"
      >
        After
      </p>
      <div class="mt-3 overflow-hidden rounded-xl bg-slate-100">
        <NuxtImg
          v-if="props.afterImage"
          :src="props.afterImage"
          :alt="props.client ? `${props.client} after` : 'After image'"
          class="h-40 w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
