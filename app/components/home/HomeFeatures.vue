<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  items?: any[]
}

defineProps<Props>()
</script>

<template>
  <UPageSection
    :title="title"
    :description="description"
  >
    <UPageGrid>
      <UPageCard
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        spotlight
      />
    </UPageGrid>
  </UPageSection>
</template>
