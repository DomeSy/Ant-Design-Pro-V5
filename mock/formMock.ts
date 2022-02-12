import type { Props } from '../src/commonPages/DetailSetting'
import type { AnchorLinkProps } from '../src/components'
import { tableCommonList } from './data'

export const introduce:Props = {
  use: {
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: '所有的表单提交场景'
        },
        {
          render: '你只需要一个数组就可以自动生成你所需要的任意表单，内置多种表单格式包括'
        },
        {
          render: '他有点类似于 Schema Form - JSON 表单，希望通过一个数组（即 formList ）来构建出所需要的表单，主要通过 type 来区分，主要由 input, password, captcha, select, checkbox, radio, switch, textArea, rate, slider, field, digit, dependency 构成',
          strong: true
        },
        {
          render: '这里兼容原有组件的所有属性',
          red: true
        }
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '这里列举常见的Api，点击去官网',
    href: 'https://procomponents.ant.design/components/form',
  },
  apiList: [
    {
      render: '这里只是列举以封装功能的Api，并且支持原有 ProComponents 的所有属性，如果有其余属性，可参照官网的使用对齐增加',
      red: true
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'formList',
          desc: '表单配置，属性列表，所有的都通过此数组进行构建',
          status: 'formProps[]'
        },
        {
          name: 'footer',
          desc: '按钮是否显示在页脚',
          status: 'boolean',
          default: 'false'
        },
        {
          name: 'buttonConfig',
          desc: '按钮相关的配置',
          status: 'buttonConfigProps'
        },
        {
          name: 'layout',
          desc: '布局相关的属性',
          status: 'layoutProps'
        },
        {
          name: 'method',
          desc: [
            'none 模式： 没有底部按钮',
            'mask 模式： 弹框模式，抽屉模式，宽度变为100%，并且没有按钮',
          ],
          status: 'none | mask'
        },
        {
          name: 'initValues',
          desc: ['集中设置初始值，初始值对象 设置默认初始值', '属性名：formList的name字段 属性值：你想输入的默认字段（少部分field除外，需要在组件内自己写）'],
          status: 'Object'
        },
        {
          name: 'onValuesChange',
          desc: [
            '用于监听表单项的值，如果你想监听到那个值，就使用此方法，但值再变化，他会返回一个对象，属性值就是当前表单的name。',
            '用这个的好处，保持单向的数据流无论对开发者还是维护者都大有脾益'],
          status: '(changeValues) => voids'
        },
        {
          name: 'fieldValues',
          desc: '自定义函数的值，当使用自定义的时候，表单无法绑定对应的值，这个时候将值绑定需要用到这个数组，如果不需要，也可以自行通过ref获取',
          status: 'fieldValuesProps[]'
        },
        {
          name: '_config',
          desc: '表单的额外配置',
          status: 'configProps'
        },
      ]
    },
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
    {
      type: 'title',
      id: 'Api1',
      render: 'layoutProps 的参数',
      effect: 4
    },
    {
      render: 'formLayout 和 formTailLayout，居中显示，Modal中展示为例正常的Modal可容纳6个字符，也就是一个必填项加四个字和一个冒号，如果超过了四字，建议使用 vertical 垂直属性，或是将Modal宽度调大即可解决所有的 Options 均是可选的。',
      red: true
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'close',
          desc: '是否关闭所有布局样式，自动充满当前格',
          status: 'boolean',
          default: 'false'
        },
        {
          name: 'way',
          desc: '控制样本展示的方式 horizontal(水平) vertical(垂直)',
          status: 'horizontal | vertical',
          default: 'horizontal'
        },
        {
          name: 'formLayout',
          desc: [
            '栅格布局 与col类似,基础col的属性，将表格进行栅格布局，响应式布局等',
            '现在默认的居中，默认居中，有label字段，包含两个属性labelCol和wrapperCol'
          ],
          status: 'labelCol: colProps; wrapperCol: colProps;',
          global: true
        },
        {
          name: 'formTailLayout',
          desc: '与formLayout相同，但无label字段',
          status: 'labelCol: colProps; wrapperCol: colProps;',
          global: true
        },
      ]
    },
    {
      type: 'title',
      id: 'Api2',
      render: 'fieldValuesProps 属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'name',
          desc: '属性名，需要与自定义组件的 name 保持一致',
          status: "string",
        },
        {
          name: 'value',
          desc: '传入的value',
          status: "any",
        },
      ]
    },
    {
      type: 'title',
      id: 'Api3',
      render: 'buttonConfigProps 按钮属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'submitText',
          desc: '提交的按钮文字',
          status: "string",
          default: '提交'
        },
        {
          name: 'resetText',
          desc: '重置的按钮文字',
          status: "string",
          default: '重置'
        },
        {
          name: 'submitButton',
          desc: '提交按钮的属性',
          status: "ButtonProps",
        },
        {
          name: 'resetButton',
          desc: '提交按钮的属性',
          status: "ButtonProps",
        },
        {
          name: 'onSubmit',
          desc: '提交按钮事件',
          mark: '不建议使用',
          status: "() => void",
        },
        {
          name: 'onReset',
          desc: '重置按钮事件',
          mark: '不建议使用',
          status: "() => void",
        },
        {
          name: 'otherRender',
          desc: '在原有的重置和提交增加其他按钮，如返回上一步，可以加个上一步的按钮，需要自己根据需求设计样式',
          status: "() => void",
        },
        {
          name: 'position',
          desc: '自定义渲染按钮的位置',
          status: "left和 right",
          default: 'left'
        },
        {
          name: 'render',
          desc: '自定义按钮样式',
          mark: '此方法是重置的按钮,继承原有的ProForm中submitter中的render，返回原有的props和dome，一旦由此方法，buttonConfig的其他方法都无法使用',
          status: "() => React.ReactNode | React.ReactNode[]",
        },
      ]
    },
    ...tableCommonList,
    {
      type: 'title',
      id: 'Api6',
      render: 'type为input的私有属性',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'addonAfter',
          desc: [
            '前缀',
            '带个灰色的背景框'
          ],
          status: "React.ReactNode",
        },
        {
          name: 'addonBefore',
          desc: [
            '后缀',
            '带个灰色的背景框'
          ],
          status: "React.ReactNode",
        },
        {
          name: 'prefix',
          desc: '样式前缀',
          status: "React.ReactNode",
        },
        {
          name: 'suffix',
          desc: '样式后缀',
          status: "React.ReactNode",
        },
        {
          name: 'rulesRender',
          desc: '适用于原本的rules',
          status: 'Array<any>',
        },
        {
          name: 'rules',
          desc: '替换原有的规则，并设置更加简便的写法，协助快速开发',
          status: 'Array<RuleProps>',
        },
        {
          name: 'noRequired',
          desc: '在很少的情况下，不需要规则必填，但填必须按照规则去填,可以按此规则',
          status: 'boolean',
          default: 'false'
        }
      ]
    },
    {
      type: 'title',
      id: 'Api7',
      render: '规则的属性',
      effect: 5,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'message',
          desc: '验证失败时返回的字段，可单独设置，下面的字段统一的默认message',
          status: "string",
          default: 'placeholder字段'
        },
        {
          name: 'reMessage',
          desc: '有规则，但无必填字段，默认加入必填字段的message，取数组最后一个的reMessage',
          status: "string",
        },
        {
          name: 'required',
          desc: '判断是否有该字段',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'pattern',
          desc: '正则，为 true 则通过校验，否则不通过',
          status: "RegExp",
        },
        {
          name: 'min',
          desc: '限定最少几个字符，可与max配合使用',
          status: 'number',
        },
        {
          name: 'max',
          desc: '限定最多几个字符，可与mix配合使用',
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
            '简化开发设定常用的的值, 所设的正则yue utils/Regexp 的值有关',
            'name: 姓名',
            'tel: 电话',
            'password: 密码',
            'card: 银行卡号',
            'sfz: 身份证',
            'emil: 邮箱',
            'telEmil: 电话+邮箱',
            'number: 数字',
            '‘numberZero: 非零数字',
            'numberFloat: 数字加浮点数（后两位）',
          ],
          status: "'tel' | 'password' | 'name' | 'card' | 'sfz' | 'emil' | 'telEmil' | 'number' | 'numberZero' | 'numberFloat'",
        }
      ]
    },
    {
      type: 'title',
      id: 'Api8',
      render: 'type为password的私有属性',
      effect: 4,
      hrefTooltip: '去官网',
      href: 'https://procomponents.ant.design/components/field-set#proformtextpassword'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'addonAfter',
          desc: [
            '前缀',
            '带个灰色的背景框'
          ],
          status: "React.ReactNode",
        },
        {
          name: 'addonBefore',
          desc: [
            '后缀',
            '带个灰色的背景框'
          ],
          status: "React.ReactNode",
        },
        {
          name: 'prefix',
          desc: '样式前缀',
          status: "React.ReactNode",
        },
        {
          name: 'suffix',
          desc: '样式后缀',
          status: "React.ReactNode",
        },
        {
          name: 'rulesRender',
          desc: '适用于原本的rules',
          status: 'Array<any>',
        },
        {
          name: 'rules',
          desc: '替换原有的规则，并设置更加简便的写法，协助快速开发',
          status: 'Array<RuleProps>',
        },
        {
          name: 'noRequired',
          desc: '在很少的情况下，不需要规则必填，但填必须按照规则去填,可以按此规则',
          status: 'boolean',
          default: 'false'
        }
      ]
    },
    {
      type: 'title',
      id: 'Api9',
      render: 'type为captcha的私有属性',
      effect: 4,
      hrefTooltip: '去官网',
      href: 'https://procomponents.ant.design/components/field-set#proformcaptcha'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'getCaptcha',
          desc: '获取验证码的事件',
          status: "(phone) => void",
        },
        {
          name: 'captchaTextRender',
          desc: '渲染计时的文案',
          status: "React.(timing: boolean, count: number) => React.ReactNode",
        },
        {
          name: 'max',
          desc: '倒计时的秒数',
          status: "number",
          default: '60'
        },
        {
          name: 'captchaProps',
          desc: '获取验证码按钮的 props，与 antd 的 props 相同',
          status: "React.ReactNode",
        }
      ]
    },
    {
      type: 'title',
      id: 'Api10',
      render: 'type为select的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'enum',
          desc: '对象的属性传值，可自定义属性值属性名，没有对应的的格式',
          status: "Object",
        },
        {
          name: 'options',
          desc: '枚举数据请求，有固定格式： label 和 value',
          status: "string[] / Object<{label value}>",
        },
        {
          name: 'request',
          desc: '请求枚举数据，可加入接口，有固定格式： label 和 value',
          status: "()=>Promise<{[key:string|number]:any}>",
        },
        {
          name: 'multiple',
          desc: '是否多选',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'search',
          desc: '是否搜索',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'optionItemRender',
          desc: '自定义下拉框的文本样式，将当前的item作为参数',
          status: '(item) => string',
        },
      ]
    },
    {
      type: 'title',
      id: 'Api11',
      render: 'type为checkout的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'enum',
          desc: '对象的属性传值，可自定义属性值属性名，没有对应的的格式',
          status: "Object",
        },
        {
          name: 'options',
          desc: '枚举数据请求，有固定格式： label 和 value',
          status: "string[] / Object<{label value}>",
        },
        {
          name: 'request',
          desc: '请求枚举数据，可加入接口，有固定格式： label 和 value',
          status: "()=>Promise<{[key:string|number]:any}>",
        }
      ]
    },
    {
      type: 'title',
      id: 'Api12',
      render: 'type为radio的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'enum',
          desc: '对象的属性传值，可自定义属性值属性名，没有对应的的格式',
          status: "Object",
        },
        {
          name: 'options',
          desc: '枚举数据请求，有固定格式： label 和 value',
          status: "string[] / Object<{label value}>",
        },
        {
          name: 'request',
          desc: '请求枚举数据，可加入接口，有固定格式： label 和 value',
          status: "()=>Promise<{[key:string|number]:any}>",
        },
        {
          name: 'radioType',
          desc: '单选框的模式',
          status: "button | radio",
          default: 'radio'
        }
      ]
    },
    {
      type: 'title',
      id: 'Api13',
      render: 'type为switch的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'openText',
          desc: '开启是加载的文字或图标',
          status: "React.ReactNode",
        },
        {
          name: 'closeText',
          desc: '关闭是加载的文字或图标',
          status: "React.ReactNode",
        },
        {
          name: 'loading',
          desc: '是否加载',
          status: "boolean",
          default: 'false'
        }
      ]
    },
    {
      type: 'title',
      id: 'Api14',
      render: 'type为textArea的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'showCount',
          desc: '是否显示字数',
          status: "boolean",
          default: "false",
        },
        {
          name: 'max',
          desc: '限制最大字数',
          mark: '不需要加 showCount',
          status: "React.ReactNode",
        },
        {
          name: 'autoSize',
          desc: '自适应高度',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'rows',
          desc: '设置高度',
          status: "number",
        }
      ]
    },
    {
      type: 'title',
      id: 'Api15',
      render: 'type为rate的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'color',
          desc: '颜色',
          status: "string",
          default: "主题颜色",
        },
        {
          name: 'max',
          desc: '星星的个数',
          status: "number",
          default: '5'
        },
        {
          name: 'half',
          desc: '是否允许选择全心',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'tooltips',
          desc: '移动到每个星星上的提示语',
          mark: '数组的顺序对应星星顺序的提示语',
          status: "Array<string>",
        },
        {
          name: 'styleNode',
          desc: '自定义文字，图标，字母等',
          styleNode: "React.ReactNode | Function",
          default: '五角星'
        }
      ]
    },
    {
      type: 'title',
      id: 'Api16',
      render: 'type为slider的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'color',
          desc: '颜色',
          status: "string",
          default: "主题颜色",
        },
        {
          name: 'max',
          desc: '星星的个数',
          status: "number",
          default: '5'
        },
        {
          name: 'half',
          desc: '是否允许选择全心',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'tooltips',
          desc: '移动到每个星星上的提示语',
          mark: '数组的顺序对应星星顺序的提示语',
          status: "Array<string>",
        },
        {
          name: 'styleNode',
          desc: '自定义文字，图标，字母等',
          styleNode: "React.ReactNode | Function",
          default: '五角星'
        }
      ]
    },
    {
      type: 'title',
      id: 'Api17',
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
    {
      type: 'title',
      id: 'Api18',
      render: 'type为filed的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'fieldRender',
          desc: '自定义组件区域',
          status: "React.ReactNode | Function",
        },
      ]
    },
    {
      type: 'title',
      id: 'Api19',
      render: 'type为dependency的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'name',
          desc: '一个传字符串，多个传数组',
          mark: '必填',
          status: "string | string[]",
        },
        {
          name: 'itemRender',
          desc: [
            '自定义的函数，接收获取name的值',
            '返回一个的话，返回对象，返回多个的话，返回数组'
          ],
          mark: '必填，并且返回的是数组，格式就是 formProps[] 或者formProps',
          status: "(getArray: Object) => void",
        },
      ]
    },
  ],
  explain: {
    id: 'explain'
  },
  explainList: [
    {
      type: 'list',
      list: [
        {
          render: '封装 Ant Design Pro 的组件是因为一个项目中经常用的该组件，如果每个页面都要引入相同的组件，并且进行相同的配置，然后复制粘贴，会让代码非常冗余，不利于维护。',
          red: true
        },
        {
          render: '举个简单的例子，后台常用的 表格 分页如果要设置 5 条，那么多的表格 都要单独设置表格，后期如果将 5 跳 改为 10 条，那么我们每个页面都要找用到表格的位置，更改十分麻烦，也不易维护',
          red: true
        },
        {
          render: '所以为了更好处理，我们将在封装一层，让他更好的维护，之后只要改一个位置，就可以全量替换了',
          red: true
        }
      ]
    }
  ]
}

