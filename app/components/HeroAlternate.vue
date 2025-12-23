<script setup lang="ts">
interface Image {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

interface Link {
  label: string;
  to: string;
  variant?: "solid" | "outline" | "ghost" | "subtle";
  color?: "primary" | "secondary" | "neutral";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: string;
  trailing?: boolean;
}

interface Props {
  title?: string;
  description?: string;
  showEmailCapture?: boolean;
  emailPlaceholder?: string;
  submitText?: string;
  helpText?: string;
  helpLinkText?: string;
  helpLinkTo?: string;
  images?: Image[];
  showImages?: boolean;
  backgroundVariant?: "light" | "dark" | "gradient";
  links?: Link[];
}

const props = withDefaults(defineProps<Props>(), {
  title: "Grow Sales with Our Strategy First Approach",
  description:
    "Transform your business with data-driven strategies that deliver measurable results and sustainable growth.",
  showEmailCapture: true,
  emailPlaceholder: "yourname@domain.com",
  submitText: "Get Started",
  helpText: "Looking for help?",
  helpLinkText: "Get in touch with us",
  helpLinkTo: "/contact",
  showImages: true,
  backgroundVariant: "light",
  images: () => [
    { src: "/images/hero/hero-1.jpg", alt: "Team collaboration" },
    { src: "/images/hero/hero-2.jpg", alt: "Strategy meeting" },
    { src: "/images/hero/hero-3.jpg", alt: "Data analytics" },
    { src: "/images/hero/hero-4.jpg", alt: "Results dashboard" },
    { src: "/images/hero/hero-5.jpg", alt: "Growth chart" },
    { src: "/images/hero/hero-6.jpg", alt: "Success celebration" },
    { src: "/images/hero/hero-7.jpg", alt: "Business meeting" },
  ],
});

// Background class computation
const backgroundClass = computed(() => {
  switch (props.backgroundVariant) {
    case "dark":
      return "bg-gray-900 dark:bg-gray-950";
    case "gradient":
      return "bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900";
    default:
      return "bg-gray-50 dark:bg-gray-800";
  }
});
</script>

<template>
  <section class="relative py-24 md:py-32 lg:py-40" :class="backgroundClass">
    <!-- Background Pattern (optional) -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-100 dark:bg-primary-900/20 opacity-20"
      />
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary-100 dark:bg-secondary-900/20 opacity-20"
      />
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Hero Content -->
      <div class="text-center mb-16">
        <div class="max-w-4xl mx-auto space-y-8">
          <!-- Title -->
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            {{ title }}
          </h1>

          <!-- Description -->
          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {{ description }}
          </p>

          <!-- Action Buttons (if no email capture) -->
          <div
            v-if="!showEmailCapture && links?.length"
            class="flex flex-wrap justify-center gap-4"
          >
            <UButton
              v-for="(link, index) in links"
              :key="index"
              :to="link.to"
              :variant="link.variant || 'solid'"
              :color="link.color || 'primary'"
              :size="link.size || 'lg'"
              :trailing-icon="link.trailing && link.icon"
              :leading-icon="!link.trailing && link.icon"
            >
              {{ link.label }}
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Gallery -->
    <div v-if="showImages && images?.length" class="max-w-6xl mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 items-center"
      >
        <!-- Left Column -->
        <div class="lg:col-span-4 md:col-span-1">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div
                v-if="images[0]"
                class="aspect-square overflow-hidden rounded-xl shadow-lg"
              >
                <NuxtImg
                  :src="images[0].src"
                  :alt="images[0].alt"
                  :loading="images[0].loading || 'lazy'"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div
                v-if="images[1]"
                class="aspect-square overflow-hidden rounded-xl shadow-lg"
              >
                <NuxtImg
                  :src="images[1].src"
                  :alt="images[1].alt"
                  :loading="images[1].loading || 'lazy'"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                v-if="images[2]"
                class="aspect-square overflow-hidden rounded-xl shadow-lg"
              >
                <NuxtImg
                  :src="images[2].src"
                  :alt="images[2].alt"
                  :loading="images[2].loading || 'lazy'"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Center Column -->
        <div class="lg:col-span-4 md:col-span-1">
          <div
            v-if="images[3]"
            class="aspect-[4/5] overflow-hidden rounded-xl shadow-lg"
          >
            <NuxtImg
              :src="images[3].src"
              :alt="images[3].alt"
              :loading="images[3].loading || 'lazy'"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-4 md:col-span-1">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4 mb-8">
              <div
                v-if="images[4]"
                class="aspect-square overflow-hidden rounded-xl shadow-lg"
              >
                <NuxtImg
                  :src="images[4].src"
                  :alt="images[4].alt"
                  :loading="images[4].loading || 'lazy'"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                v-if="images[5]"
                class="aspect-square overflow-hidden rounded-xl shadow-lg"
              >
                <NuxtImg
                  :src="images[5].src"
                  :alt="images[5].alt"
                  :loading="images[5].loading || 'lazy'"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div class="space-y-4">
              <div
                v-if="images[6]"
                class="aspect-square overflow-hidden rounded-xl shadow-lg"
              >
                <NuxtImg
                  :src="images[6].src"
                  :alt="images[6].alt"
                  :loading="images[6].loading || 'lazy'"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
