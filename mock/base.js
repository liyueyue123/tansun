let orgs = [
  {id: 1, name: '民生银行丰台支行'},
  {id: 2, name: '民生银行房山支行'},
  {id: 3, name: '民生银行海淀支行'}
]

let departs = [
  {org: 1, id: 11, name: '民生银行丰台支行1部'},
  {org: 1, id: 12, name: '民生银行丰台支行2部'},
  {org: 1, id: 13, name: '民生银行丰台支行3部'},
  {org: 2, id: 21, name: '民生银行房山支行1部'},
  {org: 2, id: 22, name: '民生银行房山支行2部'},
  {org: 2, id: 23, name: '民生银行房山支行3部'},
  {org: 3, id: 31, name: '民生银行海淀支行1部'},
  {org: 3, id: 32, name: '民生银行海淀支行2部'},
  {org: 3, id: 33, name: '民生银行海淀支行3部'}
]

module.exports = [
  {
    url: '/base/loadOrg', type: 'post', response: (config) => {
      return {
        code: 20000, data: {
          total: orgs.length, items: orgs
        }
      }
    }
  },
  {
    url: '/base/loadDeparts', type: 'post', response: (config) => {
      let deps = departs.filter(d => {
        return d.org == config.body.org
      })
      return {
        code: 20000, data: {
          total: deps.length, items: deps
        }
      }
    }
  },
  {
    url: '/base/loadGroup', type: 'post', response: (config) => {

      let deps = [
        {id: 11, name: '策略1部'},
        {id: 12, name: '策略2部'},
        {id: 13, name: '策略3部'},
        {id: 21, name: '策略1部'},
        {id: 22, name: '策略2部'},
        {id: 23, name: '策略3部'},
        {id: 31, name: '策略1部'},
        {id: 32, name: '策略2部'},
        {id: 33, name: '策略3部'}
      ];
      return {
        code: 20000, data: {
          total: deps.length, items: deps
        }
      }
    }
  },
  {
    url: '/base/loadTeam', type: 'post', response: (config) => {

      let deps = [
        {id: 11, name: '催收组1'},
        {id: 12, name: '催收组2'},
        {id: 13, name: '催收组3'},
      ];
      return {
        code: 20000, data: {
          total: deps.length, items: deps
        }
      }
    }
  },
  {
    url: '/base/loadMember', type: 'post', response: (config) => {

      let deps = [
        {id: 11, name: '催收员1'},
        {id: 12, name: '催收员2'},
        {id: 13, name: '催收员3'},
      ];
      return {
        code: 20000, data: {
          total: deps.length, items: deps
        }
      }
    }
  },{
    url: '/base/loadAccType', type: 'post', response: (config) => {

      let deps = [
        {id: 11, name: '类型1'},
        {id: 12, name: '类型2'},
        {id: 13, name: '类型3'},
      ];
      return {
        code: 20000, data: {
          total: deps.length, items: deps
        }
      }
    }
  },{
    url: '/base/loadPromotionOrg', type: 'post', response: (config) => {

      let deps = [
        {id: 11, name: '机构1'},
        {id: 12, name: '机构2'},
        {id: 13, name: '机构3'},
      ];
      return {
        code: 20000, data: {
          total: deps.length, items: deps
        }
      }
    }
  },{
    url: '/base/loadSign', type: 'post', response: (config) => {

      let deps = [
        {id: 11, name: '标识1'},
        {id: 12, name: '标识2'},
        {id: 13, name: '标识3'},
      ];
      return {
        code: 20000, data: {
          total: deps.length, items: deps
        }
      }
    }
  }

]

