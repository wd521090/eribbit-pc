<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
    </div>
  </div>
</template>

<script>
import SubBread from '@/views/category/components/sub-bread'

export default {
  name: 'SubCategory',
  components: {
    SubBread
  }
}
</script>

<style scoped lang="less">

</style>
