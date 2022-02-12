import type { Props } from '../src/commonPages/DetailSetting'
import type { AnchorLinkProps } from '../src/components'

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
    {
      type: 'title',
      id: 'Api2',
      render: 'sceneProps属性',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'logoPosition',
          desc: 'logo 的位置 ',
          status: "'bottomright' | 'topright' | 'bottomleft' | 'topleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter'",
          default: 'bottomright',
          global: true
        },
        {
          name: 'logoVisible',
          desc: '是否开启logo',
          status: "boolean",
          default: 'true',
          global: true
        },
        {
          name: 'antialias',
          desc: '是否开启抗锯齿',
          status: "boolean",
          default: 'true',
          global: true
        },
        {
          name: 'preserveDrawingBuffer',
          desc: '是否保留缓冲区数据 ',
          status: "boolean",
          default: 'false',
          global: true
        },
      ]
    },
    {
      type: 'title',
      id: 'Api3',
      render: 'statusProps属性',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'dragEnable',
          desc: '是否允许地图拖拽',
          status: "boolean",
          default: 'false',
          global: true
        },
        {
          name: 'keyboardEnable',
          desc: '是否允许形键盘事件',
          status: "boolean",
          default: 'false',
          global: true
        },
        {
          name: 'doubleClickZoom',
          desc: '是否双击放大 ',
          status: "boolean",
          default: 'false',
          global: true
        },
        {
          name: 'zoomEnable',
          desc: '是否滚动缩放',
          status: "boolean",
          default: 'false',
          global: true
        },
        {
          name: 'rotateEnable',
          desc: '是否旋转',
          status: "boolean",
          default: 'false',
          global: true
        },
        {
          name: 'showIndoorMap',
          desc: '是否展示室内场景',
          status: "boolean",
          default: 'false',
        },
        {
          name: 'resizeEnable',
          desc: '尺寸变动问题',
          status: "boolean",
          default: 'false',
        }
      ]
    },
    {
      type: 'title',
      id: 'Api4',
      render: 'configProps属性',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'depth',
          desc: [
            '数据显示的层级',
            '0：国际级，1：省级，2：市级，3：县级，不同的Map组件显示的不同'
          ],
          status: "0 | 1 | 2 | 3",
          default: 'bottomright',
        },
        {
          name: 'visible',
          desc: '地图是否可见',
          status: "boolean",
          default: 'true',
        },
        {
          name: 'fill',
          desc: [
            '填充图样式',
            'color 图层填充颜色，支持常量和数据映射, 分为 field （填充映射字段）、values（映射值，同color方法第二个参数数组，回调函数）',
            'filter 图层过滤方法，支持常量和数据映射 同layer.filter方法 数据映射 - field 填充映射字段 - values 回调函数 false 返回值将会被过滤掉',
            'style 同 polygonLayer的style方法',
            'activeColor 鼠标滑过高亮颜色, string | boolean 如果设置为 false取消高亮'
          ],
          status: "Partial<IFillOptions>",
        },
        {
          name: 'fillColor',
          desc: [
            '将 fill 中的 color 单独提出',
            '层级 fill > fillColor,'
          ],
          status: " Partial<IAttributeOption>",
          default: "[ '#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70' ]",
          global: true
        },
        {
          name: 'label',
          desc: [
            '文字显示区域',
            'color 标注字体颜色、field 标注字段、size 标注大小 、stroke 文字描边颜色等文字的配置属性'
          ],
          status: "Partial<ILabelOption>",
        },
        {
          name: 'noneLabel',
          desc: '不显示文字',
          status: "boolean",
          default: 'false',
          global: true
        },
        {
          name: 'stroke',
          desc: '描边颜色',
          status: "string",
          default: '#ffffff',
          global: true
        },
        {
          name: 'strokeWidth',
          desc: '描边宽度',
          status: "0.5",
          default: '#ffffff',
          global: true
        },
        {
          name: 'strokeOpacity',
          desc: '描边透明度',
          status: "number",
          default: '1',
          global: true
        },
        {
          name: 'popup',
          desc: [
            '信息窗口',
            'enable: 是否开启 boolean',
            "triggerEvent 触发事件 例如 'mousemove' | 'click'",
            'Html popup html字符串，支持回调函数 (properties: any) => string;'
          ],
          status: "Partial<IPopupOptions>",
        },
        {
          name: 'bubble',
          desc: [
            '气泡配置项',
            'enable boolean 是否显示气泡 true',
            'size: AttributeType; 气泡大小支持数据映射',
            'shape: AttributeType; 气泡形状支持数据映射',
            'color: AttributeType; 气泡颜色支持数据映射',
            'scale: { // 数字度量 field: string; 度量字段 type: ScaleTypeName; 度量字段 };',
            'style: { opacity: number; 透明度 stroke: string; 填充色 strokeWidth: number; 填充宽度'
          ],
          status: "string",
          default: '#ffffff',
        },
        {
          name: 'extra',
          desc: '除上述属性外的其他属性,详细参考 高德地图官网',
          status: "{[key: string]: any}",
        },
      ]
    },
    {
      type: 'title',
      id: 'Api5',
      render: 'initMethodProps事件集合',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'type',
          desc: '事件类集合, 如：click, dblclick 等',
          status: "string",
        },
        {
          name: 'render',
          desc: '渲染事件的集合, 接收当前的信息',
          status: "(e) => void",
        },
      ]
    },
    {
      type: 'title',
      id: 'Api6',
      render: 'addControlProps增加图例',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'position',
          desc: '图例的位置',
          status: "'topright' | 'topleft' | 'bottomright' | 'bottomleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter';",
          default: 'bottomright',
        },
        {
          name: 'name',
          desc: '类似于id',
          status: "string",
        },
        {
          name: 'onAdd',
          status: '(Layer?:any) => string;',
          desc: "Layer实例 增加函数的返回字段，返回的为字符串，需要将 React.ReactNode 转化为字符串，如：<span>示例</span>",
        },
        {
          name: '图例其他配置',
          desc: '参照官网，可适配与其他属性',
          status: "[key: string]",
        },
      ]
    },
    {
      type: 'title',
      id: 'Api7',
      render: 'configControlProps图例示例',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'method',
          desc: 'explain 地图颜色说明  extra 额外标注',
          status: "'explain' | 'extra'",
        },
        {
          name: 'extra',
          desc: [
            '额外标注',
            'class（string): 设置对应的class样式，一些属性需要 important',
            "position('bottomright' | 'topright' | 'bottomleft' | 'topleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter'): 位置, 默认： topright",
            'way(string): 什么条件触发，默认 mousemove（鼠标移入）',
            'topRender((e) => string;): 上方样式，替换原有的title',
            'bottomRender((e) => string;): 下方样式，返回字符串 `<span>示例</span>`',
            'noneRender((e) => string;): 一开始的初始样式，默认为空',
          ],
          status: "extraProps",
        },
        {
          name: 'explain',
          desc: [
            '地图颜色说明',
            'class（string): 设置对应的class样式，一些属性需要 important',
            "position('bottomright' | 'topright' | 'bottomleft' | 'topleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter'): 位置, 默认： topright",
            'title(string): 标题',
            'color({name: 标记名称，value：对应颜色}[]): 地图颜色',
            'topRender((e) => string;): 上方样式，替换原有的title',
            'bottomRender((e) => string;): 下方样式，返回字符串 `<span>示例</span>`',
          ],
          status: "explainProps",
        },
      ]
    },
  ],
  explain: {
    id: 'explain'
  },
  explainList: [
    {
      render: '如果本文对您有帮助，请点个至高无上的 Star，支持一下吧~',
      strong: true
    },
    {
      render: 'L7 是 AntV 所涉及的，这里主要对全国，省市区做封装，主要以省的为示例，是地理空间数据可视化的解决方案',
      strong: true
    },
    {
      render: '中国地图不需要init，省市区的init，也不太相同，其余的各个部分大致相同，属性也基本一样',
      strong: true
    },
    {
      render: '我再此做的是将常用功能提取出来，这样更加的善于管理，我们可以依据示例，封装适配于自己的项目，另外，地图支持响应式，移动端也可一建适配😄',
      strong: true
    },
  ]
}

export const LifeCycleAnchorList:AnchorLinkProps[] = [
  {
    title: '代码演示',
    href: 'Code',
  },
  {
    title: 'Api',
    href: 'Api',
    children: [
      {
        title: 'mapProps属性',
        href: 'Api1',
      },
      {
        title: 'sceneProps属性',
        href: 'Api2',
      },
      {
        title: 'statusProps属性',
        href: 'Api3',
      },
      {
        title: 'configProps属性',
        href: 'Api4',
      },
      {
        title: 'initMethodProps事件集合',
        href: 'Api5',
      },
      {
        title: 'addControlProps增加图例',
        href: 'Api6',
      },
      {
        title: 'configControlProps图例示例',
        href: 'Api7',
      }
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]
