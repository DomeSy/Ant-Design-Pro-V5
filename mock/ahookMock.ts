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
        render: '生命周期我认为是开发最重要的，它好比是开发的流程，如果连流程都无法了解，那怎样更好的工作呢？所以为了有更好的流程，ahook 帮我们把 class 的流程搬到了 hook， 使我们更好的开发',
        strong: true
      },
      {
        render: '这里只是做了比较重要的Api，更多Api，请看官网~',
        href: 'https://ahooks.js.org/zh-CN/hooks/life-cycle/use-debounce-effect',
        hrefTooltip: '去官网看看~',
        blank: true
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
