<template>
    <h1 class="header">Home</h1>
    <heroImg />
    <p>
        See a few pokemons under. To view all click on pokeDex on the navigation
        above!
    </p>
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
        margin: 5rem 15rem 3rem 15rem;
        font-size: 1.2rem;
    }
</style>
