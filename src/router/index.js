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
    component: () => import('../components/chamados/chamados.vue')
  },
  {
    path: '/tecnicos',
    name: 'Tecnicos',
    component: () => import('../components/tecnicos/tecnicos.vue')
  },
  {
    path: '/detalhes-chamado/:id',
    name: 'DetalhesChamado',
    component: () => import('../components/chamados/detalhes_chamado.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
