import request from '@/utils/ajax'

export function role001(data) {  //添加角色
    return request({
      url: '/role001',
      method: 'post',
      data: data
    })
}

export function role002(data) {  //删除角色
    return request({
      url: '/role002',
      method: 'post',
      data: data
    })
}

export function role003(data) {  //修改角色
    return request({
      url: '/role003',
      method: 'post',
      data: data
    })
}

export function role004(data) {  //获角色列表-首页
    return request({
      url: '/role004',
      method: 'post',
      data: data
    })
}

export function role005(data) {  //获角色列表--分配角色
  return request({
    url: '/role005',
    method: 'post',
    data: data
  })
}