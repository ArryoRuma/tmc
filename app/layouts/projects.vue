<script setup></script>

<template>
  <div class="min-h-screen bg-white text-slate-900 dark:bg-slate-950">
    <div class="relative isolate overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-white via-primary-50/40 to-amber-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      />
      <div
        class="absolute -top-36 right-8 h-72 w-72 rounded-full bg-primary-300/20 blur-3xl animate-float-slow dark:bg-primary-500/10"
      />
      <div
        class="absolute -bottom-48 left-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl animate-float-slower dark:bg-amber-500/10"
      />
      <div
        class="absolute inset-0 opacity-[0.12] dark:opacity-[0.06] [background-image:radial-gradient(#1a4061_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <AppHeader />

      <UMain as="main" class="relative">
        <slot />
      </UMain>

      <AppFooter />
    </div>
  </div>
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
