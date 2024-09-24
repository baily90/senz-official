import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/utils/progress'
import { useTitle } from '@vueuse/core'
import Layout from '@/layout/Layout.vue'
import { isPc, isMobile } from '@/utils/ua'

/**
 * type: 'pc'-PC端 'mobile'-移动端 'both'-两端兼容
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: isPc() ? '/pc' : '/mobile'
    },
    {
      path: '/pc',
      name: 'PCLayout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'PCHome',
          component: () => import('@/views/pc/home/index.vue'),
          meta: {
            type: 'pc'
          }
        },
        {
          path: 'about',
          name: 'PCAbout',
          component: () => import('@/views/pc/about/index.vue'),
          meta: {
            type: 'pc'
          }
        }
      ]
    },
    {
      path: '/mobile',
      name: 'MobileLayout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'MobileHome',
          component: () => import('@/views/mobile/home/index.vue'),
          meta: {
            type: 'mobile'
          }
        },
        {
          path: 'product/310',
          name: 'Product310',
          component: () => import('@/views/mobile/product/310.vue'),
          meta: {
            type: 'both'
          }
        },
        {
          path: 'product/330',
          name: 'Product330',
          component: () => import('@/views/mobile/product/330.vue'),
          meta: {
            type: 'both'
          }
        },
        {
          path: 'about',
          name: 'MobileAbout',
          component: () => import('@/views/mobile/about/index.vue'),
          meta: {
            type: 'mobile'
          }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/error/index.vue'),
      meta: {
        title: 'errors~',
        noNeedAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  useTitle(to.meta.title)
  let path = to.fullPath
  if (isMobile() && to.meta.type === 'pc') {
    path = path.replace('/pc', '/mobile')
    next(path)
    return
  }
  if (isPc() && to.meta.type === 'mobile') {
    path = path.replace('/mobile', '/pc')
    next(path)
    return
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
