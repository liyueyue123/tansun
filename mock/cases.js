let mock = require('mockjs')

let cases = []
let caseUsers = []
let caseInfos = []

for (let i = 0; i < 100; i++) {
    caseUsers.push({
        id: i,
        name: '客户名' + i,
        sex: Math.random() > 0.5 ? '男' : '女',
        phones: [
            {
                '姓名': 'tttt',
                '电话号码': 'tttt',
                '归属地': 'tttt',
                '关系': 'tttt',
                '描述': 'tttt',
                '末次呼叫结果': 'tttt',
                '操作': 'tttt',
                '是否过期': 'tttt',
                '来源渠道': 'tttt',
            }
        ],
        addresses: [
            {
                '类型': 'ddddd',
                '描述': 'ddddd',
                '地址': 'ddddd',
                '是否账单地址': 'ddddd',
                '核资标识': 'ddddd',
                '创建时间': 'ddddd',
                '创建者': 'ddddd',
                '更新渠道': 'ddddd',
                '更新者': 'ddddd',
                '是否过期': 'ddddd',
            }
        ]
    })
}

for (let i = 0; i < 100; i++) {
    cases.push({
        '模块号': i,
        '案件编号': i,
        '客户姓名': caseUsers[i].name,
        '身份证号': caseUsers[i].id,
        '账单日': mock.Random.date(),
        '欠款总额': Math.random()*2000,
        '逾期期数': i,
        '跟进标志': i,
        '跟进时间': i,
        '承诺标识': i,
        '入催日期': mock.Random.date(),
        '分配日期': mock.Random.date(),
        '分配员': i,
        '状态': i,
        '出催时间': i,
    },)
}

for (let i = 0; i < 100; i++) {
    caseInfos.push({
        '案件编号': i,
        总欠款金额: 0,
        总余额: 0,
        逾期金额: 0,
        最低还款金额: 0,
        逾期期数: 0,
        跟进次数: 0,
        末次跟进方式: 0,
        末次跟进时间: 0,
        末次跟进结果: 0,
        末次还款时间: 0,
        单位: 0,
        当前余额: 0,
        逾期金额本币: 0,
        最低还款额本币: 0,
        最低还款额外币: 0,
        分期未摊销金额: 0,
        未出分期手续费: 0,
        本金: 0,
        利息: 0,
        历史逾期次数: 0,
        费用: 0,
        逾期历史期数: 0,
        逾期金额外币: 0,
        总分期金额: 0,
    },)
}

