import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/utils/progress'
import { useTitle } from '@vueuse/core'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      meta: {
        title: '首页'
      }
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
