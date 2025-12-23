<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  launchLabel?: string;
  launchDate?: string;
  note?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "A sharper site is on the way.",
  description:
    "We are rebuilding the experience with bold storytelling, clearer proof, and a launch that feels like a premiere.",
  launchLabel: "Projected launch",
  launchDate: "Spring 2026",
  note: "Want the first look? Join the list and we will send a private preview.",
});

const highlights = [
  {
    title: "Story-first positioning",
    detail: "Sharper messaging for founders who need authority fast.",
  },
  {
    title: "Video-led conversion",
    detail: "A cinematic flow tuned for inbound deals.",
  },
  {
    title: "Proof that lands",
    detail: "Case studies, wins, and data with real weight.",
  },
];

const milestones = [
  { label: "Strategy", percent: 92 },
  { label: "Production", percent: 76 },
  { label: "Launch", percent: 58 },
];
</script>

<template>
  <section class="relative isolate overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-br from-white via-primary-50/40 to-amber-50/60"
    />
    <div
      class="absolute -top-32 right-8 h-72 w-72 rounded-full bg-primary-300/25 blur-3xl animate-float-slow"
    />
    <div
      class="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-amber-300/25 blur-3xl animate-float-slower"
    />
    <div
      class="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(#1a4061_1px,transparent_1px)] [background-size:22px_22px]"
    />

    <UContainer class="relative py-20 sm:py-28">
      <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div class="space-y-8">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-primary-200/70 bg-white/80 px-4 py-1.5 text-sm font-semibold text-primary-700 shadow-sm"
          >
            <span class="h-2 w-2 rounded-full bg-primary-500" />
            Coming Soon
          </div>

          <div class="space-y-5">
            <h1
              class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              <span
                class="block bg-gradient-to-r from-primary-700 via-brand-400 to-amber-500 bg-clip-text text-transparent"
              >
                {{ props.title }}
              </span>
            </h1>
            <p class="max-w-xl text-lg text-slate-600 sm:text-xl">
              {{ props.description }}
            </p>
          </div>

          <div class="grid gap-6 sm:grid-cols-[1.2fr_0.8fr]">
            <div
              class="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur"
            >
              <p class="text-sm font-semibold text-slate-500">
                {{ props.launchLabel }}
              </p>
              <p class="mt-2 text-2xl font-bold text-slate-900">
                {{ props.launchDate }}
              </p>
              <p class="mt-3 text-sm text-slate-500">
                {{ props.note }}
              </p>
            </div>

            <div
              class="space-y-3 rounded-2xl border border-primary-100 bg-white/80 p-5 shadow-lg backdrop-blur"
            >
              <p class="text-sm font-semibold text-slate-500">
                Launch momentum
              </p>
              <div
                v-for="item in milestones"
                :key="item.label"
                class="space-y-2"
              >
                <div
                  class="flex items-center justify-between text-xs font-semibold text-slate-600"
                >
                  <span>{{ item.label }}</span>
                  <span>{{ item.percent }}%</span>
                </div>
                <div class="h-2 w-full rounded-full bg-slate-100">
                  <div
                    class="h-full rounded-full bg-gradient-to-r from-primary-500 to-amber-400"
                    :style="{ width: item.percent + '%' }"
                  />
                </div>
              </div>
            </div>
          </div>

          <form class="flex flex-col gap-4 sm:flex-row" @submit.prevent>
            <UInput
              type="email"
              name="email"
              autocomplete="email"
              placeholder="you@company.com"
              size="lg"
              class="sm:flex-1"
            />
            <UButton size="lg" color="primary" class="sm:px-8">
              Notify me
            </UButton>
          </form>

          <div class="flex flex-wrap items-center gap-4">
            <UButton to="/contact" variant="solid" color="primary">
              Book a call
            </UButton>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-900">
              TruMedia Creative
            </p>
          </div>
        </div>

        <div class="space-y-6">
          <div
            class="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur"
          >
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold text-slate-500">
                What is landing
              </p>
              <span
                class="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700"
              >
                In production
              </span>
            </div>
            <div class="mt-6 space-y-4">
              <div
                v-for="highlight in highlights"
                :key="highlight.title"
                class="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
              >
                <p class="text-sm font-semibold text-slate-900">
                  {{ highlight.title }}
                </p>
                <p class="mt-1 text-sm text-slate-500">
                  {{ highlight.detail }}
                </p>
              </div>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              class="rounded-2xl border border-primary-100 bg-gradient-to-br from-white via-white to-primary-50 p-5 shadow-lg"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500"
              >
                Studio Update
              </p>
              <p class="mt-3 text-base font-semibold text-slate-900">
                New reels, sharper case studies, and a heavier proof stack.
              </p>
            </div>
            <div
              class="rounded-2xl border border-amber-100 bg-gradient-to-br from-white via-white to-amber-50 p-5 shadow-lg"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600"
              >
                Next Drop
              </p>
              <p class="mt-3 text-base font-semibold text-slate-900">
                A launch video built like a trailer, tuned for B2B growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
@keyframes float-slow {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -18px, 0);
  }
}

@keyframes float-slower {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 22px, 0);
  }
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 13s ease-in-out infinite;
}
</style>
