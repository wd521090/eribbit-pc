<template>
  <AppTopNav></AppTopNav>
  <header>头部</header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>底部</footer>
</template>

<script>
import AppTopNav from '@/components/app-topnav'
export default {
  name: 'xtx-layout',
  components: {
    AppTopNav
  }
}
</script>

<style scoped lang="less">

</style>
