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
  caseStudySections?: Array<{
    heading: string;
    content: string;
  }>;
}

const project: Project = {
  title: "Olivet Baptist Church - Professional Worship Production System",
  description:
    "Complete livestream, digital board, and in-ear monitor installation transforming worship services for a growing congregation in Paducah, Kentucky",
  year: 2024,
  client: "Olivet Baptist Church",
  services: [
    "Live Stream Setup",
    "Digital Board Installation",
    "In-Ear Monitor System",
    "Audio System Integration",
    "Volunteer Training",
  ],
  heroImage: "/images/projects/olivet-baptist-hero.jpg",
  websiteUrl: "https://www.olivetbaptistpaducah.com",
  challenge:
    "Olivet Baptist Church needed a comprehensive upgrade to their worship production capabilities. With a growing online audience and the desire to enhance both in-person and digital worship experiences, they faced several technical challenges. Their existing audio system couldn't support modern streaming requirements, volunteers struggled with inconsistent sound quality, and the lack of proper monitoring made it difficult for worship team members to hear themselves and stay in sync.",
  approach:
    "Our team conducted a thorough assessment of Olivet Baptist Church's sanctuary, understanding their worship flow, volunteer capabilities, and ministry goals. We designed a complete solution that balanced professional-quality results with ease of use for volunteer teams. The approach included multi-platform livestreaming capabilities, a digital mixing console for precise audio control, and a personal monitoring system for the worship team.",
  solution:
    "We implemented a complete worship production system featuring professional multi-camera livestreaming with automated recording, a 32-channel digital mixing console with tablet control and scene recall, and a comprehensive wireless in-ear monitor system with personal mix control for the worship team. The system was backed by comprehensive volunteer training, custom documentation, and ongoing technical support.",
  results: [
    "Online viewership increased by 250% in first three months",
    "Worship team reports significantly improved performance quality and confidence",
    "Volunteer technical team operating systems independently within 4 weeks",
    "Professional-quality audio for both in-person congregation and streaming audience",
    "Reduced setup time for Sunday services by 60%",
    "Expanded ministry reach to homebound members and remote viewers",
  ],
  caseStudySections: [
    {
      heading: "Professional Live Streaming System",
      content:
        "We installed a complete multi-camera streaming system featuring three professional PTZ cameras positioned for wide shots, podium coverage, and worship team close-ups. The streaming computer with professional encoding software was configured for optimal quality on YouTube and Facebook. Graphics integration allows seamless display of lyrics, sermon notes, and announcements, while automated recording archives every service to build a searchable sermon library. The system allows a single operator to control all cameras, switch between shots, and manage graphics from one intuitive interface.",
    },
    {
      heading: "Digital Mixing Console",
      content:
        "We replaced their aging analog board with a 32-channel digital console providing scene recall to save and recall complete mixes for different service types, tablet control for mixing from anywhere in the sanctuary via iPad for optimal sound checking, professional processing with built-in compression, EQ, and effects for broadcast-quality audio, and USB recording for direct recording of services and individual tracks for training purposes. The digital board feeds both the main sanctuary speakers and the livestream, ensuring consistent quality across all outputs.",
    },
    {
      heading: "In-Ear Monitor System",
      content:
        "To address monitoring challenges, we implemented a comprehensive wireless IEM system with eight wireless belt-pack receivers for worship team members, personal mix control allowing each musician to dial in their perfect monitor blend, improved stage sound by reducing overall stage volume for clearer house mix, and professional earphones providing accurate sound reproduction and hearing protection. The worship team immediately noticed improved pitch accuracy, tighter timing, and increased confidence during services.",
    },
    {
      heading: "Training & Support",
      content:
        "Understanding that technology is only valuable when people can use it effectively, we provided four comprehensive training sessions covering all systems for volunteer teams, custom documentation with step-by-step guides for common tasks and troubleshooting, video tutorials available in the volunteer portal for ongoing reference, and ongoing support via phone, email, and periodic on-site optimization visits. Within one month, the volunteer teams were running all systems independently with confidence.",
    },
  ],
};

definePageMeta({
  layout: "projects",
});

useSeoMeta({
  title: `${project.title} - TruMedia Creative Portfolio`,
  description: project.description,
  ogTitle: `${project.title} - TruMedia Creative Portfolio`,
  ogDescription: project.description,
});
</script>

<template>
  <ProjectsSpotlightLayout2 :project="project" />
</template>
