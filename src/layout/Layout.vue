<template>
  <div class="container-layout">
    <component v-if="isPc()" :is="PcNavbar" />
    <component v-if="isMobile()" :is="MobileNavbar" />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component v-if="route.meta.keepAlive" :is="Component" :key="route.fullPath" />
      </keep-alive>
      <component v-if="!route.meta.keepAlive" :is="Component" :key="route.fullPath" />
    </router-view>
  </div>

</template>

<script setup>
import { isPc, isMobile } from '@/utils/ua'
import PcNavbar from '@/components/Navbar/pc.vue'
import MobileNavbar from '@/components/Navbar/mobile.vue'

const route = useRoute()

</script>

<style scoped lang="less">
.container-layout {
  width: 100%;
}
</style>
