// composables/useOgImage.js
// Safe wrapper for OG image functionality
export const useSafeOgImage = () => {
  const isOgImageEnabled = !process.env.DISABLE_OG_IMAGE

  const safeDefineOgImage = (config) => {
    if (isOgImageEnabled && typeof defineOgImage !== 'undefined') {
      try {
        defineOgImage(config)
      } catch (error) {
        console.warn('OG Image generation failed:', error)
      }
    }
  }

  const safeDefineOgImageComponent = (component, config) => {
    if (isOgImageEnabled && typeof defineOgImageComponent !== 'undefined') {
      try {
        defineOgImageComponent(component, config)
      } catch (error) {
        console.warn('OG Image component generation failed:', error)
      }
    }
  }

  return {
    safeDefineOgImage,
    safeDefineOgImageComponent,
    isOgImageEnabled
  }
}
