<script setup lang="ts">
interface Project2 {
  title: string;
  description: string;
  year?: number;
  client?: string;
  services?: string[];
  heroImage?: string;
  beforeImage?: string;
  afterImage?: string;
  websiteUrl?: string;
  challenge?: string;
  outcomes?: string;
  solution?: string;
  results?: string[];
}

const props = defineProps<{ project: Project2 }>();
</script>

<template>
  <div class="space-y-6">
    <div class="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-lg">
      <p class="text-sm font-semibold text-slate-900">Outcomes</p>
      <p class="mt-3 text-sm text-slate-600">
        {{ props.project.outcomes }}
      </p>
    </div>
    <div
      class="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur"
    >
      <div class="flex items-center justify-between">
        <p class="text-sm font-semibold text-slate-900">What we delivered</p>
        <span
          class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700"
        >
          In production
        </span>
      </div>
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="service in props.project.services"
          :key="service"
          class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
        >
          {{ service }}
        </span>
      </div>
    </div>

    <ProjectsSpotlightBeforeAfter2
      :before-image="props.project.beforeImage"
      :after-image="props.project.afterImage"
    />
  </div>
</template>
