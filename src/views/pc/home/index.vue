<template>
  <div class="container-home">
    <!-- banner -->
    <div class="banner">
      <div class="wow fadeInUp" data-wow-delay="0.2s">让全球每一位医生</div>
      <div class="wow fadeInUp" data-wow-delay="0.5s">都能用上医学影像</div>
    </div>
    <!-- 深至科技 -->
    <section class="technology">
      <div id="lottie"></div>
    </section>

    <!-- 图像 -->
    <section class="image">image</section>

    <!-- 愿景使命 -->
    <section class="mission">mission</section>

    <!-- 权威认证 -->
    <section class="about">
      <image src="@/asstes/images/pc/about.gif" class="cert" alt="GIF Image" />
    </section>

    <!-- 联系我们 -->
    <section class="contact">contact</section>
  </div>
</template>

<script setup>
import WOW from 'wow.js'
import 'wow.js/css/libs/animate.css'
import lottie from 'lottie-web'
import animationData from '@/assets/animation/lottie/data.json'

onMounted(() => {
  lottie.loadAnimation({
    container: document.getElementById('lottie'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData // the path to the animation json
  })
})

new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true
}).init()
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
