import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: '/projets',
      name: 'projets',
      component: () => import('../components/Projets.vue')
    }



  ],
})

export default router
