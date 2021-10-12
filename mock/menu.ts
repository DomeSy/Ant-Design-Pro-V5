//路径
//mock/menu.ts

export default {
  '/api/getMenuData': {
    code: 200,
    data: [
      { name: '动态路由查询表格', icon: 'table', path: '/table', component: './TableList' },
      { path: '/welcome', name: '动态路由欢迎', icon: 'smile' },
    ],
    success: true
  }
};


