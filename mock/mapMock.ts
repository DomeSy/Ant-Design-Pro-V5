import type { Props } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

export const LifeCycle:Props = {
  api: {
    id: 'Api',
    hrefTooltip: '这里列举常见的Api，点击去官网',
    href: 'https://l7.antv.vision/zh/docs/api/district/start',
  },
  apiList: [

    {
      type: 'title',
      id: 'ApiConfig',
      render: 'configProps属性',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'width',
          desc: '集中控制表单的宽度',
          status: 'string | number',
          default: '40%',
          global: true
        },
        {
          name: 'noRest',
          desc: '是否不要重置按钮',
          status: 'boolean',
          default: 'false'
        },
        {
          name: 'back',
          desc: [
            '是否带返回按钮，可为对象，可为布尔，可为数字',
            '为对象时继承按钮的所有属性，布尔：为true时，默认返回为-1，为number时可自己设置返回层数'
          ],
          status: 'Object | boolean | number',
          default: '1'
        },
      ]
    },

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
