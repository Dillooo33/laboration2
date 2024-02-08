<template>
    <div>
        <p class="logo">Dylans PokeDex</p>
        <ul>
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li>
                <router-link :to="{ name: 'pokedex' }">PokéDex</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'randomiser' }"
                    >Randomiser</router-link
                >
            </li>
        </ul>
    </div>
</template>

<script>
    import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
    h2 {
        font-size: 1rem;
    }
</style>
