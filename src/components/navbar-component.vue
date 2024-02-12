<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
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
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Another action</a
                                >
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Something else here</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
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

<!-- <template>
    <div>
        <h2 id="logo">Dylans Pokémon</h2>
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
-->
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
