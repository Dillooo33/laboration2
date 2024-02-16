<template>
    <div>
        <h1 class="header">PokéDex</h1>
        <div>
            <navbarComponent @search="handleSearch" />
            <PokemonCards />
        </div>
    </div>
</template>

<script>
    import PokemonCards from '../components/pokemon-cards.vue'
    import { ref } from 'vue'
    import navbarComponent from '../components/navbar-component.vue'

    const searchQuery = ref('')

    const handleSearch = (query) => {
        searchQuery.value = query
    }

    export default {
        components: {
            PokemonCards
        }
    }
</script>

<style scoped></style>
