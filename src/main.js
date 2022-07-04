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

const pinia = createPinia()
app.use(pinia)

// Stores must be created after Pinia was registered.
var specs = specsStore()

// Router needs access to the specs store in order to protect some routes when
// no specs is set.
router.specs = specs
app.use(router)

app.use(Inkline, {
    components
})
app.use(VueHighlightJS)

app.config.globalProperties.specs = specs

app.mount('#app')
