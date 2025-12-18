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
  title: 'How Advanced Snow Management Won and Scaled Large Industrial Contracts with Clear Positioning and Proposals',
  description: 'Industrial marketing, proposal strategy, and sales enablement for a commercial snow and ice management company.',
  year: 2024,
  client: 'Advanced Snow Management',
  services: [
    'Industrial Marketing Strategy',
    'Proposal & RFP Support',
    'Sales Messaging & Positioning',
    'Video & Visual Sales Assets',
    'Deal Structuring & Sales Enablement'
  ],
  heroImage: '',
  beforeImage: '',
  afterImage: '',
  websiteUrl: '',
  challenge: 'Advanced Snow Management was pursuing large industrial and enterprise snow removal contracts with long sales cycles, complex scopes, and multiple decision-makers. Winning required more than competitive pricing—it required clarity, credibility, and confidence at every stage of the buying process.',
  approach: 'We focused on positioning Advanced Snow Management as a reliable, enterprise-ready partner by clarifying service scope, operational capacity, and risk mitigation. Proposals and sales materials were designed to reduce uncertainty and help buying committees justify decisions internally.',
  solution: 'We developed structured proposals, messaging frameworks, and supporting visual assets that clearly communicated capabilities, process, and scale. These assets helped align stakeholders, reduce back-and-forth during negotiations, and support high-value contract decisions.',
  results: [
    'Successful acquisition of large industrial and multi-site contracts',
    'Improved clarity and confidence for buying committees during evaluations',
    'More professional and consistent proposal presentation',
    'Reduced friction during late-stage sales and contract discussions',
    'Stronger positioning as an enterprise-capable snow management partner'
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
