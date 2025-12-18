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
  title: 'How Cut. artisan. hair. design. Increased Retention and Local Visibility with a Client Growth System',
  description: 'SEO, retention, and paid media strategy for a high-end local hair salon focused on repeat business and predictable growth.',
  year: 2024,
  client: 'Cut. artisan. hair. design.',
  services: [
    'Local SEO Strategy',
    'Google Business Profile Optimization',
    'Client Retention & Re-Engagement Campaigns',
    'Paid Ads Strategy',
    'Marketing Systems & Reporting'
  ],
  heroImage: '',
  beforeImage: '',
  afterImage: '',
  websiteUrl: '',
  challenge: 'Cut. artisan. hair. design. delivered a premium in-salon experience, but growth was inconsistent. Client churn, underutilized rebooking, and weak local visibility limited revenue despite strong demand and talented stylists.',
  approach: 'We focused on increasing lifetime value before chasing more new clients by improving local search visibility, strengthening rebooking and retention systems, and aligning paid ads with real business goals instead of vanity metrics.',
  solution: 'We implemented a client growth system that combined local SEO and Google Business optimization with targeted re-engagement campaigns and paid ads. The strategy emphasized repeat visits, predictable bookings, and clearer performance tracking for the owner and stylists.',
  results: [
    'Improved client retention and rebooking consistency',
    'Stronger local search presence and Google Maps visibility',
    'More predictable monthly revenue from repeat clients',
    'Clearer insight into marketing performance and client behavior',
    'Reduced reliance on constant new-client acquisition'
  ]
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
