import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QiitaSearch from '../views/QiitaSearch.vue'
import QiitaFavorite from '../views/QiitaFavorite.vue'
import AddressForm from '../views/AddressForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/qiita_search',
    name: 'QiitaSearch',
    component: QiitaSearch
  },
  {
    path: '/qiita_favorite',
    name: 'QiitaFavorite',
    component: QiitaFavorite
  },
  {
    path: '/address',
    name: 'AddressForm',
    component: AddressForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
