<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  year?: number;
  client?: string;
  services?: string[];
  heroImage?: string;
  websiteUrl?: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  results?: string[];
}

const project: Project = {
  title:
    "How ICI Consulting Engineered Predictable High-Value Conversations with a Targeted Outreach System",
  description:
    "Outbound strategy, messaging, and sales enablement for a financial consulting firm serving banks and credit unions.",
  year: 2024,
  client: "ICI Consulting",
  services: [
    "Outbound Strategy & Campaign Design",
    "ICP Definition & Account Targeting",
    "Sales Messaging & Positioning",
    "Cold Email & Outreach Systems",
    "Sales Enablement & Performance Tracking",
  ],
  heroImage: "",
  websiteUrl: "",
  challenge:
    "ICI Consulting offers high-value advisory services to banks and credit unions, but growth depended heavily on referrals and inconsistent outbound efforts. Long sales cycles and multiple stakeholders made it difficult to generate predictable, qualified conversations at scale.",
  approach:
    "We focused on clarity before volume—defining ideal accounts, decision-maker roles, and core value narratives. Outreach was designed to open informed conversations, not push immediate sales, and to support long, consultative buying processes.",
  solution:
    "We built a targeted outbound system that combined precise account selection, role-specific messaging, and structured follow-up. Campaigns were designed to position ICI as a trusted advisor, initiate meaningful conversations, and support deal progression over time.",
  results: [
    "More consistent, qualified conversations with target institutions",
    "Improved response quality from senior decision-makers",
    "Clearer positioning as a strategic advisor rather than a vendor",
    "Repeatable outbound process instead of referral-only growth",
    "Better visibility into outreach performance and pipeline health",
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
    <div class="bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold mb-4 text-center">
            Client Testimonials & Project Screenshots
          </h3>
          <p class="text-center text-gray-600 dark:text-gray-300 mb-8">
            Coming soon - testimonials and visual assets from this project
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImagePlaceholder>
              <p class="text-gray-400 dark:text-gray-500 text-sm">
                Testimonial Placeholder
              </p>
            </ImagePlaceholder>
            <ImagePlaceholder>
              <p class="text-gray-400 dark:text-gray-500 text-sm">
                Screenshot Placeholder
              </p>
            </ImagePlaceholder>
          </div>
        </div>
      </div>
    </div>
    <ProjectsImage
      :image="project.heroImage"
      :title="project.title"
      :website-url="project.websiteUrl"
    />
    <ProjectsResults :results="project.results" />
  </div>
</template>
