import type { Props } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

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

export const input:Props = {
  use: {
    title: '使用说明',
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

export const inputAnchorList:AnchorLinkProps[] = [
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
