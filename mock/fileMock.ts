import type { Props } from '../src/commonPages/DetailSetting'
import type { AnchorLinkProps } from '../src/components'

export const ossUpload:Props = {
  use: {
    title: 'OssUpLoad',
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
    href: 'https://ant-design.gitee.io/components/upload-cn/',
  },
  apiList: [
    {
      type: 'table',
      tableList: [
        {
          name: 'initFile',
          desc: [
            '默认文件',
            '可以只传入地址',
            '如果有其他属性可按 ant Design Upload 的模式传'
          ],
          status: "string[] | uploadFile[]",
        },
        {
          name: 'amount',
          desc: '数量，可设置上传的数量',
          status: "number",
          default: '1'
        },
        {
          name: 'getFiles',
          desc: [
            '获取文件，的方法，参数有两个',
            '数组：返回上传文件的数组',
            '状态：为 true 代表新增，为 false 代表删除'
          ],
          status: "(resultList: any[], flag?: boolean) => void",
        },
        {
          name: 'rules',
          desc: '判断规则不可传入时的条件',
          status: "rulesProps",
        },
        {
          name: 'OSS',
          global: true,
          desc: '是否开启OSS上传',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'listType',
          global: true,
          desc: [
            '上传的类型',
            'listType 为 picture-card 只能支持图片， 其他文件格式不支持',
            'listType为其他值时，出照片格式外，不应该预览'
          ],
          status: "text | picture | picture-card",
          default: 'false'
        },
        {
          name: 'crop',
          desc: '是否开启裁剪功能',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'cropConfig',
          desc: '裁剪功能的默认配置项',
          status: "cropConfigProps",
        },
        {
          name: 'button',
          desc: "当type 为 'text' ’picture' 继承button的属性，如果children不存在时",
          status: "ButtonProps(按钮属性)",
        },
        {
          name: 'children',
          desc: "当type 为 'text' ’picture' 可自定义样式",
          status: "React.ReactNode",
        },
        {
          name: '_config',
          desc: "额外配置选项",
          status: "ConfigProps",
        }
      ]
    },
    {
      type: 'title',
      id: 'Api1',
      effect: 4,
      render: 'rules 的 rulesProps 属性'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'type',
          desc: [
            '限制传输文件的类型',
            '当只有一个的时候直接输入即可，如 png',
            "当有多个限制传输的时候，以数组的形式传输，如：['png', 'jpeg']"
          ],
          status: "string | string[]",
        },
        {
          name: 'typeMsg',
          desc: '不符合文件类型的提示语',
          status: "string",
          default: '请上传正确的文件类型'
        },
        {
          name: 'size',
          desc: '文件的类型大小, 单位为M',
          status: 'number',
        },
        {
          name: 'sizeMsg',
          desc: '文件大小失效的提示语',
          status: "string",
          default: '上传文件大于${rules.size}M!请重新上传'
        },
      ]
    },
    {
      type: 'title',
      effect: 4,
      id: 'Api2',
      render: 'cropConfig 的 cropConfigProps 属性'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'title',
          desc: '弹出框的标题',
          status: "string",
          default: '图片裁剪',
          global: true
        },
        {
          name: 'cropText',
          desc: '裁剪按钮',
          status: "string",
          default: '裁剪',
          global: true
        },
        {
          name: 'cancelText',
          desc: '取消按钮',
          status: "string",
          default: '取消',
          global: true
        },
        {
          name: 'cropProps',
          desc: '裁剪按钮属性',
          status: "ButtonProps按钮属性",
        },
        {
          name: 'cancelProps',
          desc: '取消按钮',
          status: "ButtonProps按钮属性",
        },
        {
          name: 'cropStyle',
          desc: '裁剪按钮样式',
          status: "React.CSSProperties",
          global: true
        },
        {
          name: 'cancelStyle',
          desc: '取消按钮样式',
          status: "React.CSSProperties",
          global: true
        }
      ]
    },
    {
      type: 'title',
      effect: 4,
      id: 'Api3',
      render: '_config 的 ConfigProps 属性'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'noCheck',
          desc: '是否检测有同一张图片',
          status: "boolean",
          default: 'false'
        },
        {
          name: 'radio',
          desc: [
            '是否允许单选上传图片',
            '如果是一张则是单选，多张的话是允许多选'
          ],
          status: "boolean",
          default: 'false'
        },
        {
          name: 'text',
          global: true,
          desc: '	上传文字的字样',
          status: "Upload",
        },
        {
          name: 'uploadNode',
          desc: '自定义upload样式',
          status: "Function | React.ReactNode",
        },
        {
          name: 'ossUrl',
          desc: '上传完图片，统一前缀 ',
          status: "string",
          default: 'web/domesy/images/',
        },
        {
          name: 'ossText',
          desc: [
            '上传完图片，oss地址最后的后缀',
            '无论是否有这个属性，都会加上时间戳'
          ],
          status: "string",
        },
        {
          name: 'pictureCardTip',
          desc: 'listType为picture-card时上传其他模式时的提示语',
          status: "string",
          default: '请上传正确的图片类型！'
        },
      ]
    },
    {
      type: 'title',
      effect: 4,
      id: 'Api4',
      render: 'initFile 的 uploadFile 属性'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'name',
          desc: '文件名',
          status: "string",
        },
        {
          name: 'url',
          desc: '下载地址',
          status: "number",
        },
        {
          name: 'percent',
          desc: '	上传进度',
          status: "number",
        },
        {
          name: 'uid',
          desc: '唯一标识符，不设置时会自动生成',
          status: "number",
        },
        {
          name: 'status',
          desc: '上传状态，不同状态展示颜色也会有所不同',
          status: "error | success | done | uploading | removed",
        },
        {
          name: 'thumbUrl',
          desc: '缩略图地址',
          status: "string",
        },
      ]
    },
    {
      type: 'title',
      id: 'ApiGlobal',
      render: '全局配置属性'
    },
    {
      render: '当我们需要用到此组件，通常是更具项目需求来的，所以这时我们需要全局控制这些属性，方便开发，文件位置在 utils/Setting/OssUpLoadSy 这个文件设置',
      red: true
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'OSS.region',
          global: true,
          desc: '源地址（OSS相关配置）',
          status: "string",
        },
        {
          name: 'OSS.accessKeyId',
          global: true,
          desc: '接口验权时掉的，需要从阿里云官网控制台获取 (OSS相关配置)',
          status: "string",
        },
        {
          name: 'OSS.accessKeySecret',
          global: true,
          desc: '	接口验权时掉的，需要从阿里云官网控制台获取 (OSS相关配置)',
          status: "string",
        },
        {
          name: 'OSS.bucket',
          desc: '名称,具备唯一性(OSS相关配置)',
          global: true,
          status: "string",
        },
        {
          name: 'open',
          desc: '是否开启OSS模式',
          status: "boolean",
          global: true,
          default: 'false'
        },
        {
          name: 'listType',
          desc: '三种文件的格式，建议不要去改动',
          global: true,
          status: "'text' | 'picture' | 'picture-card'",
          default: 'picture-card'
        },
        {
          name: 'OssUrl',
          desc: 'Oss 后面的统一路径名',
          global: true,
          status: "string",
          default: 'picture-card'
        },
        {
          name: '_config.text',
          desc: '全局统一配置为上传时的文字字样',
          status: "string",
          global: true,
          default: '全局统一配置为上传时的文字字样'
        },
        {
          name: 'crop.title',
          desc: '弹出框标题',
          status: "string",
          global: true,
          default: '图片裁剪'
        },
        {
          name: 'crop.cropText',
          desc: '裁剪时的文字',
          status: "string",
          global: true,
          default: '裁剪'
        },
        {
          name: 'crop.cancelText',
          desc: '取消时的文字',
          status: "string",
          global: true,
          default: '取消'
        },
        {
          name: 'crop.cropStyle',
          desc: '裁剪按钮的样式',
          status: "React.CSSProperties",
          global: true,
        },
        {
          name: 'crop.cancelStyle',
          desc: '取消按钮的样式',
          status: "React.CSSProperties",
          global: true,
        },
      ]
    },
  ],
  explain: {
    id: 'explain',
    hrefTooltip: '封装不易，给个Star吧！',
    href: 'https://github.com/DomeSy/Ant-Design-Pro-V5/tree/master/src/components/OssUpLoad'
  },
  explainList: [
    {
      type: 'list',
      list: [
        {
          render: `OSSUpload 替换 Ant Design Pro 上的 ProFormUploadDragger ProFormUploadButton，主要原因是裁剪的原因，目前并未配置裁剪框的属性`,
          strong: true
        },
        {
          render: `OSSUpload 在表单中，需要的属性是自定义，使用上必须通过 getFiles 来获取文件，然后做想关的操作 `,
          strong: true
        }
      ]
    },
  ]
}

