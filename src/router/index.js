import { createRouter, createWebHashHistory } from 'vue-router'
import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'

const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home')

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/category/:id',
        component: TopCategory
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 每次切换路由的时候滚动到顶部
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

export default router
