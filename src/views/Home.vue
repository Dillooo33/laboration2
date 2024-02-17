<template>
    <h1 class="header">Home</h1>
    <heroImg />
    <p>Random Pokemon displays below to view all click on PokeDex above!</p>
    <PokemonCards :limit="3" />
</template>

<script>
    import heroImg from '../components/hero-img.vue'
    import PokemonCards from '../components/pokemon-cards.vue'

    export default {
        components: {
            heroImg,
            PokemonCards
        }
    }
</script>

<style scoped>
    p {
        margin: 5rem 20rem 3rem 20rem;
        font-size: 1.2rem;
    }
</style>
