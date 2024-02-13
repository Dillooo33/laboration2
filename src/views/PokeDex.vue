<template>
    <div>
        <h1 class="header">PokéDex</h1>
        <div id="pokemon-filter">
            <label for="filter">Filter</label>
            <select name="filters" id="poke-filters">
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
    }

    #poke-filters {
        padding: 0.1rem;
        width: 5rem;
        border-radius: 5px;
    }
</style>
