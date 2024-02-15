<template>
    <div>
        <h1 class="header">PokéDex</h1>
        <div id="pokemon-filter">
            <label id="labels" for="filter">Filter</label>
            <select name="filters" id="poke-filters">
                <option value="none">None</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
            </select>
        </div>
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

<style scoped>
    #pokemon-filter {
        float: left;
        font-size: 2rem;
        width: 7rem;
        margin-left: 3rem;
    }
    #poke-filters {
        padding: 0.5rem;
    }
    #labels {
        font-size: 1.5rem;
    }

    #gen {
        font-weight: 200;
    }
</style>
