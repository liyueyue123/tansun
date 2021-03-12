import request from '@/utils/ajax'

export function duty001(data) {  //新增岗位
    return request({
      url: '/duty001',
      method: 'post',
      data: data
    })
}

export function duty002(data) {  //删除岗位
    return request({
      url: '/duty002',
      method: 'post',
      data: data
    })
}

export function duty003(data) {  //修改岗位
    return request({
      url: '/duty003',
      method: 'post',
      data: data
    })
}

export function duty004(data) {  //岗位列表
    return request({
      url: '/duty004',
      method: 'post',
      data: data
    })
}