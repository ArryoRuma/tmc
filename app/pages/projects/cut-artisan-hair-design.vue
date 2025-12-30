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
  galleryImages?: string[];
}

const project: Project = {
  title:
    "How Cut. artisan. hair. design. Increased Retention and Local Visibility with a Client Growth System",
  description:
    "SEO, retention, and paid media strategy for a high-end local hair salon focused on repeat business and predictable growth.",
  year: 2024,
  client: "Cut. artisan. hair. design.",
  services: [
    "Local SEO Strategy",
    "Google Business Profile Optimization",
    "Client Retention & Re-Engagement Campaigns",
    "Paid Ads Strategy",
    "Marketing Systems & Reporting",
  ],
  heroImage: "",
  beforeImage: "",
  afterImage: "",
  websiteUrl: "",
  challenge:
    "Cut. artisan. hair. design. delivered a premium in-salon experience, but growth was inconsistent. Client churn, underutilized rebooking, and weak local visibility limited revenue despite strong demand and talented stylists.",
  approach:
    "We focused on increasing lifetime value before chasing more new clients by improving local search visibility, strengthening rebooking and retention systems, and aligning paid ads with real business goals instead of vanity metrics.",
  solution:
    "We implemented a client growth system that combined local SEO and Google Business optimization with targeted re-engagement campaigns and paid ads. The strategy emphasized repeat visits, predictable bookings, and clearer performance tracking for the owner and stylists.",
  results: [
    "Improved client retention and rebooking consistency",
    "Stronger local search presence and Google Maps visibility",
    "More predictable monthly revenue from repeat clients",
    "Clearer insight into marketing performance and client behavior",
    "Reduced reliance on constant new-client acquisition",
  ],
  galleryImages: [],
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
