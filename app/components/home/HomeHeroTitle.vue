<script setup lang="ts">
const rotatingWords = ['Services', 'Products', 'Appointments', 'Contracts', 'Solutions', 'Deals', 'Projects', 'Retainers', 'Accounts', 'Work']
const { currentWord, currentIndex } = useRotatingText(rotatingWords, 1200)
</script>

<template>
  <FadeInUp>
    <div class="page-hero-headline text-5xl sm:text-7xl text-pretty tracking-tight text-highlighted">
      We Help Brands Sell More
      <span class="block">
        <Transition
          name="slide"
          mode="out-in"
        >
          <span
            :key="currentIndex"
            class="text-primary"
            style="font-family: 'new-spirit', serif !important; font-weight: 700 !important;"
          >{{ currentWord }}</span>
        </Transition>
      </span>
    </div>
  </FadeInUp>
</template>
