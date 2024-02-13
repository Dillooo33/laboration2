<template>
    <div class="card-container">
        <div v-for="pokemon in pokemonList" :key="pokemon.id" class="card">
            <img
                :src="pokemon.image"
                class="card-img-top"
                alt="Pokemon Image"
            />
            <div class="card-body">
                <h5 class="card-title">{{ pokemon.name }}</h5>
                <a href="#" class="btn btn-primary btn-sm">See More!</a>
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
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .card {
        text-align: center;
        margin: 10px;
        padding: 10px;
        border: 1px solid #5f5e5e;
        border-radius: 5px;
        width: 8.5rem;
        height: 13rem;
    }

    .card-img-top {
        object-fit: cover;
    }

    .card-title {
        font-size: 0.8rem;
    }

    .btn-primary {
        font-size: 0.75rem;
        background-color: #5f5e5e;
        color: #f3f3f3;
        border: #5f5e5e;
    }

    .btn-primary:hover {
        background-color: transparent;
        color: #5f5e5e;
        border: 2px solid #5f5e5e;
        transition: all 0.3s ease;
    }
</style>
