<template>
    <h1 class="header">Home</h1>
    <heroImg />
    <p>
        Random Pokemon displays below to view all click on PokeDex in the menu!
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
        margin: 5rem 20rem 3rem 20rem;
        font-size: 1.2rem;
    }

    @media (max-width: 380px) {
        img {
            width: 90vw;
            height: 40vh;
        }
        p {
            margin: 2rem;
            font-size: 1.2rem;
        }
    }
</style>
