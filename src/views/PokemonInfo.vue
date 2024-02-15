<template>
    <div v-if="pokemon">
        <h1 class="header">{{ pokemon.name }}</h1>
        <p>Type: {{ pokemon.type }}</p>
        <p>Category: {{ pokemon.category }}</p>
        <p>Abilities: {{ pokemon.abilities }}</p>
        <p>Weaknesses: {{ pokemon.weaknesses }}</p>
        <p>Evolution Stage: {{ pokemon.evolutionStage }}</p>
        <img :src="pokemon.image" alt="Pokemon Image" />
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                pokemon: {}
            }
        },
        mounted() {
            const pokemonId = this.$route.params.id
            console.log('Pokemon ID:', pokemonId)
            this.fetchPokemonData(pokemonId)
        },
        methods: {
            fetchPokemonData(pokemonId) {
                axios
                    .get(`/data/pokemon/${pokemonId}.json`)
                    .then((response) => {
                        this.pokemon = response.data
                        console.log(this.pokemon.name)
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }
    }
</script>

<style>
    /* Fixa leyouten och att alla fonts och liknande ser bra ut efter att jag fått renderingen och funka! */
</style>
