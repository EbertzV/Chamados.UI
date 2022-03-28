import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaInicial from '../components/tela_inicial/tela_inicial.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TelaInicial',
    component: TelaInicial
  },
  {
    path: '/chamados',
    name: 'Chamados',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/chamados/chamados.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
