import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import '@/assets/styles/common.less'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUser, faMobileScreen } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUser, faMobileScreen)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
