import type { Props } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

export const LifeCycle:Props = {
  use: {
    title: '简单介绍'
  },
  useList: [
    {
      render: '我们需要更加简单的Hook组件实现性能优化，和更好的利用生命周期来帮助我们~'
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

export const LifeCycleAnchorList:AnchorLinkProps[] = [
  {
    title: '装载与卸载（useMount和useUnmount）',
    href: 'code1'
  },
  {
    title: '更新（useUpdateEffect）',
    href: 'code2'
  },
  {
    title: '依赖改变（useTrackedEffect）',
    href: 'code3'
  },
  {
    title: '强制更新（useUpdateEffect）',
    href: 'code4'
  },
  {
    title: '防抖（useDebounceEffect）',
    href: 'code5'
  },
  {
    title: '节流（useThrottleEffect）',
    href: 'code6'
  },
]

export const State:Props = {
  use: {
    title: '简单介绍'
  },
  useList: [
    {
      render: '我们常常会弄各种各样的状态，如何更好的去管理，更加简洁去做这些事~！'
    }
  ],
  attention: {
    children: [
      {
        render: '状态管理可以让我们更好的管理属性，如定时器，这就方便了很多，还有 useWhyDidYouUpdate 他可以帮助我们在开发的时候快速定位导致渲染是何引起的',
        strong: true
      },
      {
        render: '这里只是做了比较重要的Api，更多Api，请看官网~',
        href: 'https://ahooks.js.org/zh-CN/hooks/state',
        hrefTooltip: '去官网看看~',
        blank: true
      }
    ]
  }
}

export const StateAnchorList:AnchorLinkProps[] = [
  {
    title: '布尔值（useBoolean）',
    href: 'code1'
  },
  {
    title: '两种状态之间的切换（useToggle）',
    href: 'code2'
  },
  {
    title: 'Set类型（useSet）',
    href: 'code3'
  },
  {
    title: 'Object类型（useSetState）',
    href: 'code4'
  },
  {
    title: '数字类型（useCounter）',
    href: 'code5'
  },
  {
    title: '倒计时（useCountDown）',
    href: 'code6'
  },
  {
    title: '网络连接状态（useNetwork）',
    href: 'code7'
  },
  {
    title: '什么导致渲染了 render（useWhyDidYouUpdate）',
    href: 'code8'
  },
]
