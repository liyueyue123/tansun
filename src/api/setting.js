import request from '@/utils/request'

export function loadBaseClientSign(data) {
  return request({
    url: '/setting/loadBaseClientSign',
    method: 'post',
    data: data
  })
}

export function loadCardsMap(data) {
  return request({
    url: '/setting/loadCardsMap',
    method: 'post',
    data: data
  })
}

export function loadGroups(data) {
  return request({
    url: '/setting/loadGroups',
    method: 'post',
    data: data
  })
}

export function loadAds(data) {
  return request({
    url: '/setting/loadAds',
    method: 'post',
    data: data
  })
}

export function loadReplan(data) {
  return request({
    url: '/setting/loadReplan',
    method: 'post',
    data: data
  })
}

export function exportMsgTemplate(data) {
  return request({
    url: '/setting/PT80/PT8005',
    method: 'post',
    data: data,
    responseType:'blob'
  })
}