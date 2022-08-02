import { createRouter, createWebHistory } from 'vue-router'

const routes =  [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home/page/:id',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/administration/:type',
    name: 'administration',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {top: 0, left: 0, behavior: "smooth"};
  },
})

export default router
