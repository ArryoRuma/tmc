<script setup lang="ts">
// Extend Window interface for HoneyBook
declare global {
  interface Window {
    _HB_?: {
      pid?: string;
    };
  }
}

const honeyBookLoaded = ref(false);

onMounted(async () => {
  if (import.meta.client && !honeyBookLoaded.value) {
    // Clear any existing HoneyBook instances
    if (window._HB_) {
      delete window._HB_;
    }

    // Remove any existing HoneyBook scripts
    const existingScripts = document.querySelectorAll(
      'script[src*="honeybook.com"]',
    );
    existingScripts.forEach((script) => script.remove());

    // Wait a bit then reinitialize
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Load and initialize HoneyBook
    const script = document.createElement("script");
    script.src =
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    script.async = true;
    script.onload = () => {
      // Initialize after script loads
      setTimeout(() => {
        if (window._HB_) {
          window._HB_.pid = "62f67000c557950007e38acd";
        }
        honeyBookLoaded.value = true;
      }, 200);
    };
    document.head.appendChild(script);

    // Also set up the global initialization
    window._HB_ = window._HB_ || {};
    window._HB_.pid = "62f67000c557950007e38acd";
  }
});
</script>

<template>
  <ClientOnly>
    <div class="hb-p-62f67000c557950007e38acd-1" />
    <img
      height="1"
      width="1"
      style="display: none"
      src="https://www.honeybook.com/p.png?pid=62f67000c557950007e38acd"
    />
  </ClientOnly>
</template>
