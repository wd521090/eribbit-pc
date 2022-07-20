<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <el-row>
        <el-button color="#27BA9B" size="small" @click="toggle(-1)" :disabled="index===0">
          <el-icon color="white" style="vertical-align: middle">
            <ArrowLeft />
          </el-icon>
        </el-button>
        <el-button color="#27BA9B" size="small" @click="toggle(1)" :disabled="index===1">
          <el-icon color="white" style="vertical-align: middle">
            <ArrowRight />
          </el-icon>
        </el-button>
      </el-row>
    </template>
    <div class="box" ref="target">
      <Transition name="fade">
      <ul class="list" v-if="brands.length" :style="{transform:`translateX(${-index*1240}px)`}">
        <li v-for="item in brands" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
          </RouterLink>
        </li>
      </ul>
        <div class="skeleton" v-else>
          <XtxSkeleton class="item" v-for="i in 5" :key="i" animated bg="#e4e4e4" width="240px" height="305px"/>
        </div>
      </Transition>
    </div>
  </HomePanel>
</template>

<script>
import HomePanel from '@/views/home/components/home-panel'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { findBrand } from '@/api/home'
import { useLazyData } from '@/hooks'

export default {
  name: 'HomeBrand',
  components: {
    HomePanel,
    ArrowLeft,
    ArrowRight
  },
  setup() {
    // 获取数据
    const { target, result } = useLazyData(() => findBrand(10))

    // 切换效果，前提只有 0 1 两页
    const index = ref(0)
    // 1. 点击上一页
    // 2. 点击下一页
    const toggle = (step) => {
      const newIndex = index.value + step
      if (newIndex < 0 || newIndex > 1) return
      index.value = newIndex
    }
    return { brands: result, toggle, index, target }
  }
}
</script>

<style scoped lang="less">
.home-panel {
  background:#f5f5f5
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
.skeleton {
  width: 100%;
  display: flex;
  .item {
    margin-right: 10px;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}
</style>
