import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import '@/assets/styles/common.less'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// import { faUser, faMobileScreen, faCartShopping, faHeadphonesSimple, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas, fab)
// library.add(faUser, faMobileScreen, faCartShopping, faHeadphonesSimple, faCircleQuestion)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
