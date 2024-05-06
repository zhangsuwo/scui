// 静态路由配置
// 书写格式与动态路由格式一致，全部经由框架统一转换
// 比较动态路由在meta中多加入了role角色权限，为数组类型。一个菜单是否有权限显示，取决于它以及后代菜单是否有权限。
// routes 显示在左侧菜单中的路由(显示顺序在动态路由之前)
// 示例如下

const routes = [
  {
    name: 'dataset',
    path: '/dataset',
    meta: {
      icon: 'el-icon-eleme-filled',
      title: '数据集管理',
      role: ['SA'],
    },
    children: [
      {
        name: 'category',
        path: '/dataset/category',
        component: 'llm/dataset/category/index',
        meta: {
          icon: 'el-icon-switch',
          title: '类别管理',
          role: ['SA'],
        },
      },
      {
        name: 'fewshot',
        path: '/data-set/fewshot',
        component: 'llm/dataset/fewshot/index',
        meta: {
          icon: 'el-icon-aim',
          title: 'Fewshot管理',
          role: ['SA'],
        },
      },
      {
        name: 'prompt-templet',
        path: '/dataset/prompt-templet',
        component: 'llm/dataset/prompt-templet/index',
        meta: {
          icon: 'el-icon-notification',
          title: 'Prompt模板',
          role: ['SA'],
        },
      },
      {
        name: 'question',
        path: '/dataset/question',
        component: 'llm/dataset/question/index',
        meta: {
          icon: 'el-icon-Connection',
          title: 'Question管理',
          role: ['SA'],
        },
      },
      {
        name: 'sets',
        path: '/dataset/set',
        component: 'llm/dataset/set/index',
        meta: {
          icon: 'el-icon-Document',
          title: 'Dataset管理',
          role: ['SA'],
        },
      },
    ],
  },
]

// const routes = []

export default routes
