<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title:
    "Manufacturing Rep Website Redesign Case Study: Modern Brand and Lead-Ready Site",
  description:
    "Complete branding revamp and web design solution for a Manufacturing Representative Company.",
  year: 2024,
  client: "PJ Polke",
  services: [
    "Web Design",
    "Photography",
    "Marketing Materials",
    "SEO",
    "Manufacturer Line Positioning",
  ],
  heroImage: "/images/web-design/pjpolke/pjpolke-hero.png",
  beforeImage: "/images/web-design/pjpolke/pjpolke-before.png",
  afterImage: "/images/web-design/pjpolke/pjpolke-after.png",
  websiteUrl: "https://pjpolke.com",
  challenge:
    "PJ Polke represents industrial manufacturers, but their site read like a general construction portfolio and buried the product lines reps needed to feature.",
  approach:
    "We reorganized the site around the manufacturers they represent, crafted positioning for each line, and created photography that speaks to specifiers and procurement teams.",
  solution:
    "A modern brand system, responsive website, and marketing kit that highlights partner brands, makes contact paths obvious, and reinforces PJ Polke’s role as a trusted manufacturer rep.",
  results: [
    "Refined copy that clearly positions PJ Polke as a manufacturer rep—not a contractor",
    "Product-line specific landing areas that make it easy for vendors and buyers to connect",
    "Mobile-optimized experience for field teams sharing links on-site",
  ],
};
</script>

<template>
  <ProjectsSpotlightLayout2 :project="project" />
</template>
