import type { Props } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

export const LifeCycle:Props = {
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