export const introduceAnchorList:AnchorLinkProps[] = [
  {
    title: '使用说明',
    href: 'use'
  },
  {
    title: '代码演示',
    href: 'Code',
    children: [
      {
        title: '统一默认值',
        href: 'code1'
      },
      {
        title: '布局样式',
        href: 'code2'
      },
      {
        title: '表单按钮',
        href: 'code3'
      },
      {
        title: '其他情况',
        href: 'code4'
      }
    ]
  },
  {
    title: 'Api',
    href: 'Api',
    children: [
      {
        title: 'ConfigProps',
        href: 'ApiConfig'
      },
      {
        title: 'layoutProps',
        href: 'Api1',
      },
      {
        title: 'fieldValuesProps',
        href: 'Api2'
      },
      {
        title: 'buttonConfigProps',
        href: 'Api3'
      },
      {
        title: 'fieldValuesProps',
        href: 'Api4'
      },
      {
        title: 'fieldValuesProps',
        href: 'Api5'
      },
      {
        title: 'formList（公共属性）',
        href: 'formListProps',
      },

    ]
  },
  {
    title: '心得体会',
    href: 'explain'
  }
]

export const input:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "input" (默认)',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormText`
        },
        {
          render: 'ProFormText 继承于 Ant Design 的 Input，所以也支持 Input 的属性，所以 Input 的原有属性在 fieldProps 这个属性中填写'
        },
        {
          render: '输入框是最基本的，基础属性同样适用于其他方式'
        }
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'input',
      render: 'type为input的私有属性',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'addonAfter',
          desc: [
            '前缀',
            '带个灰色的背景框'
          ],
          status: "React.ReactNode",
        },
        {
          name: 'addonBefore',
          desc: [
            '后缀',
            '带个灰色的背景框'
          ],
          status: "React.ReactNode",
        },
        {
          name: 'prefix',
          desc: '样式前缀',
          status: "React.ReactNode",
        },
        {
          name: 'suffix',
          desc: '样式后缀',
          status: "React.ReactNode",
        },
        {
          name: 'rulesRender',
          desc: '适用于原本的rules',
          status: 'Array<any>',
        },
        {
          name: 'rules',
          desc: '替换原有的规则，并设置更加简便的写法，协助快速开发',
          status: 'Array<RuleProps>',
        },
        {
          name: 'noRequired',
          desc: '在很少的情况下，不需要规则必填，但填必须按照规则去填,可以按此规则',
          status: 'boolean',
          default: 'false'
        }
      ]
    },
    {
      type: 'title',
      id: 'rules',
      render: '规则的属性',
      effect: 5,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'message',
          desc: '验证失败时返回的字段，可单独设置，下面的字段统一的默认message',
          status: "string",
          default: 'placeholder字段'
        },
        {
          name: 'reMessage',
          desc: '有规则，但无必填字段，默认加入必填字段的message，取数组最后一个的reMessage',
          status: "string",
        },
        {
          name: 'required',
          desc: '判断是否有该字段',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'pattern',
          desc: '正则，为 true 则通过校验，否则不通过',
          status: "RegExp",
        },
        {
          name: 'min',
          desc: '限定最少几个字符，可与max配合使用',
          status: 'number',
        },
        {
          name: 'max',
          desc: '限定最多几个字符，可与mix配合使用',
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
            '简化开发设定常用的的值, 所设的正则yue utils/Regexp 的值有关',
            'name: 姓名',
            'tel: 电话',
            'password: 密码',
            'card: 银行卡号',
            'sfz: 身份证',
            'emil: 邮箱',
            'telEmil: 电话+邮箱',
            'number: 数字',
            '‘numberZero: 非零数字',
            'numberFloat: 数字加浮点数（后两位）',
          ],
          status: "'tel' | 'password' | 'name' | 'card' | 'sfz' | 'emil' | 'telEmil' | 'number' | 'numberZero' | 'numberFloat'",
        }
      ]
    }
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
          render: `封装原有的 ProComponent 的 ProFormText，所以这些 Api 并不是最全面的，所以要是有其他的属性，可以参考官网 Api`,
          strong: true,
        },
        {
          render: 'input 是最基本的表单项，这里的封装并没有黑科技的东西，只是为了在项目上能更快，更方便，可维护性更好而进行封装',
          strong: true
        }
      ]
    },
  ]
}

