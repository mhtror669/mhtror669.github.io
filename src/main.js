// Vue
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import router from "@/router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'

// Working
import themes from "@/themes";
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: localStorage.settingsTheme === undefined ? "Classic" : localStorage.settingsTheme,
        themes
    }
})

createApp({})
    .use(router)
    .use(vuetify)
    .mount('#app')
