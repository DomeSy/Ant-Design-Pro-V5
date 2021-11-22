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
    path: '/ahook',
    name: 'aHook',
    icon: 'BulbOutlined',
    component: './aHook',
    routes: [
      { path: '/ahook', redirect: '/ahook/introduce'},
      { path: '/ahook/introduce', name: '介绍', component: './aHook/Introduce' },
      { path: '/ahook/LifeCycle', name: 'LifeCycle', component: './aHook/LifeCycle'},
      { path: '/ahook/State', name: 'State', component: './aHook/State'},
      { path: '/ahook/SideEffect', name: 'SideEffect', component: './aHook/SideEffect'},
      { path: '/ahook/Dom', name: 'Dom', component: './aHook/Dom'},
      { path: '/ahook/Advanced', name: 'Advanced', component: './aHook/Advanced'},
    ],
  },
  {
    path: '/Map',
    name: '地图',
    icon: 'BarChartOutlined',
    component: './Map',
    routes: [
      { path: '/Map', redirect: '/Map/Global'},
      // { path: '/Map/introduce', name: '介绍', component: './Map/Introduce' },
      { path: '/Map/Global', name: '折线图', component: './Map/Global'},
      { path: '/Map/Province', name: '省级地图', component: './Map/Province'},

    ],
  },
  {
    path: '/file',
    name: '文本展示类',
    icon: 'UnorderedListOutlined',
    component: './File',
    routes: [
      { path: '/file', redirect: '/file/ossUploadShow'},
      { path: '/file/ossUploadShow', name: '图片文件上传', component: './File/OssUploadShow' },
      { path: '/file/maskFrom', name: '弹出表单', component: './File/MaskFrom' },
      { path: '/file/excel', name: 'Excel数据', component: './File/Excel' },
    ]
  },
  {
    path: '/form',
    name: '动态表单',
    icon: 'DesktopOutlined',
    component: './Form',
    routes: [
      { path: '/form', redirect: '/Form/introduce'},
      { path: '/form/introduce', name: '介绍', component: './Form/Introduce' },
      { path: '/form/input', name: '输入框', component: './Form/Input'},
      { path: '/form/password', name: '密码', component: './Form/Password'},
      { path: '/form/select', name: '选择框', component: './Form/Select'},
      { path: '/form/checkbox', name: '多选', component: './Form/Checkbox'},
      { path: '/form/radio', name: '单选', component: './Form/Radio'},
      { path: '/form/switch', name: '开关', component: './Form/Switch'},
      { path: '/form/textArea', name: '文本框', component: './Form/TextArea'},
      { path: '/form/rate', name: '星级评价', component: './Form/Rate'},
      { path: '/form/slider', name: '滑动输入条', component: './Form/Slider'},
      { path: '/form/digit', name: '步进器', component: './Form/Digit'},
      { path: '/form/field', name: '自定义', component: './Form/Field'},
    ]
  },
  {
    path: '/table',
    name: '动态表格',
    icon: 'TableOutlined',
    component: './Table',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
    ],
  },
  {
    path: '/globalSetting',
    name: '全局配置文件',
    component: './GlobalSetting',
    hideInMenu: true
  },
  { component: './_404' },
];
