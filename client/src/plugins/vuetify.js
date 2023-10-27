
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
// import { VBtn } from 'vuetify/components/VBtn'

const vuetify = createVuetify({
    components,
    directives,
    defaults: {
        VBtn: {
            style: 'text-transform: lowercase;',
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

export default vuetify