module.exports = [
    {
        url: '/cases/queryCases', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            const pageList = cases.filter((_, index) => index < (limit) * (page) && index >= (limit) * (page - 1))

            return {
                code: 20000, data: {
                    total: cases.length, items: pageList
                }
            }
        }
    },
    {
        url: '/cases/loadCaseInfo', type: 'post', response: (config) => {
            const {caseId} = config.body
            let _case = caseInfos.find(cc => {
                return cc.案件编号 == caseId;
            })
            if (_case) {
                return {
                    code: 20000, data: _case
                };
            }
            return {
                code: -1, message: '无法找到案件信息', data: {}
            };
        }
    },
    {
        url: '/cases/loadCaseUserInfo', type: 'post', response: (config) => {
            const {caseId} = config.body

            let _case = cases.find(cc => {
                return cc.案件编号 == caseId;
            })
            if (_case) {
                let _user = caseUsers.find(u => {
                    return u.id == _case.身份证号
                })
                if (_user) {
                    return {
                        code: 20000, data: _user
                    };
                }
            }
            return {
                code: -1, message: '无法找到客户信息', data: {}
            };
        }
    },
    {
        url: '/cases/queryCaseUserPhones', type: 'post', response: (config) => {
            const {caseId} = config.body

            let _case = cases.find(cc => {
                return cc.案件编号 == caseId;
            })
            if (_case) {
                let _user = caseUsers.find(u => {
                    return u.id == _case.身份证号
                })
                if (_user) {
                    return {
                        code: 20000, data: {total: _user.phones.length, items: _user.phones}
                    };
                }
            }
            return {
                code: -1, message: '无法找到客户信息', data: {}
            };
        }
    },
    {
        url: '/cases/queryCaseUserAddresses', type: 'post', response: (config) => {
            const {caseId} = config.body

            let _case = cases.find(cc => {
                return cc.案件编号 == caseId;
            })
            if (_case) {
                let _user = caseUsers.find(u => {
                    return u.id == _case.身份证号
                })
                if (_user) {
                    return {
                        code: 20000, data: {total: _user.addresses.length, items: _user.addresses}
                    };
                }
            }
            return {
                code: -1, message: '无法找到客户信息', data: {}
            };
        }
    },
    {
        url: '/cases/queryCaseUserInBankCallLog', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 3; i++) {
                datas.push({
                    '来电时间': 'test',
                    '来电号码': 'test',
                    '来电人姓名': 'test',
                    '与持卡人关系': 'test',
                    '来电性质': 'test',
                    '来电内容': 'test',
                    extra: {
                        '工单编号': 'test',
                        '来电日期': 'test',
                        '来电内容': 'test',
                        '处理方式': 'test',
                        '处理结果': 'test',
                        '客户认可度': 'test',
                        '结束日期': 'test',
                    }
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
    {
        url: '/cases/queryCaseUserInBankVideo', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 13; i++) {
                datas.push({
                    '进件编号': 'test',
                    '办卡日期': 'test',
                    '卡号': 'test',
                    '姓名': 'test',
                    '状态': 'test',
                    '开卡日期': 'test',
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
    {
        url: '/cases/queryCaseUserOutsideBankAutoInfo', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 13; i++) {
                datas.push({
                    '失联查找渠道': 'test',
                    '本人手机号': 'test',
                    '信息类别': 'test',
                    '更新时间': 'test',
                    '与持卡人关系': 'test',
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
    {
        url: '/cases/queryCaseUserOutsideBankManuInfo', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 13; i++) {
                datas.push({
                    '失联查找渠道': 'test1',
                    '本人手机号': 'test1',
                    '信息类别': 'test1',
                    '更新时间': 'test1',
                    '与持卡人关系': 'test1',
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
    {
        url: '/cases/queryCaseUserInBankRelationOnline', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 4; i++) {
                datas.push({
                    '姓名': 'test',
                    '身份证': 'test',
                    '手机号': 'test',
                    '电子邮箱': 'test',
                    '住宅—详细地址': 'test',
                    '住宅电话': 'test',
                    '单位名称': 'test',
                    '单位—详细地址': 'test',
                    '单位电话': 'test',
                    '直系亲属姓名': 'test',
                    '直系亲属手机号': 'test',
                    '直系亲属—关系': 'test',
                    '其他联系人姓名': 'test',
                    '其他联系人手机号': 'test',
                    '其他联系人—关系': 'test',
                    '车牌号码': 'test',
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
    {
        url: '/cases/queryCaseUserInBankRelationOffline', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 3; i++) {
                datas.push({
                    '姓名':'test',
                    '身份证':'test',
                    '手机号':'test',
                    '电子邮箱':'test',
                    '住宅地址':'test',
                    '住宅电话':'test',
                    '户籍地址':'test',
                    '单位全称':'test',
                    '单位地址':'test',
                    '单位电话':'test',
                    '直系亲属姓名':'test',
                    '直系亲属手机':'test',
                    '直系亲属联系电话':'test',
                    '直系亲属与申请人关系':'test',
                    '联系人姓名':'test',
                    '联系人手机':'test',
                    '联系人联系电话':'test',
                    '联系人与申请关系':'test',
                    '民生借记卡号':'test',
                    '担保人姓名':'test',
                    '担保人证件号':'test',
                    '担保人单位名称':'test',
                    '担保人住宅电话':'test',
                    '担保人手机号':'test',
                    '车牌号':'test',
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
    {
        url: '/cases/queryCaseUserInfoMgrHistory', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 3; i++) {
                datas.push({
                    '交易来源':'test',
                    '主卡卡号':'test',
                    '分类代码':'test',
                    '登记日期':'test',
                    '登记时间':'test',
                    '类型':'test',
                    '更改前值':'test',
                    '更改后值':'test',
                    '类型描述':'test',
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
    {
        url: '/cases/queryCaseUserIdChangeHistory', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 3; i++) {
                datas.push({
                    '日期':'test',
                    '标识类别':'test',
                    '卡号标识':'test',
                    '变更记录':'test',
                    '操作员':'test',
                    '当前催收组':'test',
                    '当前催收员':'test',
                    '备注':'test',
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
    {
        url: '/cases/queryCaseUserIdAssign', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 3; i++) {
                datas.push({
                    '记录增加日期':'test',
                    '分配人员':'test',
                    '总逾期金额':'test',
                    '分期未摊销金额':'test',
                    '总余额':'test',
                    '逾期期数':'test',
                    '上一催收员':'test',
                    '上一催收组':'test',
                    '当前催收组':'test',
                    '当前催收员':'test',
                    '进入当前催收员日期':'test',
                    '进入当前催收组日期':'test',
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
    {
        url: '/cases/queryCaseUserOptLog', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            let datas = []
            for (let i = 0; i < 3; i++) {
                datas.push({
                    '菜单名称':'test',
                    '参数名称':'test',
                    '操作':'test',
                    '原参数值':'test',
                    '修改后参数值':'test',
                    '录入员工号':'test',
                    '录入日期':'test',
                    '录入时间':'test',
                    '复核员工号':'test',
                    '复核日期':'test',
                    '复核时间':'test',
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

