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
}

const project: Project = {
  title:
    "Motorsports Brand Video Case Study: Social and Promotional Content",
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
  videoUrl: "",
  posterImage: "",
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

<!-- TODO: verify this page is consistent with other project pages -->
<template>
  <div>
    <ProjectsHero :project="project" />
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
    <ProjectsResults :results="project.results" />
  </div>
</template>