export const ossUploadAnchorList:AnchorLinkProps[] = [
  {
    title: 'OssUpLoad',
    href: 'use'
  },
  {
    title: '代码演示',
    href: 'Code',
    children: [
      {
        title: '基本使用',
        href: 'code1'
      },
      {
        title: '规则',
        href: 'code2'
      },
      {
        title: '裁剪',
        href: 'code3'
      },
      {
        title: '其他格式',
        href: 'code4'
      },
    ]
  },
  {
    title: 'OSSUpload 属性',
    href: 'Api',
    children: [
      {
        title: 'rulesProps',
        href: 'Api1',
      },
      {
        title: 'cropConfigProps',
        href: 'Api2',
      },
      {
        title: 'ConfigProps',
        href: 'Api3',
      },
      {
        title: 'uploadFile',
        href: 'Api4',
      },
      {
        title: '全局属性',
        href: 'ApiGlobal',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const darg:Props = {
  use: {
    title: 'Darg',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `此组件封装与 react-draggable-tags`,
        },
        {
          render: `当你使用拖拽功能时，如拖拽排序的时候可以用此组件`,
        },
      ]
    },
    {

    }
  ],
  api: {
    id: 'Api',
    hrefTooltip: '更多Api，去官网',
    href: 'https://ygyooo.github.io/react-draggable-tags',
  },
  apiList: [
    {
      type: 'table',
      tableList: [
        {
          name: 'list',
          desc: [
            '匹配的数据列表',
            '必须有一个字段用于区分',
          ],
          status: "Array<any>",
        },
        {
          name: 'id',
          desc: '列表需要唯一字段，用于匹配，默认',
          status: "string",
          default: 'id'
        },
        {
          name: 'render',
          desc: [
            '用以渲染子列表',
            'data，当行的数据',
            'index：索引'
          ],
          status: "(data:any, index:number) => React.ReactNode",
        },
        {
          name: 'onChange',
          desc: '改变后的数据',
          status: "(tags: Array<any>) => void",
        },
        {
          name: 'block',
          desc: '子元素是否是块状',
          status: "boolean",
          default: 'false'
        },
      ]
    },
  ]
}

export const maskFrom:Props = {
  use: {
    title: 'Mask.From',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `此组件是将 Modal 和 From 相结合，并适配 From 的所有功能，和 Modal 的所有属性`,
        },
        {
          render: `场景：在表单中的新建，编辑，如果内容不是很多，我们希望他在当前页面展示，所以 Mask.From 能很好的帮助我们实现`,
        },
        {
          render: '要特别注意 onRequest 和 onEdit 这两个Api，是这个组件的核心'
        }
      ]
    },
  ],
  api: {
    id: 'Api',
  },
  apiList: [
    {
      type: 'table',
      tableList: [
        {
          name: 'formList',
          desc: '动态表单的 formList',
          status: "formListProps[]",
          href: '/table/introduce'
        },
        {
          name: 'form',
          desc: '表单的其余属性',
          status: "formApi",
          href: '/table/introduce'
        },
        {
          name: 'submitText',
          desc: '提交按钮文字',
          global: true,
          status: "string",
          default: '提交'
        },
        {
          name: 'resetText',
          desc: '重置按钮文字',
          global: true,
          status: "string",
          default: '重置'
        },
        {
          name: 'cancelText',
          desc: '取消按钮文字',
          global: true,
          status: "string",
          default: '取消'
        },
        {
          name: 'message',
          desc: '提交成功的提示语',
          global: true,
          status: "string",
          default: '提交成功'
        },
        {
          name: 'onRequest',
          desc: '请求接口的函数',
          status: "any",
        },
        {
          name: 'onEdit',
          desc: [
            '接收表单的值',
            '如果存在则改变传递接口的参数，接收表单的值，返回对象',
            '注意如果返回的不是对象，则不会进行下步操作，只有返回对象才会走接口'
          ],
          status: "(values: Object) => void",
        },
        {
          name: 'onSubmit',
          desc: [
            '提交完成后的操作',
            '但如果使用，绑定的提交不会拥有loading效果，也就是没有防抖功能'
          ],
          status: "() => void",
        },
        {
          name: 'onCancel',
          desc: '取消时的回调函数',
          status: "() => void",
        }
      ]
    },
    {
      type: 'title',
      id: 'ApiGlobal',
      effect: 4,
      render: '全局配置属性（ maskSy ）'
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'type',
          desc: [
            '限制传输文件的类型',
            '当只有一个的时候直接输入即可，如 png',
            "当有多个限制传输的时候，以数组的形式传输，如：['png', 'jpeg']"
          ],
          status: "string | string[]",
        },
        {
          name: 'typeMsg',
          desc: '不符合文件类型的提示语',
          status: "string",
          default: '请上传正确的文件类型'
        },
        {
          name: 'size',
          desc: '文件的类型大小, 单位为M',
          status: 'number',
        },
        {
          name: 'sizeMsg',
          desc: '文件大小失效的提示语',
          status: "string",
          default: '上传文件大于${rules.size}M!请重新上传'
        },
      ]
    },
  ],
  explain: {
    id: 'explain',
    hrefTooltip: '封装不易，给个Star吧！',
    href: 'https://github.com/DomeSy/Ant-Design-Pro-V5/tree/master/src/components/Mask'
  },
  explainList: [
    {
      type: 'list',
      list: [
        {
          render: `当出现表单的情况时，希望能够适配于项目，集中管理样式，再结合接口进行相应的操作，这样可以节约大部分的开发时间，同时代码也会相当简洁，维护更加方便。`,
          strong: true
        }
      ]
    },
  ]
}

