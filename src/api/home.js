import request from '@/utils/request'

/**
 *  获取品牌
 *  @param limit: 品牌个数
 *  @returns Promise
 */
export const findBrand = (limit) => {
  return request('/home/brand', 'get', { limit })
}

/**
 * 获取banner
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}

/**
 * 获取新鲜好物
 * @returns Promise
 */
export const findNew = () => {
  return request('/home/new', 'get')
}
