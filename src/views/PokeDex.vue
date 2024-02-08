<template>
    <div>
        <h1>PokéDex</h1>
        <div id="pokemon-filter">
            <label for="filter">Filter</label>
            <select name="filters" id="filter">
                <select value=""></select>
                <select value=""></select>
                <select value=""></select>
            </select>
        </div>
        <div class="pokemon-container">
            <div
                v-for="pokemon in pokemonList"
                :key="pokemon.id"
                class="pokemon-card"
            >
                <img
                    :src="pokemon.image"
                    alt="Pokemon Image"
                    class="pokemon-image"
                />
                <span class="pokemon-name">{{ pokemon.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                pokemonList: []
            }
        },
        mounted() {
            this.fetchPokemonData()
        },
        methods: {
            fetchPokemonData() {
                axios
                    .get('../../data/pokeDex.JSON')
                    .then((response) => {
                        this.pokemonList = response.data.Pokemon
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }
    }
</script>

<style scoped>
    .pokemon-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .pokemon-card {
        text-align: center;
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 200px;
    }

    .pokemon-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin-bottom: 10px;
    }

    .pokemon-name {
        font-weight: bold;
    }
</style>
