import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/utils/progress'
import { useTitle } from '@vueuse/core'
import Layout from '@/layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/index.vue'),
          meta: {
          }
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/about/index.vue'),
          meta: {
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  useTitle(to.meta.title)
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
