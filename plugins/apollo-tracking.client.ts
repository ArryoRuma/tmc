export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (!config.public.apolloTrackingId) return;

  useHead({
    script: [
      {
        src: "https://assets.apollo.io/js/track.js",
        async: true,
        defer: true,
        "data-apollo-tracking-id": config.public.apolloTrackingId,
      },
    ],
  });
});
