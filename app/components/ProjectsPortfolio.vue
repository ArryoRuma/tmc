<script setup>
// Temporary static data to test the page layout
const projects = ref([
  {
    _path: "/projects/pjpolke",
    title: "PJ Polke",
    to: "/projects/pjpolke",
    thumbnail: "/images/web-design/pjpolke/pjpolke-hero.png",
    tags: ["Web Design", "Branding"],
    client_type: "Manufacturing Client",
    year: 2024,
  },
  {
    _path: "/projects/pinetar",
    title: "PineTar Self Storage",
    to: "/projects/pinetar",
    thumbnail: "/images/web-design/pinetar/pinetar-hero.png",
    tags: ["Web Design", "Branding", "Video", "Photography"],
    client_type: "Real Estate Developer",
    year: 2025,
  },
  {
    _path: "/projects/zero-surge",
    title: "ZeroSurge",
    to: "/projects/zero-surge",
    thumbnail: "/images/web-design/zero-surge/zero-surge-hero.png",
    tags: [
      "Web Design",
      "Branding",
      "Photography",
      "E-Commerce",
      "SEO",
      "Google Ads",
      "Lead Generation",
    ],
    client_type: "Electronics Manufacturing Client",
    year: 2024,
  },
  {
    _path: "/projects/nourish-to-heal",
    title: "Nourish To Heal",
    to: "/projects/nourish-to-heal",
    thumbnail: "/images/web-design/nourish-to-heal/nourish-to-heal-hero.png",
    tags: ["Web Design", "Branding", "Photography", "SEO", "E-Commerce"],
    client_type: "Food Services Client",
    year: 2025,
  },
  {
    _path: "/projects/nascar-cody-ware",
    disabled: true,
    title: "NASCAR Cody Ware",
    to: "https://vimeo.com/812175432/1d898d2c46?share=copy&fl=sv&fe=ci",
    thumbnail: "/images/video/nascar-cody-ware/nascar-cody-ware-hero.png",
    tags: ["Brand Video", "Social Media Videos", "Photography"],
    client_type: "Brand Activation Client",
    year: 2023,
  },
  {
    _path: "/projects/tree-staple",
    title: "Tree Staple",
    to: "https://www.youtube.com/watch?v=K8UacQUK0Ik",
    thumbnail: "/images/video/tree-staple/tree-staple-hero.png",
    tags: ["Video", "Marketing Materials", "Photography"],
    client_type: "Manufacturing Client",
    year: 2023,
  },
  {
    _path: "/projects/advanced-snow-management",
    title: "Advanced Snow Management",
    to: "/projects/advanced-snow-management",
    thumbnail: "",
    tags: [
      "Industrial Marketing",
      "Proposal Strategy",
      "Sales Enablement",
      "Video",
    ],
    client_type: "Commercial Snow & Ice Management",
    year: 2024,
  },
  {
    _path: "/projects/bidchip",
    title: "BidChip",
    to: "/projects/bidchip",
    thumbnail: "",
    tags: [
      "Activation Strategy",
      "Outbound Campaign",
      "Sales Messaging",
      "Performance Tracking",
    ],
    client_type: "B2B Electronics Marketplace",
    year: 2024,
  },
  {
    _path: "/projects/cut-artisan-hair-design",
    title: "Cut. artisan. hair. design.",
    to: "/projects/cut-artisan-hair-design",
    thumbnail: "",
    tags: ["Local SEO", "Client Retention", "Paid Ads", "Marketing Systems"],
    client_type: "Hair Salon",
    year: 2024,
  },
  {
    _path: "/projects/ici-consulting",
    title: "ICI Consulting",
    to: "/projects/ici-consulting",
    thumbnail: "",
    tags: [
      "Outbound Strategy",
      "ICP Definition",
      "Sales Messaging",
      "Cold Email",
      "Sales Enablement",
    ],
    client_type: "Financial Consulting Firm",
    year: 2024,
  },
  {
    _path: "/projects/nourish-to-heal-2",
    title: "Nourish to Heal - E-Commerce Transformation",
    to: "/projects/nourish-to-heal-2",
    thumbnail: "/images/web-design/nourish-to-heal/nourish-to-heal-hero.png",
    tags: [
      "Shopify 2.0",
      "Web Design",
      "UX Strategy",
      "E-Commerce",
      "Brand Messaging",
    ],
    client_type: "Meal Prep & Nutrition Brand",
    year: 2024,
  },
]);
</script>

<template>
  <FadeInUp>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Recent Projects</h1>

      <div v-if="!projects || projects.length === 0" class="text-center py-8">
        <p class="text-gray-600">No projects found.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FadeInUp
          v-for="(project, index) in projects"
          :key="project._path"
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
              <span class="text-primary-600 dark:text-primary-300 font-bold text-2xl">
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
</template>
