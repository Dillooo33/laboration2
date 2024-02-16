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
                <form class="d-flex" role="search">
                    <input
                        class="form-control me-2"
                        v-model="searchTerm"
                        type="search"
                        placeholder="Search.."
                        aria-label="Search"
                    />
                    <button
                        @click.prevent="submitSearch"
                        class="btn btn-outline-success"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    import { RouterLink } from 'vue-router'
    import { ref, defineEmits } from 'vue'

    const searchTerm = ref('')
    const emit = defineEmits(['search'])

    const submitSearch = () => {
        emit('search', searchTerm.value)
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

    .btn-outline-success {
        justify-content: center;
        align-items: center;
        color: #5f5e5e;
        font-size: 1.5rem;
        padding: 0.5rem 2rem;
        border-radius: 5px;
        border: 1px solid;
    }

    .btn-outline-success:hover {
        background-color: #5f5e5e;
        color: #f3f3f3;
        transition: background-color 0.3s ease;
        border: 2px solid #5f5e5e;
    }
    .nav-item {
        margin-right: 1.5rem;
    }
    .nav-item:hover {
        text-decoration: underline orange;
    }

    .form-control {
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1.5rem;
    }
</style>
