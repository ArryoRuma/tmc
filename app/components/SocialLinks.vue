<script setup lang="ts">
interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

defineProps<{
  color?: string;
  variant?: string;
  size?: string;
}>();

const socialLinks: SocialLink[] = [
  {
    icon: "i-simple-icons-linkedin",
    url: "https://www.linkedin.com/company/trumedia-creative/",
    label: "TruMedia Creative on LinkedIn",
  },
  {
    icon: "i-simple-icons-youtube",
    url: "https://www.youtube.com/@TruMedia-Creative",
    label: "TruMedia Creative on YouTube",
  },
];
</script>

<template>
  <UButton
    v-for="link in socialLinks"
    :key="link.icon"
    :to="link.url"
    target="_blank"
    :icon="link.icon"
    :aria-label="link.label"
    :color="color || 'primary'"
    :variant="variant || 'ghost'"
    :size="size || 'xl'"
  />
</template>
