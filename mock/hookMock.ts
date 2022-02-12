import type { Props } from '../src/commonPages/DetailSetting'
import type { AnchorLinkProps } from '../src/components'

export const useState:Props = {
  use: {
    title: '简单介绍'
  },
  useList: [
    {
      render: '在 Class 中，我们定义变量在 constructor 中设置 this.state 设置变量，而在 Hook 中我们使用 useState'
    }
  ],
  attention: {
    children: [
      {
        render: 'count 对应 class 中的 this.state , setCount 对应 class 中的 this.setState',
        red: true
      },
      {
        render: 'useState 更新值时需要替换，而不是 class 中的合并，这点极为重要',
        red: true
      }
    ]
  }
}

export const useEffect:Props = {
  use: {
    title: '简单介绍'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: '副作用（Side Effect）是指 function 做了和本身运算返回值无关的事，如请求数据、修改全局变量，打印、数据获取、设置订阅以及手动更改 React 组件中的 DOM 都属于副作用操作都算是副作用'
        },
        {
          render: '整合原有的生命周期方法，通过第二个参数来接收',
          tooltip: '以数组的形式，只要数组里的方法改变就会执行'
        }
      ]
    }
  ]
}

export const useContext:Props = {
  use: {
    title: '简单介绍'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: 'useContext 实现跨层级传递，实现数据共享'
        },
        {
          render: '作用就是怼他包含的组件树提供全局共享的数据的一种技术'
        },
        {
          render: '需要createContext的帮助，通过 CountContext.Provider 包裹的组件，才能通过 useContext 获取对应的值'
        }
      ]
    }
  ],
  attention: {
    children: [
      {
        render: '在使用时,都需要 createContext， 需要通过 CountContext.Provider 包裹，在通过 useContext（CountContext）来获取对应的value',
        red: true
      },
      {
        render: 'useContext 和 redux 的作用是完全不同的，redux 是统一管理状态的作用，而 useContext 是解决传值的问题， 有本质区别',
        red: true
      },
      {
        render: 'useContext 与 useReducer 配合使用，可实现类似 redux 的作用',
        red: true
      },
    ]
  }
}

export const useReducer:Props = {
  use: {
    title: '简单介绍'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: '设置统一状态'
        },
        {
          render: '接收两个参数，分别为 state action，然后返回一个状态的 count(属性值) 和 dispatch(方法)'
        }
      ]
    }
  ],
  attention: {
    children: [
      {
        render: 'useReducer 与 redux 用法极度类似，可以通过 useContext 与 useReducer 配合使用，可实现类似 redux 的作用',
        red: true
      }
    ]
  }
}

export const useMemo:Props = {
  use: {
    title: '简单介绍'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: 'useMemo 的使用和 useEffect 的使用方式基本一致'
        },
        {
          render: '当组件进行更新时，虽然子组件不会改变状态，但还是会进行刷新，而 useMemo 只监听特定的值，也就是说，当这个值没有发生变化时，不会更新'
        },
        {
          render: '在 useMemo 函数内通过复杂计算获取当前值得时候，不需要再父组件每次更新的时候重新计算，只要在依赖项发生变化的时候计算即可'
        }
      ]
    }
  ],
  attention: {
    children: [
      {
        render: 'useMemo 会在渲染的时候执行，而 useEffect 渲染之后执行',
        red: true
      }
    ]
  }
}

export const useCallback:Props = {
  use: {},
  useList: [
    {
      render: '通常在将一个组件中的函数,传递给子元素进行回调使用时，使用useCallback对函数进行处理'
    }
  ],
  attention: {
    children: [
      {
        render: 'useCallback 本身不会启到任何优化作用',
        red: true
      },
      {
        render: 'useCallback 与 useMemo 使用方式类似，不同的是 useMemo 是缓存的变量，而 useCallback 是缓存的函数',
        red: true
      },
      {
        render: 'useCallback 必须要与 memo 配合才能启到优化，单独使用 useCallback 反而浪费性能，原因是useCallback包裹的函数也是需要开销的',
        red: true
      },
    ]
  }
}

