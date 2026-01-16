<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title: "Motorsports Brand Video Case Study: Social and Promotional Content",
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
  heroImage: "/images/video/nascar-cody-ware/nascar-cody-ware-hero.png",
  websiteUrl: "https://vimeo.com/812175432/1d898d2c46?fl=pl&fe=sh",
  challenge:
    "Cody Ware needed dynamic video content and a digital marketing strategy to boost fan engagement and increase brand visibility in the competitive NASCAR environment.",
  outcomes:
    "We focused on creating engaging video content tailored to Cody Ware's fan base, leveraging social media platforms and targeted digital campaigns to maximize reach and interaction.",
  solution:
    "We produced high-quality videos and implemented a comprehensive digital marketing plan that included content strategy and social media management to enhance fan connection and brand presence.",
  results: [
    "Professional brand recognition",
    "Increased fan engagement",
    "Enhanced social media presence",
    "Higher visibility in the NASCAR community",
  ],
};
</script>

<template>
  <ProjectsSpotlightLayout2 :project="project" />
</template>
