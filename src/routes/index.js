import Vue from 'vue'
import Router from 'vue-router'
import routes from './app'

Vue.use(Router)

const route = new Router({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

export default route