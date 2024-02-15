
<script setup>
    import navbarComponent from '@/components/navbar-component.vue'
    import footerComponent from '@/components/footer-component.vue'

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
