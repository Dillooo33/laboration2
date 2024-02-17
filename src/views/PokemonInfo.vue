<template>
    <div class="container" v-if="foundPokemon">
        <h1 class="header">{{ foundPokemon.name }}</h1>
        <div class="pokemon-details">
            <div class="pokemon-info">
                <p>Type: {{ foundPokemon.type.join(', ') }}</p>
                <p>Category: {{ foundPokemon.category }}</p>
                <p>Abilities: {{ foundPokemon.abilities.join(', ') }}</p>
                <p>Weaknesses: {{ foundPokemon.weaknesses.join(', ') }}</p>
                <p>Evolution Stage: {{ foundPokemon.evolutionStage }}</p>
            </div>
            <div class="pokemon-image">
                <img :src="foundPokemon.image" alt="Pokemon Image" />
            </div>
        </div>
        <div class="evolution-container">
            <h2>Evolutions:</h2>
            <ul v-if="foundPokemon.evolutions.length > 0">
                <li
                    v-for="evolution in foundPokemon.evolutions"
                    :key="evolution.name"
                >
                    <img :src="evolution.image" alt="Evolution Image" />
                    <p>{{ evolution.name }}</p>
                </li>
            </ul>
            <p v-else>This pokemon has no evolutions.</p>
        </div>
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
                foundPokemon: null
            }
        },
        mounted() {
            const pokemonId = this.$route.params.id
            this.fetchPokemonData(pokemonId)
        },
        methods: {
            fetchPokemonData(pokemonId) {
                pokemonId = parseInt(pokemonId)
                axios
                    .get('/data/pokeDex.JSON')
                    .then((response) => {
                        const pokemonList = response.data.Pokemon
                        let foundPokemon = null

                        for (let i = 0; i < pokemonList.length; i++) {
                            if (pokemonList[i].id === pokemonId) {
                                foundPokemon = pokemonList[i]
                                break
                            }
                        }

                        this.foundPokemon = foundPokemon
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }
    }
</script>

<style scoped>
    .container {
        text-align: center;
    }

    .header {
        margin-top: 0;
    }

    .pokemon-details {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
    }

    .pokemon-info {
        text-align: left;
    }

    .pokemon-image {
        margin-left: 7rem;
    }

    .evolution-container {
        margin-top: 3rem;
    }

    p {
        font-size: 1.3rem;
    }

    @media (max-width: 375px) {
        .pokemon-details {
            display: flex;
            flex-direction: column-reverse;
        }
        .pokemon-image {
            margin: 0 0 3rem 0;
        }

        .evolution-container {
            margin: 5rem 2rem 3rem 0;
        }
    }
</style>
