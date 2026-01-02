<script setup lang="ts">
useSeoMeta({
  title: "Who We Are",
  description:
    "Learn about TruMedia Creative's mission, values, and the team behind our marketing and creative solutions.",
});

// TODO: Port this long-form about page into structured content entries (hero, mission, values, team) so marketing can edit without code changes.
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl lg:text-6xl font-bold mb-6">Who We Are</h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            TruMedia Creative helps industrial and professional service
            companies turn complex expertise into clear, sales-ready marketing
            that actually gets used—and gets results.
          </p>
          <!-- Hero Image Placeholder -->
          <!-- TODO: Replace placeholder blocks with <NuxtImg> or a reusable media component that can swap light/dark assets. -->
          <div
            class="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center"
          >
            <p class="text-gray-500">[Team Photo or Company Image]</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-16 lg:py-24">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              To help expert-led businesses clearly communicate what they do,
              why it matters, and why they’re the right choice—using video and
              systems that shorten sales cycles and drive confident decisions.
              We exist to eliminate confusion, wasted marketing spend, and
              “great content that never gets used.”
            </p>
            <h3 class="text-2xl font-semibold mb-4">Our Vision</h3>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              A world where great companies don’t lose deals because they’re
              hard to understand. We believe the future of marketing belongs to
              businesses that can explain complex ideas simply, show real proof,
              and deploy content as part of a system—not random tactics.
            </p>
          </div>
          <div
            class="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center"
          >
            <p class="text-gray-500">[Mission/Vision Supporting Image]</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            TruMedia Creative was founded out of frustration with traditional
            marketing agencies that produced “nice-looking” assets with no
            connection to sales outcomes. After years working alongside
            industrial, manufacturing, and service-based companies, one pattern
            became obvious: the problem wasn’t lack of expertise—it was lack of
            clarity. So TruMedia was built to bridge the gap between what
            companies know and what buyers need to understand. By combining
            video, messaging frameworks, and practical systems, we help
            businesses turn their knowledge into momentum.
          </p>
        </div>

        <!-- Timeline or Key Milestones -->
        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <!-- TODO: Drive milestone items from a content array to avoid editing markup for each new year. -->
          <div class="text-center">
            <div
              class="bg-primary-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-primary-600 font-bold text-xl">FOUNDED</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">2020</h3>
            <p class="text-gray-600 dark:text-gray-300">
              TruMedia Creative launches with a focus on video-first marketing
              for industrial and professional services.
            </p>
          </div>
          <div class="text-center">
            <div
              class="bg-primary-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-primary-600 font-bold text-xl"
                >STRATEGIC SHIFT</span
              >
            </div>
            <h3 class="text-xl font-semibold mb-2">2023</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Expansion into messaging, outbound systems, and sales-enablement
              content—moving beyond “content creation” into growth
              infrastructure.
            </p>
          </div>
          <div class="text-center">
            <div
              class="bg-primary-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-primary-600 font-bold text-xl">TODAY</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">2026</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Trusted partner to companies that need clarity, credibility, and
              consistent lead generation without bloated teams or wasted spend.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Values Section -->
    <section class="py-16 lg:py-24">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            These principles guide how we work, who we work with, and how we
            make decisions.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- TODO: Loop over page.values data instead of duplicating 6 cards manually. -->
          <!-- Value 1 -->
          <div
            class="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div
              class="bg-gray-200 dark:bg-gray-700 rounded-lg h-20 w-20 mx-auto mb-4 flex items-center justify-center"
            >
              <Icon name="lucide:heart" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Client Success</h3>
            <p class="text-gray-600 dark:text-gray-300">
              We measure success by outcomes, not deliverables. If it doesn’t
              help you close deals, build trust, or move the needle, we don’t
              ship it.
            </p>
          </div>

          <!-- Value 2 -->
          <div
            class="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div
              class="bg-gray-200 dark:bg-gray-700 rounded-lg h-20 w-20 mx-auto mb-4 flex items-center justify-center"
            >
              <Icon name="lucide:lightbulb" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Innovation</h3>
            <p class="text-gray-600 dark:text-gray-300">
              We use modern tools, AI, and systems strategically—not for hype,
              but to create leverage and efficiency for our clients.
            </p>
          </div>

          <!-- Value 3 -->
          <div
            class="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div
              class="bg-gray-200 dark:bg-gray-700 rounded-lg h-20 w-20 mx-auto mb-4 flex items-center justify-center"
            >
              <Icon name="lucide:users" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Collaboration</h3>
            <p class="text-gray-600 dark:text-gray-300">
              The best results come from partnership. We work with our clients,
              not at arm’s length.
            </p>
          </div>

          <!-- Value 4 -->
          <div
            class="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div
              class="bg-gray-200 dark:bg-gray-700 rounded-lg h-20 w-20 mx-auto mb-4 flex items-center justify-center"
            >
              <Icon name="lucide:target" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Results-Driven</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Every recommendation ties back to revenue, pipeline, or sales
              efficiency. Strategy always comes before tactics.
            </p>
          </div>

          <!-- Value 5 -->
          <div
            class="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div
              class="bg-gray-200 dark:bg-gray-700 rounded-lg h-20 w-20 mx-auto mb-4 flex items-center justify-center"
            >
              <Icon
                name="lucide:shield-check"
                class="w-8 h-8 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-semibold mb-3">Integrity</h3>
            <p class="text-gray-600 dark:text-gray-300">
              No fluff. No smoke. No selling services you don’t need. We believe
              trust is the strongest growth strategy.
            </p>
          </div>

          <!-- Value 6 -->
          <div
            class="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div
              class="bg-gray-200 dark:bg-gray-700 rounded-lg h-20 w-20 mx-auto mb-4 flex items-center justify-center"
            >
              <Icon
                name="lucide:trending-up"
                class="w-8 h-8 text-primary-600"
              />
            </div>
            <h3 class="text-xl font-semibold mb-3">Continuous Growth</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Markets change. Tools evolve. Buyers get smarter. We stay ahead so
              our clients don’t fall behind.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Team Section -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            We’re a lean team built for speed, clarity, and execution—without
            the agency bloat.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- TODO: Source team data (name, role, bio, social) from a people collection and reuse a <TeamCard> component. -->
          <!-- Team Member 1 -->
          <div
            class="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <NuxtImg
              src="/images/who-we-are-photos/Lar-headshot.png"
              alt="Lar - Founder / Strategist / Creative Lead"
              class="rounded-full h-96 w-76 mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold mb-2">Lar</h3>
            <p class="text-primary-600 font-medium mb-3">
              Founder / Strategist / Creative Lead
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Leads strategy, messaging, and video direction. Bridges sales
              psychology, storytelling, and systems thinking to turn expertise
              into demand.
            </p>
            <div class="flex justify-center gap-3">
              <UButton
                icon="i-simple-icons-linkedin"
                variant="ghost"
                size="sm"
                to="https://www.linkedin.com/in/larryontrumanii"
              />
            </div>
          </div>

          <!-- Team Member 2 -->
          <div
            class="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <NuxtImg
              src="/images/who-we-are-photos/HannahHeadshot29.jpg"
              alt="Han - Office Manager"
              class="rounded-full h-96 w-76 mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold mb-2">Han</h3>
            <p class="text-primary-600 font-medium mb-3">Office Manager</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Manages day-to-day operations, client communications, and project coordination. Ensures smooth workflows and timely delivery of all client projects.
            </p>
          </div>

          <!-- Team Member 3 -->
          <div
            class="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <NuxtImg
              src="/images/who-we-are-photos/Syd-headshot1.jpg"
              alt="Syd - Business Development"
              class="rounded-full h-96 w-76 mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold mb-2">Syd</h3>
            <p class="text-primary-600 font-medium mb-3">
              Business Development
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Drives new business relationships and strategic partnerships. Connects with potential clients to understand their challenges and match them with the right solutions.
            </p>
            <div class="flex justify-center gap-3">
              <UButton
                icon="i-simple-icons-linkedin"
                variant="ghost"
                size="sm"
                to="https://www.linkedin.com/in/sydney-truman-49058829b/"
              />
            </div>
          </div>

          <!-- Add more team members as needed -->
        </div>
      </UContainer>
    </section>

    <!-- What Sets Us Apart -->
    <section class="py-16 lg:py-24">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div
            class="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center"
          >
            <p class="text-gray-500">[Differentiator Image or Graphic]</p>
          </div>
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-6">
              What Sets Us Apart
            </h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <Icon
                  name="lucide:check-circle"
                  class="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 class="text-xl font-semibold mb-2">
                    Video That Actually Gets Used
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    We don’t make “brand videos.” We make sales tools—FAQ
                    libraries, case studies, and proof assets designed to move
                    deals forward.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <Icon
                  name="lucide:check-circle"
                  class="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 class="text-xl font-semibold mb-2">
                    Systems, Not Just Content
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Content is only valuable when deployed correctly. We build
                    repeatable systems for lead generation, sales enablement,
                    and follow-up.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <Icon
                  name="lucide:check-circle"
                  class="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 class="text-xl font-semibold mb-2">
                    Built for Complex Businesses
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Industrial, manufacturing, and professional services aren’t
                    simple—and your marketing shouldn’t pretend they are. We
                    specialize in clarity without dumbing things down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Statistics/Achievements
    <section class="py-16 lg:py-24 bg-primary-600 text-white">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">
            Our Impact
          </h2>
          <p class="text-xl opacity-90 max-w-2xl mx-auto">
            [Brief description of your achievements and impact]
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl lg:text-5xl font-bold mb-2">
              [#]
            </div>
            <p class="text-lg opacity-90">
              [Metric 1 - e.g., "Happy Clients"]
            </p>
          </div>
          <div class="text-center">
            <div class="text-4xl lg:text-5xl font-bold mb-2">
              [#]
            </div>
            <p class="text-lg opacity-90">
              [Metric 2 - e.g., "Projects Completed"]
            </p>
          </div>
          <div class="text-center">
            <div class="text-4xl lg:text-5xl font-bold mb-2">
              [#]
            </div>
            <p class="text-lg opacity-90">
              [Metric 3 - e.g., "Years Experience"]
            </p>
          </div>
          <div class="text-center">
            <div class="text-4xl lg:text-5xl font-bold mb-2">
              [#]
            </div>
            <p class="text-lg opacity-90">
              [Metric 4 - e.g., "Industries Served"]
            </p>
          </div>
        </div>
      </UContainer>
    </section>
-->
    <!-- Call to Action -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            If you’re tired of unclear messaging, underperforming content, or
            marketing that doesn’t support sales—we should talk.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              size="lg"
              to="https://trumediacreative.hbportal.co/schedule/6442d82d7999d90d3e0b430a"
              target="_blank"
            >
              Get Started Today
            </UButton>
            <UButton size="lg" variant="outline" to="/projects">
              View Our Work
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