export const useRef:Props = {
  use: {},
  useList: [
    {
      type: 'list',
      list: [
        {
          render: 'useRef 类似于类组件的 this'
        },
        {
          render: '可以传入初始值（initialValue），并且这个对象只有一个 current属性'
        },
        {
          render: 'useRef 不会随着渲染，生命周期而改变，这点与 createRef 有着本质区别'
        }
      ]
    }
  ],
  attention: {
    children: [
      {
        render: 'useRef 不仅是管理 DOM 的 ref，并且具有this的功能，可以存放任何变量',
        red: true
      },
      {
        render: 'useRef可以很好的解决闭包带来的不方便性',
        red: true
      },
      {
        render: 'useRef 的内容发生变化时，不会通知，所以不会导致重新渲染，因为 useRef 只是个引用',
        red: true
      },
    ]
  }
}

export const useImperativeHandle:Props = {
  use: {},
  useList: [
    {
      render: '当一个页面很复杂的时候，我们会将这个页面进行模块化，这样会分成很多个模块，有的时候我们需要在最外层的组件上控制其他组件的方法，希望最外层的点击事件，同时执行子组件的点击事件，这时就需要 useImperativeHandle 的帮助'
    }
  ],
  attention: {
    title: 'useImperativeHandle的使用',
    children: [
      {
        render: '第一个是传递的ref',
      },
      {
        render: '第二个是执行的方法（可以将暴露）',
      },
      {
        render: '第一个是传递的ref，第二个是执行的方法（可以将暴露）',
      },
    ]
  },
}

export const useModel:Props = {
  use: {},
  useList: [
    {
      render: '当我们需要全局状态时，或页面复杂，此时将值存入对应的 models， 将会是个不错的选择'
    }
  ],
  attention: {
    title: '注意事项',
    // href: '/hook/useImperativeHandle',
    // hrefTooltip: '去看dva的使用',
    children: [
      {
        render: '必须要在src下加入models文件夹',
        red: true
      },
      {
        render: '当有多个文件夹时 useModel 引入的值应当以 . 隔开，如 test.modelTest',
        red: true
      },
      {
        render: '在返回时，只需要将对应的变量和函数返回出去即可',
        red: true
      },
      {
        render: 'useModel 相对于 dva，是状态管理，而不是数据持久化',
        red: true
      },
    ]
  },
}

