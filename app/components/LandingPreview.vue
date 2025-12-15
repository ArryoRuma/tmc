<script setup lang="ts">
const _props = defineProps<{
  useWeLanguage?: boolean
  packageName: string
  painPoint1: string
  painPoint2: string
  painPoint3: string
  painPoint4: string
  painPoint5: string
  symptom1: string
  symptom2: string
  symptom3: string
  symptom4: string
  roleOverloadDetails: string
  coreProblem: string
  primaryOutcome: string
  coreMechanism: string
  buyerType: string
  niche: string
  toolsOrMethod: string
  simpleOutcome: string
  bigObstacle: string
  onboardingFormName: string
  workshopLength: string
  buildStyle: string
  deliverable1: string
  deliverable2: string
  deliverable3: string
  optionalDeliverable4?: string
  clientPreferredWork: string
  clientPainfulWork: string
  goal1: string
  goal2: string
  goal3: string
  goal4: string
  deliverableBlock1Title: string
  actionVerb1: string
  component1: string
  outcome1: string
  subItemA: string
  subItemB: string
  subItemC: string
  outcomeStatement1: string
  deliverableBlock2Title: string
  actionVerb2: string
  component2: string
  outcome2: string
  subItemD: string
  subItemE: string
  subItemF: string
  outcomeStatement2: string
  deliverableBlock3Title: string
  actionVerb3: string
  component3: string
  toolsOrProcess: string
  subItemG: string
  subItemH: string
  subItemI: string
  outcomeStatement3: string
  monthlyPrice: string
  setupPrice: string
  mgmtPrice: string
  basePrice: string
  commissionPercent: string
  commissionTrigger: string
  timeFrame: string
  ctaUrl: string
}>()
</script>

