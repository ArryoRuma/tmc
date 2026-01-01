<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title:
    "Electronics Manufacturing Marketing Case Study: E-Commerce, SEO, and Lead Generation",
  description:
    "Video-led messaging and positioning system for a surge protection manufacturer with multiple buyer audiences.",
  year: 2025,
  client: "ZeroSurge",
  services: [
    "Messaging Strategy",
    "Video Production",
    "Sales Enablement",
    "Website Strategy",
  ],
  heroImage: "/images/web-design/zero-surge/zero-surge-hero.png",
  beforeImage: "/images/web-design/zero-surge/zero-surge-before.png",
  afterImage: "/images/web-design/zero-surge/zero-surge-after.png",
  websiteUrl: "https://zerosurge.com",
  challenge:
    "ZeroSurge's products served multiple audiences with very different needs, but their website and messaging treated everything the same. Prospects struggled to understand which solutions applied to them, why ZeroSurge was different from traditional surge protectors, and how to justify the higher upfront cost internally.",
  approach:
    "We separated audiences and product lines, clarified ZeroSurge's core differentiator, and used educational video to answer the most common pre-sales questions before prospects ever spoke to sales.",
  solution:
    "We developed a sales-ready video and messaging system that explains series-mode surge protection, addresses common objections, and guides buyers to the right solution. Content was designed to be deployable by sales teams during live deals and paired with a clear bridge between educational content and the e-commerce experience.",
  results: [
    "Reduced time spent on basic product education during sales calls",
    "Clearer differentiation between product lines and buyer use cases",
    "Stronger internal buy-in from multi-stakeholder buying committees",
    "Content that actively supports deals instead of sitting unused",
  ],
};
</script>

<template>
  <BaseProject :project="project" />
</template>
