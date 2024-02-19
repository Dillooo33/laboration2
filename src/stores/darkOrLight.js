import { defineStore } from 'pinia'

export const useColorThemeStore = defineStore('theme', {
    state: function () {
        return {
            isLightTheme: false
        }
    },
    actions: {
        toggle() {
            this.isLightTheme = !this.isLightTheme
        }
    }
})
