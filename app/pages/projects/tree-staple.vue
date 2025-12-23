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
    "How Nourish to Heal Transformed a Great Meal Prep Brand into a Scalable E-Commerce System",
  description:
    "Shopify 2.0 rebuild and operational strategy for a growing meal prep and nutrition brand.",
  year: 2024,
  client: "Nourish to Heal",
  services: [
    "Shopify 2.0 Web Design",
    "UX & Conversion Strategy",
    "Brand Messaging & Positioning",
    "Product & Collection Data Structuring",
    "Retention & Re-Engagement Foundation",
  ],
  heroImage: "/images/web-design/nourish-to-heal/nourish-to-heal-hero.png",
  beforeImage: "/images/web-design/nourish-to-heal/nourish-to-heal-before.png",
  afterImage: "/images/web-design/nourish-to-heal/nourish-to-heal-after.png",
  websiteUrl: "https://cw6cbq-yp.myshopify.com",
  challenge:
    "Nourish to Heal had a strong product and loyal customers, but their website and backend systems weren’t built to support how meal prep customers actually buy, subscribe, and reorder. Growth increased operational complexity, manual work, and customer friction.",
  approach:
    "We rebuilt the website around a macro-first, meal-centric buying experience and simplified subscriptions, reorders, and menu updates to reduce decision fatigue for customers and operational strain for the team.",
  solution:
    "We delivered a Shopify 2.0 rebuild designed specifically for food-based e-commerce, structuring meals, macros, and subscriptions in a scalable system that supports growth, retention, and operational efficiency.",
  results: [
    "Clearer buying experience with reduced customer decision fatigue",
    "Simplified ordering process",
    "Reduced manual updates and operational friction",
    "Foundation for scalable growth and customer retention",
    "Faster menu and product updates without risking site breakage or fulfillment errors",
    "Improved customer confidence at checkout through clearer dietary, allergen, and meal information",
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
TODO: remove before and after, and replace with the video and short case study -->
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
