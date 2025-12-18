<script setup lang="ts">
import ProjectHero from '~/components/projects/ProjectHero.vue'
import BeforeAfter from '~/components/projects/BeforeAfter.vue'
import ProjectImage from '~/components/projects/ProjectImage.vue'
import ProjectResults from '~/components/projects/ProjectResults.vue'
import ProjectDetails from '~/components/projects/ProjectDetails.vue'

interface Project {
  title: string
  description: string
  year?: number
  client?: string
  services?: string[]
  heroImage?: string
  beforeImage?: string
  afterImage?: string
  websiteUrl?: string
  challenge?: string
  approach?: string
  solution?: string
  results?: string[]
}

const project: Project = {
  title: 'Nascar Driver Cody Ware Boosts Fan Engagement with Dynamic Video Content',
  description: 'Video production and digital marketing strategy for NASCAR driver Cody Ware to enhance fan engagement and brand visibility.',
  year: 2024,
  client: 'Cody Ware',
  services: ['Video Production', 'Digital Marketing', 'Content Strategy', 'Social Media Management'],
  heroImage: '/images/projects/nascar-cody-ware/nascar-cody-ware-hero.png',
  beforeImage: '/images/projects/nascar-cody-ware/nascar-cody-ware-before.png',
  afterImage: '/images/projects/nascar-cody-ware/nascar-cody-ware-after.png',
  websiteUrl: 'https://vimeo.com/812175432/1d898d2c46?fl=pl&fe=sh',
  challenge: 'Cody Ware needed dynamic video content and a digital marketing strategy to boost fan engagement and increase brand visibility in the competitive NASCAR environment.',
  approach: 'We focused on creating engaging video content tailored to Cody Ware’s fan base, leveraging social media platforms and targeted digital campaigns to maximize reach and interaction.',
  solution: 'We produced high-quality videos and implemented a comprehensive digital marketing plan that included content strategy and social media management to enhance fan connection and brand presence.',
  results: ['Professional brand recognition', 'Increased fan engagement', 'Enhanced social media presence', 'Higher visibility in the NASCAR community']
}

useSeoMeta({
  title: `${project.title} - TruMedia Creative Portfolio`,
  description: project.description,
  ogTitle: `${project.title} - TruMedia Creative Portfolio`,
  ogDescription: project.description
})
</script>

<template>
  <div class="min-h-screen">
    <ProjectHero :project="project" />
    <!-- Before/After Comparison -->
    <div class="bg-gray-50 dark:bg-gray-900 py-2">
      <BeforeAfter
        :before-image="project.beforeImage"
        :after-image="project.afterImage"
      />
    </div>
    <ProjectDetails
      :challenge="project.challenge"
      :solution="project.solution"
      :services="project.services"
    />

    <ProjectImage
      :image="project.heroImage"
      :title="project.title"
      :website-url="project.websiteUrl"
    />

    <ProjectResults :results="project.results" />

    <!-- Back to Projects -->
    <div class="container mx-auto px-4 pb-16">
      <div class="text-center">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to All Projects</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
