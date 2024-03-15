import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditView from '@/views/EditView.vue'
import CreateView from '../views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/students/:id/edit',
      name: 'edit',
      component: EditView,
    },
    {
      path: '/students/create',
      name: 'create',
      component: CreateView
    }
  ]
})

export default router
