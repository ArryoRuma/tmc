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
  videoUrl?: string;
  posterImage?: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  results?: string[];
  galleryImages?: string[];
}

const project: Project = {
  title:
    "How Advanced Snow Management Won and Scaled Large Industrial Contracts with Clear Positioning and Proposals",
  description:
    "Industrial marketing, proposal strategy, and sales enablement for a commercial snow and ice management company.",
  year: 2024,
  client: "Advanced Snow Management",
  services: [
    "Industrial Marketing Strategy",
    "Proposal & RFP Support",
    "Sales Messaging & Positioning",
    "Video & Visual Sales Assets",
    "Deal Structuring & Sales Enablement",
  ],
  heroImage: "",
  beforeImage: "",
  afterImage: "",
  websiteUrl: "",
  videoUrl: "",
  posterImage: "",
  challenge:
    "Advanced Snow Management was pursuing large industrial and enterprise snow removal contracts with long sales cycles, complex scopes, and multiple decision-makers. Winning required more than competitive pricing—it required clarity, credibility, and confidence at every stage of the buying process.",
  approach:
    "We focused on positioning Advanced Snow Management as a reliable, enterprise-ready partner by clarifying service scope, operational capacity, and risk mitigation. Proposals and sales materials were designed to reduce uncertainty and help buying committees justify decisions internally.",
  solution:
    "We developed structured proposals, messaging frameworks, and supporting visual assets that clearly communicated capabilities, process, and scale. These assets helped align stakeholders, reduce back-and-forth during negotiations, and support high-value contract decisions.",
  results: [
    "Successful acquisition of large industrial and multi-site contracts",
    "Improved clarity and confidence for buying committees during evaluations",
    "More professional and consistent proposal presentation",
    "Reduced friction during late-stage sales and contract discussions",
    "Stronger positioning as an enterprise-capable snow management partner",
  ],
  galleryImages: [],
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

<!-- TODO: verify this page is consistent with other project pages
TODO: add in case study placeholder
 -->
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
    <ProjectsVideo
      :video-url="project.videoUrl"
      :poster-image="project.posterImage"
      :title="`${project.client} Project Video`"
    />
    <ProjectsImage
      :image="project.heroImage"
      :title="project.title"
      :website-url="project.websiteUrl"
    />
    <ProjectsGallery
      :images="project.galleryImages"
      :title="`${project.client} Photo Gallery`"
    />
    <ProjectsResults :results="project.results" />
  </div>
</template>
