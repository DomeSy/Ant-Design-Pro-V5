import type { Props } from '../src/commonPages/DetailSetting'
import type { AnchorLinkProps } from '../src/components'
import Mock from 'mockjs';

export const table:Props = {
  use: {
    title: 'Table',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `此组件封装与 Ant Design 的 Upload 和 react-cropper`,
        },
        {
          render: `当你需要上传照片功能时，可以使用此组件`,
        },
        {
          render: 'OssUpload 具有的功能有：OSS上传，图片自定义裁剪，文件类型，文件大小，是否检测同一个文件的功能等'
        },
        {
          render: '如果开启 OSS 功能，返回的则直接是地址的数组，否则有一个文件对象，和Base64的地址',
          strong: true
        },
      ]
    },
    {

    }
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/form',
  },
  apiList: [
    {
      type: 'table',
      tableList: [
        {
          name: 'headerTitle',
          desc: '表格标题',
          status: "string",
        },
        {
          name: 'tooltip',
          desc: '表格标题提示语',
          status: "string",
        },
        {
          name: 'getRef',
          desc: '获取表格的ref',
          status: "(ref:any) => void",
        },
        {
          name: 'getFormRef',
          desc: '获取表单的ref',
          status: "(ref:any) => void",
        },
        {
          name: 'request',
          desc: [
            '获取 dataSource 的方法',
            'request 会接收一个对象。对象中必须要有 data 和 success，如果需要手动分页 total 也是必需的。request 会接管 loading 的设置，同时在查询表单查询和 params 参数发生修改时重新执行。同时 查询表单的值和 params 参数也会带入'
          ],
          status: "(params?: {pageSize,current},sort,filter) => {data,success,total}",
        },
        {
          name: 'tableList',
          desc: [
            '替换原有的 columns 属性，增加规则等额外属性',
            '如果 columns 属性存在，则会替换 tableList 属性'
          ],
          status: 'tableListProps[]'
        },
        {
          name: 'rowKey',
          desc: 'rowKey对应列表中的key,这个值其实就是列表的key，没有会报错，通常来说，后端返回列表的时候会有一个类似于key，id这样唯一的值做以区分，那么这个 rowKey 就是接口返回的key，id，因为通常而言这个key是一样的所以可以统一设置',
          global: true,
          status: 'string',
          default: 'key'
        },
        {
          name: 'search',
          desc: '搜索框的配置',
          status: 'searchProps',
        },
        {
          name: 'pagination',
          desc: '分页器的配置',
          status: 'paginationProps',
        },
        {
          name: 'options',
          desc: '配置栏属性',
          status: 'optionsProps',
        }
      ]
    },
    {
      type: 'title',
      id: 'Api1',
      effect: 4,
      render: 'tableList 的 tableListProps 属性'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'initialValue',
          desc: '初始值',
          status: "any",
        },
        {
          name: 'type',
          desc: [
            '不同的 type 对应不同的类型，目前设有 date 和 tool',
            '其中类型为 tool 的代表 编辑，删除，状态，和自定义',
          ],
          status: " date | tools",
        },
        {
          name: 'title',
          desc: '表格的标题',
          status: 'ReactNode',
        },
        {
          name: 'tooltip',
          desc: '提示语',
          status: 'string',
        },
        {
          name: 'ellipsis',
          desc: '是否自动缩略',
          status: 'boolean',
        },
        {
          name: 'copyable',
          desc: '是否支持复制',
          status: 'boolean',
        },
        {
          name: 'readonly',
          desc: '是否只读',
          status: 'boolean',
          default: 'false'
        },
        {
          name: 'hideInSearch',
          desc: '在搜索框内不查询',
          status: 'boolean',
        },
        {
          name: 'hideInTable',
          desc: '在 Table 中不展示此列',
          status: 'boolean',
        },
        {
          name: 'required',
          desc: '只有是否必填，加入必填',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'rules',
          desc: '设置规则，disabled设置为true，规则不生效，接收一个数组，按照原本的参数传递，并在此基础上做了些方便的功能，如果想使用原本参数的形式，可适用 rulesRender',
          status: 'Array',
        },
        {
          name: 'message',
          desc: '只必填时的消息提示',
          status: "string",
          default: '标题+为必填项'
        },
        {
          name: 'noRequired',
          desc: '在很少的情况下，不需要规则必填，但填必须按照规则去填,可以按此规则 ',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'method',
          desc: [
            '不同的 type 对应不同的 method',
            `type 为 date 是有 'dateTimeRange' | 'dateRange'`
          ],
          status: "'dateTimeRange' | 'dateRange'",
        },
        {
          name: 'config',
          desc: [
            '不同的 type 对应不同的 config',
            `依赖与 type 的类型`
          ],
          status: "ConfigProps",
        }
      ]
    },
    {
      type: 'title',
      id: 'Api11',
      effect: 4,
      render: 'tableListProps 属性下的 rules 属性'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'message',
          desc: '验证失败时返回的字段，可单独设置，下面的字段统一的默认message',
          status: "string",
        },
        {
          name: 'required',
          desc: '是否加入必填选项',
          status: "boolean",
        },
        {
          name: 'reMessage',
          desc: '有规则，但无必填字段，默认加入必填字段的message，多个时，取数组最后一个的reMessage',
          status: "string",
        },
        {
          name: 'pattern',
          desc: '正则，验证失败时会报错',
          status: 'RegExp',
        },
        {
          name: 'min',
          desc: [
            '限定最少几个字符',
            '可与max配合使用'
          ],
          status: 'number',
        },
        {
          name: 'max',
          desc: [
            '限定最多几个字符',
            '可与min配合使用'
          ],
          status: 'number',
        },
        {
          name: 'len',
          desc: '只限定几个字符能输入',
          status: 'number',
        },
        {
          name: 'method',
          desc: [
            '简化开发设定常用的的值',
            `'tel'：电话 'password'：密码 'name'：姓名 'card'：银行卡号 'sfz'：身份证 'emil'：邮箱 'telEmil'：电话+邮箱 'number': 数字 ‘numberZero': 非零数字 'numberFloat': 数字加浮点数（后两位）`
          ],
          status: 'boolean',
        },
      ]
    },
    {
      type: 'title',
      id: 'Api12',
      effect: 4,
      render: 'tableListProps 属性下的 type 为 date 字段'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'method',
          desc: [
            '区分日期的方式',
            'dateTimeRange 日期时分秒区间'
          ],
          status: "string",
        },
        {
          name: 'config',
          desc: '不同属性下 type 对应的 config 不同',
          mark: '下面的对应 date 的规则',
          status: "boolean",
        },
        {
          name: 'add',
          desc: '当前日期的后几天，包含当天',
          status: "number",
        },
        {
          name: 'subtract',
          desc: ['当前日期的前几天，包含当天，当method为天时', '如果只选择当天，可设置subtract为-1'],
          status: "number",
        },
        {
          name: 'range',
          desc: '限制选中时间段的范围',
          status: "number",
        },
        {
          name: 'methodAdd',
          desc: `间隔后的日期`,
          status: `'day' | 'week' | 'month' | 'year'`,
        },
        {
          name: 'methodSubtract',
          desc: '间隔前的日期',
          status: `'day' | 'week' | 'month' | 'year'`,
        },
        {
          name: 'methodRange',
          desc: '间隔前的日期',
          status: `'day' | 'week' | 'month' | 'year'`,
        },
        {
          name: 'defaultInitTime',
          desc: [
            '设置默认初始值',
            `可自定义默认的时间，此时格式为数组，但数组的格式需要以官方为例是以[moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')]格式传入`
          ],
          mark: '当 defaultInitTime 为对象时有以下参数',
          status: "false | Array | Object",
        },
        {
          name: 'showStartTime',
          desc: `开始的时间，如 '00:00:00'`,
          status: `string`,
        },
        {
          name: 'showEndTime',
          desc: `结束的时间，如 '23:59:59'`,
          status: `string`,
        },
        {
          name: 'showStartType',
          desc: `开始时间的类型`,
          status: `string`,
          default: 'HH:mm:ss'
        },
        {
          name: 'showEndType',
          desc: `结束时间的类型`,
          status: `string`,
          default: 'HH:mm:ss'
        },
      ]
    },
    {
      type: 'title',
      effect: 4,
      id: 'Api2',
      render: 'search 的 searchProps 属性'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'searchText',
          desc: '查询按钮文本',
          status: "string",
          default: '查询',
          global: true
        },
        {
          name: 'resetText',
          desc: '重置按钮',
          status: "string",
          default: '重置',
          global: true
        },
        {
          name: 'labelWidth',
          desc: '名称的宽度',
          mark: '刚好是4字加一个提示符号和冒号',
          status: "number",
          default: '100',
        },
        {
          name: 'layout',
          desc: '是否垂直',
          status: "'horizontal' | 'vertical'",
          default: 'horizontal',
        },
      ]
    },
    {
      type: 'title',
      effect: 4,
      id: 'Api3',
      render: 'pagination 的 paginationProps 属性'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'showQuickJumper',
          desc: '是否加入跳转元素',
          mark: '当数据只有一页时, 不显示',
          status: "boolean",
          global: true
        },
        {
          name: 'pageSize',
          desc: '每行页数',
          status: "number",
          default: '10',
          global: true
        },
        {
          name: 'size',
          desc: '分页器大小',
          status: "small | default",
          default: 'small',
        }
      ]
    },
    {
      type: 'title',
      effect: 4,
      id: 'Api4',
      render: 'options 的 optionsProps 属性'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'reload',
          desc: '刷新',
          status: "boolean",
          global: true
        },
        {
          name: 'density',
          desc: '密度',
          status: "boolean",
          global: true
        },
        {
          name: 'setting',
          desc: '列设置',
          status: "boolean",
          global: true
        },
        {
          name: 'fullScreen',
          desc: '全屏',
          status: "boolean",
          global: true
        },
      ]
    },
    {
      type: 'title',
      effect: 4,
      id: 'Api5',
      render: '额外配置：工具栏配置'
    },
    {
      type: 'title',
      effect: 5,
      id: 'Api6',
      render: 'tableListProps 属性下的 type 为 tools, tools下的属性  并且 method 为 edit(编辑)'
    },
    {
      render: '表格的编辑按钮，可跳转新的页面，也可在当前页面配合 Mask.From 实现编辑功能'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'go',
          desc: '跳转页面的路径',
          status: "string",
        },
        {
          name: 'payload',
          desc: '跳转页面所需的参数',
          status: "Object",
        },
        {
          name: 'maskFrom',
          desc: '对应 Mask.From 组件的全部属性，具体的请参照 Mask.From 的 APi',
          status: "Object",
        },
        {
          name: 'from',
          desc: '对应 From 组件的全部属性，具体的 From 的 APi',
          status: "Object",
        },
        {
          name: 'formList',
          desc: '对应 from 表单的 list 属性',
          status: "Object",
        },
        {
          name: 'onBefore',
          desc: '跳转之前执行其他的方式',
          status: "() => void",
        },
        {
          name: 'onBeforeFormList',
          desc: '通过次方法可以返回新的 formList，用于做一些复杂的表单生成',
          status: "any",
        },
        {
          name: 'onBeforeFiled',
          desc: [
            '接收当前列表的数据 编辑时的弹框对应自定义组件有些不同，原因是表单调取自定义实际上依靠的是fieldValues的值，但当表单调入传入的是当前行的值，也就是说当点击的那刻才能拿到值，并不是在函数一开始执行就能拿到对应的',
            '因此，用之前的方法显然不行，所以需要通过 onBeforeFiled 来单独设置 fieldValues 的值以便来设定自定义组件的值'
          ],
          status: "any",
        },
        {
          name: 'onBeforeStart',
          desc: [
            '接收当前列表的数据 当我们编辑的时候，需要依赖于这行数据，调取接口等操作，最终都在列表中进行操作，所以这个函数提供返回formList数组，用于替换原有的formList这个参数，接收这行数据的信息。',
            '另外 如果返回字符串，则会提示对应的字符串信息，除此之外，都无效'
          ],
          status: "any",
        },
        {
          name: 'onEdit',
          desc: [
            '此处的onEdit实际上就是 Mask.Form 中的onEdit，只不过在此基础上增加了第二个参数，当前行的信息',
            '跟onBeforeStart一样，在编辑的时候，有可能需要此行的信息',
            'maskForm 中的onEdit不在有用'
          ],
          status: "(values: Object, record: Object) => void;",
        },
        {
          name: 'style',
          desc: '对应此时的样式',
          status: "any",
        },
      ]
    },
    {
      type: 'title',
      effect: 5,
      id: 'Api7',
      render: 'tableListProps 属性下的 type 为 tools, tools下的属性 并且 method 为 state(状态改变)'
    },
    {
      render: '适用于两种状态的变化，以 启用 和 禁用 为例， 每行的状态只有这两个状态，以此更换'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'openText',
          desc: '启用时的文字',
          status: "string",
          global: true,
          default: '启用'
        },
        {
          name: 'closeText',
          desc: '禁止时的文字',
          status: "string",
          global: true,
          default: '禁止'
        },
        {
          name: 'title',
          desc: '提示框的提示语',
          status: "string",
          default: ' 你确定要禁用(closeText)/启用(openText)吗'
        },
        {
          name: 'okText',
          desc: '提示框的确定文字',
          status: "string",
          default: '确定'
        },
        {
          name: 'cancelText',
          desc: '删除上提示框的取消文字',
          status: "string",
          default: '取消'
        },
        {
          name: 'onState',
          desc: '接收当列的值，返回一个布尔值， 为true则代表启用状态，按钮为禁用，反之亦然',
          status: "(values: Object) => void",
        },
        {
          name: 'onEdit',
          desc: [
            '编辑，编辑前的操作',
            '返回一个对象，为 open 和 close 分别对应 启用时，和禁用的接口数据',
            '返回的字符串给出提示',
            '注：返回的对象作为onRequest的参数，否则没有任何操作'
          ],
          status: "(values: Object) => void",
        },
        {
          name: 'onSuccess',
          desc: '成功时的操作，第一个参数，返回成功结果，第二个参数返回布尔值，为true则是禁用， 为false为启用',
          status: "(data: any, flag: boolean) => void",
        },
        {
          name: 'onRequest',
          desc: '启用的接口',
          status: "any",
        },
        {
          name: 'onRequestClose',
          desc: '禁用的接口，如果没有，则走onRequest的方法',
          status: "any",
        },
        {
          name: 'style',
          desc: '对应此时的样式',
          status: "any",
        },
      ]
    },
    {
      type: 'title',
      effect: 5,
      id: 'Api8',
      render: 'tableListProps 属性下的 type 为 tools, tools下的属性 并且 method 为 delete(删除)'
    },
    {
      render: '删除整行的操作'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'text',
          desc: '按钮文字的字样',
          status: "string",
          global: true,
          default: '删除'
        },
        {
          name: 'okText',
          desc: '删除上提示框的确定文字',
          status: "string",
          global: true,
          default: '确定'
        },
        {
          name: 'cancelText',
          desc: '删除上提示框的取消文字',
          status: "string",
          default: '取消'
        },
        {
          name: 'message',
          desc: '删除成功后的提示语句',
          status: "string",
        },
        {
          name: 'title',
          desc: '删除提示框的提示语',
          status: "string",
          default: '你确定要删除吗'
        },
        {
          name: 'onEdit',
          desc: [
            '删除，删除前的操作',
            '请求接口上的操作，返回 字符串，会提示错误',
            '返回对象，会将返回值提供给onRequest作为请求参数',
            '其他格式不做任何处理'
          ],
          status: "(values: Object) => void",
        },
        {
          name: 'onSuccess',
          desc: '删除成功进行的操作，（同步，执行完后会刷新列表）',
          status: "(data: any) => void",
        },
        {
          name: 'onRequest',
          desc: '启用的接口',
          status: "any",
        },

        {
          name: 'style',
          desc: '对应此时的样式',
          status: "any",
        },
      ]
    },
    {
      type: 'title',
      effect: 5,
      id: 'Api9',
      render: 'toolBar 下的 create属性，method 为 create'
    },
    {
      render: '用于表格新建，可跳转新的页面，也可在当前页面配合 Mask.From 实现编辑功能'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'go',
          desc: '跳转页面的路径',
          status: "string",
        },
        {
          name: 'payload',
          desc: '跳转页面所需的参数',
          status: "Object",
        },
        {
          name: 'prefix',
          desc: ['前置图标', '不显示返回false即可'],
          status: "Object",
        },
        {
          name: 'maskFrom',
          desc: '对应 Mask.From 组件的全部属性，具体的请参照 Mask.From 的 APi',
          status: "Object",
        },
        {
          name: 'from',
          desc: '对应 From 组件的全部属性，具体的 From 的 APi',
          status: "Object",
        },
        {
          name: 'formList',
          desc: '对应 from 表单的 list 属性',
          status: "Object",
        },
        {
          name: 'onBefore',
          desc: '跳转之前执行其他的方式',
          status: "() => void",
        },
        {
          name: 'onBeforeFormList',
          desc: '通过次方法可以返回新的 formList，用于做一些复杂的表单生成',
          status: "any",
        }
      ]
    },
    {
      type: 'title',
      effect: 5,
      id: 'Api10',
      render: 'search 下的 options 属性，method 为 export'
    },
    {
      render: '导出的相关配置'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'text',
          desc: '对应的文字',
          status: "string",
          default: '导出',
          global: true
        },
        {
          name: 'message',
          desc: '导出成功对应的提示',
          status: "Object",
        },
        {
          name: 'button',
          desc: '按钮的相关配置',
          status: "ButtonProps",
        },
        {
          name: 'prefix',
          desc: '前置图标',
          status: "React.ReactNode",
          global: true
        },
        {
          name: 'onExportBefore',
          desc: '导出之前的方法（接收两个原有optionRender参数），返回需要满足 Method.ExportExcel的参数要求',
          status: "(searchConfig: any, formProps: any) => void",
        },
        {
          name: 'onExportAfter',
          desc: '导出之后的方法',
          status: " () => void;",
        },
        {
          name: 'style',
          desc: '对应的样式',
          status: "React.CSSProperties",
        },
      ]
    }
  ],
  explain: {
    id: 'explain',
    hrefTooltip: '封装不易，给个Star吧！',
    href: 'https://github.com/DomeSy/Ant-Design-Pro-V5/tree/master/src/components/Table'
  },
  explainList: [
    {
      type: 'list',
      list: [
        {
          render: `Table 在原有的 ProTable中做了些对应的配置，就目前而言，还有很多配置没有配置，以后会陆续增加简洁的配置`,
          strong: true
        },
        {
          render: `主要的是由工具类，对新建、编辑、状态、删除、导出及自定义做了些优化，如搜索栏的按钮都是重新通过自定义写的，加入对应的小图片，使界面更加美化一定，可以根据自己项目的需求作出一些调整`,
          strong: true
        }
      ]
    },
  ]
}

