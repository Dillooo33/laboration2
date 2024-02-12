<template>
    <div>
        <h1 class="header">PokéDex</h1>
        <div id="pokemon-filter">
            <label for="filter">Filter</label>
            <select name="filters" id="filter">
                <option value="none">None</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <optgroup label="generation">
                    <option value="gen1">Generation 1</option>
                    <option value="gen2">Generation 2</option>
                    <option value="gen4">Generation 4</option>
                </optgroup>
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
    body {
        background-color: #242424;
    }
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

    #pokemon-filter {
        margin-bottom: 20px;
        text-align: left;
        width: 20vh;
        padding: 8px;
    }

    #filter {
        padding: 0.2rem;
        border-radius: 5px;
    }
</style>
