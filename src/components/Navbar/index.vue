<template>
  <div class="container-navbar wow slideInDown" :class="{ 'dark': isScrolled }">
    <div class="navbar">
      <img
        @dragstart.prevent
        class="icon-logo wow fadeInLeft"
        src="@/assets/images/icon_logo.png"
        alt="icon_logo"
        @click="onReloadHandle">
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

const { y } = useWindowScroll({ behavior: 'smooth' })

const isScrolled = computed(() => y.value > window.innerHeight - 100)
const onScrollBottomHandle = () => {
  y.value = window.document.body.clientHeight
}
const onReloadHandle = () => window.location.reload()
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
    background-color: rgba(0, 0, 0);
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // min-width: 1080px;
    max-width: 1280px;
    width: 100%;
    // background-color: red;
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
  }
}
</style>
