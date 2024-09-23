<template>
  <div class="container-scroll-tip">
    <div class="tip">Scroll</div>
    <div class="scroll-tip">
      <div class="bar"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@keyframes loop {
  from {
    top: -39PX;
  }
  to {
    top: 58PX;
  }
}
.container-scroll-tip {
  position: relative;
  min-width: 2PX;
  height: 95PX;
  font-weight: 400;
  font-size: 12PX;
  .tip {
    position: absolute;
    top: -10PX;
    left: 50%;
    transform: translateX(-50%);
  }
  .scroll-tip {
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -1PX;
    width: 2PX;
    height: 58PX;
    background-color: hsla(0,0%,100%,.21);
    overflow: hidden;
    .bar {
      position: absolute;
      top: -39PX;
      left: 0;
      width: 2PX;
      height: 39PX;
      background: linear-gradient(0deg,#fff,hsla(0,0%,100%,0));
      animation: loop 3s ease infinite;
    }
  }
}

</style>
