import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '', name: 'home', component: () => import('@/views/Home.vue') },
    {
        path: '/pokedex',
        name: 'pokedex',
        component: () => import('@/views/PokeDex.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
