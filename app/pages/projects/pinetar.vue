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
    "Self Storage Real Estate Marketing Case Study: Brand, Website, and Visual Assets",
  description:
    "Complete branding and web design solution for a construction company",
  year: 2024,
  client: "PineTar Self Storage",
  services: ["Web Design", "Branding", "Logo Design", "Marketing Materials"],
  heroImage: "/images/web-design/pinetar/pinetar-hero.png",
  websiteUrl: "http://pinetarselfstorage.com",
  challenge:
    "PineTar Self Storage needed a modern, professional online presence that would showcase their storage facilities and establish trust with potential clients.",
  approach:
    "We developed a complete brand identity system starting with logo design and extending through all marketing materials, then built a modern, responsive website optimized for mobile users and lead generation.",
  solution:
    "We created a comprehensive brand identity and responsive website that highlights their expertise and facility portfolio.",
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

<template>
  <ProjectsSpotlightLayout2 :project="project" />
</template>
