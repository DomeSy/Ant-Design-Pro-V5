import type { Props } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
import Mock from 'mockjs';

export const Data:any = () => {
  let data:any = []
  for(let i = 0; i < 10; i++){
    const mock = Mock.mock({
      'a|1-100': 100,
      'b|1-100': 100,
    })

    data = [...data, {
      ...mock,
      name: Mock.mock('@cname'),
      address: Mock.mock('@county(true)'),
      time: Mock.mock(`@date('yyyy-MM-dd')`),
    }]
  }
  return data
}

export const DualAxesData:any = () => {
  let data:any = []
  for(let i = 0; i < 10; i++){
    const mock = Mock.mock({
      'a|1-200': 100,
      'b|1-200': 100,
      'c|1-100': 100,
      'd|1-100': 100,
      'e|1-100': 100,
    })

    data = [...data, {
      ...mock,
      name: Mock.mock('@cname'),
      address: Mock.mock('@county(true)'),
      time: Mock.mock(`@date('yyyy-MM-dd')`),
    }]
  }
  return data
}

export const PieData:any = () => {
  const mock = Mock.mock({
    'a|1-200': 100,
    'b|1-200': 100,
    'c|1-100': 100,
    'd|1-100': 100,
    'e|1-100': 100,
  })
  return {
    ...mock,
    f: 0,
    name: Mock.mock('@cname'),
    address: Mock.mock('@county(true)'),
    time: Mock.mock(`@date('yyyy-MM-dd')`),
  }
}

export const PieData1:any = () => {
  let data:any = []
  for(let i = 0; i < 5; i++){
    const mock = Mock.mock({
      'a|1-200': 100,
    })

    data = [...data, {
      ...mock,
      name: Mock.mock('@cname'),
      address: Mock.mock('@county(true)'),
      time: Mock.mock(`@date('yyyy-MM-dd')`),
    }]
  }
  data = [...data, {
    a: 0,
    name: Mock.mock('@cname'),
    address: Mock.mock('@county(true)'),
    time: Mock.mock(`@date('yyyy-MM-dd')`),
  }]
  return data
}

