<template>
    <div class="card-container">
        <div v-for="pokemon in filteredPokemon" :key="pokemon.id" class="card">
            <img
                :src="pokemon.image"
                class="card-img-top"
                :alt="pokemon.name"
            />
            <div class="card-body">
                <h5 class="card-title">{{ pokemon.name }}</h5>
                <button
                    @click="viewPokemon(pokemon.id)"
                    class="btn btn-primary btn-sm"
                >
                    See More!
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        props: {
            limit: {
                type: Number,
                default: null
            },
            filterType: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                pokemonList: []
            }
        },
        computed: {
            filteredPokemon() {
                let list = this.pokemonList
                if (this.filterType) {
                    list = list.filter((pokemon) =>
                        pokemon.type.includes(this.filterType)
                    )
                }
                return this.limit
                    ? this.shuffleArray(list).slice(0, this.limit)
                    : list
            }
        },
        methods: {
            fetchPokemonData() {
                axios
                    .get('/data/pokeDex.JSON')
                    .then((response) => {
                        this.pokemonList = response.data.Pokemon
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            },
            viewPokemon(pokemonId) {
                this.$router.push({ path: '/pokemon/' + pokemonId })
            },
            shuffleArray(array) {
                return array.sort(() => 0.5 - Math.random())
            }
        },
        mounted() {
            this.fetchPokemonData()
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
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        padding: 2.5rem;
        border: 1px solid #5f5e5e;
        border-radius: 5px;
        width: 20rem;
    }

    .card-img-top {
        object-fit: cover;
    }

    .card-title {
        font-size: 2rem;
    }

    .btn-primary {
        font-size: 1.5rem;
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
