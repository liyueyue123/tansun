import request from '@/utils/request'

export const defaultArticleData = {
  id: 0,
  status: 'draft',
  title: '',
  fullContent: '',
  abstractContent: '',
  sourceURL: '',
  imageURL: '',
  timestamp: '',
  platforms: ['a-platform'],
  disableComment: false,
  importance: 0,
  author: '',
  reviewer: '',
  type: '',
  pageviews: 0
}

export const getArticles = (params) =>
  request({
    url: '/articles',
    method: 'get',
    params
  })

export const getArticle = (id, params) =>
  request({
    url: `/articles/${id}`,
    method: 'get',
    params
  })

export const createArticle = (data) =>
  request({
    url: '/articles',
    method: 'post',
    data
  })

export const updateArticle = (id, data) =>
  request({
    url: `/articles/${id}`,
    method: 'put',
    data
  })

export const deleteArticle = (id) =>
  request({
    url: `/articles/${id}`,
    method: 'delete'
  })

export const getPageviews = (params) =>
  request({
    url: '/pageviews',
    method: 'get',
    params
  })
