<template>
  <div class="container-scroll-tip">
    <div class="tip"></div>
    <div class="scroll-tip">
      <div class="bar"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@keyframes loop {
  from {
    top: -39px;
  }
  to {
    top: 58px;
  }
}
.container-scroll-tip {
  position: relative;
  min-width: 2px;
  height: 95px;
  font-weight: 400;
  font-size: 16PX;
  .tip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .scroll-tip {
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -1px;
    width: 2px;
    height: 58px;
    background-color: hsla(0,0%,100%,.21);
    overflow: hidden;
    .bar {
      position: absolute;
      top: -39px;
      left: 0;
      width: 2px;
      height: 39px;
      background: linear-gradient(0deg,#fff,hsla(0,0%,100%,0));
      animation: loop 3s ease infinite;
    }
  }
}

</style>
