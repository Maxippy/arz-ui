export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../../views/Home.vue'),
    children: [
      {
        path: '',
        name: '安装使用',
        component: () => import('packages/install/install.md')
      },
      {
        path: 'button',
        name: 'button',
        component: () => import('../../../packages/button/doc/doc.md')
      },
      {
        path: 'input',
        name: 'input',
        component: () => import('../../../packages/input/doc/doc.md')
      },
      {
        path: 'textarea',
        name: 'textarea',
        component: () => import('../../../packages/textarea/doc/doc.md')
      },
      {
        path: 'space',
        name: 'space',
        component: () => import('../../../packages/space/doc/doc.md')
      },
      {
        path: 'select',
        name: 'select',
        component: () => import('../../../packages/select/doc/doc.md')
      },
      {
        path: 'radio',
        name: 'radio',
        component: () => import('../../../packages/radio/doc/doc.md')
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('../../../packages/tree/doc/doc.md')
      },
      {
        path: 'upload',
        name: 'upload',
        component: () => import('../../../packages/upload/doc/doc.md')
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('../../../packages/message/doc/doc.md')
      },
      {
        path: 'dialog',
        name: 'dialog',
        component: () => import('../../../packages/dialog/doc/doc.md')
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('../../../packages/table/doc/doc.md')
      },
      {
        path: 'scrolltab',
        name: 'scrolltab',
        component: () => import('../../../packages/scrollTab/doc/doc.md')
      },
      {
        path: 'skeleton',
        name: 'skeleton',
        component: () => import('../../../packages/skeleton/doc/doc.md')
      },
      {
        path: 'icon',
        name: 'icon',
        component: () => import('../../../packages/icon/doc/doc.md')
      },
    ]
  }
]