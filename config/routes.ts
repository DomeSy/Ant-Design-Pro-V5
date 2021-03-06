export default [
  { path: '/welcome', exact: true, name: '欢迎', icon: 'FireOutlined', component: './Welcome' },
  {
    path: '/hook',
    name: 'Hook',
    icon: 'BulbOutlined',
    component: './Hook',
    routes: [
      { path: '/hook', redirect: '/hook/introduce' },
      { path: '/hook/introduce', name: '介绍', component: './Hook/Introduce' },
      { path: '/hook/useState', name: 'useState', component: './Hook/UseState' },
      { path: '/hook/useEffect', name: 'useEffect', component: './Hook/UseEffect' },
      { path: '/hook/useContext', name: 'useContext', component: './Hook/UseContext' },
      { path: '/hook/useReducer', name: 'useReducer', component: './Hook/UseReducer' },
      { path: '/hook/useMemo', name: 'useMemo', component: './Hook/UseMemo' },
      { path: '/hook/useCallback', name: 'useCallback', component: './Hook/UseCallback' },
      { path: '/hook/useRef', name: 'useRef', component: './Hook/UseRef' },
      {
        path: '/hook/useImperativeHandle',
        name: 'useImperativeHandle',
        component: './Hook/UseImperativeHandle',
      },
      { path: '/hook/useModel', name: 'useModel', component: './Hook/UseModel' },
      { path: '/hook/useRequest', name: 'useRequest', component: './Hook/UseRequest' },
    ],
  },
  {
    path: '/ahook',
    name: 'aHooks',
    icon: 'BulbOutlined',
    component: './aHook',
    routes: [
      { path: '/ahook', redirect: '/ahook/introduce' },
      { path: '/ahook/introduce', name: '介绍', component: './aHook/Introduce' },
      { path: '/ahook/LifeCycle', name: 'LifeCycle', component: './aHook/LifeCycle' },
      { path: '/ahook/State', name: 'State', component: './aHook/State' },
      { path: '/ahook/SideEffect', name: 'SideEffect', component: './aHook/SideEffect' },
      { path: '/ahook/Dom', name: 'Dom', component: './aHook/Dom' },
      { path: '/ahook/Advanced', name: 'Advanced', component: './aHook/Advanced' },
    ],
  },
  {
    path: '/Charts',
    name: '图表',
    icon: 'HeatMapOutlined',
    routes: [
      { path: '/Charts', redirect: '/Charts/All' },
      {
        path: '/Charts/All',
        name: '展示图表',
        component: './Charts/All',
        routes: [
          { path: '/Charts/All', redirect: '/Charts/All/Introduce' },
          {
            path: '/Charts/All/Introduce',
            name: '介绍',
            component: './Charts/All/Introduce',
            hideInMenu: true,
          },
          {
            path: '/Charts/All/Column',
            name: '柱状图',
            component: './Charts/All/Column',
            hideInMenu: true,
          },
          {
            path: '/Charts/All/Line',
            name: '折现图',
            component: './Charts/All/Line',
            hideInMenu: true,
          },
          {
            path: '/Charts/All/DualAxes',
            name: '双轴图',
            component: './Charts/All/DualAxes',
            hideInMenu: true,
          },
          {
            path: '/Charts/All/Bar',
            name: '条形图',
            component: './Charts/All/Bar',
            hideInMenu: true,
          },
          {
            path: '/Charts/All/Area',
            name: '面积图',
            component: './Charts/All/Area',
            hideInMenu: true,
          },
          {
            path: '/Charts/All/Pie',
            name: '饼图',
            component: './Charts/All/Pie',
            hideInMenu: true,
          },
        ],
      },
      {
        path: '/Charts/CardCharts',
        name: '卡片图表',
        component: './Charts/CardCharts',
        routes: [
          { path: '/Charts/CardCharts', redirect: '/Charts/CardCharts/Introduce' },
          {
            path: '/Charts/CardCharts/Introduce',
            name: '介绍',
            component: './Charts/CardCharts/Introduce',
            hideInMenu: true,
          },
          {
            path: '/Charts/CardCharts/Column',
            name: '卡片柱状图',
            component: './Charts/CardCharts/Column',
            hideInMenu: true,
          },
        ],
      },
    ],
  },
  {
    path: '/Map',
    name: '地图(L7)',
    icon: 'HeatMapOutlined',
    component: './Map',
    routes: [
      { path: '/Map', redirect: '/Map/China' },
      { path: '/Map/China', name: '全国地图', component: './Map/China' },
      { path: '/Map/Province', name: '省级地图', component: './Map/Province' },
      { path: '/Map/City', name: '市级地图', component: './Map/City' },
      { path: '/Map/Area', name: '区级地图', component: './Map/Area' },
      { path: '/Map/Example', name: '案例', component: './Map/Example' },
    ],
  },
  {
    path: '/file',
    name: '文本展示类',
    icon: 'UnorderedListOutlined',
    component: './File',
    routes: [
      { path: '/file', redirect: '/file/ossUploadShow' },
      { path: '/file/ossUploadShow', name: '图片文件上传', component: './File/OssUploadShow' },
      { path: '/file/maskFrom', name: '弹出表单', component: './File/MaskFrom' },
      { path: '/file/excel', name: 'Excel数据', component: './File/Excel' },
      { path: '/file/drag', name: '文本拖拽', component: './File/Drag' },
    ],
  },
  {
    path: '/form',
    name: '动态表单',
    icon: 'DesktopOutlined',
    component: './Form',
    routes: [
      { path: '/form', redirect: '/Form/introduce' },
      { path: '/form/introduce', name: '介绍', component: './Form/Introduce' },
      { path: '/form/input', name: '输入框', component: './Form/Input' },
      { path: '/form/password', name: '密码', component: './Form/Password' },
      { path: '/form/date', name: '日期', component: './Form/Date' },
      { path: '/form/select', name: '选择框', component: './Form/Select' },
      { path: '/form/checkbox', name: '多选', component: './Form/Checkbox' },
      { path: '/form/radio', name: '单选', component: './Form/Radio' },
      { path: '/form/switch', name: '开关', component: './Form/Switch' },
      { path: '/form/textArea', name: '文本框', component: './Form/TextArea' },
      { path: '/form/rate', name: '星级评价', component: './Form/Rate' },
      { path: '/form/slider', name: '滑动输入条', component: './Form/Slider' },
      { path: '/form/digit', name: '步进器', component: './Form/Digit' },
      { path: '/form/field', name: '自定义', component: './Form/Field' },
    ],
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
    hideInMenu: true,
  },
  { component: './_404' },
];
