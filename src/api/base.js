import request from '@/utils/request'

export function loadOrg() {
  return request({
    url: '/base/loadOrg',
    method: 'post',
    data: {}
  })
}

export function loadDeparts(org) {
  return request({
    url: '/base/loadDeparts',
    method: 'post',
    data: {org}
  })
}

export function loadGroup() {
  return request({
    url: '/base/loadGroup',
    method: 'post',
    data: {}
  })
}

export function loadTeam() {
  return request({
    url: '/base/loadTeam',
    method: 'post',
    data: {}
  })
}

export function loadMember() {
  return request({
    url: '/base/loadMember',
    method: 'post',
    data: {}
  })
}
