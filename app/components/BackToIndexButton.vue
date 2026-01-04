<script setup lang="ts">
const route = useRoute();

// Determine the parent route and label based on current path
const backRoute = computed(() => {
  const path = route.path;
  if (path.startsWith("/services/")) {
    return { path: "/services", label: "Services" };
  } else if (path.startsWith("/solutions/")) {
    return { path: "/solutions", label: "Solutions" };
  } else if (path.startsWith("/industries/")) {
    return { path: "/industries", label: "Industries" };
  }
  return null;
});
</script>

<template>
  <div v-if="backRoute" class="container mx-auto px-4 py-6">
    <NuxtLink
      :to="backRoute.path"
      class="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition"
    >
      <svg
        class="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span>Back to {{ backRoute.label }}</span>
    </NuxtLink>
  </div>
</template>
