import { createRouter, createWebHistory } from 'vue-router'
import DescriptionView from '../views/DescriptionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'description',
      component: DescriptionView,
    },
    {
      path: '/board-demo',
      name: 'board-demo',
      component: () => import('../views/BoardDemoView.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue'),
    },
  ],
})

export default router
