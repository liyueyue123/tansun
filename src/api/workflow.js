import request from '@/utils/request'

export function queryStarted(data) {
  return request({
    url: '/workflow/queryStarted',
    method: 'post',
    data: data
  })
}
