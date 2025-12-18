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
  title: 'How BidChip Re-Activated a Dormant Marketplace with Targeted Outreach and Seller Enablement',
  description: 'Activation, re-engagement, and outbound systems for a B2B electronics and semiconductor bidding platform.',
  year: 2024,
  client: 'BidChip',
  services: [
    'Activation & Re-Engagement Strategy',
    'Outbound Campaign Design',
    'ICP & Seller Segmentation',
    'Sales Messaging & Email Systems',
    'Performance Tracking & Optimization'
  ],
  heroImage: '',
  beforeImage: '',
  afterImage: '',
  websiteUrl: '',
  challenge: 'BidChip had an active platform and a growing database of buyers and sellers, but many sellers were dormant or underutilizing the marketplace. Without consistent activation and education, marketplace liquidity and deal velocity were limited.',
  approach: 'We focused on re-engaging sellers by aligning outreach with real seller incentives, clarifying how BidChip creates value, and guiding users toward specific actions that increase participation rather than relying on generic platform announcements.',
  solution: 'We implemented a structured activation and outbound system that segmented sellers by behavior and readiness, delivered targeted messaging sequences, and encouraged meaningful marketplace activity. Campaigns were designed to educate, re-activate, and move sellers toward consistent usage.',
  results: [
    'Increased engagement from previously dormant sellers',
    'Clearer understanding of platform value among participants',
    'Improved marketplace activity and deal momentum',
    'Repeatable activation framework for ongoing growth',
    'Better visibility into seller behavior and campaign performance'
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
