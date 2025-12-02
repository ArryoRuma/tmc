<script setup>
import { ref } from 'vue'

const activeTab = ref('after')

// Static data for PJ Polke project
const project = {
  title: 'PJ Polke',
  description: 'Complete branding and web design solution for a construction company',
  year: 2024,
  client: 'PJ Polke Construction',
  services: ['Web Design', 'Photography', 'Marketing Materials', 'SEO'],
  heroImage: '/images/web-design/pjpolke/pjpolke-hero.png',
  beforeImage: '/images/web-design/pjpolke/pjpolke-before.png',
  afterImage: '/images/web-design/pjpolke/pjpolke-after.png',
  websiteUrl: 'https://pjpolke.com',
  challenge: 'PJ Polke needed a modern, professional online presence that would showcase their construction projects and establish trust with potential clients.',
  solution: 'We created a comprehensive brand identity and responsive website that highlights their expertise and project portfolio.',
  results: ['50% increase in lead generation', 'Professional brand recognition', 'Mobile-optimized user experience']
}

useSeoMeta({
  title: `${project.title} - TruMedia Creative Portfolio`,
  description: project.description,
  ogTitle: `${project.title} - TruMedia Creative Portfolio`,
  ogDescription: project.description
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-primary/10 to-blue-600/10 py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            {{ project.title }}
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-sm mb-8">
            <span class="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow">
              <strong>Year:</strong> {{ project.year }}
            </span>
            <span class="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow">
              <strong>Client:</strong> {{ project.client }}
            </span>
          </div>

          <!-- View Live Website Button -->
          <a
            :href="project.websiteUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            <span>View Live Website</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Project Image -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <a
          :href="project.websiteUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="block group cursor-pointer"
        >
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              :src="project.heroImage"
              :alt="project.title"
              class="w-full h-128 object-cover object-top transition-transform duration-500 group-hover:scale-105"
            >
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="bg-white/90 dark:bg-gray-900/90 px-4 py-2 rounded-lg flex items-center space-x-2">
                <span class="font-semibold">Visit Website</span>
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- Project Details -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <!-- Services -->
        <div>
          <h3 class="text-2xl font-bold mb-6">
            Services Provided
          </h3>
          <div class="space-y-3">
            <div
              v-for="service in project.services"
              :key="service"
              class="flex items-center space-x-3"
            >
              <div class="w-2 h-2 bg-primary rounded-full" />
              <span>{{ service }}</span>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-2xl font-bold mb-6">
            Services Used
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="service in project.services"
              :key="service"
              class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
            >
              {{ service }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Challenge & Solution -->
    <div class="bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-2xl font-bold mb-6">
                The Challenge
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ project.challenge }}
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-6">
                Our Solution
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ project.solution }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Results -->
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-2xl font-bold mb-8 text-center">
          Results Achieved
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="result in project.results"
            :key="result"
            class="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                class="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p class="font-semibold">
              {{ result }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Before/After Comparison -->
    <div class="bg-gray-50 dark:bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold mb-8 text-center">
            Before & After
          </h3>
          <p class="text-center text-gray-600 dark:text-gray-300 mb-8">
            See the transformation from the old website to our modern design
          </p>

          <!-- Tab Navigation -->
          <div class="flex justify-center mb-8">
            <div class="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md">
              <button
                :class="[
                  'px-6 py-3 rounded-md font-semibold transition-all duration-200',
                  activeTab === 'before'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                ]"
                @click="activeTab = 'before'"
              >
                Before
              </button>
              <button
                :class="[
                  'px-6 py-3 rounded-md font-semibold transition-all duration-200',
                  activeTab === 'after'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                ]"
                @click="activeTab = 'after'"
              >
                After
              </button>
            </div>
          </div>

          <!-- Image Display -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9]">
            <transition
              name="fade"
              mode="out-in"
            >
              <div
                v-if="activeTab === 'before'"
                key="before"
                class="absolute inset-0 overflow-auto"
              >
                <img
                  :src="project.beforeImage"
                  alt="Before - Old Website"
                  class="w-full min-h-full object-cover object-top"
                >
                <div class="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  Before
                </div>
              </div>
              <div
                v-else
                key="after"
                class="absolute inset-0 overflow-auto"
              >
                <img
                  :src="project.afterImage"
                  alt="After - New Website"
                  class="w-full min-h-full object-cover object-top"
                >
                <div class="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  After
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <!-- Back to Projects -->
    <div class="container mx-auto px-4 pb-16">
      <div class="text-center">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to All Projects</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
