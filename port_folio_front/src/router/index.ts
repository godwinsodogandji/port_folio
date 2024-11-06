import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Apropos.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/apropos',
      name: 'Apropos',
      component: Apropos
    },
    
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld.vue') 
    },
    
  ],
})

export default router
