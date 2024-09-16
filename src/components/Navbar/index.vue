<template>
  <div class="container-navbar">
    <div class="navbar">
      <img class="icon-logo" src="@/assets/images/icon_logo.png" alt="icon_logo" srcset="">
    </div>
  </div>
</template>

<script setup>

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
  z-index: 9999;
  color: #fff;
  background-color: rgba(0, 0, 0, .3);
  .navbar {
    display: flex;
    min-width: 1080px;
    max-width: 1280px;
    width: 100%;
    .icon-logo {
      display: flex;
      width: 147px;
      height: 40px;
    }
  }
}
</style>
