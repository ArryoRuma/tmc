<script setup>
// Temporary static data to test the page layout
const projects = ref([
  {
    _path: "/projects/pjpolke",
    title:
      "Manufacturing Rep Website Redesign Case Study: Modern Brand and Lead-Ready Site",
    to: "/projects/pjpolke",
    thumbnail: "/images/web-design/pjpolke/pjpolke-hero.png",
    tags: ["Web Design", "Branding"],
    client_type: "Manufacturing Client",
    year: 2024,
  },
  {
    _path: "/projects/pinetar",
    title:
      "Self Storage Real Estate Marketing Case Study: Brand, Website, and Visual Assets",
    to: "/projects/pinetar",
    thumbnail: "/images/web-design/pinetar/pinetar-hero.png",
    tags: ["Web Design", "Branding", "Video", "Photography"],
    client_type: "Real Estate Developer",
    year: 2025,
  },
  {
    _path: "/projects/zero-surge",
    title:
      "Electronics Manufacturing Marketing Case Study: E-Commerce, SEO, and Lead Generation",
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
    title:
      "Meal Prep Brand E-Commerce Case Study: Website, SEO, and Online Ordering",
    to: "/projects/nourish-to-heal",
    thumbnail: "/images/web-design/nourish-to-heal/nourish-to-heal-hero.png",
    tags: ["Web Design", "Branding", "Photography", "SEO", "E-Commerce"],
    client_type: "Food Services Client",
    year: 2025,
  },
  {
    _path: "/projects/nascar-cody-ware",
    disabled: true,
    title: "Motorsports Brand Video Case Study: Social and Promotional Content",
    to: "/projects/nascar-cody-ware",
    thumbnail: "/images/video/nascar-cody-ware/nascar-cody-ware-hero.png",
    tags: ["Brand Video", "Social Media Videos", "Photography"],
    client_type: "Brand Activation Client",
    year: 2023,
  },
  {
    _path: "/projects/tree-staple",
    title:
      "Tree Staple Product Video Case Study: Visual Proof for Contractors & Municipal Buyers",
    to: "/projects/tree-staple",
    thumbnail: "/images/video/tree-staple/tree-staple-hero.png",
    tags: ["Video", "Motion Graphics", "Dealer Enablement"],
    client_type: "Manufacturing Client",
    year: 2024,
  },
  {
    _path: "/projects/fiddlers-elbow-country-club",
    title:
      "Country Club AV System Case Study: Complete Lighting System Redesign",
    to: "/projects/fiddlers-elbow-country-club",
    thumbnail: "/images/projects/thumbnails/fiddlers-elbow.jpg",
    tags: ["AV System Design", "Lighting Installation", "System Integration"],
    client_type: "Country Club & Entertainment Venue",
    year: 2025,
  },
]);
</script>

<template>
  <FadeInUp>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Recent Projects & Case Studies</h1>

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
</template>
