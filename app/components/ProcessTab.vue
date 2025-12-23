<script setup lang="ts">
interface Step {
  id: string
  title: string
  subtitle: string
  description: string
  image?: string
  content?: string
  link?: {
    url: string
    text: string
  }
}

interface Props {
  title?: string
  subtitle?: string
  steps?: Step[]
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Our Process',
  subtitle: 'A systematic approach to delivering exceptional results',
  steps: () => [
    {
      id: '1',
      title: 'Step 1',
      subtitle: 'Discovery & Strategy',
      description: 'We understand your business goals and create a tailored strategy',
      content: 'Our discovery process involves deep research into your market, competitors, and audience to create a foundation for success.'
    },
    {
      id: '2',
      title: 'Step 2',
      subtitle: 'Implementation',
      description: 'Execute the strategy with precision and attention to detail',
      content: 'We implement your strategy using best practices and cutting-edge tools, ensuring every detail aligns with your objectives.'
    },
    {
      id: '3',
      title: 'Step 3',
      subtitle: 'Optimization & Results',
      description: 'Measure, analyze, and optimize for maximum performance',
      content: 'Continuous monitoring and optimization ensure your investment delivers measurable results and long-term success.'
    }
  ]
})

const activeStep = ref(props.steps[0]?.id || '1')

const setActiveStep = (stepId: string) => {
  activeStep.value = stepId
}

const _currentStep = computed(() =>
  props.steps.find(step => step.id === activeStep.value) || props.steps[0]
)
</script>

<template>
  <section class="relative py-16 md:py-24">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {{ title }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <!-- Process Content -->
      <div class="grid lg:grid-cols-12 gap-8">
        <!-- Step Navigation -->
        <div class="lg:col-span-4">
          <div class="lg:sticky lg:top-20">
            <nav class="bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-700/25 rounded-xl p-6">
              <ul
                class="space-y-4"
                role="tablist"
              >
                <li
                  v-for="step in steps"
                  :key="step.id"
                  role="presentation"
                >
                  <button
                    :id="`tab-${step.id}`"
                    class="w-full text-left p-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    :class="[
                      activeStep === step.id
                        ? 'bg-primary-500 text-white shadow-md'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-white'
                    ]"
                    :aria-selected="activeStep === step.id"
                    :aria-controls="`panel-${step.id}`"
                    role="tab"
                    @click="setActiveStep(step.id)"
                  >
                    <div class="space-y-2">
                      <div class="text-sm font-medium opacity-90">
                        {{ step.title }}
                      </div>
                      <div class="text-lg font-semibold">
                        {{ step.subtitle }}
                      </div>
                      <div class="text-sm opacity-80">
                        {{ step.description }}
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <!-- Content Panel -->
        <div class="lg:col-span-8">
          <div class="bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-700/25 rounded-xl overflow-hidden">
            <div
              v-for="step in steps"
              v-show="activeStep === step.id"
              :id="`panel-${step.id}`"
              :key="step.id"
              class="p-8"
              role="tabpanel"
              :aria-labelledby="`tab-${step.id}`"
            >
              <!-- Image -->
              <div
                v-if="step.image"
                class="mb-6"
              >
                <img
                  :src="step.image"
                  :alt="step.subtitle"
                  class="w-full h-64 object-cover rounded-lg shadow-md"
                >
              </div>

              <!-- Content -->
              <div class="space-y-4">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                  {{ step.subtitle }}
                </h3>

                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {{ step.content || step.description }}
                </p>

                <!-- Optional Link -->
                <div
                  v-if="step.link"
                  class="pt-4"
                >
                  <UButton
                    :to="step.link.url"
                    variant="ghost"
                    color="primary"
                    trailing-icon="i-lucide-chevron-right"
                  >
                    {{ step.link.text }}
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
