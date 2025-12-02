export function useFadeInOnScroll() {
  const isVisible = ref(false)

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  const observe = el => observer.observe(el)

  return { isVisible, observe }
}
