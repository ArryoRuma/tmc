<script setup lang="ts">
// TODO: Move these footer columns into the content/ tree (or a navigation config) so copy/URLs stay versioned with the rest of the marketing site.
const columns = [
  {
    label: "Solutions",
    children: [
      {
        label: "Clarify Your Message",
        to: "/solutions/clarify-your-message",
        icon: "i-lucide-award",
        disabled: false,
      },
      {
        label: "Get More Leads",
        to: "/solutions/get-more-leads",
        icon: "i-lucide-user-search",
        disabled: false,
      },
      {
        label: "Speed Up Sales",
        to: "/solutions/speed-up-sales",
        icon: "i-lucide-refresh-ccw",
        disabled: false,
      },
      {
        label: "Reach More Buyers",
        to: "/solutions/reach-more-buyers",
        icon: "i-lucide-expand",
        disabled: false,
      },
      {
        label: "Keep Customers Longer",
        to: "/solutions/keep-customers-longer",
        icon: "i-lucide-chart-no-axes-combined",
        disabled: false,
      },
      {
        label: "Fix Your Live Stream",
        to: "/solutions/fix-your-live-stream-and-events",
        icon: "i-lucide-video",
        disabled: false,
      },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "Video Production",
        to: "/services/video-growth-engine",
        icon: "i-lucide-video",
        disabled: false,
      },
      {
        label: "Outbound Marketing",
        to: "/services/outreach-engine",
        icon: "i-lucide-send",
        disabled: false,
      },
      {
        label: "Website Design",
        to: "/services/web-design",
        icon: "i-lucide-layout-dashboard",
        disabled: false,
      },
      {
        label: "SEO & Paid Ads",
        to: "/services/seo-and-paid-ads",
        icon: "i-lucide-mouse-pointer-click",
        disabled: false,
      },
      {
        label: "Marketing Automation",
        to: "/services/marketing-automation",
        icon: "i-lucide-bot",
        disabled: false,
      },
      {
        label: "Content Creation",
        to: "/services/content-creation",
        icon: "i-lucide-edit-3",
        disabled: true,
      },
    ],
  },
  {
    label: "Industries We Serve",
    children: [
      {
        label: "Industrial",
        to: "/industries/contractors-manufactures",
        icon: "i-lucide-hammer",
        disabled: false,
      },
      {
        label: "Financial Services",
        to: "/industries/financial-services",
        icon: "i-lucide-banknote",
        disabled: false,
      },
      {
        label: "Food Services",
        to: "/industries/food-services",
        icon: "i-lucide-utensils",
        disabled: false,
      },
      {
        label: "Health & Wellness",
        to: "/industries/health-and-wellness",
        icon: "i-lucide-heart-pulse",
        disabled: false,
      },
      {
        label: "Non-Profits",
        to: "/industries/non-profits",
        icon: "i-lucide-heart",
        disabled: false,
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Guides",
        to: "/resources/guides",
        icon: "i-lucide-book-open",
        disabled: true,
      },
      {
        label: "Tutorials",
        to: "/resources/tutorials",
        icon: "i-lucide-video",
        disabled: true,
      },
      {
        label: "Case Studies",
        to: "/resources/case-studies",
        icon: "i-lucide-file-text",
        disabled: true,
      },
      {
        label: "Blog",
        to: "/resources/blog",
        icon: "i-lucide-edit-3",
        disabled: true,
      },
      {
        label: "Media Kit",
        to: "/resources/media-kit",
        icon: "i-lucide-download",
        disabled: true,
      },
    ],
  },
];
</script>

<template>
  <USeparator class="h-px" color="primary" />

  <UFooter :ui="{ top: 'border-b border-default' }" class="bg-zinc-900">
    <template #top>
      <UContainer class="text-primary-500 w-full">
        <UFooterColumns
          class="xl:grid-cols-2 gap-12 sm"
          :columns="columns"
          :ui="{
            link: 'text-primary-50 hover:text-primary-400',
            label: 'text-lg',
          }"
        />
      </UContainer>
    </template>

    <template #left>
      <div class="flex items-center space-x-4">
        <p class="font-semibold text-sm text-white">
          TruMedia Creative • © {{ new Date().getFullYear() }}
        </p>
        <UButton
          to="/privacy"
          variant="link"
          size="sm"
          class="text-sm text-white hover:text-primary"
        >
          Privacy Policy
        </UButton>
      </div>
    </template>

    <template #right>
      <!-- TODO: Extract social buttons into a reusable <SocialLinks /> cluster shared with hero/contact sections. -->
      <UButton
        to="https://www.linkedin.com/company/trumedia-creative/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="TruMedia Creative on LinkedIn"
        color="primary"
        variant="ghost"
        size="xl"
      />
      <UButton
        to="https://www.youtube.com/@TruMedia-Creative"
        target="_blank"
        icon="i-simple-icons-youtube"
        aria-label="TruMedia Creative on YouTube"
        color="primary"
        variant="ghost"
        size="xl"
      />
    </template>
  </UFooter>
</template>
