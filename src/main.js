import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import ui from '@/components/library'

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
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store).use(router).use(ElementPlus).use(ui).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
