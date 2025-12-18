export function useRotatingText(words: string[], intervalMs: number = 1200) {
  const currentIndex = ref(0)
  let interval: NodeJS.Timeout | null = null

  onMounted(() => {
    interval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % words.length
    }, intervalMs)
  })

  onUnmounted(() => {
    if (interval) {
      clearInterval(interval)
    }
  })

  return {
    currentWord: computed(() => words[currentIndex.value]),
    currentIndex
  }
}