export const inputAnchorList:AnchorLinkProps[] = [
  {
    title: '使用说明',
    href: 'use'
  },
  {
    title: '代码演示',
    href: 'Code',
    children: [
      {
        title: '基本使用',
        href: 'code1',
      },
      {
        title: '装饰',
        href: 'code2',
      },
      {
        title: '规则',
        href: 'code3',
      },
      {
        title: '其他',
        href: 'code4',
      }
    ]
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
        title: 'input',
        href: 'input属性',
        children: [
          {
            title: 'rules的属性',
            href: 'rules'
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

export const password:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "password/catch" ',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormText.Password 和 ProFormCaptcha`
        },
        {
          render: 'password 和 captcha 的属性与 input的值类似，这里不多介绍'
        }
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'passwordApi',
      render: 'type为password的私有属性',
      effect: 4,
      hrefTooltip: '去官网',
      href: 'https://procomponents.ant.design/components/field-set#proformtextpassword'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'addonAfter',
          desc: [
            '前缀',
            '带个灰色的背景框'
          ],
          status: "React.ReactNode",
        },
        {
          name: 'addonBefore',
          desc: [
            '后缀',
            '带个灰色的背景框'
          ],
          status: "React.ReactNode",
        },
        {
          name: 'prefix',
          desc: '样式前缀',
          status: "React.ReactNode",
        },
        {
          name: 'suffix',
          desc: '样式后缀',
          status: "React.ReactNode",
        },
        {
          name: 'rulesRender',
          desc: '适用于原本的rules',
          status: 'Array<any>',
        },
        {
          name: 'rules',
          desc: '替换原有的规则，并设置更加简便的写法，协助快速开发',
          status: 'Array<RuleProps>',
        },
        {
          name: 'noRequired',
          desc: '在很少的情况下，不需要规则必填，但填必须按照规则去填,可以按此规则',
          status: 'boolean',
          default: 'false'
        }
      ]
    },
    {
      type: 'title',
      id: 'captchaApi',
      render: 'type为captcha的私有属性',
      effect: 4,
      hrefTooltip: '去官网',
      href: 'https://procomponents.ant.design/components/field-set#proformcaptcha'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'getCaptcha',
          desc: '获取验证码的事件',
          status: "(phone) => void",
        },
        {
          name: 'captchaTextRender',
          desc: '渲染计时的文案',
          status: "React.(timing: boolean, count: number) => React.ReactNode",
        },
        {
          name: 'max',
          desc: '倒计时的秒数',
          status: "number",
          default: '60'
        },
        {
          name: 'captchaProps',
          desc: '获取验证码按钮的 props，与 antd 的 props 相同',
          status: "React.ReactNode",
        }
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
          render: `封装原有的 ProComponent 的 ProFormCaptcha、ProFormText.Password，所以这些 Api 并不是最全面的，所以要是有其他的属性，可以参考官网 Api`,
          strong: true
        },
        {
          render: 'password 密码框，captcha 验证码框，常用于登录，等权限模块',
          strong: true
        }
      ]
    },
  ]
}

