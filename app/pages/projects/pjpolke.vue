<script setup lang="ts">
import type { Project } from "~/types/project";

const project: Project = {
  title:
    "Manufacturing Rep Website Redesign Case Study: Modern Brand and Lead-Ready Site",
  description:
    "Complete branding revamp and web design solution for a Manufacturing Representative Company.",
  year: 2024,
  client: "PJ Polke",
  services: [
    "Web Design",
    "Photography",
    "Marketing Materials",
    "SEO",
    "Manufacturer Line Positioning",
  ],
  heroImage: "/images/web-design/pjpolke/pjpolke-hero.png",
  beforeImage: "/images/web-design/pjpolke/pjpolke-before.png",
  afterImage: "/images/web-design/pjpolke/pjpolke-after.png",
  websiteUrl: "https://pjpolke.com",
  challenge:
    "PJ Polke Company, a respected architectural door and hardware representative with over 75 years of experience in the New York Metro area, set out to refresh its online presence to match the strength of its reputation. Despite decades of trusted relationships and a diverse portfolio of leading manufacturers, the company’s digital footprint had not kept pace with the evolving expectations of the industry—especially as a new wave of younger talent joined the organization. Operating in a competitive, relationship-driven market where first impressions increasingly happen online, PJ Polke faced the challenge of translating its legacy, expertise, and problem-solving mindset into a modern website that could support growth, recruitment, and long-term partnerships.",
  outcomes:
    "PJ Polke Company’s website redesign successfully bridged the gap between legacy and modernity—positioning the brand for continued relevance in a relationship-driven, digitally influenced market. The combination of refreshed messaging, improved site structure, and cohesive visual identity strengthened credibility with manufacturers and distributors while making engagement more intuitive. By aligning the digital experience with PJ Polke’s core values—local expertise, longevity, and integrity—the new site now serves as a confident introduction to the company and its team, supporting ongoing conversations and partnership development.",
  solution:
    "We led a full website redesign to reposition PJ Polke Company as a modern, relationship-driven architectural hardware representative while preserving the credibility and trust built over more than 75 years in the New York Metro market. The new site was strategically structured to speak directly to manufacturers and distributors, clarifying PJ Polke’s role, expertise, and value through refined messaging, simplified navigation, and a more intuitive contact and inquiry flow. SEO best practices were integrated throughout the site architecture and copy to improve visibility and ensure the brand could be discovered by partners actively searching for representation and solutions. To support the digital refresh, we produced a complete set of professional headshots for the entire team—introducing a strong visual layer that reinforced outcomesability, professionalism, and relationship-first values. These assets humanized the brand and aligned the online experience with the people-driven nature of PJ Polke’s business. Together, the website redesign and visual updates translated PJ Polke’s local expertise, longevity, and problem-solving mindset into a clear, modern digital presence—designed to build trust, encourage direct outreach, and support long-term partnerships.",
  results: [
    "Refined copy that clearly positions PJ Polke as a manufacturer rep—not a contractor",
    "Product-line specific landing areas that make it easy for vendors and buyers to connect",
    "Mobile-optimized experience for field teams sharing links on-site",
  ],
  testimonial: {
    quote:
      "Before the redesign, our website needed a fresh, more modern look that would better resonate with the designer and architectural community. We wanted to stand out more visually and felt it was also important to update our employee photography to better reflect our team. Working with TruMedia Creative was a great experience from start to finish. The team was professional, easy to collaborate with, and had a strong understanding of what we were looking for. They delivered everything in a timely manner and ultimately exceeded our expectations. TruMedia Creative is highly creative, thinks outside the box, and consistently presented thoughtful, well-executed options throughout the process. I would absolutely recommend TruMedia Creative to anyone in need of a new website or an updated one. They are extremely knowledgeable on the technical side while also being very talented creatively, which made the entire process smooth and successful.",
    author: {
      name: "Dawn A.",
      title: "Owner",
      company: "PJ Polke Company",
    },
  },
};
</script>

<template>
  <ProjectsSpotlightLayout2 :project="project" />
</template>
