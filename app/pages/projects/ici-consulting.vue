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
  title: 'How ICI Consulting Engineered Predictable High-Value Conversations with a Targeted Outreach System',
  description: 'Outbound strategy, messaging, and sales enablement for a financial consulting firm serving banks and credit unions.',
  year: 2024,
  client: 'ICI Consulting',
  services: [
    'Outbound Strategy & Campaign Design',
    'ICP Definition & Account Targeting',
    'Sales Messaging & Positioning',
    'Cold Email & Outreach Systems',
    'Sales Enablement & Performance Tracking'
  ],
  heroImage: '',
  beforeImage: '',
  afterImage: '',
  websiteUrl: '',
  challenge: 'ICI Consulting offers high-value advisory services to banks and credit unions, but growth depended heavily on referrals and inconsistent outbound efforts. Long sales cycles and multiple stakeholders made it difficult to generate predictable, qualified conversations at scale.',
  approach: 'We focused on clarity before volume—defining ideal accounts, decision-maker roles, and core value narratives. Outreach was designed to open informed conversations, not push immediate sales, and to support long, consultative buying processes.',
  solution: 'We built a targeted outbound system that combined precise account selection, role-specific messaging, and structured follow-up. Campaigns were designed to position ICI as a trusted advisor, initiate meaningful conversations, and support deal progression over time.',
  results: [
    'More consistent, qualified conversations with target institutions',
    'Improved response quality from senior decision-makers',
    'Clearer positioning as a strategic advisor rather than a vendor',
    'Repeatable outbound process instead of referral-only growth',
    'Better visibility into outreach performance and pipeline health'
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