export const useRequest:Props = {
  use: {
    id: 'use'
  },
  useList: [
    {
      render: '请求接口，可根据需求，快速配置响应的需求等'
    },
    {
      type: 'title',
      effect: 4,
      id: 'useWay',
      render: '使用方式'
    },
    {
      type: 'prv',
      render: `
import { useRequest } from 'umi';
const { data, error, loading, run, params, cancel } = useRequest(service, payload)
      `
    },
    {
      type: 'list',
      list: [
        {
          render: '主要的有 data(返回的结果), error(抛出的异常), loading(是否执行完毕), run(手动执行), params(请求的参数) cancel(取消执行)'
        },
        {
          render: 'service有多种写法，这里演示比较常用的三种',
          tooltip: '这里只做常用的，没有像官网全面',
        },
        {
          code: true,
          render: `useRequest('/api/userInfo')`,
          tooltip: '只传入字符串，默认不带参数，请求为get'
        },
        {
          code: true,
          render: `useRequest({ url: '请求地址', method: '请求模式（默认get）', data: '请求参数' })`,
        },
        {
          code: true,
          render: "useRequest((userId)=> `/api/userInfo/${userId}}`)",
        }
      ]
    }
  ],
  attention: {
    id: 'attention',
    children: [
      {
        render: 'useRequest 请求他会走统一的请求拦截和响应拦截，所以返回的格式需要统一，可以在响应拦截里统一设置所需要的规范',
        red: true
      },
      {
        render: 'useRequest 功能非常强大，能实现99%的请求，这里只是介绍最常用的几种方式',
        tooltip: '更加详细请去官网查看使用',
        red: true
      },
    ]
  },
  api: {
    id: 'Api',
    hrefTooltip: '这里列举常见的Api，点击去官网',
    href: 'https://hooks.umijs.org/zh-CN/hooks/async#%E9%9B%86%E6%88%90%E8%AF%B7%E6%B1%82%E5%BA%93',
  },
  apiList: [
    {
      type: 'title',
      id: 'Result',
      render: 'Result',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'data',
          desc: [
            'service 返回的数据，默认为 undefined',
            '如果有 formatResult, 则该数据为被格式化后的数据。'
          ],
          status: 'undefined / any'
        },
        {
          name: 'error',
          desc: 'service 抛出的异常，默认为 undefined',
          status: 'undefined / Error'
        },
        {
          name: 'loading',
          desc: 'service 是否正在执行',
          status: 'boolean'
        },
        {
          name: 'run',
          desc: [
            '手动触发 service 执行，参数会传递给 service',
            'debounce 模式与 throttle 模式返回值为 Promise<null>'
          ],
          status: '(...args: any[]) => Promise'
        },
        {
          name: 'params',
          desc: '当次执行的 service 的参数数组。比如你触发了 run(1, 2, 3)，则 params 等于 [1, 2, 3]',
          status: 'any[]'
        },
        {
          name: 'cancel',
          desc: [
            '取消当前请求',
            '如果有轮询，停止'
          ],
          status: '() => void'
        }
      ]
    },
    {
      type: 'title',
      id: 'Params',
      render: 'Params',
      effect: 4
    },
    {
      render: '所有的 Options 均是可选的。',
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'manual',
          desc: [
            '默认 false。 即在初始化时自动执行 service。',
            '如果设置为 true，则需要手动调用 run 触发执行。'
          ],
          status: 'boolean',
          default: 'false'
        },
        {
          name: 'initialData',
          desc: '默认的 data',
          status: 'any',
        },
        {
          name: 'onSuccess',
          desc: [
            'service resolve 时触发，参数为 data 和 params',
            '如果有 formatResult ，则 data 为格式化后数据。'
          ],
          status: '(data: any, params: any[]) => void',
        },
        {
          name: 'onError',
          desc: 'service 报错时触发，参数为 error 和 params。',
          status: '(error: Error, params: any[]) => void',
        },
        {
          name: 'cacheKey',
          desc: [
            '请求唯一标识。如果设置了 cacheKey，我们会启用缓存机制',
            '我们会缓存每次请求的 data , error , params , loading',
            '在缓存机制下，同样的请求我们会先返回缓存中的数据，同时会在背后发送新的请求，待新数据返回后，重新触发数据更新'
          ],
          status: 'string',
        },
        {
          name: 'defaultParams',
          desc: '轮询间隔，单位为毫秒。设置后，将进入轮询模式，定时触发 run',
          status: 'number',
        },
        {
          name: 'pollingWhenHidden',
          desc: [
            '在页面隐藏时，是否继续轮询。默认为 true，即不会停止轮询',
            '如果设置为 false , 在页面隐藏时会暂时停止轮询，页面重新显示时继续上次轮询'
          ],
          status: '(error: Error, params: any[]) => void',
        },
        {
          name: 'debounceInterval',
          desc: '防抖间隔, 单位为毫秒，设置后，请求进入防抖模式。',
          status: 'number',
        },
        {
          name: 'throttleInterval',
          desc: '节流间隔, 单位为毫秒，设置后，请求进入节流模式。',
          status: 'number',
        },
      ]
    }
  ],
}

export const useRequestAnchorList:AnchorLinkProps[] = [
  {
    title: '使用场景',
    href: 'use'
  },
  {
    title: '使用方式',
    href: 'useWay'
  },
  {
    title: '代码演示',
    href: 'Code'
  },
  {
    title: '注意事项',
    href: 'attention'
  },
  {
    title: 'Api',
    href: 'Api',
    children: [
      {
        title: 'Result',
        href: 'Result',
      },
      {
        title: 'Params',
        href: 'Params'
      }
    ]
  }
]
