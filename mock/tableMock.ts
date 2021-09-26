import type { Props } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
import { tableCommonList } from './data'
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

export const tableAnchorList:AnchorLinkProps[] = [
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

export const tableList:any = () => {
  const list = [
    {
      key: 0,
      name: 'Domesy',
      tel: 1796369321,
      address: 'asdasd1',
    }
  ]
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
