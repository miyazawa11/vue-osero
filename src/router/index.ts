import { createRouter, createWebHistory } from 'vue-router'
import AppHomeVue from '@/views/AppHome.vue'
import GameStartVue from '@/views/GameStart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'GameStartVue',
      component: GameStartVue
    },
    {
      path: '/home',
      name: 'home',
      component: AppHomeVue
    }
  ]
})

export default router