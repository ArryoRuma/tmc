<script setup>
// Additional projects not in ProjectsPortfolio
// TODO: Ensure that these pages contain links back to /projects page using ProjectsBackToAllProjectsButton component
const additionalProjects = ref([
  {
    title:
      "Industrial Snow Removal Marketing Case Study: 9.1x Growth in One Year",
    to: "/projects/advanced-snow-management",
    thumbnail: "/images/projects/thumbnails/snow-removal.jpg",
    tags: [
      "Industrial Marketing Strategy",
      "Proposal & RFP Support",
      "Sales Messaging & Positioning",
    ],
    client_type: "Commercial Snow & Ice Management Client",
    year: 2024,
  },
  {
    title:
      "B2B Electronics Marketplace Case Study: Seller Re-Activation and Outbound Growth",
    to: "/projects/bidchip",
    thumbnail: "/images/projects/thumbnails/bidchip.png",
    tags: [
      "Activation & Re-Engagement Strategy",
      "Outbound Campaign Design",
      "Sales Messaging & Email Systems",
    ],
    client_type: "B2B E-commerce Semiconductor Client",
    year: 2024,
  },
  {
    title:
      "Local Hair Salon Marketing Case Study: Retention, SEO, and Paid Ads",
    to: "/projects/cut-artisan-hair-design",
    thumbnail: "/images/projects/thumbnails/hair-salon.jpg",
    tags: [
      "Local SEO Strategy",
      "Client Retention & Re-Engagement Campaigns",
      "Paid Ads Strategy",
    ],
    client_type: "High-End Local Hair Salon Client",
    year: 2024,
  },
  {
    title:
      "Financial Consulting Lead Generation Case Study: Outbound Sales System",
    to: "/projects/ici-consulting",
    thumbnail: "/images/projects/thumbnails/ici-consulting.jpg",
    tags: [
      "Outbound Strategy & Campaign Design",
      "Sales Messaging & Positioning",
      "Sales Enablement & Performance Tracking",
    ],
    client_type: "Financial Consulting Client",
    year: 2024,
  },
  {
    title: "Meal Prep E-Commerce Case Study: Shopify 2.0 UX and Conversion",
    to: "/projects/nourish-to-heal-2",
    thumbnail: "/images/web-design/nourish-to-heal/nourish-to-heal-hero.png",
    tags: [
      "Shopify 2.0 Web Design",
      "UX & Conversion Strategy",
      "Brand Messaging & Positioning",
    ],
    client_type: "Meal Prep and Nutrition Brand Client",
    year: 2024,
  },
]);
</script>

<template>
  <div>
    <ProjectsPortfolio />

    <!-- Additional Projects Section -->
    <FadeInUp>
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold mb-8">More Projects</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeInUp
            v-for="(project, index) in additionalProjects"
            :key="project.to"
            :delay="index * 0.2"
          >
            <NuxtLink :to="project.to" class="group block cursor-pointer">
              <img
                v-if="project.thumbnail"
                :src="project.thumbnail"
                class="rounded-xl w-full h-56 object-cover object-top shadow-lg drop-shadow-lg group-hover:shadow-xl group-hover:drop-shadow-xl transition-all duration-300"
              />
              <div
                v-else
                class="rounded-xl w-full h-56 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 shadow-lg drop-shadow-lg group-hover:shadow-xl group-hover:drop-shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <span
                  class="text-primary-700 dark:text-primary-200 font-bold text-2xl"
                >
                  {{ project.title }}
                </span>
              </div>
              <h3
                class="mt-4 font-bold text-xl group-hover:text-primary transition"
              >
                {{ project.title }}
              </h3>
              <p v-if="project.client_type" class="text-primary-400 text-sm">
                {{ project.client_type }}
              </p>
              <div v-if="project.tags" class="flex flex-wrap gap-2 mt-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs"
                >
                  {{ tag }}
                </span>
              </div>
            </NuxtLink>
          </FadeInUp>
        </div>
      </div>
    </FadeInUp>
  </div>
</template>
