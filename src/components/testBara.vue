<template>
    <div>
        <h2 id="logo">Pokémon</h2>
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
    #logo {
        font-size: 1.5rem;
        letter-spacing: 0.07rem;
        float: left;
    }

    ul {
        float: right;
        margin-right: 1.25rem;
    }

    ul li {
        display: inline-block;
        margin: 0 0.31rem;
    }

    ul li {
        font-size: 1rem;
        text-transform: uppercase;
        padding: 0.2rem;
    }

    ul li a {
        color: #ffffff;
        text-decoration: none;
    }
</style>
