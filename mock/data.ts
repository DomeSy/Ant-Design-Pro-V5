
// 设置返回统一格式
export const resData = (data: any) => {
  return {
    data,
    code: 200,
    success: 'success',
  }
}

// 内容
export const content = {
  hook: {
    useState: '用来声明状态变量, 类相当于 class 中的 this.state 和 this.setState 的作用',
    useEffect: '副作用，主要是将组件中的 componentDidMount componentDidUpdate componentWillUnmount 到一个方法中，杜绝了频繁定义的繁琐',
    useContext: '上下文，对应的Context,其本意就是设置全局共享数据，使所有组件可跨层级实现共享',
    useReducer: '作用类似于 redux, 增强函数体',
    useMemo: '当一个父组件中调用了一个子组件的时候，父组件的 state 发生变化，会导致父组件更新，而子组件虽然没有发生改变，但也会进行更新。useMemo 就是函数组件为了防止这种不必要的而采取的手段，所以一般 useMemo 是优化手段',
    useCallback: '与 useMemo 方法类似，只是 useMemo 缓存的是变量， 而 useCallBack 缓存的是函数',
    useRef: 'useRef 获取当前元素的所有属性，并且返回一个可变的ref对象，并且这个对象只有current属性，可设置initialValue',
    useImperativeHandle: '可以让你在使用 ref 时自定义暴露给父组件的实例值。',
    useModel: 'umi3中的数据流，之前使用dva中有很多重复的劳动，也会有很多概念 effects, state, reducers等，为解决这种问题，推 出的 useModel 来解决',
    useRequest: 'useRequest 是一个超级强大，且生产完备的网络请求 Hooks，目前已经成为蚂蚁中台最佳实践内置网络请求方案',
    dva: 'dva 数据流，Ant Design V4 使用的数据流，当然V5也支持，如果学过 redux， 那么非常容易上手使用'
  },
  ahook: {
    LifeCycle: '生命周期可以说是开发最重要的一环，主要介绍下：useMount（装载）、useUnmount（卸载）、 useUpdateEffect（更新）、 useUpdateEffect（强制更新）、 useTrackedEffect（依赖）、 useDebounceEffect（防抖）、 useThrottleEffect（节流），7个Api',
    State: '状态管理，主要介绍下：useCountDown（倒计时）、useBoolean（布尔管理）、useToggle（两种状态切换）、MockSet（Set类型管理）、Object（Object类型管理）、useCounter（数字类型管理）、useNetwork（网络连接状态）、MockWhyDidYouUpdate（什么导致渲染 render），8个Api',
    SideEffect: '副作用的hook, 有 setInterval（管理 setInterval）、setInterval（管理 setInterval）、useDebounce（对值的防抖）、useDebounceFn（对函数的防抖）、useThrottle（对值的节流）、useThrottleFn（对函数的节流），6个Api',
    Dom: '有关Dom的操作，主要包括：useEventListener（管理 addEventListener）、useHover（鼠标悬停状态）、useFullscreen（全屏功能）、useMouse（获取鼠标位置）、useScroll（获取元素滚动的位置）、useResponsive（响应式信息）、useTextSelection（监听选取的位置及内容）、useSize（监听屏幕尺寸），8个Api',
    Advanced: '高阶使用，主要包含：useCreation（结合 useMemo 或 useRef）、useEventEmitter（共享事件通知、useReactive（另一种useState），4个Api'
  },
  Map: {
    China: 'L7 L: Location, 7: 世界七大洲，寓意为全球位置数据提供可是话能力',
    Province: '省级地图，可自由实现地图的初始化，自定义地图颜色，展示名称，边界颜色，图层比例，并实现拖拽，缩放，旋转，点击，双击等功能（包括不限于此）。',
    City: '市级地图，可自由实现地图的初始化，自定义地图颜色，展示名称，边界颜色，图层比例，并实现拖拽，缩放，旋转，点击，双击等功能（包括不限于此）。',
    Area: '区级地图，可自由实现地图的初始化，自定义地图颜色，展示名称，边界颜色，图层比例，并实现拖拽，缩放，旋转，点击，双击等功能（包括不限于此）。',
    Example: '通过 Map.China  Map.Province Map.City 实现简单的地图钻取功能'
  },
  file: {
    ossUploadShow: '图片、文件上传是最常见的表单项，而在原有的封装中，一些比较常用的功能并不是很全面，如裁剪功能不能制定区域的裁剪，OSS功能要自己写，所以这里采用并不是 ProFormUploadDragger, 但也是基于 Ant Design 的 upload 进行封装',
    maskFrom: '弹框(Modal)和表格(Form)的结合',
    excel: '在许多表格中，我们需要将表格的数据进行导出，所以需要一个方法，适配与 Table 作出文件导出',
    drag: '结合 react-draggable-tags 实现拖拽功能'
  }
}

// table 公共属性
export const tableCommonList:any = [
  {
    type: 'title',
    id: 'formListProps',
    render: 'formList（公共属性）',
    effect: 4
  },
  {
    type: 'table',
    tableList: [
      {
        name: 'name',
        desc: '值唯一，你可以这么理解，如果name=‘input’，那么最后返回的字段就是input，所以这个一般是接口所需要的提交字段,如果有相同的name，则会直接覆盖',
        status: 'string',
      },
      {
        name: 'label',
        desc: [
          '字段名称',
          '不填只会没有文字，样式还是与之前的对齐'
        ],
        status: 'string'
      },
      {
        name: 'type',
        desc: [
          '类型，根据不同的类型来判断展示的组件',
          '主要类型有 input, password, captcha, select, checkbox, radio, switch, textArea, rate, slider, field, digit, dependency'
        ],
        status: 'string',
        default: 'input'
      },
      {
        name: 'default',
        desc: [
          '默认初始值',
          '每个type对应不同的值，如是input他就是字符串，开关则是布尔值'
        ],
        status: 'any'
      },
      {
        name: 'width',
        desc: '宽度',
        status: "number | 'sm' | 'md' | 'xl' | 'xs' | 'lg'",
        default: '当前内容区域的 80%',
        global: true
      },
      {
        name: 'tooltip',
        desc: '提示语',
        status: 'string'
      },
      {
        name: 'extra',
        desc: '额外节点，可自定义',
        status: 'React.ReactNode'
      },
      {
        name: 'placeholder',
        desc: '预设时的字段',
        status: 'string',
        default: '请输入/选择 + label'
      },
      {
        name: 'readonly',
        desc: '只读',
        status: 'boolean',
        default: 'false',
      },
      {
        name: 'disabled',
        desc: '不可编辑',
        status: 'boolean',
        default: 'false',
      },
      {
        name: 'required',
        desc: '是否必填',
        status: 'boolean',
        default: 'false',
      },
      {
        name: 'fieldProps',
        desc: '原有的属性',
        mark: '在各种类型上提供一些简单的属性，这个属性如果自己设置相同的，会覆盖掉之前的',
        status: 'Object',
      }
    ]
  },
]
