<script setup lang="ts">
interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
}

interface Props {
  testimonial: Testimonial;
}

defineProps<Props>();
</script>

<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <UContainer>
      <div class="max-w-4xl mx-auto">
        <FadeInUp>
          <div class="text-center">
            <blockquote
              class="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-8 before:content-[open-quote] after:content-[close-quote]"
            >
              {{ testimonial.quote }}
            </blockquote>
            <div class="flex items-center justify-center gap-4">
              <NuxtImg
                v-if="testimonial.author.avatar"
                :src="testimonial.author.avatar"
                :alt="testimonial.author.name"
                class="w-16 h-16 rounded-full object-cover"
              />
              <div class="text-left">
                <div class="font-semibold text-gray-900 dark:text-white">
                  {{ testimonial.author.name }}
                </div>
                <div class="text-gray-600 dark:text-gray-300">
                  {{ testimonial.author.title }}
                </div>
                <div class="text-gray-500 dark:text-gray-400">
                  {{ testimonial.author.company }}
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </UContainer>
  </section>
</template>
