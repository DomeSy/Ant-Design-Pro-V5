import type { Props } from '@/commonPages/DetailSetting'

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
