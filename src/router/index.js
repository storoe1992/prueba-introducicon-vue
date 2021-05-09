import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue');
const Carrito = () => import('../views/Carrito.vue');
const Inventario = () => import('../views/Inventario.vue');
const NotFound = () => import('../views/NotFound.vue');
const Ventas = () => import('../views/Ventas.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/carrito',
    component: Carrito
  },
  {
    path: '/inventario',
    component: Inventario
  },
  {
    path: '/ventas',
    component: Ventas
  },
  {
    path: '*',
    component: NotFound
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
