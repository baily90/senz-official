<template>
  <div class="container-home">
    <!-- banner -->
    <div class="banner">
      <div class="wow fadeInDown" data-wow-delay="0.2s">让全球每一位医生</div>
      <div class="wow fadeInUp" data-wow-delay="0.5s">都能用上医学影像</div>
      <ScrollTip class="scroll-tip" />
    </div>
    <!-- 深至科技 -->
    <section class="technology">
      <div class="content wow fadeInUp">
        <div class="first-title wow fadeInUp" data-wow-delay="0.2s">身边即享超声服务</div>
        <div class="tips wow fadeInUp" data-wow-delay="0.3s">Senz technology</div>
        <div id="lottie" class="wow fadeInUp" data-wow-delay="0.2s"></div>
        <div class="second-title wow fadeInUp" data-wow-delay="0.2s">2分钟可检查过程</div>
        <div class="second-title wow fadeInUp" data-wow-delay="0.2s">10分钟即可获取报告</div>
        <van-button class="btn-contact wow fadeInUp" data-wow-delay=".2s" type="primary" @click="onScrollBottomHandle">联系我们</van-button>
        <div class="desc wow fadeInUp" data-wow-delay=".2s">简单易用的操作方式，引导非超声医师2分钟完成检查；远端专业医师，快速响应，10分出具专业报告</div>
      </div>
    </section>

    <!-- 图像 -->
    <section class="image">
      <div class="content wow fadeInUp">
        <div class="first-title wow fadeInUp" data-wow-delay="0.2s">软件功能介绍</div>
        <div class="tips wow fadeInUp" data-wow-delay=".3s">Multiple image modes</div>
        <van-swipe ref="swipe" :show-indicators="false" :autoplay="3000" :duration="1000" @change="onChange" class="swipe wow fadeInLeft" data-wow-delay="0.2s">
          <van-swipe-item class="swipe-item">
            <img @dragstart.prevent src="@/assets/images/software1.png" alt="software" />
            <div class="second-title wow fadeInRight">适用范围广泛</div>
            <div class="second-title wow fadeInRight">腹部、血管、浅表、泌尿、妇科</div>
          </van-swipe-item>
          <van-swipe-item class="swipe-item">
            <img @dragstart.prevent src="@/assets/images/software2.png" alt="software" />
            <div class="second-title wow fadeInRight">智能导航</div>
            <div class="second-title wow fadeInRight">部位识别、方位识别、病理识别</div>
          </van-swipe-item>
          <van-swipe-item class="swipe-item">
            <img @dragstart.prevent src="@/assets/images/software3.png" alt="software" />
            <div class="second-title wow fadeInRight">多种图像模式</div>
            <div class="second-title wow fadeInRight">灰阶模式、彩阶模式、频谱模式</div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </section>

    <!-- 愿景使命 -->
    <section class="mission">
      <div class="content wow fadeInUp">
        <div class="second-title wow fadeInUp" data-wow-delay="0.2s">我们的使命</div>
        <div class="first-title wow fadeInUp" data-wow-delay="0.3s">打造基层影像家园</div>
        <img class="wow fadeInUp" data-wow-delay="0.2s" @dragstart.prevent src="@/assets/images/home1.png" alt="mission" />
        <div class="desc wow fadeInUp" data-wow-delay="0.2s">无场地要求、无影像科要求、赋能基层诊所，共创基层影像家园</div>
        <van-button class="btn-contact wow fadeInUp" data-wow-delay="0.2s" link type="primary" @click="onScrollBottomHandle">进一步了解我们的任务</van-button>
      </div>
    </section>

    <!-- 权威认证 -->
    <section class="about">
      <div class="content wow fadeInUp">
        <div class="first-title wow fadeInDown" data-wow-delay="0.2s">权威认证</div>
        <div class="tips wow fadeInUp" data-wow-delay="0.3s">荣获多种权威认证证书</div>
        <img @dragstart.prevent src="@/assets/images/about.gif" class="cert" alt="GIF Image" />
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="contact">
      <div class="content">
        <div class="first-title wow fadeInDown" data-wow-delay="0.2s">我们期待您的加入！</div>
        <div class="second-title wow fadeInUp" data-wow-delay="0.3s">扫描二维码访问Senz公众号</div>
        <div class="footer">
          <img class="qr_gzh wow fadeInLeft" data-wow-delay="0.2s" src="@/assets/images/qr_gzh.png" alt="qr_gzh" />
          <div class="remark wow fadeInUp" data-wow-delay="0.2s">
            <a class="wow fadeInRight" data-wow-delay="0.1s" href="https://beian.miit.gov.cn/" target="_blank">{{record}}</a>
            <span class="wow fadeInRight" data-wow-delay="0.2s">Copyright © 2018-2024 版权所有</span>
            <a class="wow fadeInRight" data-wow-delay="0.3s" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502017406" target="_blank">沪公网安备 31011502017406号</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import WOW from 'wow.js'
import 'wow.js/css/libs/animate.css'
import lottie from 'lottie-web'
import animationData from '@/assets/animation/lottie/data.json'
import { useWindowScroll } from '@vueuse/core'
import ScrollTip from '@/components/ScrollTip/index.vue'

const { y } = useWindowScroll({ behavior: 'smooth' })
const swipe = ref(null)
const activeIndex = ref(0)
const record = ref('沪ICP备19048066号-4')
const host = window.location.host
if (host.indexOf('senzco.com') !== -1) {
  record.value = '沪ICP备19048066号-9'
}

const onScrollBottomHandle = () => {
  y.value = window.document.body.clientHeight
}
const onHover = index => {
  activeIndex.value = index
  swipe.value.swipeTo(index)
}

const onChange = index => {
  activeIndex.value = index
}

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
