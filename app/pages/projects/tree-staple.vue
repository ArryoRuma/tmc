<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title:
    "Manufacturing Product Video Case Study: Marketing and Sales Assets",
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
</script>

<template>
  <BaseProject :project="project" />
</template>
