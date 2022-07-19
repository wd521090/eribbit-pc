import XtxSkeleton from '@/components/library/xtx-skeleton'
import XtxCarousel from '@/components/library/xtx-carousel'
import XtxMore from '@/components/library/xtx-more'

export default {
  install (app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
  }
}
