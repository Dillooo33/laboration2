<template>
    <div>
        <h1 class="header">PokéDex</h1>
        <div id="pokemon-filter">
            <label id="labels" for="filter">Filter</label>
            <select name="filters" id="poke-filters">
                <option value="none">None</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                <optgroup id="gen" label="generation">
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
    .header {
        font-size: 3rem;
        text-align: center;
        padding: 2rem;
    }
    #pokemon-filter {
        float: left;
        font-size: 1rem;
        width: 7.5rem;
        margin-left: 1rem;
    }
    #labels {
        font-size: 1.5rem;
    }

    #gen {
        font-weight: 200;
    }
</style>
