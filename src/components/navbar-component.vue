<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'home' }"
                >Dylans Pokémon</router-link
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'pokedex' }"
                            >PokéDex</router-link
                        >
                    </li>
                </ul>
                <button class="btn_theme" @click="toggleTheme">
                    {{ buttonText }}
                </button>
                <form class="d-flex" role="search">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search.."
                        aria-label="Search"
                    />
                    <button
                        @click.prevent="submitSearch"
                        class="btn btn-blue"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import { useColorThemeStore } from '@/stores/darkOrLight.js'
    import { computed } from 'vue'
    const store = useColorThemeStore()
    const buttonText = computed(() =>
        store.isLightTheme ? 'Dark Theme' : 'Light Theme'
    )
    function toggleTheme() {
        store.toggle()
    }
</script>

<style scoped>
    .navbar {
        padding: 2rem;
    }
    .navbar-brand {
        font-size: 2rem;
        letter-spacing: 0.2rem;
        font-weight: bold;
        padding: 0.5rem;
        margin-right: 6rem;
    }

    ul li {
        font-size: 1.5rem;
        text-transform: uppercase;
        padding: 0.2rem;
    }

    ul li a {
        color: #5f5e5e;
        text-decoration: none;
    }
    .btn-blue {
        background-color: #1326b9;
        font-size: 1.5rem;
        color: #f3f3f3;
        border-color: #1122a0;
        padding: 0rem 2.5rem 0rem 1rem;
        border-radius: 5px;
        border: 1px solid;
    }
    .btn-blue:hover {
        background-color: #1122a0;
        border-color: #1326b9;
        color: #f3f3f3;
        transition: background-color 0.3s ease;
    }
    .nav-item {
        margin-right: 1.5rem;
    }
    .nav-item:hover {
        text-decoration: underline #1326b9;
    }
    .form-control {
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1.5rem;
    }
    .btn_theme {
        justify-content: center;
        align-items: center;
        color: #5f5e5e;
        font-size: 1rem;
        padding: 0.5rem 2rem;
        border-radius: 5px;
        border: 1px solid;
        margin: 1rem;
        letter-spacing: 1px;
    }
    .btn_theme:hover {
        background-color: #5f5e5e;
        color: #f3f3f3;
        transition: background-color 0.3s ease;
    }

    @media (max-width: 380px) {
        .navbar-brand {
            font-size: 0.9rem;
            width: 8.5rem;
        }
    }
</style>
