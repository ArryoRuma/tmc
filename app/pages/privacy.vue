<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Privacy Policy - TruMedia Creative',
  ogTitle: 'Privacy Policy - TruMedia Creative',
  description: 'Learn how TruMedia Creative collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  ogDescription: 'Learn how TruMedia Creative collects, uses, and protects your personal information. Read our comprehensive privacy policy.'
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero>
      <template #title>
        <h1 class="text-4xl sm:text-6xl font-bold text-highlighted">
          Privacy Policy
        </h1>
      </template>
      <template #description>
        <p class="text-lg sm:text-xl/8 text-muted">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
      </template>
    </UPageHero>

    <!-- Privacy Policy Content -->
    <UPageSection class="prose prose-lg max-w-4xl mx-auto">
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold text-highlighted mb-4">
            Information We Collect
          </h2>
          <p class="text-muted mb-4">
            We collect information you provide directly to us, such as when you:
          </p>
          <ul class="list-disc list-inside text-muted space-y-2 ml-4">
            <li>Fill out contact forms on our website</li>
            <li>Subscribe to our newsletter or communications</li>
            <li>Request quotes or consultations</li>
            <li>Communicate with us via email, phone, or other channels</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-highlighted mb-4">
            How We Use Your Information
          </h2>
          <p class="text-muted mb-4">
            We use the information we collect to:
          </p>
          <ul class="list-disc list-inside text-muted space-y-2 ml-4">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you information about our services and updates</li>
            <li>Process and fulfill your requests</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-highlighted mb-4">
            Information Sharing
          </h2>
          <p class="text-muted">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-highlighted mb-4">
            Data Security
          </h2>
          <p class="text-muted">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-highlighted mb-4">
            Cookies and Tracking
          </h2>
          <p class="text-muted">
            Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect website functionality.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-highlighted mb-4">
            Your Rights
          </h2>
          <p class="text-muted mb-4">
            You have the right to:
          </p>
          <ul class="list-disc list-inside text-muted space-y-2 ml-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>File a complaint with relevant data protection authorities</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-highlighted mb-4">
            Changes to This Policy
          </h2>
          <p class="text-muted">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-highlighted mb-4">
            Contact Us
          </h2>
          <p class="text-muted">
            If you have any questions about this privacy policy or our data practices, please contact us at:
          </p>
          <div class="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p class="text-muted">
              <strong>Email:</strong> hello@trumediacreative.com<br>
              <strong>Phone:</strong> +1 (908) 356-0321<br>
              <strong>Address:</strong> 21 Main St., Clinton Township, NJ 08801
            </p>
          </div>
        </div>

        <div class="border-t pt-6">
          <p class="text-sm text-muted">
            <strong>Effective Date:</strong> December 19, 2025<br>
            <strong>Last Updated:</strong> December 19, 2025
          </p>
        </div>
      </div>
    </UPageSection>
  </div>
</template>
