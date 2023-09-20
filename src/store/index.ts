import { defineStore } from 'pinia'

export const headerStore = defineStore('headerStore', {
  state: () => ({
    currentIndex: 0
  })
})