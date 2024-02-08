<template>
    <div>
        <div>
            <navbar-component />
        </div>
        <router-view />
        <div>
            <footer-component />
        </div>
    </div>
</template>

<script>
    import navbarComponent from './components/navbar-component.vue'
    import footerComponent from './components/footer-component.vue'

    export default {
        components: {
            navbarComponent,
            footerComponent
        }
    }
</script>
