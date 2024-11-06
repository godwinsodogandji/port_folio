import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Apropos.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../components/VideoComponent.vue')
    },
    



  ],
})

export default router