export const passwordAnchorList:AnchorLinkProps[] = [
  {
    title: '使用说明',
    href: 'use'
  },
  {
    title: '代码演示',
    href: 'Code',
    children: [
      {
        title: 'password-基本使用',
        href: 'code1',
      },
      {
        title: 'catch-基本使用',
        href: 'code2',
      },
    ]
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
        title: 'password属性',
        href: 'passwordApi',
      },
      {
        title: 'captcha属性',
        href: 'captchaApi'
      }
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const date:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "date" ',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormDatePicker等`
        },
        {
          render: `通过 method 状态 'date'（默认） | 'time' | 'dateTime' | 'dateRange' | 'timeRange' | 'dateTimeRange';`
        },
        {
          render: '所有的限制可通过dateLimit来设置'
        },
        {
          render: '通过 methodAdd methodSubtract 选择方式， add， subtract来设置时间状态，type为特殊模式，可自由增加'
        },
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set#proformdatepicker',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'dateApi',
      render: 'type为date的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'method',
          desc: `选择器的方式  `,
          status: "'date' | 'time' | 'dateTime' | 'dateRange' | 'timeRange' | 'dateTimeRange'",
          default: 'date'
        },
        {
          name: 'ranges',
          desc: `预设状态（需要借助moment）`,
          status: "{ [key: any]: any }",
        },
        {
          name: 'dateLimit',
          desc: `设置限制的属性（下面全是DateLimitProps的属性）`,
          status: "DateLimitProps 属性",
        },
        {
          name: 'add',
          desc: `后几天`,
          status: "number",
        },
        {
          name: 'subtract',
          desc: `前几天`,
          status: "number",
        },
        {
          name: 'methodAdd',
          desc: `前几天的格式`,
          status: "'day' | 'month' | 'week' | 'year'",
        },
        {
          name: 'methodSubtract',
          desc: `后几天的格式`,
          status: "'day' | 'month' | 'week' | 'year'",
        },
        {
          name: 'type',
          desc: `特殊的类型（1为只能选择今天之后，2为今天之前，3位配合， start 和 end，为只选）`,
          status: "1 | 2 | 3",
        },
        {
          name: 'start',
          desc: `禁用的开始时间`,
          status: "string",
        },
        {
          name: 'end',
          desc: `禁用的结束时间`,
          status: "string",
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
          render: `封装原有的 ProComponent 的 ProFormDatePicker Api 并不是最全面的，所以要是有其他的属性，可以参考官网 Api`,
          strong: true
        },
        {
          render: '注意时间限制，可以自己预设值，更好的适配项目',
          strong: true
        }
      ]
    },
  ]
}

