<template>
    <div>
        <h1 class="header">PokéDex</h1>
        <PokemonCards />
    </div>
</template>

<script>
    import PokemonCards from '../components/pokemon-cards.vue'

    export default {
        components: {
            PokemonCards
        }
    }
</script>

<style scoped></style>
