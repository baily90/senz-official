<template>
  <div class="container-navbar" :class="{ 'dark': isScrolled }">
    <div class="navbar">
      <img
        @dragstart.prevent
        class="icon-logo wow fadeInLeft"
        src="@/assets/images/icon_logo.png"
        alt="icon_logo"
        @click="onGoHomeHandle">
      <img
        @dragstart.prevent
        class="icon-qr wow fadeInRight"
        src="@/assets/images/icon_qr.png"
        alt="icon_qr"
        @click="onScrollBottomHandle">
    </div>
  </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

const router = useRouter()
const { y } = useWindowScroll({ behavior: 'smooth' })

const isScrolled = computed(() => y.value > 10)

const navbar = ref([
  { id: 1, name: '首页', path: '/', type: 'router', selected: false },
  // { id: 2, name: '产品', path: '/product', type: 'menu', selected: false },
  { id: 3, name: '关于', path: '/about', type: 'router', selected: false }
])

watch(() => router.currentRoute.value.path, () => {
  navbar.value.forEach(item => {
    item.selected = item.path === router.currentRoute.value.path
  })
}, { immediate: true, deep: true })

// const onClickHandle = (nav) => {
//   if (nav.type === 'router') {
//     router.push(nav.path)
//   }
// }
const onScrollBottomHandle = () => {
  y.value = window.document.body.clientHeight
}
const onGoHomeHandle = () => router.replace('/')
</script>

<style lang="less" scoped>
.container-navbar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  padding: 0 9px;
  z-index: 9999;
  color: #fff;
  background-color: transparent;
  transition: all ease .3s;
  &.dark {
    background-color: rgba(0, 0, 0, .3);
    backdrop-filter: blur(20px)
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .icon-logo {
      display: flex;
      width: 100px;
      height: 27px;
      cursor: pointer;
    }
    .icon-qr {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }
}
</style>
