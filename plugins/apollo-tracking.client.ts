export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const appId = config.public.apolloTrackingId;
  if (!appId) return;

  // Prevent double-injection
  if ((window as any).__apolloTrackerLoaded) return;
  (window as any).__apolloTrackerLoaded = true;

  const cacheBuster = Math.random().toString(36).substring(7);
  const script = document.createElement("script");

  script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${cacheBuster}`;
  script.async = true;
  script.defer = true;

  script.onload = () => {
    if ((window as any).trackingFunctions?.onLoad) {
      (window as any).trackingFunctions.onLoad({
        appId,
      });
    }
  };

  document.head.appendChild(script);
});
