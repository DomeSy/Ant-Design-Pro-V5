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
          name: 'method',
          desc: 'type下的分类',
          status: "string",
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
          name: 'title',
          desc: '表格的标题',
          status: 'ReactNode',
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
          desc: '名称的宽度（刚好是4字加一个提示符号和冒号）',
          status: "number",
          default: '100',
        },
        {
          name: 'layout',
          desc: '是否垂直',
          status: "'horizontal' | 'vertical'",
          default: 'horizontal',
        },
        {
          name: 'resetText',
          desc: '重置按钮',
          status: "string",
          default: '重置',
          global: true
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
