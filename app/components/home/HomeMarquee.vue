<template>
  <div
    class="relative w-full h-[500px] overflow-hidden"
    style="perspective: 1000px"
  >
    <!-- First column - reverse -->
    <UMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
      }"
    >
      <NuxtImg
        v-for="i in 4"
        :key="i"
        :src="`/images/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Nuxt UI Screenshot ${i}`"
        class="aspect-video border border-default rounded-lg bg-white"
      />
    </UMarquee>

    <!-- Second column -->
    <UMarquee
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
      }"
    >
      <NuxtImg
        v-for="i in [5, 6, 7, 8]"
        :key="i"
        :src="`/images/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Nuxt UI Screenshot ${i}`"
        class="aspect-video border border-default rounded-lg bg-white"
      />
    </UMarquee>

    <!-- Third column - reverse, hidden on mobile -->
    <UMarquee
      reverse
      orientation="vertical"
      :overlay="false"
      :ui="{
        root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
      }"
    >
      <NuxtImg
        v-for="i in [9, 10, 11, 12]"
        :key="i"
        :src="`/images/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Nuxt UI Screenshot ${i}`"
        class="aspect-video border border-default rounded-lg bg-white"
      />
    </UMarquee>
  </div>
</template>
