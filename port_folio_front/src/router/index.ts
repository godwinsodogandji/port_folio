import ContactMeView from '@/views/ContactMeView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: '/contact',
      name: 'contact_me',
      component: ContactMeView 
    },
    
  ],
})

export default router
