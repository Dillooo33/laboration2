<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'home' }"
                >Dylans Pokémon</router-link
            >
            <div class="contact">
                <img
                    src="../../public/image/logo/5305154_fb_facebook_facebook logo_icon.png"
                    alt="facebook"
                />
                <img
                    src="../../public/image/logo/5279112_camera_instagram_social media_instagram logo_icon.png"
                    alt="instagram"
                />
            </div>
            <div class="copyright">&copy; Dylans Pokémon 2024</div>
            <form class="d-flex" role="email">
                <input
                    class="form-control me-2"
                    type="email"
                    placeholder="Email..."
                    aria-label="email"
                />
                <button class="btn btn-blue" type="submit">Subscibe</button>
            </form>
        </div>
    </nav>
</template>

<style scoped>
    .navbar {
        padding: 2rem;
        margin-top: 2rem;
    }
    .navbar-brand {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
        font-weight: bold;
        padding: 0.5rem;
        margin-right: 6rem;
    }

    .form-control {
        padding: 0.3rem 1rem;
        border-radius: 5px;
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }
    .btn-blue {
        background-color: #1326b9;
        font-size: 1.2rem;
        color: #f3f3f3;
        border-color: #1122a0;
        padding: 0rem 2rem 0rem 1rem;
        border-radius: 5px;
        border: 1px solid;
    }

    .btn-blue:hover {
        background-color: #1122a0;
        border-color: #1326b9;
        color: #f3f3f3;
        transition: background-color 0.3s ease;
    }
    .copyright {
        color: #5f5e5e;
    }
    .contact img {
        margin-left: 1rem;
    }
</style>
