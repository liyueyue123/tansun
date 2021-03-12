import request from '@/utils/request'

export const getTransactions = (params) =>
  request({
    url: '/transactions',
    method: 'get',
    params
  })
