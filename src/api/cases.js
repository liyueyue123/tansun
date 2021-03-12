import request from '@/utils/request'

export function queryCases(data) {
  return request({
    url: '/cases/queryCases',
    method: 'post',
    data: data
  })
}

export function queryCaseUserInfo(caseId) {
  return request({
    url: '/cases/loadCaseUserInfo',
    method: 'post',
    data: {caseId}
  })
}

export function queryCaseInfo(caseId) {
  return request({
    url: '/cases/loadCaseInfo',
    method: 'post',
    data: {caseId}
  })
}

export function queryCaseUserPhones(caseId) {
  return request({
    url: '/cases/queryCaseUserPhones',
    method: 'post',
    data: {caseId}
  })
}

export function queryCaseUserAddresses(caseId) {
  return request({
    url: '/cases/queryCaseUserAddresses',
    method: 'post',
    data: {caseId}
  })
}

export function queryCaseUserInBankCallLog(data) {
  return request({
    url: '/cases/queryCaseUserInBankCallLog',
    method: 'post',
    data: data
  })
}

export function queryCaseUserInBankVideo(data) {
  return request({
    url: '/cases/queryCaseUserInBankVideo',
    method: 'post',
    data: data
  })
}

export function queryCaseUserInBankRelationOnline(data) {
  return request({
    url: '/cases/queryCaseUserInBankRelationOnline',
    method: 'post',
    data: data
  })
}

export function queryCaseUserInBankRelationOffline(data) {
  return request({
    url: '/cases/queryCaseUserInBankRelationOffline',
    method: 'post',
    data: data
  })
}

export function queryCaseUserOutsideBankAutoInfo(data) {
  return request({
    url: '/cases/queryCaseUserOutsideBankAutoInfo',
    method: 'post',
    data: data
  })
}

export function queryCaseUserOutsideBankManuInfo(data) {
  return request({
    url: '/cases/queryCaseUserOutsideBankManuInfo',
    method: 'post',
    data: data
  })
}

export function queryCaseUserInfoMgrHistory(data) {
  return request({
    url: '/cases/queryCaseUserInfoMgrHistory',
    method: 'post',
    data: data
  })
}

export function queryCaseUserIdChangeHistory(data) {
  return request({
    url: '/cases/queryCaseUserIdChangeHistory',
    method: 'post',
    data: data
  })
}

export function queryCaseUserIdAssign(data) {
  return request({
    url: '/cases/queryCaseUserIdAssign',
    method: 'post',
    data: data
  })
}

export function queryCaseUserOptLog(data) {
  return request({
    url: '/cases/queryCaseUserOptLog',
    method: 'post',
    data: data
  })
}
