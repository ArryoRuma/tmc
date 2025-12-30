
<script setup lang="ts">
const props = defineProps<{
  beforeImage?: string;
  afterImage?: string;
  client?: string;
}>();

const activeImage = ref<string | null>(null);
const activeLabel = ref<string | null>(null);

const openLightbox = (image?: string, label?: string) => {
  if (!image) return;
  activeImage.value = image;
  activeLabel.value = label || null;
};

const closeLightbox = () => {
  activeImage.value = null;
  activeLabel.value = null;
};

onMounted(() => {
  const handleKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  };
  window.addEventListener("keydown", handleKey);
  onUnmounted(() => window.removeEventListener("keydown", handleKey));
});
</script>
<!-- TODO: Fix this component's format and functionality so that it matches the ProjectsBeforeAfter.vue component. --> 

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <div class="rounded-2xl border border-primary-100 bg-white p-4 shadow-lg">
      <p
        class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500"
      >
        Before
      </p>
      <button
        type="button"
        class="group mt-3 w-full overflow-hidden rounded-xl bg-slate-100"
        @click="
          openLightbox(
            props.beforeImage,
            props.client ? `${props.client} before` : 'Before image',
          )
        "
      >
        <NuxtImg
          v-if="props.beforeImage"
          :src="props.beforeImage"
          :alt="props.client ? `${props.client} before` : 'Before image'"
          class="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </button>
    </div>
    <div class="rounded-2xl border border-amber-100 bg-white p-4 shadow-lg">
      <p
        class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600"
      >
        After
      </p>
      <button
        type="button"
        class="group mt-3 w-full overflow-hidden rounded-xl bg-slate-100"
        @click="
          openLightbox(
            props.afterImage,
            props.client ? `${props.client} after` : 'After image',
          )
        "
      >
        <NuxtImg
          v-if="props.afterImage"
          :src="props.afterImage"
          :alt="props.client ? `${props.client} after` : 'After image'"
          class="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </button>
    </div>
  </div>

  <Teleport to="body">
    <div
      v-if="activeImage"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6"
      role="dialog"
      aria-modal="true"
      @click.self="closeLightbox"
    >
      <div class="relative w-full max-w-5xl">
        <button
          type="button"
          class="absolute -top-10 right-0 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow"
          @click="closeLightbox"
        >
          Close
        </button>
        <div class="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <NuxtImg
            :src="activeImage"
            :alt="activeLabel || 'Project image'"
            class="max-h-[80vh] w-full object-contain"
          />
        </div>
        <p v-if="activeLabel" class="mt-3 text-center text-xs text-white/80">
          {{ activeLabel }}
        </p>
      </div>
    </div>
  </Teleport>
</template>
