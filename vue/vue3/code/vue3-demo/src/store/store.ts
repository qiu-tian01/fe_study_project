import { defineStore } from 'pinia'

const useStore = defineStore('test', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    updateCounter() {
      this.count++
    }
  }
})

export {
  useStore
}