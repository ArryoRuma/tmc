<script setup lang="ts">
import type { ButtonProps } from '#ui/types'

interface Section {
  title?: string
  headline?: string
  orientation?: 'vertical' | 'horizontal'
  reverse?: boolean
  features?: Record<string, unknown>[]
  links?: ButtonProps[]
  description?: string
  photo?: {
    src: string
    alt?: string
  }
}

interface Props {
  sections: Section[]
}

defineProps<Props>()
</script>

<template>
  <UPageSection
    v-for="(section, index) in sections"
    :key="index"
    :title="section.title"
    :headline="section.headline"
    :orientation="section.orientation"
    :reverse="section.reverse"
    :features="section.features"
    :links="section.links"
  >
    <template #title>
      <div class="space-y-4">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          {{ section.title }}
        </h2>
      </div>
    </template>

    <template #footer>
      <div
        v-if="section.description"
        class="text-lg sm:text-xl/8 text-muted mt-8 mb-6"
      >
        {{ section.description }}
      </div>

      <div
        v-if="section.links"
        class="flex flex-wrap gap-x-6 gap-y-3 "
      >
        <UButton
          v-for="(link, linkIndex) in section.links"
          :key="linkIndex"
          v-bind="link"
          size="xl"
          variant="solid"
          style="font-family: 'new-spirit', serif !important; font-weight: 600 !important;"
          class="shadow-xl"
        />
      </div>
    </template>

    <div
      v-if="section.photo"
      class="flex justify-center px-6 mb-8"
    >
      <div class="relative overflow-hidden rounded-lg w-full h-full max-w-4xl shadow-lg">
        <NuxtImg
          :src="section.photo.src"
          :alt="section.photo.alt || section.title"
          loading="lazy"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </UPageSection>
</template>
