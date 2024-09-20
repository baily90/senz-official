<template>
  <div class="container-layout">
    <Navbar />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component v-if="route.meta.keepAlive" :is="Component" :key="route.fullPath" />
      </keep-alive>
      <component v-if="!route.meta.keepAlive" :is="Component" :key="route.fullPath" />
    </router-view>
  </div>

</template>

<script setup>
import Navbar from '@/components/Navbar/index.vue'

const route = useRoute()

</script>

<style scoped lang="less">
.container-layout {
  width: 100%;
}
</style>
