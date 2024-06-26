import config from '@/config'
import http from '@/utils/request'

export default {
  upload: {
    url: `${config.API_URL}/upload`,
    name: '文件上传',
    post: async function (data, config = {}) {
      // eslint-disable-next-line no-return-await
      return await http.post(this.url, data, config)
    },
  },
  uploadFile: {
    url: `${config.API_URL_BASE}/api/upload/file`,
    name: '附件上传',
    post: async function (data, config = {}) {
      // eslint-disable-next-line no-return-await
      return await http.post(this.url, data, config)
    },
  },
  exportFile: {
    url: `${config.API_URL}/fileExport`,
    name: '导出附件',
    get: async function (data, config = {}) {
      // eslint-disable-next-line no-return-await
      return await http.get(this.url, data, config)
    },
  },
  importFile: {
    url: `${config.API_URL}/fileImport`,
    name: '导入附件',
    post: async function (data, config = {}) {
      // eslint-disable-next-line no-return-await
      return await http.post(this.url, data, config)
    },
  },
  file: {
    menu: {
      url: `${config.API_URL}/file/menu`,
      name: '获取文件分类',
      get: async function () {
        // eslint-disable-next-line no-return-await
        return await http.get(this.url)
      },
    },
    list: {
      url: `${config.API_URL}/file/list`,
      name: '获取文件列表',
      get: async function (params) {
        // eslint-disable-next-line no-return-await
        return await http.get(this.url, params)
      },
    },
  },
  query: {
    statSingleField: {
      url: `${config.API_URL_BASE}/api/common/stat/single-field`,
      name: 'statSingleField',
      post: async function (params) {
        // eslint-disable-next-line no-return-await
        return await http.post(this.url, params)
      },
    },
    statTwoField: {
      url: `${config.API_URL_BASE}/api/common/stat/two-field`,
      name: 'statTwoField',
      post: async function (params) {
        // eslint-disable-next-line no-return-await
        return await http.post(this.url, params)
      },
    },
    statFieldList: {
      url: `${config.API_URL_BASE}/api/common/stat/field-list`,
      name: 'statFieldList',
      post: async function (params) {
        // eslint-disable-next-line no-return-await
        return await http.post(this.url, params)
      },
    },
    queryKeyValueList: {
      url: `${config.API_URL_BASE}/api/common/stat/key-value-list`,
      name: 'queryKeyValueList',
      get: async function (params) {
        // eslint-disable-next-line no-return-await
        return await http.post(this.url, params)
      },
    },
  },
}
