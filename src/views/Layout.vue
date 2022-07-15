<template>
  <AppTopNav></AppTopNav>
  <AppHeader></AppHeader>
  <main class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter>底部</AppFooter>
</template>

<script>
import AppTopNav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
export default {
  name: 'xtx-layout',
  components: {
    AppTopNav,
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
