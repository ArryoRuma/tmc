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
  approach?: string;
  solution?: string;
  results?: string[];
}

const props = defineProps<{ project: Project2 }>();
</script>

<template>
  <section class="relative isolate overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-br from-white via-primary-50/40 to-amber-50/60"
    />
    <div
      class="absolute -top-32 right-8 h-72 w-72 rounded-full bg-primary-300/25 blur-3xl animate-float-slow"
    />
    <div
      class="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-amber-300/25 blur-3xl animate-float-slower"
    />
    <div
      class="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(#1a4061_1px,transparent_1px)] [background-size:22px_22px]"
    />

    <UContainer class="relative py-20 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <ProjectsSpotlightOverview2 :project="props.project" />
        <ProjectsSpotlightDetails2 :project="props.project" />
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
@keyframes float-slow {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -18px, 0);
  }
}

@keyframes float-slower {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 22px, 0);
  }
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 13s ease-in-out infinite;
}
</style>
