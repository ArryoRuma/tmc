<script setup lang="ts">
interface Props {
  headline?: string
  title?: string
  description?: string
  items?: any[]
}

defineProps<Props>()
</script>

<template>
  <UPageSection
    id="testimonials"
    :headline="headline"
    :title="title"
    :description="description"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <UPageCard
        v-for="(testimonial, index) in items"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
      >
        <template #footer>
          <UUser
            :name="testimonial.user.name"
            :description="testimonial.user.description"
            :to="testimonial.user.to"
            :target="testimonial.user.target"
            :avatar="{
              ...testimonial.user.avatar,
              loading: testimonial.user.avatar.loading as 'lazy' | 'eager' | undefined
            }"
          />
        </template>
      </UPageCard>
    </div>
  </UPageSection>
</template>
