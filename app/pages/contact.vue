<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Contact Us - TruMedia Creative',
  ogTitle: 'Contact Us - TruMedia Creative',
  description: 'Ready to grow your business? Contact TruMedia Creative today. We help brands sell more through video production, web design, and marketing automation.',
  ogDescription: 'Ready to grow your business? Contact TruMedia Creative today. We help brands sell more through video production, web design, and marketing automation.'
})

// Form state
const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
  timeline: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

// Service options
const services = [
  'Video Production',
  'Web Design & Development',
  'Marketing Automation',
  'SEO & Paid Ads',
  'Outbound Campaigns',
  'Content Creation',
  'Not Sure Yet'
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $30,000',
  '$30,000 - $50,000',
  '$50,000+',
  'I need to discuss this'
]

const timelines = [
  'ASAP',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just exploring options'
]

// Form submission
const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Here you would normally submit to your backend/API
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
    isSubmitted.value = true
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Contact information
const contactInfo = {
  email: 'hello@trumedicacreative.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Creative Ave',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90210'
  },
  hours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
    weekend: 'Weekend: By appointment only'
  }
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero>
      <template #title>
        <h1 class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted">
          Let's Start Something
          <span
            class="text-primary block"
            style="font-family: 'new-spirit', serif !important; font-weight: 700 !important;"
          >
            Amazing
          </span>
        </h1>
      </template>

      <template #description>
        <p class="text-lg sm:text-xl/8 text-muted">
          Ready to transform your marketing and grow your business? Get in touch with our team and let's discuss how we can help you sell more.
        </p>
      </template>
    </UPageHero>

    <!-- Main Contact Section -->
    <UPageSection class="py-16">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div>
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-highlighted mb-4">
              Get In Touch
            </h2>
            <p class="text-muted">
              Fill out the form below and we'll get back to you within 24 hours. The more details you provide, the better we can help you.
            </p>
          </div>

          <div
            v-if="isSubmitted"
            class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6"
          >
            <div class="flex items-center gap-3">
              <UIcon
                name="i-lucide-check-circle"
                class="text-green-600 text-xl"
              />
              <div>
                <h3 class="font-semibold text-green-800 dark:text-green-200">
                  Thank you!
                </h3>
                <p class="text-green-700 dark:text-green-300 text-sm">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <form
            v-else
            class="space-y-6"
            @submit.prevent="submitForm"
          >
            <div class="grid sm:grid-cols-2 gap-4">
              <UFormGroup
                label="Name"
                required
              >
                <UInput
                  v-model="form.name"
                  placeholder="Your full name"
                  required
                />
              </UFormGroup>

              <UFormGroup
                label="Email"
                required
              >
                <UInput
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </UFormGroup>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <UFormGroup label="Company">
                <UInput
                  v-model="form.company"
                  placeholder="Your company name"
                />
              </UFormGroup>

              <UFormGroup label="Phone">
                <UInput
                  v-model="form.phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                />
              </UFormGroup>
            </div>

            <UFormGroup label="Service Interest">
              <USelect
                v-model="form.service"
                :options="services"
                placeholder="Select a service"
              />
            </UFormGroup>

            <div class="grid sm:grid-cols-2 gap-4">
              <UFormGroup label="Budget Range">
                <USelect
                  v-model="form.budget"
                  :options="budgetRanges"
                  placeholder="Select budget range"
                />
              </UFormGroup>

              <UFormGroup label="Timeline">
                <USelect
                  v-model="form.timeline"
                  :options="timelines"
                  placeholder="When do you need this?"
                />
              </UFormGroup>
            </div>

            <UFormGroup
              label="Message"
              required
            >
              <UTextarea
                v-model="form.message"
                placeholder="Tell us about your project, goals, and how we can help..."
                row="5"
                required
              />
            </UFormGroup>

            <UButton
              type="submit"
              size="lg"
              :loading="isSubmitting"
              :disabled="isSubmitting"
              class="w-full sm:w-auto"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </UButton>
          </form>
        </div>

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
                  <UIcon
                    name="i-lucide-mail"
                    class="text-primary text-xl"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted">
                    Email
                  </h3>
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
                  <UIcon
                    name="i-lucide-phone"
                    class="text-primary text-xl"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted">
                    Phone
                  </h3>
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
                  <UIcon
                    name="i-lucide-map-pin"
                    class="text-primary text-xl"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted">
                    Address
                  </h3>
                  <p class="text-muted">
                    {{ contactInfo.address.street }}<br>
                    {{ contactInfo.address.city }}, {{ contactInfo.address.state }} {{ contactInfo.address.zip }}
                  </p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <UIcon
                    name="i-lucide-clock"
                    class="text-primary text-xl"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-highlighted">
                    Hours
                  </h3>
                  <p class="text-muted">
                    {{ contactInfo.hours.weekdays }}<br>
                    {{ contactInfo.hours.weekend }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Response Promise -->
          <div class="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-3">
              <UIcon
                name="i-lucide-zap"
                class="text-primary text-xl"
              />
              <h3 class="font-semibold text-highlighted">
                Quick Response Guarantee
              </h3>
            </div>
            <p class="text-muted text-sm">
              We understand your time is valuable. That's why we guarantee a response to all inquiries within 24 hours, usually much sooner.
            </p>
          </div>

          <!-- Social Links -->
          <div>
            <h3 class="font-semibold text-highlighted mb-4">
              Follow Us
            </h3>
            <div class="flex gap-3">
              <UButton
                variant="ghost"
                size="sm"
                icon="i-lucide-linkedin"
                to="https://linkedin.com"
                target="_blank"
              />
              <UButton
                variant="ghost"
                size="sm"
                icon="i-lucide-twitter"
                to="https://twitter.com"
                target="_blank"
              />
              <UButton
                variant="ghost"
                size="sm"
                icon="i-lucide-instagram"
                to="https://instagram.com"
                target="_blank"
              />
              <UButton
                variant="ghost"
                size="sm"
                icon="i-lucide-youtube"
                to="https://youtube.com"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </UPageSection>

    <!-- FAQ Section -->
    <UPageSection class="bg-gray-50 dark:bg-gray-900/50">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-highlighted mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-muted text-lg">
          Get quick answers to common questions about working with us.
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <UAccordion
          :items="[
            {
              label: 'How quickly can you start my project?',
              content: 'Most projects can begin within 1-2 weeks of contract signing. Rush projects may be accommodated based on our current workload and your specific needs.'
            },
            {
              label: 'Do you work with businesses outside your listed industries?',
              content: 'Absolutely! While we specialize in certain industries, we work with businesses of all types. Our proven strategies can be adapted to virtually any industry.'
            },
            {
              label: 'What\'s included in your initial consultation?',
              content: 'Our initial consultation includes a thorough analysis of your current marketing, discussion of your goals, and a customized strategy recommendation. This consultation is complimentary for qualified prospects.'
            },
            {
              label: 'Do you offer ongoing support after project completion?',
              content: 'Yes! We offer various ongoing support packages including monthly retainers, quarterly check-ins, and on-demand support. We believe in long-term partnerships with our clients.'
            },
            {
              label: 'Can you work with our existing marketing team?',
              content: 'Definitely! We often collaborate with in-house marketing teams, providing specialized expertise and additional capacity. We\'re flexible and can adapt to your preferred working style.'
            }
          ]"
        />
      </div>
    </UPageSection>

    <!-- CTA Section -->
    <UPageCTA
      title="Ready to Get Started?"
      description="Don't wait to transform your marketing. The sooner we start, the sooner you'll see results."
    >
      <template #links>
        <UButton
          size="lg"
          to="/pricing"
        >
          View Our Services
        </UButton>
        <UButton
          size="lg"
          variant="outline"
          to="/portfolio"
        >
          See Our Work
        </UButton>
      </template>
    </UPageCTA>
  </div>
</template>
