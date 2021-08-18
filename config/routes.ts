export default [
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/hook',
    name: 'Hook',
    icon: 'crown',
    routes: [
      { path: '/Hook', redirect: '/hook/introduce'},
      { path: '/hook/introduce', name: '介绍', component: './Hook/Introduce' },
      { path: '/hook/useMemo', name: 'useMemo', component: './Hook/UseMemo'},
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
    ],
  },
  { component: './_404' },
];
