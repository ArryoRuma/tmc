<template>
  <div class="min-h-screen scroll-smooth bg-gradient-to-r from-primary-400/10 via-transparent to-primary-400/10 dark:from-transparent dark:via-primary-200/10 dark:to-transparent">
    <AppHeader />

    <UMain>
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
