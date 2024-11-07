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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../components/VideoComponent.vue')
    },
    {
      path: '/contact',
      name: 'contact_me',
      component: () => import('../views/ContactMeView.vue')
    },
    {
      path: '/qualification',
      name: 'qualification',
      component: () => import('../components/Qualification.vue')
    },




  ],
})

export default router