export const Charts:Props = {
  use: {
    title: '开始学习',
    id: 'start'
  },
  useList: [
    {
      render: '在 Ant Design Pro 中，官方推荐使用 Ant Design Chart 这个 React 图表库，当然这个 也是基于 G2 的高交互可视化图形语法',
      strong: true
    },
    {
      render: '在这里，我将常用的图表进行封装成一个组件，并保持原有的属性，然后通过一个参数来控制：type'
    },
    {
      render: '共有 column（柱状图） line(折线图) dualAxes(双轴图) bar(条形图) area(面积图) pie(饼图) 六种图表'
    },
    {
      render: '干了什么',
      id: 'start1',
      type: 'title'
    },
    {
      render: '有人可能会问，在 G2 中结构已经非常简便了，为何还需要封装？'
    },
    {
      render: '是的，我也认为在原本的属性上已经封装的非常简便，没必要进行二次封装，同时，属性也确实非常多，我在这边写示例的时候只能列举一些常见的属性，那么封装的意义在于什么呢？ 最为主要的一点就是：数据源（data）',
      strong: true
    },
    {
      render: '我们先来看看 官网给的数据源是什么样的格式'
    },
    {
      render: `const data = [
        {
          name: '中国',
          value: '123',
          time: '2021'
        },
        {
          name: '美国',
          value: '69',
          time: '2021'
        },
        {
          name: '中国',
          value: '223',
          time: '2020'
        },
        {
          name: '美国',
          value: '73',
          time: '2020'
        },
        ...
      ]`,
      code: true
    },
    {
      render: '我们大概可以看出，所有的表格基本上分为三个参数 name, value, time(三个参数可以自由设置),以 time 为横轴， value为纵轴，name 为区分字段。'
    },
    {
      render: '乍一看，这个数据源非常简单，能够清楚的看到数据结构，似乎没什么问题。',
    },
    {
      render: '那么运用在实际的项目中，我们来看看后端提供的数据源是如何的',
    },
    {
      render: `const data = [
        {
          a: '123',
          b: '69',
          start: '2021'
        },
        {
          a: '223',
          b: '73',
          start: '2020'
        },
        ...
      ]`,
      code: true
    },
    {
      render: '我相信大部分接口都是这样提供数据的，所以我主要就是将这种数据源转化为 Ant Design Charts的数据源，并结合接口，让他自动转化，自动匹配字段，转化为上述的格式---这个是最主要的原因',
      strong: true
    },
    {
      render: '其次，遵循一个系统一种类型，统一更改，样式匹配，我们可以根据具体项目进行对应的封装',
      strong: true
    },
    {
      render: '注意事项',
      id: 'start2',
      type: 'title'
    },
    {
      render: '数据源提供两种方式，一共分为两种，第一种是直接将接口的值匹配给 data， 第二种则是 直接将接口放入onRequest,建议使用 onRequest',
    },
    {
      render: '主要注意下这两个参数 fields 和 payload',
    },
    {
      render: 'fields：返回接口匹配字段，用于实现 自定义匹配的功能',
      strong: true
    },
    {
      render: 'payload：接口参数，请求接口时所带的参数',
      strong: true
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '这里列举常见的Api，点击去官网',
    href: 'https://charts.ant.design/zh/examples/gallery',
  },
  apiList: [
    {
      type: 'table',
      tableList: [
        {
          name: 'type',
          desc: '图表的类型，共分：柱状图 折线图 双轴图 条形图 面积图 饼图 六种',
          status: "'column' | 'line' | 'dualAxes' | 'bar' | 'area' | 'pie'",
        },
        {
          name: 'data',
          desc: '数据源列表（与onRequest相对应）',
          status: 'Array<any>',
        },
        {
          name: 'xField',
          desc: '横坐标对应的值',
          status: 'string',
          global: true,
        },
        {
          name: 'fields',
          desc: [
            '匹配接口返回字段(根据接口返回的字段和展示的名称，形成键值对)',
            '数组的格式目前只支持饼图',
          ],
          status: "{ [key: string]: any } | [string, string]",
        },
        {
          name: 'fieldsLine',
          desc: [
            '匹配接口返回字段（双轴图的折线图）',
          ],
          status: "{ [key: string]: any }",
        },
        {
          name: 'payload',
          desc: '接口请求的数据，返回一个对象，将会作为 onRequest 的参数',
          status: ' () => {};',
        },
        {
          name: 'onRequest',
          desc: [
            '请求的接口，这里最好直接返回对应的格式，大多数为数组，环图为对象',
            '如果返回的不是，需要使用calcData 来处理下，让其返回对应的的格式'
          ],
          status: 'any',
        },
        {
          name: 'calcData',
          desc: '修改接口返回的值，目前来说返回的一个对象或者一个数组',
          status: '(result:any) => [] | {};',
        },
        {
          name: 'legend',
          desc: '配置图例',
          status: ' false | LegendProps',
        },
        {
          name: 'tooltip',
          desc: '提示语',
          status: '(Types.TooltipCfg & TooltipMapping)',
        },
        {
          name: 'label',
          desc: '文本标签',
          status: 'false | LabelProps',
          global: true
        },
        {
          name: 'colum',
          desc: '柱状图的所有参数（后续逐渐增加配置）',
          status: 'ColumProps',
          global: true
        },
        {
          name: 'line',
          desc: '折现图的所有参数（后续逐渐增加配置）',
          status: 'LineProps',
          global: true
        },
        {
          name: 'dualAxes',
          desc: '双轴图的所有参数（后续逐渐增加配置）',
          status: 'DualAxesProps',
          global: true
        },
        {
          name: 'bar',
          desc: '条形图的所有参数（后续逐渐增加配置）',
          status: 'BarProps',
          global: true
        },
        {
          name: 'area',
          desc: '面积图的所有参数（后续逐渐增加配置）',
          status: 'AreaProps',
          global: true
        },
        {
          name: 'pie',
          desc: '饼图的所有参数（后续逐渐增加配置）',
          status: 'PieProps',
          global: true
        },
      ]
    },
    {
      type: 'title',
      id: 'Api1',
      render: 'PieProps属性',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'ring',
          desc: '是否为环图， 默认 0.6',
          status: 'boolean',
        },
        {
          name: 'zero',
          desc: '去除含0的数据，可全局配置',
          status: "boolean",
        },
        {
          name: 'labelType',
          desc: '对应三种不同的文字',
          status: "'inner' | 'outer' | 'spider'",
        },
      ]
    },

  ],
}

export const ChartsAnchorList:AnchorLinkProps[] = [
  {
    title: '开始学习',
    href: 'start',
  },
  {
    title: '干了什么',
    href: 'start1',
  },
  {
    title: '注意事项',
    href: 'start2',
  },
  {
    title: 'Api',
    href: 'Api',
    children: [
      {
        title: 'PieProps属性',
        href: 'Api1',
      },
    ]
  }
]
