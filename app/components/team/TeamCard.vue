<script setup lang="ts">
type PersonLink = {
  label?: string;
  to: string;
  icon?: string;
  variant?: "solid" | "outline" | "subtle" | "soft" | "ghost" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  target?: string;
};

const props = defineProps<{
  name: string;
  role: string;
  bio: string;
  photo?: {
    src: string;
    alt?: string;
  };
  links?: PersonLink[];
}>();
</script>

<template>
  <div class="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
    <NuxtImg
      v-if="props.photo?.src"
      :src="props.photo.src"
      :alt="props.photo.alt || props.name"
      class="rounded-full h-64 w-64 mx-auto mb-4 object-cover"
    />
    <h3 class="text-xl font-semibold mb-2">{{ props.name }}</h3>
    <p class="text-primary-600 font-medium mb-3">{{ props.role }}</p>
    <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
      {{ props.bio }}
    </p>
    <div v-if="props.links?.length" class="flex justify-center gap-3">
      <UButton
        v-for="(link, index) in props.links"
        :key="`${link.to}-${index}`"
        :icon="link.icon"
        :to="link.to"
        :variant="link.variant || 'ghost'"
        :size="link.size || 'sm'"
        :target="link.target"
      >
        {{ link.label }}
      </UButton>
    </div>
  </div>
</template>
