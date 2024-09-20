<template>
  <div class="container-navbar" :class="{ 'dark': isScrolled }">
    <div class="navbar">
      <img
        @dragstart.prevent
        class="icon-logo wow fadeInLeft"
        src="@/assets/images/icon_logo.png"
        alt="icon_logo"
        @click="onGoHomeHandle">
        <div class="nav">
          <div
            class="nav-item  wow fadeInDown"
            :class="{ act: nav.selected }"
            v-for="nav in navbar"
            :key="nav.id"
            @click="onClickHandle(nav)">
            {{nav.name}}
          </div>
        </div>
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

const isScrolled = computed(() => y.value > window.innerHeight - 100)

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

const onClickHandle = (nav) => {
  if (nav.type === 'router') {
    router.push(nav.path)
  }
}
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
  height: 100px;
  padding: 0 64px;
  z-index: 9999;
  color: #fff;
  background-color: transparent;
  transition: all ease .3s;
  &.dark {
    background-color: rgba(0, 0, 0, .6);
    backdrop-filter: blur(25px)
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 100%;
    .icon-logo {
      display: flex;
      width: 147px;
      height: 40px;
      cursor: pointer;
    }
    .icon-qr {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    .nav {
      display: flex;
      align-content: stretch;
      gap: 20px;
      cursor: pointer;
      .nav-item {
        padding: 20px 10px;
        font-size: 20px;
        color: rgba(255, 255, 255, .5);
        transition: all ease .3s;
        &.act {
          color: #fff;
        }
      }

    }
  }
}
</style>
