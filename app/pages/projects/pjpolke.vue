<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title:
    "Manufacturing Rep Website Redesign Case Study: Modern Brand and Lead-Ready Site",
  description:
    "Complete branding revamp and web design solution for a Manufacturing Representative Company.",
  year: 2024,
  client: "PJ Polke",
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
</script>

<template>
  <BaseProject :project="project" />
</template>
