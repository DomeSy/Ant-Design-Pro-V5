import type { Props } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
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
        }
      ]
    },
    {
      type: 'title',
      effect: 4,
      id: 'useWay',
      render: '使用方式'
    },
    {
      type: 'prv',
      render: `
import { useRequest } from 'umi';
const { data, error, loading, run, params, cancel } = useRequest(service, payload)
      `
    },
    {
      type: 'list',
      list: [
        {
          render: '主要的有 data(返回的结果), error(抛出的异常), loading(是否执行完毕), run(手动执行), params(请求的参数) cancel(取消执行)'
        },
        {
          render: 'service有多种写法，这里演示比较常用的三种',
          tooltip: '这里只做常用的，没有像官网全面',
        },
        {
          code: true,
          render: `useRequest('/api/userInfo')`,
          tooltip: '只传入字符串，默认不带参数，请求为get'
        },
        {
          code: true,
          render: `useRequest({ url: '请求地址', method: '请求模式（默认get）', data: '请求参数' })`,
        },
        {
          code: true,
          render: "useRequest((userId)=> `/api/userInfo/${userId}}`)",
        }
      ]
    }
  ],
  attention: {
    id: 'attention',
    children: [
      {
        render: 'useRequest 请求他会走统一的请求拦截和响应拦截，所以返回的格式需要统一，可以在响应拦截里统一设置所需要的规范',
        red: true
      },
      {
        render: 'useRequest 功能非常强大，能实现99%的请求，这里只是介绍最常用的几种方式',
        tooltip: '更加详细请去官网查看使用',
        red: true
      },
    ]
  },
  api: {
    id: 'Api',
    hrefTooltip: '这里列举常见的Api，点击去官网',
    href: 'https://hooks.umijs.org/zh-CN/hooks/async#%E9%9B%86%E6%88%90%E8%AF%B7%E6%B1%82%E5%BA%93',
  },
  apiList: [
    {
      type: 'title',
      id: 'Result',
      render: 'Result',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'data',
          desc: [
            'service 返回的数据，默认为 undefined',
            '如果有 formatResult, 则该数据为被格式化后的数据。'
          ],
          status: 'undefined / any'
        },
        {
          name: 'error',
          desc: 'service 抛出的异常，默认为 undefined',
          status: 'undefined / Error'
        },
        {
          name: 'loading',
          desc: 'service 是否正在执行',
          status: 'boolean'
        },
        {
          name: 'run',
          desc: [
            '手动触发 service 执行，参数会传递给 service',
            'debounce 模式与 throttle 模式返回值为 Promise<null>'
          ],
          status: '(...args: any[]) => Promise'
        },
        {
          name: 'params',
          desc: '当次执行的 service 的参数数组。比如你触发了 run(1, 2, 3)，则 params 等于 [1, 2, 3]',
          status: 'any[]'
        },
        {
          name: 'cancel',
          desc: [
            '取消当前请求',
            '如果有轮询，停止'
          ],
          status: '() => void'
        }
      ]
    },
    {
      type: 'title',
      id: 'Params',
      render: 'Params',
      effect: 4
    },
    {
      render: '所有的 Options 均是可选的。',
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'manual',
          desc: [
            '默认 false。 即在初始化时自动执行 service。',
            '如果设置为 true，则需要手动调用 run 触发执行。'
          ],
          status: 'boolean',
          default: 'false'
        },
        {
          name: 'initialData',
          desc: '默认的 data',
          status: 'any',
        },
        {
          name: 'onSuccess',
          desc: [
            'service resolve 时触发，参数为 data 和 params',
            '如果有 formatResult ，则 data 为格式化后数据。'
          ],
          status: '(data: any, params: any[]) => void',
        },
        {
          name: 'onError',
          desc: 'service 报错时触发，参数为 error 和 params。',
          status: '(error: Error, params: any[]) => void',
        },
        {
          name: 'cacheKey',
          desc: [
            '请求唯一标识。如果设置了 cacheKey，我们会启用缓存机制',
            '我们会缓存每次请求的 data , error , params , loading',
            '在缓存机制下，同样的请求我们会先返回缓存中的数据，同时会在背后发送新的请求，待新数据返回后，重新触发数据更新'
          ],
          status: 'string',
        },
        {
          name: 'defaultParams',
          desc: '轮询间隔，单位为毫秒。设置后，将进入轮询模式，定时触发 run',
          status: 'number',
        },
        {
          name: 'pollingWhenHidden',
          desc: [
            '在页面隐藏时，是否继续轮询。默认为 true，即不会停止轮询',
            '如果设置为 false , 在页面隐藏时会暂时停止轮询，页面重新显示时继续上次轮询'
          ],
          status: '(error: Error, params: any[]) => void',
        },
        {
          name: 'debounceInterval',
          desc: '防抖间隔, 单位为毫秒，设置后，请求进入防抖模式。',
          status: 'number',
        },
        {
          name: 'throttleInterval',
          desc: '节流间隔, 单位为毫秒，设置后，请求进入节流模式。',
          status: 'number',
        },
      ]
    }
  ],
}

export const introduceAnchorList:AnchorLinkProps[] = [
  {
    title: '使用说明',
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
    tooltip: 'type: "select" ',
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
