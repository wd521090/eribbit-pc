<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread/>
      <SubFilter/>
      <!-- 结果区域 -->
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort/>
        <!-- 列表 -->
      </div>
    </div>
  </div>
</template>

<script>
import SubBread from '@/views/category/components/sub-bread'
import SubFilter from '@/views/category/components/sub-filter'
import SubSort from '@/views/category/components/sub-sort'

export default {
  name: 'SubCategory',
  components: {
    SubBread,
    SubFilter,
    SubSort
  }
}
</script>

<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
