export default [
  { path: '/welcome',exact: true, name: '欢迎', icon: 'FireOutlined', component: './Welcome' },
  {
    path: '/hook',
    name: 'Hook',
    icon: 'BulbOutlined',
    component: './Hook',
    routes: [
      { path: '/hook', redirect: '/hook/introduce'},
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
  {
    path: '/table',
    name: '动态表单',
    icon: 'DesktopOutlined',
    component: './Table',
    routes: [
      { path: '/table', redirect: '/Table/introduce'},
      { path: '/table/introduce', name: '介绍', component: './Table/Introduce' },
      { path: '/table/input', name: '输入框', component: './Table/Input'},
    ]
  },
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
    ],
  },
  { component: './_404' },
];