<template>
  <div
    class="h-full rounded-2xl border overflow-hidden transition-all duration-300 relative overflow-y-auto max-h-[1200px] shadow-2xl backdrop-blur-sm bg-sky-100 text-slate-900 border-slate-300 shadow-slate-200/50"
  >
    <div class="relative z-10">
      <!-- Hero Section -->
      <section class="px-8 py-16 text-center space-y-8 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <!-- Background decoration -->
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-400"
            style="filter: blur(40px);"
          />
          <div
            class="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-400"
            style="filter: blur(50px);"
          />
        </div>
        <div class="space-y-6 relative z-10">
          <h1 class="text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            {{ packageName || 'Your Package Name' }}
          </h1>
          <p class="text-2xl font-medium max-w-4xl mx-auto text-slate-700">
            Get <span class="font-bold text-emerald-600">{{ simpleOutcome || 'your desired outcome' }}</span> without <span class="font-bold text-red-500">{{ bigObstacle || 'the usual obstacles' }}</span>
          </p>
          <div class="text-lg max-w-4xl mx-auto space-y-6 text-slate-600">
            <div class="bg-white/95 backdrop-blur-md rounded-2xl p-8 border shadow-lg border-slate-200">
              <p class="mb-6 leading-relaxed">
                {{ useWeLanguage ? 'We help' : 'I help' }} you achieve <strong class="text-blue-600">{{ primaryOutcome || 'your primary outcome' }}</strong> by delivering <strong class="text-purple-600">{{ coreMechanism || 'the core mechanism' }}</strong> for <strong class="text-emerald-600">{{ buyerType || 'your target market' }}</strong> in <strong class="text-orange-600">{{ niche || 'your niche' }}</strong>, using <strong class="text-pink-600">{{ toolsOrMethod || 'proven tools and methods' }}</strong>.
              </p>
              <div class="text-2xl font-bold text-center p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {{ useWeLanguage ? 'We help' : 'I help' }} you get {{ simpleOutcome || 'results' }} without {{ bigObstacle || 'the usual obstacles' }}.
              </div>
            </div>
          </div>
        </div>

        <a
          :href="ctaUrl || '#'"
          class="group inline-flex items-center justify-center rounded-full px-10 py-5 text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transform bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-2 border-transparent"
        >
          <span class="relative z-10">{{ primaryOutcome || 'Get Started Today' }}</span>
          <svg
            class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </section>

      <!-- Problems Section -->
      <section class="px-8 py-16 space-y-10">
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-black text-center text-red-600">
            Are You Struggling With...
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
        </div>
        <ul class="space-y-4 max-w-3xl mx-auto">
          <li
            v-if="painPoint1"
            class="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-102 hover:bg-red-50"
          >
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
              ✗
            </div>
            <span class="text-lg">{{ painPoint1 }}</span>
          </li>
          <li
            v-if="painPoint2"
            class="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-102 hover:bg-red-50"
          >
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
              ✗
            </div>
            <span class="text-lg">{{ painPoint2 }}</span>
          </li>
          <li
            v-if="painPoint3"
            class="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-102 hover:bg-red-50"
          >
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
              ✗
            </div>
            <span class="text-lg">{{ painPoint3 }}</span>
          </li>
          <li
            v-if="painPoint4"
            class="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-102 hover:bg-red-50"
          >
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
              ✗
            </div>
            <span class="text-lg">{{ painPoint4 }}</span>
          </li>
          <li
            v-if="painPoint5"
            class="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-102 hover:bg-red-50"
          >
            <div class="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
              ✗
            </div>
            <span class="text-lg">{{ painPoint5 }}</span>
          </li>
        </ul>
        <div class="text-center mt-10">
          <div class="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">
            <p class="text-2xl font-bold text-white">
              Then <span class="underline decoration-yellow-400">{{ packageName || 'this package' }}</span> is for you.
            </p>
          </div>
        </div>
      </section>

      <!-- Symptoms Section -->
      <section class="px-8 py-16 space-y-10 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-black text-center text-amber-600">
            Does This Sound Like You?
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </div>
        <div class="grid gap-6 max-w-4xl mx-auto md:grid-cols-2">
          <div
            v-if="symptom1"
            class="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 border shadow-md bg-white/95 border-amber-200 hover:border-amber-400 hover:shadow-lg"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-slate-900 font-bold text-lg group-hover:scale-110 transition-transform">
                ⚠
              </div>
              <span class="text-lg leading-relaxed">{{ symptom1 }}</span>
            </div>
          </div>
          <div
            v-if="symptom2"
            class="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 border shadow-md bg-white/95 border-amber-200 hover:border-amber-400 hover:shadow-lg"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-slate-900 font-bold text-lg group-hover:scale-110 transition-transform">
                ⚠
              </div>
              <span class="text-lg leading-relaxed">{{ symptom2 }}</span>
            </div>
          </div>
          <div
            v-if="symptom3"
            class="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 border shadow-md bg-white/95 border-amber-200 hover:border-amber-400 hover:shadow-lg"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-slate-900 font-bold text-lg group-hover:scale-110 transition-transform">
                ⚠
              </div>
              <span class="text-lg leading-relaxed">{{ symptom3 }}</span>
            </div>
          </div>
          <div
            v-if="symptom4"
            class="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 border shadow-md bg-white/95 border-amber-200 hover:border-amber-400 hover:shadow-lg"
          >
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-slate-900 font-bold text-lg group-hover:scale-110 transition-transform">
                ⚠
              </div>
              <span class="text-lg leading-relaxed">{{ symptom4 }}</span>
            </div>
          </div>
        </div>
        <div class="text-center space-y-6 max-w-4xl mx-auto">
          <div class="p-8 rounded-3xl backdrop-blur-md border bg-white/90 border-slate-200">
            <p class="text-2xl font-bold mb-4 text-emerald-600">
              If so, you're exactly who <span class="underline decoration-emerald-400">{{ packageName || 'this package' }}</span> was built for.
            </p>
            <p
              v-if="roleOverloadDetails"
              class="text-lg mb-4 leading-relaxed text-slate-600"
            >
              You're juggling <strong>{{ roleOverloadDetails }}</strong>, and it's impossible to make real progress when everything depends on you.
            </p>
            <div class="inline-block p-6 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500">
              <p class="text-xl font-bold text-white">
                That's why {{ useWeLanguage ? 'we' : 'I' }} created <span class="underline decoration-yellow-400">{{ packageName || 'this package' }}</span> – to solve <span class="underline decoration-emerald-400">{{ coreProblem || 'your core problem' }}</span> once and for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="px-8 py-16 space-y-10">
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-black text-center text-blue-600">
            How It Works
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>
        <div class="max-w-4xl mx-auto space-y-8">
          <div class="group relative">
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-black text-2xl group-hover:scale-110 transition-transform shadow-lg">
                  1
                </div>
              </div>
              <div class="flex-grow p-6 rounded-2xl transition-all duration-300 group-hover:scale-102 bg-blue-50 hover:bg-blue-100">
                <p class="text-xl leading-relaxed">
                  You complete {{ onboardingFormName ? (onboardingFormName.toLowerCase().includes('a') || onboardingFormName.toLowerCase().includes('an') ? onboardingFormName : `a ${onboardingFormName}`) : 'a quick onboarding form' }}
                </p>
              </div>
            </div>
          </div>
          <div class="group relative">
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-black text-2xl group-hover:scale-110 transition-transform shadow-lg">
                  2
                </div>
              </div>
              <div class="flex-grow p-6 rounded-2xl transition-all duration-300 group-hover:scale-102 bg-purple-50 hover:bg-purple-100">
                <p class="text-xl leading-relaxed">
                  {{ useWeLanguage ? 'We meet' : 'I meet' }} with you for a {{ workshopLength || '60-90 minute' }} workshop
                </p>
              </div>
            </div>
          </div>
          <div class="group relative">
            <div class="flex items-start gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-black text-2xl group-hover:scale-110 transition-transform shadow-lg">
                  3
                </div>
              </div>
              <div class="flex-grow p-6 rounded-2xl transition-all duration-300 group-hover:scale-102 bg-emerald-50 hover:bg-emerald-100">
                <p class="text-xl leading-relaxed">
                  {{ useWeLanguage ? 'We' : 'I' }} build your <strong>{{ packageName || 'system' }}</strong> {{ buildStyle || 'live with you on the call' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What You Get Section -->
      <section class="px-8 py-16 space-y-10 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50">
        <div class="text-center space-y-4">
          <h2 class="text-4xl font-black text-center text-emerald-600">
            You Walk Away With
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full" />
        </div>
        <div class="grid gap-8 max-w-4xl mx-auto">
          <div
            v-if="deliverable1"
            class="group relative"
          >
            <div class="flex items-start gap-6 p-8 rounded-3xl transition-all duration-300 hover:scale-105 border shadow-md bg-white/95 border-emerald-200 hover:border-emerald-400 hover:shadow-xl">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform">
                  1
                </div>
              </div>
              <span class="text-xl leading-relaxed font-medium">{{ deliverable1 }}</span>
            </div>
          </div>
          <div
            v-if="deliverable2"
            class="group relative"
          >
            <div class="flex items-start gap-6 p-8 rounded-3xl transition-all duration-300 hover:scale-105 border shadow-md bg-white/95 border-emerald-200 hover:border-emerald-400 hover:shadow-xl">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform">
                  2
                </div>
              </div>
              <span class="text-xl leading-relaxed font-medium">{{ deliverable2 }}</span>
            </div>
          </div>
          <div
            v-if="deliverable3"
            class="group relative"
          >
            <div class="flex items-start gap-6 p-8 rounded-3xl transition-all duration-300 hover:scale-105 border shadow-md bg-white/95 border-emerald-200 hover:border-emerald-400 hover:shadow-xl">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform">
                  3
                </div>
              </div>
              <span class="text-xl leading-relaxed font-medium">{{ deliverable3 }}</span>
            </div>
          </div>
          <div
            v-if="optionalDeliverable4"
            class="group relative"
          >
            <div class="flex items-start gap-6 p-8 rounded-3xl transition-all duration-300 hover:scale-105 border shadow-md bg-white/95 border-emerald-200 hover:border-emerald-400 hover:shadow-xl">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform">
                  4
                </div>
              </div>
              <span class="text-xl leading-relaxed font-medium">{{ optionalDeliverable4 }}</span>
            </div>
          </div>
        </div>
        <div
          v-if="clientPreferredWork || clientPainfulWork"
          class="text-center max-w-4xl mx-auto"
        >
          <div class="p-8 rounded-3xl backdrop-blur-md border shadow-lg bg-white/95 border-slate-200">
            <p class="text-2xl leading-relaxed text-slate-700">
              In the end, you get to focus on <span class="font-bold text-emerald-600 underline decoration-emerald-400">{{ clientPreferredWork || 'the work you enjoy' }}</span>, instead of <span class="font-bold text-red-600 line-through">{{ clientPainfulWork || 'the work you hate' }}</span>.
            </p>
          </div>
        </div>
      </section>

      <!-- Who It's For Section -->
      <section class="px-8 py-12 space-y-6">
        <h2 class="text-3xl font-bold text-center">
          Who It's For
        </h2>
        <p class="text-center text-lg max-w-2xl mx-auto text-slate-600">
          This is for <strong>{{ buyerType || 'businesses' }}</strong> who want to:
        </p>
        <ul class="space-y-3 max-w-2xl mx-auto">
          <li
            v-if="goal1"
            class="flex items-start gap-3"
          >
            <span class="text-blue-500 mt-1">→</span>
            <span>{{ goal1 }}</span>
          </li>
          <li
            v-if="goal2"
            class="flex items-start gap-3"
          >
            <span class="text-blue-500 mt-1">→</span>
            <span>{{ goal2 }}</span>
          </li>
          <li
            v-if="goal3"
            class="flex items-start gap-3"
          >
            <span class="text-blue-500 mt-1">→</span>
            <span>{{ goal3 }}</span>
          </li>
          <li
            v-if="goal4"
            class="flex items-start gap-3"
          >
            <span class="text-blue-500 mt-1">→</span>
            <span>{{ goal4 }}</span>
          </li>
        </ul>
      </section>

      <!-- Detailed Deliverables Section -->
      <section class="px-8 py-12 space-y-12 bg-slate-50">
        <h2 class="text-3xl font-bold text-center">
          What's Included
        </h2>

        <!-- Block 1 -->
        <div
          v-if="deliverableBlock1Title"
          class="max-w-4xl mx-auto"
        >
          <h3 class="text-2xl font-bold mb-4">
            1. {{ deliverableBlock1Title }}
          </h3>
          <p class="text-lg mb-6 text-slate-600">
            {{ useWeLanguage ? 'We' : 'I' }} {{ actionVerb1 || 'work on' }} your {{ component1 || 'system' }} so you can {{ outcome1 || 'achieve your goals' }}.
          </p>
          <div class="grid gap-3 mb-6">
            <div
              v-if="subItemA"
              class="flex items-start gap-3"
            >
              <span class="text-green-500 mt-1">✓</span>
              <span>{{ subItemA }}</span>
            </div>
            <div
              v-if="subItemB"
              class="flex items-start gap-3"
            >
              <span class="text-green-500 mt-1">✓</span>
              <span>{{ subItemB }}</span>
            </div>
            <div
              v-if="subItemC"
              class="flex items-start gap-3"
            >
              <span class="text-green-500 mt-1">✓</span>
              <span>{{ subItemC }}</span>
            </div>
          </div>
          <div
            v-if="outcomeStatement1"
            class="bg-green-50 border-l-4 border-green-500 p-4"
          >
            <p class="font-medium">
              Outcome: {{ outcomeStatement1 }}
            </p>
          </div>
        </div>

        <!-- Block 2 -->
        <div
          v-if="deliverableBlock2Title"
          class="max-w-4xl mx-auto"
        >
          <h3 class="text-2xl font-bold mb-4">
            2. {{ deliverableBlock2Title }}
          </h3>
          <p class="text-lg mb-6 text-slate-600">
            {{ useWeLanguage ? 'We' : 'I' }} {{ actionVerb2 || 'work on' }} your {{ component2 || 'system' }} so {{ outcome2 || 'you achieve your goals' }}.
          </p>
          <div class="grid gap-3 mb-6">
            <div
              v-if="subItemD"
              class="flex items-start gap-3"
            >
              <span class="text-green-500 mt-1">✓</span>
              <span>{{ subItemD }}</span>
            </div>
            <div
              v-if="subItemE"
              class="flex items-start gap-3"
            >
              <span class="text-green-500 mt-1">✓</span>
              <span>{{ subItemE }}</span>
            </div>
            <div
              v-if="subItemF"
              class="flex items-start gap-3"
            >
              <span class="text-green-500 mt-1">✓</span>
              <span>{{ subItemF }}</span>
            </div>
          </div>
          <div
            v-if="outcomeStatement2"
            class="bg-green-50 border-l-4 border-green-500 p-4"
          >
            <p class="font-medium">
              Outcome: {{ outcomeStatement2 }}
            </p>
          </div>
        </div>

        <!-- Block 3 -->
        <div
          v-if="deliverableBlock3Title"
          class="max-w-4xl mx-auto"
        >
          <h3 class="text-2xl font-bold mb-4">
            3. {{ deliverableBlock3Title }}
          </h3>
          <p class="text-lg mb-6 text-slate-600">
            {{ useWeLanguage ? 'We' : 'I' }} {{ actionVerb3 || 'work on' }} your {{ component3 || 'system' }} using {{ toolsOrProcess || 'proven methods' }}.
          </p>
          <div class="grid gap-3 mb-6">
            <div
              v-if="subItemG"
              class="flex items-start gap-3"
            >
              <span class="text-green-500 mt-1">✓</span>
              <span>{{ subItemG }}</span>
            </div>
            <div
              v-if="subItemH"
              class="flex items-start gap-3"
            >
              <span class="text-green-500 mt-1">✓</span>
              <span>{{ subItemH }}</span>
            </div>
            <div
              v-if="subItemI"
              class="flex items-start gap-3"
            >
              <span class="text-green-500 mt-1">✓</span>
              <span>{{ subItemI }}</span>
            </div>
          </div>
          <div
            v-if="outcomeStatement3"
            class="bg-green-50 border-l-4 border-green-500 p-4"
          >
            <p class="font-medium">
              Outcome: {{ outcomeStatement3 }}
            </p>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="px-8 py-12 space-y-8">
        <h2 class="text-3xl font-bold text-center">
          Pricing Options
        </h2>
        <div class="grid gap-6 max-w-4xl mx-auto md:grid-cols-1 lg:grid-cols-2">
          <div
            v-if="monthlyPrice"
            class="border rounded-lg p-6 border-slate-200 bg-white"
          >
            <h3 class="text-xl font-bold mb-3">
              Option A – Monthly Retainer
            </h3>
            <div class="text-3xl font-bold mb-2">
              ${{ monthlyPrice }}/month
            </div>
            <p class="text-sm text-slate-600">
              Ongoing monthly engagement for continuous support and optimization.
            </p>
          </div>

          <div
            v-if="setupPrice || mgmtPrice"
            class="border rounded-lg p-6 border-slate-200 bg-white"
          >
            <h3 class="text-xl font-bold mb-3">
              Option B – Setup + Management
            </h3>
            <div class="space-y-2 mb-3">
              <div
                v-if="setupPrice"
                class="text-lg"
              >
                Setup: <span class="font-bold">${{ setupPrice }}</span>
              </div>
              <div
                v-if="mgmtPrice"
                class="text-lg"
              >
                Monthly: <span class="font-bold">${{ mgmtPrice }}/month</span>
              </div>
            </div>
            <p class="text-sm text-slate-600">
              Initial setup with ongoing management and support.
            </p>
          </div>

          <div
            v-if="basePrice && commissionPercent"
            class="border rounded-lg p-6 md:col-span-full lg:col-span-1 border-slate-200 bg-white"
          >
            <h3 class="text-xl font-bold mb-3">
              Option C – Retainer + Performance
            </h3>
            <div class="text-lg mb-2">
              <span class="font-bold">${{ basePrice }}/month</span> +
              <span class="font-bold">{{ commissionPercent }}%</span>
              <span v-if="commissionTrigger">of {{ commissionTrigger }}</span>
            </div>
            <p class="text-sm text-slate-600">
              Performance-based pricing that grows with your results.
            </p>
          </div>
        </div>
      </section>

      <!-- Final CTA Section -->
      <section class="px-8 py-12 text-center space-y-6 bg-slate-50">
        <h2 class="text-3xl font-bold">
          Are You Ready?
        </h2>
        <div class="max-w-2xl mx-auto space-y-4">
          <p class="text-xl text-slate-600">
            Ready to get <strong>{{ primaryOutcome || 'your desired outcome' }}</strong> for <strong>{{ niche || 'your business' }}</strong> without <strong>{{ bigObstacle || 'the usual obstacles' }}</strong>?
          </p>
          <p class="text-lg text-slate-600">
            Let's schedule your discovery call and map out your first {{ timeFrame || 'next 90 days' }}.
          </p>
        </div>
        <a
          :href="ctaUrl || '#'"
          class="inline-flex items-center justify-center rounded-full px-8 py-4 text-xl font-semibold transition-colors shadow-lg bg-slate-900 hover:bg-slate-700 text-white"
        >
          Schedule Your Discovery Call
        </a>
      </section>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}
</style>
