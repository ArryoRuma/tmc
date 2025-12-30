<script setup lang="ts">
import type { Project } from "~/types/project";

interface Props {
  project: Project;
  layout?: "default" | "spotlight" | "minimal";
  showBackButton?: boolean;
  showResults?: boolean;
  showGallery?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  layout: "default",
  showBackButton: true,
  showResults: true,
  showGallery: false,
});

// SEO Meta
useSeoMeta({
  title: `${props.project.title} - TruMedia Creative Portfolio`,
  description: props.project.description,
  ogTitle: `${props.project.title} - TruMedia Creative Portfolio`,
  ogDescription: props.project.description,
});

// Page Meta
definePageMeta({
  layout: "projects",
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <ProjectsHero :project="project" />

    <!-- Before/After Section -->
    <div
      v-if="project.beforeImage && project.afterImage"
      class="bg-gray-50 dark:bg-gray-900 py-8"
    >
      <ProjectsBeforeAfter
        :before-image="project.beforeImage"
        :after-image="project.afterImage"
      />
    </div>

    <!-- Project Details -->
    <ProjectsDetails
      v-if="project.challenge || project.solution || project.services"
      :challenge="project.challenge"
      :approach="project.approach"
      :solution="project.solution"
      :services="project.services"
    />

    <!-- Project Results -->
    <ProjectsResults
      v-if="showResults && project.results"
      :results="project.results"
    />

    <!-- Gallery -->
    <template v-if="showGallery && project.images">
      <!-- Convert ProjectImage[] to string[] for compatibility -->
      <ProjectsGallery :images="project.images.map((img) => img.src)" />
    </template>

    <!-- Hero Image / Video -->
    <ProjectsImage
      v-if="project.heroImage"
      :image="project.heroImage"
      :title="project.title"
      :website-url="project.websiteUrl"
    />

    <!-- Video Section -->
    <ProjectsVideo
      v-if="project.video"
      :video="project.video"
      :title="project.title"
    />

    <!-- Testimonial -->
    <section
      v-if="project.testimonial"
      class="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <UContainer>
        <div class="max-w-4xl mx-auto text-center">
          <blockquote
            class="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-8"
          >
            "{{ project.testimonial.quote }}"
          </blockquote>
          <div class="flex items-center justify-center gap-4">
            <NuxtImg
              v-if="project.testimonial.author.avatar"
              :src="project.testimonial.author.avatar"
              :alt="project.testimonial.author.name"
              class="w-16 h-16 rounded-full object-cover"
            />
            <div class="text-left">
              <div class="font-semibold text-gray-900 dark:text-white">
                {{ project.testimonial.author.name }}
              </div>
              <div class="text-gray-600 dark:text-gray-300">
                {{ project.testimonial.author.title }}
              </div>
              <div class="text-gray-500 dark:text-gray-400">
                {{ project.testimonial.author.company }}
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Related Projects CTA -->
    <section class="py-16">
      <UContainer>
        <div class="text-center">
          <h2
            class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Ready to Transform Your Business?
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            See how we can help you achieve similar results with a custom
            strategy designed for your unique challenges.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              to="https://trumediacreative.hbportal.co/schedule/6442d82d7999d90d3e0b430a"
              size="lg"
              trailing-icon="i-lucide-calendar"
              external
            >
              Book a Strategy Call
            </UButton>
            <UButton
              to="/projects"
              variant="outline"
              size="lg"
              trailing-icon="i-lucide-arrow-right"
            >
              View More Projects
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
    <!-- Back Button -->
    <ProjectsBackToAllProjectsButton v-if="showBackButton" />
  </div>
</template>
