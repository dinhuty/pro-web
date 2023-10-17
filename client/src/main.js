/* eslint-disable */
import { createApp } from 'vue'
import '@/assets/scss/global.scss'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faUserSecret, 
    faAngleRight,
    faCalendar,
    faAngleLeft, 
    faHeadset,
    faCartPlus,
    faClock,
    faStar,
    faMobile,
    faLaptop
} from '@fortawesome/free-solid-svg-icons'

import {
    faUser,

} from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret,
    faAngleRight,
    faAngleLeft,
    faHeadset,
    faCalendar,
    faCartPlus,
    faUser,
    faClock,
    faStar,
    faMobile,
    faLaptop
)

createApp(App)
    .use(router)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');