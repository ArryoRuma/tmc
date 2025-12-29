<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  year?: number;
  client?: string;
  services?: string[];
  heroImage?: string;
  beforeImage?: string;
  afterImage?: string;
  websiteUrl?: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  results?: string[];
}

const project: Project = {
  title:
    "How PJ Polke Went from Outdated and Bulky to a Boosting Online Presence and Inbound Leads",
  description:
    "Complete branding revamp and web design solution for a Manufacturing Representative Company.",
  year: 2024,
  client: "PJ Polke ",
  services: ["Web Design", "Photography", "Marketing Materials", "SEO"],
  heroImage: "/images/web-design/pjpolke/pjpolke-hero.png",
  beforeImage: "/images/web-design/pjpolke/pjpolke-before.png",
  afterImage: "/images/web-design/pjpolke/pjpolke-after.png",
  websiteUrl: "https://pjpolke.com",
  challenge:
    "PJ Polke needed a modern, professional online presence that would showcase their construction projects and establish trust with potential clients.",
  approach:
    "We focused on creating a clean, user-friendly website with high-quality images and clear calls to action to drive engagement.",
  solution:
    "We created a comprehensive brand identity and responsive website that highlights their expertise and project portfolio.",
  results: [
    "50% increase in lead generation",
    "Professional brand recognition",
    "Mobile-optimized user experience",
  ],
};

definePageMeta({
  layout: "projects",
});

useSeoMeta({
  title: `${project.title} - TruMedia Creative Portfolio`,
  description: project.description,
  ogTitle: `${project.title} - TruMedia Creative Portfolio`,
  ogDescription: project.description,
});
</script>
<!--TODO: add projects gallery placeholder -->
<!--TODO: verify this page is consistent with other project pages  -->
<template>
  <div>
    <ProjectsHero :project="project" />
    <div class="bg-gray-50 dark:bg-gray-900 py-2">
      <ProjectsBeforeAfter
        :before-image="project.beforeImage"
        :after-image="project.afterImage"
      />
    </div>
    <ProjectsDetails
      :challenge="project.challenge"
      :solution="project.solution"
      :services="project.services"
    />
    <ProjectsResults :results="project.results" />
    <ProjectsImage
      :image="project.heroImage"
      :title="project.title"
      :website-url="project.websiteUrl"
    />
  </div>
</template>
