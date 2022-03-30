import Vue from 'vue'
import VueRouter from 'vue-router'
import Chamados from '../components/chamados/chamados.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chamados',
    component: Chamados
  },
  {
    path: '/chamados',
    name: 'Chamados',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/chamados/chamados.vue')
  },
  {
    path: '/tecnicos',
    name: 'Tecnicos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/tecnicos/tecnicos.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
