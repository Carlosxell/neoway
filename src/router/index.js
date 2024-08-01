import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      }
    },
    {
      path: '/favoritos',
      name: 'bookmarks',
      component: () => import('../views/BookmarksView.vue'),
      meta: {
        title: 'Favoritos',
      }
    }
  ]
})

export default router
