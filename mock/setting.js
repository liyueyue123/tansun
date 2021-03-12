let mock = require('mockjs')

let clientSigns=[
]

let cardsMap=[
]

let groups=[
]

let ads=[
]

let replans=[
]

for (let i = 0; i < 23; i++) {
    clientSigns.push({
        '标识分类':'aaa'+i,
        '名称':'aaa',
        '代码':'aaa',
        '描述':'aaa',
        '有效期':mock.Random.date(),
        '是否显示在页眉':'aaa',
        '是否允许非账户归属修改':'aaa',
    })
}

for (let i = 0; i < 12; i++) {
    cardsMap.push({
        '催收员姓名':'aaaa',
        '催收员工号':'aaaa',
        '发卡号':'aaaa',
    })
}

for (let i = 0; i < 12; i++) {
    groups.push({
        '催收组组名':'bbbb',
        '催收组归属':'bbbb',
        '所属模块':'bbbb',
        '催收组类型':'bbbb',
        '是否一级分案（Y/N）':'bbbb',
        '描述':'bbbb',
        '创建者':'bbbb',
        '创建日期':'bbbb',
        '更新者':'bbbb',
        '更新日期':'bbbb',
    })
}

for (let i = 0; i < 12; i++) {
    ads.push({
        '机构名称':'cccc',
        '机构代码':'cccc',
        '城市机构码':'cccc',
        '部门编号':'cccc',
        '描述':'cccc',
        '创建日期':'cccc',
        '创建者':'cccc',
        '更新日期':'cccc',
        '更新者':'cccc',
    })
}

for (let i = 0; i < 12; i++) {
    replans.push({
        '中转组':'dddd',
        '产品':'dddd',
        '客户级总欠款金额标准值':'dddd',
        '是否小于总欠款金额标准值':'dddd',
        '判断时点':'dddd',
        '转入组':'dddd',
        '创建日期':'dddd',
        '更新日期':'dddd',
    })
}
module.exports = [
    {
        url: '/setting/loadBaseClientSign', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            const pageList = clientSigns.filter((_, index) => index < (limit) * (page) && index >= (limit) * (page - 1))

            return {
                code: 20000, data: {
                    total: clientSigns.length, items: pageList
                }
            }

        }
    },
    {
        url: '/setting/loadCardsMap', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            const pageList = cardsMap.filter((_, index) => index < (limit) * (page) && index >= (limit) * (page - 1))

            return {
                code: 20000, data: {
                    total: cardsMap.length, items: pageList
                }
            }

        }
    },
    {
        url: '/setting/loadGroups', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            const pageList = groups.filter((_, index) => index < (limit) * (page) && index >= (limit) * (page - 1))

            return {
                code: 20000, data: {
                    total: groups.length, items: pageList
                }
            }

        }
    },
    {
        url: '/setting/loadAds', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            const pageList = ads.filter((_, index) => index < (limit) * (page) && index >= (limit) * (page - 1))

            return {
                code: 20000, data: {
                    total: ads.length, items: pageList
                }
            }

        }
    },
    {
        url: '/setting/loadReplan', type: 'post', response: (config) => {
            const {page = 1, limit = 20, sort} = config.body

            const pageList = replans.filter((_, index) => index < (limit) * (page) && index >= (limit) * (page - 1))

            return {
                code: 20000, data: {
                    total: replans.length, items: pageList
                }
            }

        }
    },
]

