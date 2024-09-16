export const useAppStore = defineStore('app', () => {
  const token = ref(null)

  return {
    token,
  }
}, {
  persist: true
})
