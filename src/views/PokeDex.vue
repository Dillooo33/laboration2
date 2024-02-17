<template>
    <!-- Gav upp på search grejen kunde inte få den och funka så tänkte detta filter funkar typ ändå -->
    <div>
        <h1 class="header">PokéDex</h1>
        <div class="pokemon-filters">
            <label>Type</label>
            <select v-model="selectedType">
                <option value="">All</option>
                <option value="Normal">Normal</option>
                <option value="Grass">Grass</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Rock">Rock</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Steel">Steel</option>
                <option value="Ice">Ice</option>
                <option value="Flying">Flying</option>
                <option value="Poison">Poison</option>
                <option value="Psychic">Psychic</option>
            </select>
        </div>
        <PokemonCards :filterType="selectedType" />
    </div>
</template>

<script>
    import PokemonCards from '../components/pokemon-cards.vue'

    export default {
        components: {
            PokemonCards
        },
        data() {
            return {
                selectedType: ''
            }
        }
    }
</script>

<style scoped>
    .pokemon-filters {
        width: 10rem;
        font-size: 2rem;
        margin-left: 3rem;
    }
</style>
