import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    client: null,
    commandsActionMap: null,
  }),
  getters: {},
  actions: {},
})
