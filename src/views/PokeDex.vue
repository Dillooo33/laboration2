<template>
    <div>
        <h1 class="header">PokéDex</h1>
        <div>
            <label>Type</label>
            <select v-model="selectedType">
                <option value="">All</option>
                <option value="Normal">Normal</option>
                <option value="Grass">Grass</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Electric">Electric</option>
                <option value="Ice">Ice</option>
                <option value="Flying">Flying</option>
                <option value="Poison">Poison</option>
                <option value="Psychic">Psychic</option>
            </select>
            <PokemonCards :filterType="selectedType" />
        </div>
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

<style scoped></style>
