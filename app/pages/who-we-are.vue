<script setup lang="ts">
type PersonLink = {
  label?: string;
  to: string;
  icon?: string;
  variant?: "solid" | "outline" | "subtle" | "soft" | "ghost" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  target?: string;
};

type Person = {
  _path?: string;
  name: string;
  role: string;
  bio: string;
  photo?: {
    src: string;
    alt?: string;
  };
  links?: PersonLink[];
};

const { data: page } = await useAsyncData("who-we-are", () =>
  queryCollection("whoweare").first(),
);

const { data: people } = await useAsyncData("who-we-are-people", () =>
  queryCollection("people").all(),
);

const title = computed(
  () => page.value?.seo?.title || page.value?.title || "Who We Are",
);
const description = computed(
  () => page.value?.seo?.description || page.value?.description || "",
);

const orderedTeam = computed(() => {
  const ids = page.value?.team?.people;
  const members = (people.value || []) as Person[];

  if (ids?.length) {
    const lookup = new Map(
      members.map((member) => [member._path as string, member]),
    );

    return ids
      .map((id) => lookup.get(id))
      .filter((member): member is (typeof members)[number] => Boolean(member));
  }

  return members;
});

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<template>
  <div v-if="page">
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto space-y-8">
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">
              {{ page.hero.headline }}
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {{ page.hero.description }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <UButton
                v-for="(link, index) in page.hero.links"
                :key="`${link.to}-${index}`"
                v-bind="link"
              >
                {{ link.label }}
              </UButton>
            </div>
          </div>
          <NuxtImg
            v-if="page.hero.photo?.src"
            :src="page.hero.photo.src"
            :alt="page.hero.photo.alt || page.hero.headline"
            class="rounded-lg h-64 w-full object-cover shadow-lg"
          />
        </div>
      </UContainer>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-16 lg:py-24">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-6">
              {{ page.mission.title }}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {{ page.mission.description }}
            </p>
            <h3 class="text-2xl font-semibold mb-4">
              {{ page.mission.vision.title }}
            </h3>
            <p class="text-lg text-gray-600 dark:text-gray-300">
              {{ page.mission.vision.description }}
            </p>
          </div>
          <div v-if="page.mission.photo?.src" class="relative">
            <NuxtImg
              :src="page.mission.photo.src"
              :alt="page.mission.photo.alt || page.mission.title"
              class="rounded-lg h-96 w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">
            {{ page.story.title }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            {{ page.story.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <div
            v-for="milestone in page.story.milestones"
            :key="milestone.year"
            class="text-center"
          >
            <div
              class="bg-primary-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-primary-600 font-bold text-xl">
                {{ milestone.label }}
              </span>
            </div>
            <h3 class="text-xl font-semibold mb-2">
              {{ milestone.year }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ milestone.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Values Section -->
    <section class="py-16 lg:py-24">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">
            {{ page.values.title }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            {{ page.values.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="value in page.values.items"
            :key="value.title"
            class="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow"
          >
            <div
              class="bg-gray-200 dark:bg-gray-700 rounded-lg h-20 w-20 mx-auto mb-4 flex items-center justify-center"
            >
              <Icon :name="value.icon" class="w-8 h-8 text-primary-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ value.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ value.description }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Team Section -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">
            {{ page.team.title }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            {{ page.team.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamCard
            v-for="member in orderedTeam"
            :key="member._path"
            :name="member.name"
            :role="member.role"
            :bio="member.bio"
            :photo="member.photo"
            :links="member.links"
          />
        </div>
      </UContainer>
    </section>

    <!-- What Sets Us Apart -->
    <section class="py-16 lg:py-24">
      <UContainer>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div v-if="page.differentiators.photo?.src" class="relative">
            <NuxtImg
              :src="page.differentiators.photo.src"
              :alt="
                page.differentiators.photo.alt || page.differentiators.title
              "
              class="rounded-lg h-96 w-full object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-6">
              {{ page.differentiators.title }}
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {{ page.differentiators.description }}
            </p>
            <div class="space-y-6">
              <div
                v-for="item in page.differentiators.items"
                :key="item.title"
                class="flex items-start gap-4"
              >
                <Icon
                  :name="item.icon || 'lucide:check-circle'"
                  class="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 class="text-xl font-semibold mb-2">
                    {{ item.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Call to Action -->
    <section class="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-3xl lg:text-4xl font-bold mb-6">
            {{ page.cta.title }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {{ page.cta.description }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton
              v-for="(link, index) in page.cta.links"
              :key="`${link.to}-${index}`"
              v-bind="link"
            >
              {{ link.label }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
