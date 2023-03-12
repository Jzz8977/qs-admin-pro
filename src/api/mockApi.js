import http from './http.js'

export default {
  // 用户列表
  findMenuList() {
    return http({
      url: '/api/loadMenuList',
      method: 'get'
    })
  }

}