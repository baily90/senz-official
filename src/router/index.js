import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/utils/progress'
import { useTitle } from '@vueuse/core'
import PCLayout from '@/layout/PCLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pc',
      name: 'PC',
      component: PCLayout,
      children: [
        {
          path: '',
          name: 'PCHOME',
          component: () => import('@/views/pc/home/index.vue'),
          meta: {
            title: '首页'
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
