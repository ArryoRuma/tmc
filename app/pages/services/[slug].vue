<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(() =>
  queryCollection('service_pages')
    .where({ _id: `service_pages:${route.params.slug}` })
    .first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Not found' })
}
</script>

<template>
  <UPage>
    <UPageBody>
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>

      <SectionsRenderer :sections="page.sections" />
    </UPageBody>
  </UPage>
</template>
