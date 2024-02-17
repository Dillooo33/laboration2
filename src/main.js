import { createApp } from 'vue'
import './assets/style.css'
import router from '@/plugins/router'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
