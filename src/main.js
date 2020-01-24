import Vue from 'vue'
import App from './app/App'
import router from './routes'
import store from './store'

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