export const dateAnchorList:AnchorLinkProps[] = [
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
        title: 'date属性',
        href: 'dateApi',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const select:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "select" ',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormSelect`
        },
        {
          render: 'select 的值主要有四种写法，分别是：'
        },
        {
          render: 'options(string[]): 属性名和属性值都是这个字符串'
        },
        {
          render: 'options(Object[]): label 为属性名， value 为属性名'
        },
        {
          render: 'enum(Object): 对应选择框的值，展示属性值，值为属性名'
        },
        {
          render: 'request: 接收一个函数，可以自定义接口，返回的类型为 label 和 value'
        }
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set#proformselect',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'selectApi',
      render: 'type为select的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'enum',
          desc: '对象的属性传值，可自定义属性值属性名，没有对应的的格式',
          status: "Object",
        },
        {
          name: 'options',
          desc: '枚举数据请求，有固定格式： label 和 value',
          status: "string[] / Object<{label value}>",
        },
        {
          name: 'request',
          desc: '请求枚举数据，可加入接口，有固定格式： label 和 value',
          status: "()=>Promise<{[key:string|number]:any}>",
        },
        {
          name: 'multiple',
          desc: '是否多选',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'search',
          desc: '是否搜索',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'optionItemRender',
          desc: '自定义下拉框的文本样式，将当前的item作为参数',
          status: '(item) => string',
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
          render: `封装原有的 ProComponent 的 ProFormSelect，所以这些 Api 并不是最全面的，所以要是有其他的属性，可以参考官网 Api`,
          strong: true
        },
        {
          render: '四种写法中，request 的写法最为简便，方便直接从接口获取',
          strong: true
        }
      ]
    },
  ]
}

