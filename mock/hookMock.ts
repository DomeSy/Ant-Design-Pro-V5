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


