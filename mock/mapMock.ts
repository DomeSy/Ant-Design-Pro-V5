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
      type: 'table',
      tableList: [
        {
          name: 'init',
          desc: '初始化省地图的编码',
          status: 'string[] | string | number | number[]',
        },
        {
          name: 'id',
          desc: '用于区分渲染的图层， 多次渲染的时候需要id不同（以省为例）',
          status: 'string',
          default: 'mapProvince'
        },
        {
          name: 'data',
          desc: '匹配的数据源',
          status: 'Array<{ [key: string]: any }>',
        },
        {
          name: 'joinBy',
          desc: [
            '数据关联项，与 data 数据源做关联',
            '如果data的code码与地图本身的code码相等，则进行匹配，在后续的操作中。',
            '目前只支持  NAME_CHN 与 adcode'
          ],
          status: "[string, string]",
          default: "['adcode', 'code']",
          global: true
        },
        {
          name: 'getScene',
          desc: '获取Map创的实例',
          status: '(scene: any) => void',
        },
        {
          name: 'getLayer',
          desc: '获取图层渲染示例',
          status: '(layer: any) => void',
        },
        {
          name: 'map',
          desc: '地图初始化模板',
          status: 'mapProps',
          global: true
        },
        {
          name: 'scene',
          desc: '地图场景配置',
          status: 'sceneProps',
          global: true
        },
        {
          name: 'status',
          desc: '地图的状态',
          status: 'statusProps',
          global: true
        },
        {
          name: 'config',
          desc: '地图详细配置',
          status: 'configProps',
          global: true
        },
        {
          name: 'initMethod',
          desc: '初始化方法集合',
          status: 'initMethodProps[]',
        },
        {
          name: 'onClick',
          desc: '点击省份方法，此方法存在，initMethod 的click将无效',
          status: '(layer:any) => void',
        },
        {
          name: 'onDoubleClick',
          desc: '双击省份方法 此方法存在，initMethod 的dblclick将无效',
          status: 'layer:any) => void',
        },
        {
          name: 'unClick',
          desc: '点击空白处，此方法存在，initMethod 的unclick将无效',
          status: 'layer:any) => void',
        },
        {
          name: 'unDoubleClick',
          desc: ' 双击空白处 此方法存在，initMethod 的undblclick将无效',
          status: 'layer:any) => void',
        },
        {
          name: 'addControl',
          desc: '增加额外区域显示样式',
          status: 'addControlProps[]',
        },
        {
          name: 'configControl',
          desc: '配置示例图表层示例',
          status: 'configControlProps[]',
        },
        {
          name: 'style',
          desc: '渲染图层的css',
          status: 'React.CSSProperties',
        },
      ]
    },
    {
      type: 'title',
      id: 'Api1',
      render: 'mapProps属性',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'token',
          desc: '地图密钥，需要平台申请',
          status: 'string ',
          global: true
        },
        {
          name: 'style',
          desc: '提供默认四种样式',
          status: "'dark' | 'light' | 'normal' | 'blank'",
          default: 'light',
          global: true
        },
        {
          name: 'plugin',
          desc: [
            '高德地图API插件',
            "使用示例 ['AMap.ToolBar','AMap.Driving']"
          ],
          status: 'string[]',
        },
        {
          name: 'center',
          desc: '地图中心点 [经度，纬度]',
          status: "[number, number]",
          default: '[116.2825, 39.9]',
          global: true
        },
        {
          name: 'pitch',
          desc: '地图倾角',
          status: "number",
          default: '0',
          global: true
        },
        {
          name: 'zoom',
          desc: '地图缩放等级',
          status: "number",
          default: '3',
          global: true
        },
        {
          name: 'rotation',
          desc: '地图旋转角',
          status: "number",
          default: '0'
        },
        {
          name: 'maxZoom',
          desc: '最大缩放等级',
          status: "number",
        },
        {
          name: 'minZoom',
          desc: '最小缩放等级',
          status: "number",
        },
        {
          name: 'map其余属性',
          desc: '其他配置，查看高德地图的Api https://lbs.amap.com/api/javascript-api/reference/map',
          status: "[key: string]",
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
