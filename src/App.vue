<template>
    <div>
        <ul>
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li>
                <router-link :to="{ name: 'pokedex' }">PokéDex</router-link>
            </li>
        </ul>
    </div>
    <router-view />
</template>

<script>
    import { RouterView, RouterLink } from 'vue-router'
</script>
