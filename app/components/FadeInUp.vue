<script setup lang="ts">
import { motion } from "motion-v";

interface Props {
  delay?: number;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0.2,
  duration: 0.7,
});
</script>

<template>
  <motion.div
    :initial="{ filter: 'blur(10px)', scale: 0.95, opacity: 0, y: 20 }"
    :while-in-view="{ filter: 'blur(0px)', scale: 1, opacity: 1, y: 0 }"
    :in-view-options="{ once: true }"
    :transition="{ duration: props.duration, delay: props.delay }"
  >
    <slot />
  </motion.div>
</template>
