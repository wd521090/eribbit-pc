<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <SubFilter/>
    </div>
  </div>
</template>

<script>
import SubBread from '@/views/category/components/sub-bread'
import SubFilter from '@/views/category/components/sub-filter'

export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter
  }
}
</script>

<style scoped lang="less">

</style>
