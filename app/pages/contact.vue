<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: "Contact Us - TruMedia Creative",
  ogTitle: "Contact Us - TruMedia Creative",
  description:
    "Ready to grow your business? Contact TruMedia Creative today. We help brands sell more through video production, web design, and marketing automation.",
  ogDescription:
    "Ready to grow your business? Contact TruMedia Creative today. We help brands sell more through video production, web design, and marketing automation.",
});

// Contact information
const contactInfo = {
  email: "hello@trumediacreative.com",
  phone: "+1 (908) 356-0321",
  address: {
    street: "21 Main St.",
    city: "Clinton Township",
    state: "NJ",
    zip: "08801",
  },
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 4:00 PM EST",
    weekend: "Weekend: By appointment only",
  },
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero>
      <template #title>
        <h1
          class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted"
        >
          Let's Start Something
          <span
            class="text-primary block"
            style="
              font-family: &quot;new-spirit&quot;, serif !important;
              font-weight: 700 !important;
            "
          >
            Amazing
          </span>
        </h1>
      </template>

      <template #description>
        <p class="text-lg sm:text-xl/8 text-muted">
          Ready to transform your marketing and grow your business? Get in touch
          with our team and let's discuss how we can help you sell more.
        </p>
      </template>
    </UPageHero>
    <!--TODO: fix the section below to be 1) centered on the page, and 2) be a grid of 2 columns. Column A) to have Email and Phone, and Column B) to have Address and Hours. Quick response and follow us section can be centered in the middle.-->
        <UPageSection class="py-6">
      <div >
        
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl font-bold text-highlighted mb-6">
              Contact Information
            </h2>

            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <UIcon name="i-lucide-mail" class="text-primary text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted">Email</h3>
                  <a
                    :href="`mailto:${contactInfo.email}`"
                    class="text-primary hover:underline"
                  >
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <UIcon name="i-lucide-phone" class="text-primary text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted">Phone</h3>
                  <a
                    :href="`tel:${contactInfo.phone}`"
                    class="text-primary hover:underline"
                  >
                    {{ contactInfo.phone }}
                  </a>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <UIcon name="i-lucide-map-pin" class="text-primary text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted">Address</h3>
                  <p class="text-muted">
                    {{ contactInfo.address.street }}<br />
                    {{ contactInfo.address.city }},
                    {{ contactInfo.address.state }}
                    {{ contactInfo.address.zip }}
                  </p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <UIcon name="i-lucide-clock" class="text-primary text-xl" />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted">Hours</h3>
                  <p class="text-muted">
                    {{ contactInfo.hours.weekdays }}<br />
                    {{ contactInfo.hours.weekend }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Response Promise -->
          <div
            class="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6"
          >
            <div class="flex items-center gap-3 mb-3">
              <UIcon name="i-lucide-zap" class="text-primary text-xl" />
              <h3 class="font-semibold text-highlighted">
                Quick Response Guarantee
              </h3>
            </div>
            <p class="text-muted text-sm">
              We understand your time is valuable. That's why we guarantee a
              response to all inquiries within 24 hours, usually much sooner.
            </p>
          </div>

          <!-- Social Links -->
          <div>
            <h3 class="font-semibold text-highlighted mb-4">Follow Us</h3>
            <div class="flex gap-3">
              <UButton
                variant="ghost"
                size="sm"
                icon="i-lucide-linkedin"
                to="https://www.linkedin.com/company/trumedia-creative"
                target="_blank"
              />

              <UButton
                variant="ghost"
                size="sm"
                icon="i-lucide-youtube"
                to="https://www.linkedin.com/company/trumedia-creative/"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </UPageSection>
    <UPageSection>
          <div>
          <h2 class="text-3xl font-bold text-highlighted mb-6">Get in Touch</h2>
          <p class="text-muted mb-8">
            Whether you have questions about our services, need a custom quote,
            or want to discuss your project, we're here to help. Fill out the
            form below and a member of our team will get back to you shortly.
          </p>

          <!-- Contact Form -->
          <HoneyBookForm2 />
        </div>
        </UPageSection>
    <!-- Main Contact Section -->


    <!-- CTA Section -->
    <UPageCTA
      title="Ready to Get Started?"
      description="Don't wait to transform your marketing. The sooner we start, the sooner you'll see results."
    >
      <template #links>
        <UButton size="lg" to="/pricing"> View Our Services </UButton>
        <UButton size="lg" variant="outline" to="/"> See Our Work </UButton>
      </template>
    </UPageCTA>
  </div>
</template>
