export default {
  getCategoryByType: {
    url: `https://www.baiud.com/`,
    name: 'getCategoryByType',
    get: async function (data, config = {}) {
      if (data.groupId == 1) {
        return {
          code: 200,
          data: [
            {
              id: '1',
              label: '基础能力-选择题',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 1,
            },
            {
              id: '2',
              label: '基础能力-闲聊题',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 1,
            },
            {
              id: '3',
              label: '高阶能力-闲聊题',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 1,
            },
          ],
          message: '',
        }
      } else if (data.groupId == 2) {
        return {
          code: 200,
          data: [
            {
              id: 1,
              label: '百科知识',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 2,
            },
            {
              id: 2,
              label: '闲聊对话',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 2,
            },
            {
              id: 3,
              label: '无解问题',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 2,
            },
          ],
          message: '',
        }
      } else if (data.groupId == 3) {
        return {
          code: 200,
          data: [
            {
              id: 1,
              label: 'search_poi',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 3,
            },
            {
              id: 2,
              label: 'speak',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 3,
            },
            {
              id: 3,
              label: 'search_around_poi',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 3,
            },
          ],
          message: '',
        }
      } else {
        return {
          code: 200,
          data: [
            {
              id: 1,
              label: '导航',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 0,
            },
            {
              id: 2,
              label: '多轮闲聊',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 0,
            },
            {
              id: 3,
              label: '单轮闲聊',
              date: '2022-10-10 08:00:00',
              remark: '',
              status: 1,
              type: 0,
            },
          ],
          message: '',
        }
      }

      // return await http.post(this.url, data, config)
    },
  },
}
