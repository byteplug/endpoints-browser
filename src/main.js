import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { specsStore } from '@/stores/specs.js'

import { Inkline, components } from '@inkline/inkline'
import '@inkline/inkline/inkline.scss'

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'

import "./main.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Inkline, {
    components
})
app.use(VueHighlightJS)

app.config.globalProperties.specs = specsStore()

app.mount('#app')
