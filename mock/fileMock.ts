import type { Props } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
import { tableCommonList } from './data'

export const ossUpload:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "digit"',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormDigit`,
        },
        {
          render: `可自由设置小数点，范围等`,
        },
        {
          render: '他允许输入，但失去焦点会自动清除，传输答案的时候不会讲.0后面的带入'
        }
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set#proformdigit',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'digitApi',
      render: 'type为digit的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'max',
          desc: '最大限制个数',
          status: "number",
        },
        {
          name: 'min',
          desc: '最小限制个数',
          status: "number",
        },
        {
          name: 'precision',
          desc: '设置小数点位数',
          status: "number",
          default: '2',
          global: true
        },
      ]
    },
  ],
  explain: {
    id: 'explain',
    hrefTooltip: '封装不易，给个Star吧！',
    href: 'https://github.com/DomeSy/Ant-Design-Pro-V5/tree/master/src/components/Form'
  },
  explainList: [
    {
      type: 'list',
      list: [
        {
          render: `封装原有的 ProComponent 的 ProFormRate，所以这些 Api 并不是最全面的，所以要是有其他的属性，可以参考官网 Api`,
          strong: true
        },
        {
          render: `它自带了一个格式化(保留 2 位小数，最小值为 0)，有需要你可以关掉它。`,
          strong: true
        }
      ]
    },
  ]
}

export const ossUploadAnchorList:AnchorLinkProps[] = [
  {
    title: '使用说明',
    href: 'use'
  },
  {
    title: '代码演示',
    href: 'Code',
  },
  {
    title: 'Api',
    href: 'Api',
    children: [
      {
        title: 'formList（公共属性）',
        href: 'formListProps',
      },
      {
        title: 'digit属性',
        href: 'digitApi',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]
