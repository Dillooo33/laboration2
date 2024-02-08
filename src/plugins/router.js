import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '', name: 'home', component: () => import('@/views/Home.vue') },
    {
        path: '/pokedex',
        name: 'pokedex',
        component: () => import('@/views/PokeDex.vue')
    },
    {
        path: '/randomiser',
        name: 'randomiser',
        component: () => import('@/views/Randomiser.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
