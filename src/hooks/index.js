// hooks 封装逻辑，提供响应式数据

// 数据懒加载函数
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export const useLazyData = (apiFn) => {
  // 1. 被观察的对象
  // 2. 不同的API函数
  const target = ref(null)
  const result = ref([])
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop()
        // 调用API获取数据
        apiFn().then(data => {
          result.value = data.result
        })
      }
    },
    {
      threshold: 0
    }
  )
  return {
    target,
    result
  }
}