export const tableAnchorList:AnchorLinkProps[] = [
  {
    title: 'Table',
    href: 'use'
  },
  {
    title: '代码演示',
    href: 'Code',
    children: [
      {
        title: '基础配置',
        href: 'code1'
      },
      {
        title: '操作配置',
        href: 'code2'
      }
    ]
  },
  {
    title: 'Table 属性',
    href: 'Api',
    children: [
      {
        title: 'tableListProps',
        href: 'Api1',
        children: [
          {
            title: ' rules',
            href: 'Api11',
          },
          {
            title: ' date',
            href: 'Api12',
          }
        ]
      },
      {
        title: 'searchProps',
        href: 'Api2',
      },
      {
        title: 'paginationProps',
        href: 'Api3',
      },
      {
        title: 'optionsProps',
        href: 'Api4',
      },
      {
        title: '工具栏配置',
        href: 'Api5',
        children: [
          {
            title: 'edit(编辑)',
            href: 'Api6',
          },
          {
            title: 'state(状态)',
            href: 'Api7',
          },
          {
            title: 'delete(删除)',
            href: 'Api8',
          },
          {
            title: 'create(新建)',
            href: 'Api9',
          },
          {
            title: 'export(导出)',
            href: 'Api10',
          }
        ]
      }
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const tableList:any = () => {
  let data:any = []
  for(let i = 0; i < 100; i++){
    data = [...data, {
      key: i + 1,
      name: Mock.mock('@cname'),
      title: Mock.mock('@ctitle(3, 7)'),
      address: Mock.mock('@county(true)'),
      color: Mock.mock('@color'),
      email: Mock.mock('@email'),
      time: Mock.mock(`@date('yyyy-MM-dd')`),
      status: (i + 1) % 5 === 0 ? 0 : (i + 1) % 5 === 1 ? 1 : (i + 1) % 5 === 2 ? 3 : 2
    }]
  }

  return {
    data,
    total: 100
  }
}
