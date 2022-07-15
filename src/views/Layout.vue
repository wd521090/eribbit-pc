<template>
  <AppTopNav></AppTopNav>
  <AppHeader></AppHeader>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
import AppTopNav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
export default {
  name: 'xtx-layout',
  components: {
    AppTopNav,
    AppHeader
  }
}
</script>

<style scoped lang="less">

</style>
