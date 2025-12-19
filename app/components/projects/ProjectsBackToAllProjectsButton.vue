<template>
  <div class="container mx-auto px-4 pb-16">
    <div class="text-center">
      <NuxtLink
        to="/projects"
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
        <span>Back to All Projects</span>
      </NuxtLink>
    </div>
  </div>
</template>
