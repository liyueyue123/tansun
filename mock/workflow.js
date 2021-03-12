module.exports = [
  {
    url: '/workflow/queryStarted', type: 'post', response: (config) => {
      const {page = 1, limit = 20, sort} = config.body

      let datas = []
      for (let i = 0; i < 3; i++) {
        datas.push({
          '证件号':'test',
          '主卡人姓名':'test',
          '业务流程名称':'test',
          '审批人权限':'test',
          '任务类型':'test',
          '处理人':'test',
          '创建日期':'test',
          '过期日期':'test',
          '发起人':'test',
        },)
      }
      const pageList = datas.filter((_, index) => index < (limit) * (page) && index >= (limit) * (page - 1))

      return {
        code: 20000, data: {
          total: datas.length, items: pageList
        }
      }
    }
  },
]

