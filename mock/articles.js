let articleList = []
let articleCount = 100
let mockFullContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'

module.exports = [{
    url: '/articles', type: 'get', response: (config) => {
        const {importance, type, title, page = 1, limit = 20, sort} = config.query

        let mockList = articleList.filter(item => {
            if (importance && item.importance !== +importance) {
                return false
            }
            if (type && item.type !== type) {
                return false
            }
            if (title && item.title.indexOf(title) < 0) {
                return false
            }
            return true
        })

        if (sort === '-id') {
            mockList = mockList.reverse()
        }

        const pageList = mockList.filter((_, index) => index < (limit) * (page) && index >= (limit) * (page - 1))


        return {
            code: 20000, data: {
                total: mockList.length, items: pageList
            }
        }
    }
}]

