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
                    <li class="nav-item">
                        <router-link :to="{ name: 'randomiser' }"
                            >Randomiser</router-link
                        >
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search.."
                        aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
    .navbar-brand {
        font-size: 0.8rem;
        letter-spacing: 0.07rem;
        font-weight: bold;
    }

    ul {
        float: right;
    }

    ul li {
        font-size: 0.6rem;
        text-transform: uppercase;
        padding: 0.2rem;
    }

    ul li a {
        color: #5f5e5e;
        text-decoration: none;
    }

    .btn-outline-success {
        color: #5f5e5e;
        font-size: 0.7rem;
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        border: 1px solid;
    }

    .btn-outline-success:hover {
        background-color: #5f5e5e;
        color: #f3f3f3;
        transition: background-color 0.3s ease;
        border: 2px solid #5f5e5e;
    }

    .nav-item:hover {
        text-decoration: underline;
    }

    .form-control {
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
        font-size: 0.7rem;
    }
</style>
