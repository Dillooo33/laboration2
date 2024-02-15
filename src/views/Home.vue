<template>
    <h1 class="header">Home</h1>
    <heroImg />
</template>

<script>
    import heroImg from '@/components/hero-img.vue'

    export default {
        components: {
            heroImg
        }
    }
</script>

<style scoped>
    .header {
        font-size: 3rem;
        text-align: center;
        padding: 2rem;
    }
</style>