export const selectAnchorList:AnchorLinkProps[] = [
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
        title: 'select属性',
        href: 'selectApi',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const checkbox:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "checkbox"',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormCheckbox`
        },
        {
          render: 'checkout 的值主要有四种写法，分别是(与 select 一样)：'
        },
        {
          render: 'options(string[]): 属性名和属性值都是这个字符串'
        },
        {
          render: 'options(Object[]): label 为属性名， value 为属性名'
        },
        {
          render: 'enum(Object): 对应选择框的值，展示属性值，值为属性名'
        },
        {
          render: 'request: 接收一个函数，可以自定义接口，返回的类型为 label 和 value'
        }
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set#proformcheckbox',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'checkoutApi',
      render: 'type为checkout的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'enum',
          desc: '对象的属性传值，可自定义属性值属性名，没有对应的的格式',
          status: "Object",
        },
        {
          name: 'options',
          desc: '枚举数据请求，有固定格式： label 和 value',
          status: "string[] / Object<{label value}>",
        },
        {
          name: 'request',
          desc: '请求枚举数据，可加入接口，有固定格式： label 和 value',
          status: "()=>Promise<{[key:string|number]:any}>",
        }
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
          render: `封装原有的 ProComponent 的 ProFormCheckbox，所以这些 Api 并不是最全面的，所以要是有其他的属性，可以参考官网 Api`,
          strong: true
        },
        {
          render: '四种写法中，request 的写法最为简便，方便直接从接口获取',
          strong: true
        }
      ]
    },
  ]
}

