export default [
  { path: '/welcome',exact: true, name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/hook',
    name: 'Hook',
    icon: 'crown',
    component: './Hook',
    routes: [
      { path: '/Hook', redirect: '/hook/introduce'},
      { path: '/hook/introduce', name: '介绍', component: './Hook/Introduce' },
      { path: '/hook/useState', name: 'useState', component: './Hook/UseState'},
      { path: '/hook/useEffect', name: 'useEffect', component: './Hook/UseEffect'},
      { path: '/hook/useContext', name: 'useContext', component: './Hook/UseContext'},
      { path: '/hook/useReducer', name: 'useReducer', component: './Hook/UseReducer'},
      { path: '/hook/useMemo', name: 'useMemo', component: './Hook/UseMemo'},
      { path: '/hook/useCallback', name: 'useCallback', component: './Hook/UseCallback'},
      { path: '/hook/useRef', name: 'useRef', component: './Hook/UseRef'},
      { path: '/hook/useImperativeHandle', name: 'useImperativeHandle', component: './Hook/UseImperativeHandle'},
      { path: '/hook/useModel', name: 'useModel', component: './Hook/UseModel'},
      { path: '/hook/useRequest', name: 'useRequest', component: './Hook/UseRequest'},
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
