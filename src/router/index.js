import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  setPageTitle(to.meta.title)

  const appStore = useAppStore()
  const { token } = storeToRefs(appStore)
  const { logout } = appStore
  const noNeedAuth = to.meta?.noNeedAuth || false

  if (token.value) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (noNeedAuth) {
      next()
    } else {
      logout(to.fullPath)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