export const maskFromAnchorList:AnchorLinkProps[] = [
  {
    title: 'Mask.From',
    href: 'use'
  },
  {
    title: '代码演示',
    href: 'Code',
  },
  {
    title: 'OSSUpload 属性',
    href: 'Api',
    children: [
      {
        title: '全局属性(maskSy)',
        href: 'ApiGlobal',
      },
    ]
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]

export const excel:Props = {
  use: {
    title: 'Method.ExportExcel',
    id: 'use'
  },
  useList: [
    {
      type: 'list',
      list: [
        {
          render: `此方法是将 Table 的数据导出的组件，当数据量过小时推荐使用此方法`,
        },
        {
          render: `场景：表单数据需要导出时`,
        },
        {
          render: '通过 xlsx 组件导出 Table 数据'
        }
      ]
    },
  ],
  api: {
    id: 'Api',
  },
  apiList: [
    {
      type: 'table',
      tableList: [
        {
          name: 'sheets',
          desc: [
            '导出的数据',
            '当为字符串的时候，即是链接地址，直接通过下载即可',
            '为数组的时候要 Table 的数据'
          ],
          status: "exportProps[] | string",
        },
        {
          name: 'fileName',
          desc: '导出的文件名',
          status: "string",
          default: 'Excel文件'
        },
      ]
    },
    {
      type: 'title',
      render: 'exportProps 的参数',
      effect: 4
    },
    {
      type: 'table',
      tableList: [
        {
          name: 'headers',
          desc: '表头，对应 table 的 columns（tableList）',
          status: "Array<any>",
        },
        {
          name: 'data',
          desc: '导出表格的数据，即接口里的list',
          status: "Array<any>",
        },
        {
          name: 'sheetName',
          desc: '表单名，可设置多个表单的表单名',
          status: "string",
        },
      ]
    },
  ],
  explain: {
    id: 'explain',
    hrefTooltip: '封装不易，给个Star吧！',
    href: 'https://github.com/DomeSy/Ant-Design-Pro-V5/tree/master/src/utils/tools/ExportExcel.ts'
  },
  explainList: [
    {
      type: 'list',
      list: [
        {
          render: `这种方式适用于导出的数据量相对较小的情况下`,
          strong: true
        },
        {
          render: `另外，Excel 的导入也可以通过 xlsx 去做，但目前没有想到一个比较好的方法来适配Table的数据流，之后再说吧~~`,
          strong: true
        }
      ]
    },
  ]
}

export const excelAnchorList:AnchorLinkProps[] = [
  {
    title: 'Method.ExportExcel',
    href: 'use'
  },
  {
    title: '代码演示',
    href: 'Code',
  },
  {
    title: 'Method.ExportExcel 属性',
    href: 'Api',
  },
  {
    title: '心得体会',
    href: 'explain',
  }
]
