import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'page_1',
    component: () => import('../views/city.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