export const checkboxAnchorList:AnchorLinkProps[] = [
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
        title: 'checkout属性',
        href: 'checkoutApi',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const radio:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "radio"',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormRadio.Group`
        },
        {
          render: 'radio 的值主要有四种写法，分别是(与 select 一样)：'
        },
        {
          render: 'options(string[]): 属性名和属性值都是这个字符串'
        },
        {
          render: 'options(Object[]): label 为属性名， value 为属性名'
        },
        {
          render: 'enum(Object): 对应选择框的值，展示属性值，值为属性名'
        },
        {
          render: 'request: 接收一个函数，可以自定义接口，返回的类型为 label 和 value'
        }
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set#proformradiogroup',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'radioApi',
      render: 'type为radio的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'enum',
          desc: '对象的属性传值，可自定义属性值属性名，没有对应的的格式',
          status: "Object",
        },
        {
          name: 'options',
          desc: '枚举数据请求，有固定格式： label 和 value',
          status: "string[] / Object<{label value}>",
        },
        {
          name: 'request',
          desc: '请求枚举数据，可加入接口，有固定格式： label 和 value',
          status: "()=>Promise<{[key:string|number]:any}>",
        },
        {
          name: 'radioType',
          desc: '单选框的模式',
          status: "button | radio",
          default: 'radio'
        }
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
          render: `封装原有的 ProComponent 的 ProFormRadio.Group，所以这些 Api 并不是最全面的，所以要是有其他的属性，可以参考官网 Api`,
          strong: true
        },
        {
          render: '四种写法中，request 的写法最为简便，方便直接从接口获取',
          strong: true
        }
      ]
    },
  ]
}

export const radioAnchorList:AnchorLinkProps[] = [
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
        title: 'radio属性',
        href: 'radioApi',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const switchMock:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "switch"',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormSwitch`
        },
        {
          render: 'switch 开关，可自由设置开启和关闭的样式'
        },
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set#proformswitch',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'switchApi',
      render: 'type为switch的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'openText',
          desc: '开启是加载的文字或图标',
          status: "React.ReactNode",
        },
        {
          name: 'closeText',
          desc: '关闭是加载的文字或图标',
          status: "React.ReactNode",
        },
        {
          name: 'loading',
          desc: '是否加载',
          status: "boolean",
          default: 'false'
        }
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
          render: `封装原有的 ProComponent 的 ProFormSwitch，所以这些 Api 并不是最全面的，所以要是有其他的属性，可以参考官网 Api`,
          strong: true
        }
      ]
    },
  ]
}

