<script setup>
    import navbarComponent from '@/components/navbar-component.vue'
    import footerComponent from '@/components/footer-component.vue'
    import { watchEffect } from 'vue'
    import { useColorThemeStore } from '@/stores/darkOrLight.js'

    watchEffect(function () {
        const appElement = document.getElementById('app')
        const store = useColorThemeStore()
        if (store.isLightTheme) {
            appElement.classList.add('LightTheme')
            appElement.classList.remove('DarkTheme')
        } else {
            appElement.classList.add('DarkTheme')
            appElement.classList.remove('LightTheme')
        }
    })
</script>

<template>
    <div>
        <navbar-component />
    </div>
    <router-view />
    <div>
        <footer-component />
    </div>
</template>
