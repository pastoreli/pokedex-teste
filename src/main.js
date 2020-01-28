import Vue from 'vue'
import App from './app/App'
import router from './routes'
import store from './store'

import './assets/scss/main.scss'
import '@/plugins/filters'
import '@/plugins/pokComponents'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
