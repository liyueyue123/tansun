import request from '@/utils/ajax'

export function egroup001(data) {  //新增用户组
    return request({
      url: '/egroup001',
      method: 'post',
      data: data
    })
}

export function egroup002(data) {  //删除用户组
    return request({
      url: '/egroup002',
      method: 'post',
      data: data
    })
}

export function egroup003(data) {  //修改用户组
    return request({
      url: '/egroup003',
      method: 'post',
      data: data
    })
}

export function egroup004(data) {  //用户组列表
    return request({
      url: '/egroup004',
      method: 'post',
      data: data
    })
}
