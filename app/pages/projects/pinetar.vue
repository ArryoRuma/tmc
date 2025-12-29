<script setup>
// Static data for PJ Polke project
const project = {
  title: "PineTar Self Storage",
  description:
    "Complete branding and web design solution for a construction company",
  year: 2024,
  client: "PineTar Self Storage",
  services: ["Web Design", "Branding", "Logo Design", "Marketing Materials"],
  technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS"],
  heroImage: "/images/web-design/pinetar/pinetar-hero.png",
  websiteUrl: "http://pinetarselfstorage.com",
  challenge:
    "PineTar Self Storage needed a modern, professional online presence that would showcase their storage facilities and establish trust with potential clients.",
  solution:
    "We created a comprehensive brand identity and responsive website that highlights their expertise and facility portfolio.",
  results: [
    "50% increase in lead generation",
    "Professional brand recognition",
    "Mobile-optimized user experience",
  ],
};

useSeoMeta({
  title: `${project.title} - TruMedia Creative Portfolio`,
  description: project.description,
  ogTitle: `${project.title} - TruMedia Creative Portfolio`,
  ogDescription: project.description,
});
</script>

<!-- TODO: verify this page is consistent with other project pages like nourish-to-heal-2 by using the ProjectsSpotlight2 component(s) -->
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
    <ProjectsImage
      :image="project.heroImage"
      :title="project.title"
      :website-url="project.websiteUrl"
    />
    <ProjectsResults :results="project.results" />
  </div>
</template>
