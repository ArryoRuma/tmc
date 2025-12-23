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
    "Nascar Driver Cody Ware Boosts Fan Engagement with Dynamic Video Content",
  description:
    "Video production and digital marketing strategy for NASCAR driver Cody Ware to enhance fan engagement and brand visibility.",
  year: 2024,
  client: "Cody Ware",
  services: [
    "Video Production",
    "Digital Marketing",
    "Content Strategy",
    "Social Media Management",
  ],
  heroImage: "/images/projects/nascar-cody-ware/nascar-cody-ware-hero.png",
  beforeImage: "/images/projects/nascar-cody-ware/nascar-cody-ware-before.png",
  afterImage: "/images/projects/nascar-cody-ware/nascar-cody-ware-after.png",
  websiteUrl: "https://vimeo.com/812175432/1d898d2c46?fl=pl&fe=sh",
  challenge:
    "Cody Ware needed dynamic video content and a digital marketing strategy to boost fan engagement and increase brand visibility in the competitive NASCAR environment.",
  approach:
    "We focused on creating engaging video content tailored to Cody Ware’s fan base, leveraging social media platforms and targeted digital campaigns to maximize reach and interaction.",
  solution:
    "We produced high-quality videos and implemented a comprehensive digital marketing plan that included content strategy and social media management to enhance fan connection and brand presence.",
  results: [
    "Professional brand recognition",
    "Increased fan engagement",
    "Enhanced social media presence",
    "Higher visibility in the NASCAR community",
  ],
};

useSeoMeta({
  title: `${project.title} - TruMedia Creative Portfolio`,
  description: project.description,
  ogTitle: `${project.title} - TruMedia Creative Portfolio`,
  ogDescription: project.description,
});
</script>

<!-- TODO: verify this page is consistent with other project pages
TODO: replace the before and after with an embedded video from the project -->
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