export const switchAnchorList:AnchorLinkProps[] = [
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
        title: 'switch属性',
        href: 'switchApi',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const textArea:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "textArea"',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormTextArea`
        },
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set#proformtextarea',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'textAreaApi',
      render: 'type为textArea的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'showCount',
          desc: '是否显示字数',
          status: "boolean",
          default: "false",
        },
        {
          name: 'max',
          desc: '限制最大字数',
          mark: '不需要加 showCount',
          status: "React.ReactNode",
        },
        {
          name: 'autoSize',
          desc: '自适应高度',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'rows',
          desc: '设置高度',
          status: "number",
        }
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
          render: `封装原有的 ProComponent 的 ProFormTextArea，所以这些 Api 并不是最全面的，所以要是有其他的属性，可以参考官网 Api`,
          strong: true
        }
      ]
    },
  ]
}

export const textAreaAnchorList:AnchorLinkProps[] = [
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
        title: 'textArea属性',
        href: 'textAreaApi',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const rate:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "rate"',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormRate`
        },
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set#proformrate',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'rateApi',
      render: 'type为rate的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'color',
          desc: '颜色',
          status: "string",
          default: "主题颜色",
        },
        {
          name: 'max',
          desc: '星星的个数',
          status: "number",
          default: '5'
        },
        {
          name: 'half',
          desc: '是否允许选择全心',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'tooltips',
          desc: '移动到每个星星上的提示语',
          mark: '数组的顺序对应星星顺序的提示语',
          status: "Array<string>",
        },
        {
          name: 'styleNode',
          desc: '自定义文字，图标，字母等',
          styleNode: "React.ReactNode | Function",
          default: '五角星'
        }
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
          render: `评价的自定义样式比较有趣`,
          strong: true
        }
      ]
    },
  ]
}

export const rateAnchorList:AnchorLinkProps[] = [
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
        title: 'rate属性',
        href: 'rateApi',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const slider:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "slider"',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormSlider`,
        },
        {
          render: `单向则返回出值，双向则为数组`,
        }
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set#proformslider',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'sliderApi',
      render: 'type为slider的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'color',
          desc: '颜色',
          status: "string",
          default: "主题颜色",
        },
        {
          name: 'max',
          desc: '星星的个数',
          status: "number",
          default: '5'
        },
        {
          name: 'half',
          desc: '是否允许选择全心',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'tooltips',
          desc: '移动到每个星星上的提示语',
          mark: '数组的顺序对应星星顺序的提示语',
          status: "Array<string>",
        },
        {
          name: 'styleNode',
          desc: '自定义文字，图标，字母等',
          styleNode: "React.ReactNode | Function",
          default: '五角星'
        }
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
          render: `评价的自定义样式比较有趣`,
          strong: true
        }
      ]
    },
  ]
}

export const sliderAnchorList:AnchorLinkProps[] = [
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
        title: 'slider属性',
        href: 'sliderApi',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const digit:Props = {
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

export const digitAnchorList:AnchorLinkProps[] = [
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

export const field:Props = {
  use: {
    title: '使用说明',
    tooltip: 'type: "field"',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `封装并继承于 ProFormField, 自定义的情况比较特殊，他有两种情况`,
        },
        {
          render: `第一种，当我们封装 Ant Design 组件，如 Cascader(级联选择), TreeSelect(树选择
            ), 它是可以自动获取到选择的值 `,
        },
        {
          render: '第二种，封装一些比较特殊的组件，表单获取不到值，如 OSSUpload，这是你需要使用 一些特殊的手段帮助 表单获取到值（本文以特殊组件获取值的问题来举例）'
        }
      ]
    },
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://procomponents.ant.design/components/field-set',
  },
  apiList: [
    ...tableCommonList,
    {
      type: 'title',
      id: 'filedApi',
      render: 'type为filed的私有属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'fieldRender',
          desc: '自定义组件区域',
          status: "React.ReactNode | Function",
        },
      ]
    },
    {
      type: 'title',
      id: 'fieldValuesApi',
      render: 'fieldValues 属性',
      effect: 4,
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'name',
          desc: '属性名，需要与自定义组件的 name 保持一致',
          status: "string",
        },
        {
          name: 'value',
          desc: '传入的value',
          status: "any",
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
          render: `自定义组件比较特殊，除了使用 initValue，同时也可以通 Ref 来进行对应的操作`,
          strong: true
        },
      ]
    },
  ]
}

export const fieldAnchorList:AnchorLinkProps[] = [
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
        title: 'filed属性',
        href: 'filedApi',
      },
      {
        title: 'fieldValues属性',
        href: 'fieldValuesApi'
      }
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]
