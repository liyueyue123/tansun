import request from '@/utils/ajax'

export function menu001(data) {  //新增菜单
    return request({
      url: '/menu001',
      method: 'post',
      data: data
    })
}

export function menu002(data) {  //删除菜单
    return request({
      url: '/menu002',
      method: 'post',
      data: data
    })
}

export function menu003(data) {  //修改菜单
    return request({
      url: '/menu003',
      method: 'post',
      data: data
    })
}

export function menu004(data) {  //菜单列表
    return request({
      url: '/menu004',
      method: 'post',
      data: data
    })
}