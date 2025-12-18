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
  title: 'How PJ Polke Went from Outdated and Bulky to a Boosting Online Presence and Inbound Leads',
  description: 'Complete branding revamp and web design solution for a Manufacturing Representative Company.',
  year: 2024,
  client: 'PJ Polke ',
  services: ['Web Design', 'Photography', 'Marketing Materials', 'SEO'],
  heroImage: '/images/web-design/pjpolke/pjpolke-hero.png',
  beforeImage: '/images/web-design/pjpolke/pjpolke-before.png',
  afterImage: '/images/web-design/pjpolke/pjpolke-after.png',
  websiteUrl: 'https://pjpolke.com',
  challenge: 'PJ Polke needed a modern, professional online presence that would showcase their construction projects and establish trust with potential clients.',
  approach: 'We focused on creating a clean, user-friendly website with high-quality images and clear calls to action to drive engagement.',
  solution: 'We created a comprehensive brand identity and responsive website that highlights their expertise and project portfolio.',
  results: ['50% increase in lead generation', 'Professional brand recognition', 'Mobile-optimized user experience']
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
