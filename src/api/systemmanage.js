import request from '@/utils/ajax'

export function tenant001(data) {  //新增租户
  return request({
    url: '/tenant001',
    method: 'post',
    data: data
  })
}

export function tenant002(data) {  //删除租户
  return request({
    url: '/tenant002',
    method: 'post',
    data: data
  })
}

export function tenant003(data) {  //修改租户
  return request({
    url: '/tenant003',
    method: 'post',
    data: data
  })
}

export function tenant004(data) {  //获取租户列表
  return request({
    url: '/tenant004',
    method: 'post',
    data: data
  })
}
