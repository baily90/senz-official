<template>
  <div class="container-home">
    <!-- banner -->
    <div class="banner">
      <div class="wow fadeInDown" data-wow-delay="0.2s">让全球每一位医生</div>
      <div class="wow fadeInUp" data-wow-delay="0.5s">都能用上医学影像</div>
    </div>
    <!-- 深至科技 -->
    <section class="technology">
      <div class="content">
        <div class="first-title wow fadeInUp" data-wow-delay="0.2s">身边即享超声服务</div>
        <div class="second-title wow fadeInUp" data-wow-delay="0.3s">2分钟可检查过程</div>
        <div class="second-title wow fadeInUp" data-wow-delay="0.4s">10分钟即可获取报告</div>
        <div class="tips wow fadeInUp" data-wow-delay="0.5s">简单易用的操作方式，引导非超声医师2分钟完成检查；<br />
          远端专业医师，快速响应，10分出具专业报告</div>
        <van-button class="btn-contant wow fadeInUp" data-wow-delay=".6s" type="primary">联系我们</van-button>
      </div>
      <div id="lottie" class="wow fadeInUp" data-wow-delay="0.2s"></div>
    </section>

    <!-- 图像 -->
    <section class="image">
      <van-swipe ref="swipe" class="swipe wow fadeInLeft" data-wow-delay="0.2s">
        <van-swipe-item class="swipe-item">
          <img src="@/assets/images/pc/software1.png" alt="software" />
        </van-swipe-item>
        <van-swipe-item class="swipe-item">
          <img src="@/assets/images/pc/software2.png" alt="software" />
        </van-swipe-item>
        <van-swipe-item class="swipe-item">
          <img src="@/assets/images/pc/software3.png" alt="software" />
        </van-swipe-item>
      </van-swipe>
      <div class="content wow fadeInRight" data-wow-delay="0.2s">
        <div class="first-title wow fadeInUp" data-wow-delay="0.2s">多种<br />
          图像模式</div>
        <div class="second-title wow fadeInUp" data-wow-delay="0.3s">3大核心功能点</div>
        <div class="swiper-bar" :class="{ active: activeIndex === 0 }" @mouseover="onHover(0)">
          <div class="label wow fadeInUp" data-wow-delay="0.3s">适用范围广泛</div>
          <div class="desc wow fadeInUp" data-wow-delay="0.4s">
            腹部（肝胆胰脾肾）、血管（颈动脉/上下肢血管）<br />
            浅表（甲状腺/乳腺/淋巴结等）、泌尿（膀胱/输尿管/前列腺）<br />
            妇科（子宫附件）
          </div>
        </div>
        <div class="swiper-bar" :class="{ active: activeIndex === 1 }" @mouseover="onHover(1)">
          <div class="label wow fadeInUp" data-wow-delay="0.3s">智能导航</div>
          <div class="desc wow fadeInUp" data-wow-delay="0.4s">
            部位识别、方位识别、病理识别
          </div>
        </div>
        <div class="swiper-bar" :class="{ active: activeIndex === 2 }" @mouseover="onHover(2)">
          <div class="label wow fadeInUp" data-wow-delay="0.3s">多种图像模式</div>
          <div class="desc wow fadeInUp" data-wow-delay="0.4s">
            灰阶模式、彩阶模式、频谱模式
          </div>
        </div>
      </div>
    </section>

    <!-- 愿景使命 -->
    <section class="mission">
      <div class="left wow fadeInUp" data-wow-delay="0.2s">
        <div class="first-title wow fadeInUp" data-wow-delay="0.3s">
          打造基层 <br />
          影像家园
        </div>
        <div class="second-title wow fadeInUp" data-wow-delay="0.4s">无场地要求、无影像科要求、赋能基层诊所，共创基层影像家园</div>
        <van-button class="btn-contact wow fadeInUp" data-wow-delay="0.5s" link type="primary">进一步了解我们的任务</van-button>
        <img class="left-img wow fadeInUp" data-wow-delay="0.5s" src="@/assets/images/pc/home2.png" alt="mission" />
      </div>
      <img class="right wow fadeInDown"  data-wow-delay="0.2s" src="@/assets/images/pc/home1.png" alt="mission" />
    </section>

    <!-- 权威认证 -->
    <section class="about">
      <div class="first-title wow fadeInDown" data-wow-delay="0.2s">权威认证</div>
      <div class="second-title wow fadeInUp" data-wow-delay="0.5s">荣获多种权威认证证书</div>
      <img src="@/assets/images/pc/about.gif" class="cert" alt="GIF Image" />
    </section>

    <!-- 联系我们 -->
    <section class="contact">
      <div class="first-title wow fadeInDown" data-wow-delay="0.2s">我们期待您的加入！</div>
      <div class="second-title wow fadeInUp" data-wow-delay="0.4s">扫描二维码访问Senz公众号</div>
      <img class="qr_gzh wow fadeInLeft"  data-wow-delay="0.3s" src="@/assets/images/qr_gzh.png" alt="qr_gzh" />
      <div class="remark wow fadeInUp" data-wow-delay="0.2s">
        <a href="https://beian.miit.gov.cn/" target="_blank">{{record}}</a>
        &nbsp;&nbsp;Copyright © 2018-2024 版权所有&nbsp;&nbsp;
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502017406" target="_blank">沪公网安备 31011502017406号</a>
      </div>
    </section>
  </div>

</template>

<script setup>
import WOW from 'wow.js'
import 'wow.js/css/libs/animate.css'
import lottie from 'lottie-web'
import animationData from '@/assets/animation/lottie/data.json'

const swipe = ref(null)
const activeIndex = ref(0)
const record = ref('沪ICP备19048066号-4')

const onHover = index => {
  activeIndex.value = index
  swipe.value.swipeTo(index)
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
