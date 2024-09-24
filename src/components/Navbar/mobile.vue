<template>
  <div class="container-navbar" :class="{ 'dark': isScrolled }">
    <div class="navbar">
      <img
        @dragstart.prevent
        class="icon-logo wow fadeInLeft"
        src="@/assets/images/icon_logo.png"
        alt="icon_logo"
        @click="onGoHomeHandle">
      <!-- <div class="btn-menu wow fadeInRight" :class="{'open': isMenuOpen}" @click="() => onToggleMenuOpenHandle()">
        <div class="btn-line"></div>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
      </div> -->
    </div>
  </div>
  <van-overlay class-name="overlay" :show="isMenuOpen" @click="() => onToggleMenuOpenHandle()" >
    <div class="menu" @click.stop >
      <template v-for="nav in navbar" :key="nav.id">
        <div class="menu-item" :class="{ 'act': nav.selected }" @click="() => goRoute(nav)">{{nav.name}}</div>
        <template v-if="nav?.children?.length">
          <div
            class="menu-item sub-menu-item"
            :class="{ 'act': item.selected }"
            v-for="item in nav.children"
            :key="item.id"
            @click="() => goRoute(item)">{{item.name}}</div>
        </template>
      </template>
    </div>
  </van-overlay>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'

const isMenuOpen = ref(false)
const router = useRouter()
const { y } = useWindowScroll({ behavior: 'smooth' })

const isScrolled = computed(() => y.value > 10)

const navbar = ref([
  { id: 1, name: '首页', path: '/mobile', type: 'router', selected: false },
  {
    id: 2,
    name: '产品',
    path: null,
    type: 'menu',
    selected: false,
    children: [
      { id: 1, name: '超声310', path: '/mobile/product/310', type: 'router', selected: false },
      { id: 2, name: '超声330', path: '/mobile/product/330', type: 'router', selected: false }
    ]
  },
  { id: 3, name: '关于', path: '/mobile/about', type: 'router', selected: false }
])

watch(() => router.currentRoute.value.path, () => {
  navbar.value.forEach(item => {
    item.selected = item.path === router.currentRoute.value.path
    let flag = false
    if (item?.children?.length) {
      item?.children.forEach(ite => {
        if (ite.path === router.currentRoute.value.path) {
          flag = true
          ite.selected = true
        } else {
          ite.selected = false
        }
      })
    }
    if (flag) {
      item.selected = true
    }
  })
}, { immediate: true, deep: true })

// const onClickHandle = (nav) => {
//   if (nav.type === 'router') {
//     router.push(nav.path)
//   }
// }
const onToggleMenuOpenHandle = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const onGoHomeHandle = () => router.replace('/')

const goRoute = (val) => {
  if (val.type === 'menu') return
  router.push(val.path)
}
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
  padding: 0 20px;
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
    .btn-menu {
      position: relative;
      width: 27px;
      height: 27px;
      cursor: pointer;
      .btn-line {
        position: absolute;
        left: 0;
        width: 27px;
        height: 2px;
        background-color: #fff;
        transition: all ease .3s;

        &:first-child {
          top: 5px;
        }
        &:nth-child(2) {
          margin-top: -1px;
          top: 50%;
        }
        &:last-child {
          bottom: 5px;
          width: 17px;
        }
      }
      &.open {
        .btn-line {
          &:first-child {
            top: 5px;
            width: 30px;
            transform: rotate(45deg);
            transform-origin: 6px 3px;
          }
          &:nth-child(2) {
            opacity: 0
          }
          &:last-child {
            bottom: 5px;
            width: 30px;
            transform: rotate(-45deg);
            transform-origin: 4px -1px;
          }
        }

      }
    }
  }
}
.overlay {
  padding-top: 44px;
  background-color: #000001;
  .menu {
    width: 100%;
    .menu-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 40px;
      padding: 0 9px 0 30px;
      color: hsla(0,0%,100%,.5);
      font-size: 18px;
      font-weight: bold;
      &.act {
        color: #fff;
      }
      &.sub-menu-item {
        height: 30px;
        padding-left: 65px;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}
</style>
