import request from '@/utils/ajax'

export function morg001(data) {  //新增机构
    return request({
      url: '/morg001',
      method: 'post',
      data: data
    })
}

export function morg002(data) {  //删除机构
    return request({
      url: '/morg002',
      method: 'post',
      data: data
    })
}

export function morg003(data) {  //修改机构
    return request({
      url: '/morg003',
      method: 'post',
      data: data
    })
}

export function morg004(data) {  //机构列表
    return request({
      url: '/morg004',
      method: 'post',
      data: data
    })
}