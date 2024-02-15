<template>
    <div v-if="pokemon">
        <h1>{{ pokemon.name }}</h1>
        <p>Name: {{ pokemon.name }}</p>
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
            this.fetchPokemonData(pokemonId)
        },
        methods: {
            fetchPokemonData(pokemonId) {
                axios
                    .get(`/data/pokemon/${pokemonId}.json`)
                    .then((response) => {
                        this.pokemon = response.data
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }
    }
</script>
