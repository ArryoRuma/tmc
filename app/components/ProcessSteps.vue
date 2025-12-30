<script setup lang="ts">
import type { ProcessStep } from "~/types/project";

interface Props {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  variant?: "default" | "compact" | "cards";
  showIcons?: boolean;
  showImages?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Our Process",
  subtitle: "A systematic approach to delivering exceptional results",
  variant: "default",
  showIcons: true,
  showImages: false,
});

const activeStep = ref(props.steps[0]?.id || "1");

const setActiveStep = (stepId: string) => {
  activeStep.value = stepId;
};

const currentStep = computed(() => {
  const step = props.steps.find((step) => step.id === activeStep.value);
  return (
    step ||
    props.steps[0] || {
      id: "1",
      title: "Step 1",
      subtitle: "Default Step",
      description: "Default description",
    }
  );
});
</script>

<template>
  <section class="relative py-16 md:py-24">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {{ title }}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <!-- Compact Variant -->
      <div v-if="variant === 'compact'" class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            class="text-center group"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg"
            >
              <Icon
                v-if="showIcons && step.icon"
                :name="step.icon"
                class="w-6 h-6"
              />
              <span v-else>{{ index + 1 }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ step.subtitle }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Cards Variant -->
      <div v-else-if="variant === 'cards'" class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard
            v-for="(step, index) in steps"
            :key="step.id"
            class="hover:shadow-lg transition-shadow"
          >
            <template #header>
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center"
                >
                  <Icon
                    v-if="showIcons && step.icon"
                    :name="step.icon"
                    class="w-6 h-6 text-primary-600"
                  />
                  <span v-else class="text-primary-600 font-bold">{{
                    index + 1
                  }}</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold">{{ step.subtitle }}</h3>
                  <p class="text-sm text-gray-500">{{ step.title }}</p>
                </div>
              </div>
            </template>

            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ step.description }}
            </p>

            <div v-if="showImages && step.image" class="mb-4">
              <NuxtImg
                :src="step.image.src"
                :alt="step.image.alt || step.subtitle"
                class="rounded-lg w-full h-32 object-cover"
              />
            </div>

            <template v-if="step.link" #footer>
              <UButton
                :to="step.link.url"
                variant="ghost"
                size="sm"
                trailing-icon="i-lucide-arrow-right"
              >
                {{ step.link.text }}
              </UButton>
            </template>
          </UCard>
        </div>
      </div>

      <!-- Default Interactive Variant -->
      <div v-else class="grid lg:grid-cols-12 gap-8">
        <!-- Step Navigation -->
        <div class="lg:col-span-4">
          <div class="space-y-4">
            <button
              v-for="(step, index) in steps"
              :key="step.id"
              class="w-full text-left p-4 rounded-xl transition-all duration-300 group"
              :class="[
                activeStep === step.id
                  ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-200 dark:border-primary-800'
                  : 'bg-white dark:bg-gray-800 border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md',
              ]"
              @click="setActiveStep(step.id)"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  :class="[
                    activeStep === step.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30',
                  ]"
                >
                  <Icon
                    v-if="showIcons && step.icon"
                    :name="step.icon"
                    class="w-5 h-5"
                  />
                  <span v-else class="text-sm font-semibold">{{
                    index + 1
                  }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                    {{ step.subtitle }}
                  </h3>
                  <p
                    class="text-sm text-gray-600 dark:text-gray-300 leading-snug"
                    :class="{ 'line-clamp-2': activeStep !== step.id }"
                  >
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Step Content -->
        <div class="lg:col-span-8">
          <div
            class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div class="mb-6">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white"
                >
                  <Icon
                    v-if="showIcons && currentStep.icon"
                    :name="currentStep.icon"
                    class="w-6 h-6"
                  />
                  <span v-else class="font-bold">{{
                    steps.findIndex((s) => s.id === currentStep.id) + 1
                  }}</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ currentStep.subtitle }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    {{ currentStep.title }}
                  </p>
                </div>
              </div>

              <p
                class="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-6"
              >
                {{ currentStep.content || currentStep.description }}
              </p>

              <div v-if="showImages && currentStep.image" class="mb-6">
                <NuxtImg
                  :src="currentStep.image.src"
                  :alt="currentStep.image.alt || currentStep.subtitle"
                  class="rounded-xl w-full h-64 object-cover shadow-sm"
                />
              </div>

              <div v-if="currentStep.link" class="flex justify-start">
                <UButton
                  :to="currentStep.link.url"
                  size="lg"
                  trailing-icon="i-lucide-arrow-right"
                  class="shadow-sm"
                >
                  {{ currentStep.link.text }}
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
