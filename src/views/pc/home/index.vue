<template>
  <div class="container-home">
    <div class="banner">
      <van-image
        width="100%"
        height="100%"
        fit="cover"
        :src="banner"
      />
    </div>
    <div class="wow slideInLeft">home</div>
  </div>
</template>

<script setup>
import WOW from 'wow.js'
import 'wow.js/css/libs/animate.css'
import banner from '@/assets/images/banner.png'

new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
}).init()
</script>

<style lang="less" scoped>
.container-home {
  width: 100%;
  min-height: 100vh;
  background-color: #000001;
  color: #fff;
  .banner {
    width: 100%;
    height: 100vh;
  }
}
</style>
