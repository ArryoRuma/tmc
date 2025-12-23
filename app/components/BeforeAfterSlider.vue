<script setup>
import { ref } from "vue";

defineProps({
  before: String,
  after: String,
});

const position = ref(50);
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-xl select-none aspect-[16/9]"
  >
    <img :src="after" class="absolute inset-0 w-full h-full object-cover" />

    <!-- Before image clipped -->
    <div
      class="absolute inset-0 overflow-hidden"
      :style="{ width: position + '%' }"
    >
      <img :src="before" class="w-full h-full object-cover" />
    </div>

    <!-- Slider bar -->
    <div
      class="absolute top-0 bottom-0 w-1 bg-white shadow-md cursor-ew-resize"
      :style="{ left: position + '%' }"
      @mousedown="drag = true"
      @mousemove="(e) => drag && updatePos(e)"
      @mouseup="drag = false"
    />
  </div>
</template>

<script>
const drag = false;
function updatePos(e) {
  const rect = e.target.parentElement.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
  position.value = pct;
}
</script>
