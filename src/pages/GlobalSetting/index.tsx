import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { PageLayout } from '@/components'
import { useModel } from 'umi';
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

const Hook: React.FC<any> = ({children, ...props}) => {

  const { domeSy } = useModel('@@initialState', (ret) => ({
    domeSy: ret.initialState.domesy
  }))

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    getDetail()
    getAnchorList()
  }, []);

  const getDetail = () => {
    const { layoutSy, pageLayoutSy, fromSy, tableSy, maskSy, OssUpLoadSy, storageSy } = domeSy
    const result: DetailSettingListProps = {
      use: {
        title: '文件位置',
        id: 'file'
      },
      useList: [
        {
          render: '除了本身 config 里的设置外，其他部分可以再此设置~',
        },
        {
          render: '/src/utils/Setting',
          type: 'prv'
        }
      ],
      api: {
        id: 'Api',
        noRed: true
      },
      apiList: [
        {
          type: 'title',
          id: 'Api1',
          effect: 4,
          render: '布局 layoutSy'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'logo',
              desc: '设置logo',
              status: "React.ReactNode",
            },
            {
              name: 'footer',
              desc: '底部按钮，为true展示Footer组件',
              status: "boolean",
              default: JSON.stringify(layoutSy.footer),
            },
            {
              name: 'waterMark',
              desc: [
                '是否开启水印',
                'false关闭，string 设置内容，对象时，满足水印的参数'
              ],
              status: "false | string | WaterMarkProps",
              default: JSON.stringify(layoutSy.waterMark),
            },
            {
              name: 'rightContent',
              desc: [
                "导航页右侧设置，为false时不设置，为 breadcrumb 展开面包屑设置",
                '为 breadcrumb 展开面包屑设置',
                '其余支持原有的rightContentRender属性'
              ],
              status: " 'breadcrumb' | WithFalse<(props: any) => React.ReactNode> ",
              default: JSON.stringify(layoutSy.rightContent),
            },
            {
              name: 'HeaderClick',
              desc: '点击头部方法,为false时，默认点击后跳到首页',
              status: "( (e:any) => void ) | false;",
              default: JSON.stringify(layoutSy.HeaderClick),
            },
            {
              name: 'hiddenSearch',
              desc: '是否隐藏搜索按钮',
              status: "boolean",
              default: JSON.stringify(layoutSy.hiddenSearch),
            },
            {
              name: 'hiddenQuest',
              desc: '是否隐藏问题跳转',
              status: "boolean",
              default: JSON.stringify(layoutSy.hiddenQuest),
            },
          ]
        },
        {
          type: 'title',
          id: 'Api2',
          effect: 4,
          render: '页面配置 pageLayoutSy'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'cancelTitle',
              desc: '是否全局取消文字',
              status: "boolean",
              default: JSON.stringify(pageLayoutSy.cancelTitle),
            },
            {
              name: 'cancelBreadcrumb',
              desc: '是否全局取消面包屑',
              status: "boolean",
              default: JSON.stringify(pageLayoutSy.cancelBreadcrumb),
            },
            {
              name: 'ghost',
              desc: '是否全局影藏背景色',
              status: "boolean",
              default: JSON.stringify(pageLayoutSy.ghost),
            },
            {
              name: 'fixedHeader',
              desc: '是否全局固定表头',
              status: "boolean",
              default: JSON.stringify(pageLayoutSy.fixedHeader),
            },
          ]
        },
        {
          type: 'title',
          id: 'Api3',
          effect: 4,
          render: '动态表单 fromSy'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'submitText',
              desc: '提交按钮文字',
              status: "string",
              default: JSON.stringify(fromSy.submitText),
            },
            {
              name: 'resetText',
              desc: '重置按钮文字',
              status: "string",
              default: JSON.stringify(fromSy.resetText),
            },
            {
              name: 'backText',
              desc: '返回按钮文字',
              status: "string",
              default: JSON.stringify(fromSy.backText),
            },
            {
              name: 'layout.way',
              desc: ['配置文本的展现模式', '水平和垂直'],
              status: "'horizontal' | 'vertical'",
              default: JSON.stringify(fromSy.layout.way),
            },
            {
              name: 'layout.width',
              desc: '统一设置宽度',
              status: "number | string",
              default: JSON.stringify(fromSy.layout.width),
            },
            {
              name: 'formItemLayout',
              desc: ['表单的布局设置', '有标题的情况'],
              status: "formLayoutProps",
            },
            {
              name: 'formItemTailLayout',
              desc: ['表单的布局设置', '无标题的情况'],
              status: "formLayoutProps",
            },
            {
              name: 'formList.rule',
              desc: '正则规则',
              status: "RuleProps",
            },
            {
              name: 'formList.precision',
              desc: '步进器小数点的位数',
              status: "number | string",
              default: JSON.stringify(fromSy.formList.precision),
            },
            {
              name: 'allButtonStyle',
              desc: '表单所有的按钮所有控制样式',
              status: "React.CSSProperties",
              default: JSON.stringify(fromSy.allButtonStyle),
            },
            {
              name: 'button.submitStyle',
              desc: '提交按钮的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(fromSy.button.submitStyle),
            },
            {
              name: 'button.resetStyle',
              desc: '重置按钮的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(fromSy.button.resetStyle),
            },
            {
              name: 'button.backStyle',
              desc: '返回按钮的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(fromSy.button.backStyle),
            },
          ]
        },
        {
          type: 'title',
          id: 'Api4',
          effect: 4,
          render: '动态表格 tableSy'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'rowKey',
              desc: 'rowKey对应列表中的key，这里只设置string类型，可以统一设置',
              status: "string",
              default: JSON.stringify(tableSy.rowKey),
            },
            {
              name: 'search',
              desc: '搜索框整体配置',
              status: "SearchProps",
            },
            {
              name: 'pagination',
              desc: '分液器整体配置',
              status: "PaginationProps",
            },
            {
              name: 'options',
              desc: 'OptionProps | false',
              status: "工具栏的整体配置",
            },
            {
              name: 'tableList',
              desc: '设置columns全局属性',
              status: "TableListProps",
            },
            {
              name: 'tools',
              desc: '操作全局配置',
              status: "ToolsProps",
            },
            {
              name: 'toolBar',
              desc: '定义操作属性',
              status: "ToolBarProps",
            }
          ]
        },
        {
          type: 'title',
          id: 'Api4-1',
          effect: 4,
          render: '动态表格 tableSy 的 SearchProps'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'hidden',
              desc: '是否影藏搜索框, 如果这个设置为true则其余设置均无用',
              status: "boolean",
              default: JSON.stringify(tableSy.search.hidden),
            },
            {
              name: 'show',
              desc: '取消展开收起样式，默认取消',
              status: "boolean",
              default: JSON.stringify(tableSy.search.show),
            },
            {
              name: 'searchText',
              desc: '查询按钮文案',
              status: "string",
              default: JSON.stringify(tableSy.search.searchText),
            },
            {
              name: 'resetText',
              desc: '重置按钮文本',
              status: "string",
              default: JSON.stringify(tableSy.search.resetText),
            },
            {
              name: 'vertical',
              desc: '样式是否垂直 默认水平',
              status: "boolean",
              default: JSON.stringify(tableSy.search.vertical),
            },
            {
              name: 'options',
              desc: '搜索框配置样式',
              status: "SearchOptionsProps",
            },
            {
              name: 'options.export',
              desc: '导出',
              status: "exportProps",
            },
            {
              name: 'options.export.text',
              desc: '导出的文字',
              status: "string",
              default: JSON.stringify(tableSy.search.options.export.text),
            },
            {
              name: 'options.export.style',
              desc: '导出按钮的样式，受整体的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(tableSy.search.options.export.style),
            },
            {
              name: 'options.export.prefix',
              desc: '按钮的小修饰符',
              status: "React.ReactNode",
              default: "icon图标",
            },
            {
              name: 'searchStyle',
              desc: '搜索按钮集中管理样式',
              status: "React.CSSProperties",
              default: JSON.stringify(tableSy.search.searchStyle),
            },
            {
              name: 'resetStyle',
              desc: '重置按钮集中管理样式',
              status: "React.CSSProperties",
              default: JSON.stringify(tableSy.search.resetStyle),
            },
            {
              name: 'commonStyle',
              desc: '所有按钮集中管理样式',
              status: "React.CSSProperties",
              default: JSON.stringify(tableSy.search.commonStyle),
            },
            {
              name: 'searchPrefix',
              desc: '搜索按钮前置图标',
              status: "React.ReactNode",
              default: 'icon小图标',
            },
            {
              name: 'resetPrefix',
              desc: '重置按钮前置图标',
              status: "React.ReactNode",
              default: 'icon小图标',
            },
          ]
        },
        {
          type: 'title',
          id: 'Api4-2',
          effect: 4,
          render: '动态表格 tableSy 的 PaginationProps'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'hidden',
              desc: '是否隐藏分页器, 如果这个设置为true则其余设置均无用',
              status: "boolean",
              default: JSON.stringify(tableSy.pagination.hidden),
            },
            {
              name: 'pageSize',
              desc: '配置页数',
              status: "number",
              default: JSON.stringify(tableSy.pagination.pageSize),
            },
            {
              name: 'jump',
              desc: '是否增加跳转页数，如果总页数为一页时则不显示',
              status: "boolean",
              default: JSON.stringify(tableSy.pagination.jump),
            },
            {
              name: 'size',
              desc: '分页器的大小',
              status: "'small' | 'default'",
              default: JSON.stringify(tableSy.pagination.size),
            }
          ]
        },
        {
          type: 'title',
          id: 'Api4-3',
          effect: 4,
          render: '动态表格 tableSy 的 OptionProps'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'density',
              desc: '密度',
              status: "boolean",
              default: JSON.stringify(tableSy.options.density),
            },
            {
              name: 'fullScreen',
              desc: '全屏',
              status: "boolean",
              default: JSON.stringify(tableSy.options.fullScreen),
            },
            {
              name: 'setting',
              desc: '设置',
              status: "boolean",
              default: JSON.stringify(tableSy.options.setting),
            },
            {
              name: 'reload',
              desc: '刷新按钮',
              status: "boolean",
              default: JSON.stringify(tableSy.options.reload),
            }
          ]
        },
        {
          type: 'title',
          id: 'Api4-4',
          effect: 4,
          render: '动态表格 tableSy 的 tableList'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'rule',
              desc: '规则',
              status: "RuleProps",
            },
            {
              name: 'defaultInitShowTime',
              desc: [
                '默认时间选择器的时分秒的位置',
                '为false时，时分秒为当前时间'
              ],
              status: "RuleProps",
            },
            {
              name: 'defaultInitShowTime.showStartTime',
              desc: "默认开始时间，如 '00:00:00'",
              status: "string",
            },
            {
              name: 'defaultInitShowTime.showStartType',
              desc: "默认开始时间类型，如 'HH:mm:ss'",
              status: "string",
            },
            {
              name: 'defaultInitShowTime.showEndTime',
              desc: "默认结束时间，如 '23:59:59'",
              status: "string",
            },
            {
              name: 'defaultInitShowTime.showEndType',
              desc: "默认结束时间类型，如 'HH:mm:ss'",
              status: "string",
            },
          ]
        },
        {
          type: 'title',
          id: 'Api4-5',
          effect: 4,
          render: '动态表格 tableSy 的 ToolsProps'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'edit.text',
              desc: '编辑时的文件',
              status: "string",
              default: JSON.stringify(tableSy.tools.edit.text),
            },
            {
              name: 'edit.style',
              desc: '编辑时的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(tableSy.tools.edit.style),
            },
            {
              name: 'delete.text',
              desc: '删除时的文件',
              status: "string",
              default: JSON.stringify(tableSy.tools.delete.text),
            },
            {
              name: 'delete.style',
              desc: '删除时的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(tableSy.tools.delete.style),
            },
            {
              name: 'state.okText',
              desc: '状态确认时的文字',
              status: "string",
              default: JSON.stringify(tableSy.tools.state.okText),
            },
            {
              name: 'state.cancelText',
              desc: '状态取消时的文字',
              status: "string",
              default: JSON.stringify(tableSy.tools.state.cancelText),
            },
            {
              name: 'state.style',
              desc: '编辑时的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(tableSy.tools.state.style),
            },
          ]
        },
        {
          type: 'title',
          id: 'Api4-6',
          effect: 4,
          render: '动态表格 tableSy 的 ToolBarProps'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'create.text',
              desc: '新建按钮文字',
              status: "string",
              default: JSON.stringify(tableSy.toolBar.create.text),
            },
            {
              name: 'create.style',
              desc: '按钮文字的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(tableSy.toolBar.create.style),
            },
            {
              name: 'create.prefix',
              desc: '新建按钮前置图标',
              status: "React.ReactNode",
              default: 'icon小图标',
            },
            {
              name: 'commonStyle',
              desc: '统一按钮样式',
              status: "React.CSSProperties",
              default: JSON.stringify(tableSy.toolBar.commonStyle),
            },
          ]
        },
        {
          type: 'title',
          id: 'Api5',
          effect: 4,
          render: '动态表格 的 动态表格 正则 RuleProps'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'reTel',
              desc: '手机号',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.reTel),
            },
            {
              name: 'rePassword',
              desc: '密码',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.rePassword),
            },
            {
              name: 'reName',
              desc: '姓名',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.reName),
            },
            {
              name: 'reCard',
              desc: '银行卡',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.reCard),
            },
            {
              name: 'reSfz',
              desc: '身份证',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.reSfz),
            },
            {
              name: 'reEmil',
              desc: '邮箱',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.reEmil),
            },
            {
              name: 'reTelEmil',
              desc: '邮箱 + 电话',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.reTelEmil),
            },
            {
              name: 'reNumber',
              desc: '数字',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.reNumber),
            },
            {
              name: 'reNumberZero',
              desc: '非0数字',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.reNumberZero),
            },
            {
              name: 'reNumberFloat',
              desc: '数字加浮点数',
              status: "RegExp",
              default: JSON.stringify(fromSy.formList.rule.reNumberFloat),
            },
          ]
        },
        {
          type: 'title',
          id: 'Api6',
          effect: 4,
          render: 'OSS文件上传配置 OssUpLoadSy'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'open',
              desc: '是否开启OSS',
              status: "boolean",
              default: JSON.stringify(OssUpLoadSy.open),
            },
            {
              name: 'amount',
              desc: '限制张数',
              status: "number",
              default: JSON.stringify(OssUpLoadSy.amount),
            },
            {
              name: 'listType',
              desc: '样式类型',
              status: "'text' | 'picture' | 'picture-card'",
              default: JSON.stringify(OssUpLoadSy.listType),
            },
            {
              name: 'OssUrl',
              desc: 'OSS上传后统一的路径',
              status: "string",
              default: JSON.stringify(OssUpLoadSy.OssUrl),
            },
            {
              name: 'OSS',
              desc: 'OSS相关配置',
              status: "OSSProps",
            },
            {
              name: 'OSS.region',
              desc: 'OSS 的 region',
              status: "string",
              default: JSON.stringify(OssUpLoadSy.OSS.region),
            },
            {
              name: 'OSS.accessKeyId',
              desc: 'OSS 的 accessKeyId',
              status: "string",
              default: JSON.stringify(OssUpLoadSy.OSS.accessKeyId),
            },
            {
              name: 'OSS.accessKeySecret',
              desc: 'OSS的 accessKeySecret',
              status: "string",
              default: JSON.stringify(OssUpLoadSy.OSS.accessKeySecret),
            },
            {
              name: 'OSS.bucket',
              desc: 'OSS 的 bucket',
              status: "string",
              default: JSON.stringify(OssUpLoadSy.OSS.bucket),
            },
            {
              name: '_config.text',
              desc: '全局统一配置为上传时的文字字样',
              status: "string",
              default: JSON.stringify(OssUpLoadSy._config.text),
            },
            {
              name: 'crop',
              desc: '裁剪框的属性',
              status: "cropProps",
            },
            {
              name: 'crop.title',
              desc: '裁剪框的标题',
              status: "string",
              default: JSON.stringify(OssUpLoadSy.crop.title),
            },
            {
              name: 'crop.cropText',
              desc: '裁剪时的文字',
              status: "string",
              default: JSON.stringify(OssUpLoadSy.crop.cropText),
            },
            {
              name: 'crop.cancelText',
              desc: '取消时的文字',
              status: "string",
              default: JSON.stringify(OssUpLoadSy.crop.cancelText),
            },
            {
              name: 'crop.cropStyle',
              desc: '裁剪按钮的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(OssUpLoadSy.crop.cropStyle),
            },
            {
              name: 'crop.cancelStyle',
              desc: '取消按钮的样式',
              status: "React.CSSProperties",
              default: JSON.stringify(OssUpLoadSy.crop.cancelStyle),
            },
          ]
        },
        {
          type: 'title',
          id: 'Api7',
          effect: 4,
          render: '弹出表框配置 maskSy'
        },
        {
          type: 'table',
          tableList: [
            {
              name: 'maskFrom.submitText',
              desc: '确定按钮文字',
              status: "string",
              default: JSON.stringify(maskSy.maskFrom.submitText),
            },
            {
              name: 'maskFrom.cancelText',
              desc: '取消按钮文字',
              status: "string",
              default: JSON.stringify(maskSy.maskFrom.cancelText),
            },
            {
              name: 'maskFrom.resetText',
              desc: '重置按钮文字',
              status: "string",
              default: JSON.stringify(maskSy.maskFrom.resetText),
            },
            {
              name: 'maskFrom.message',
              desc: '成功时的文字',
              status: "string",
              default: JSON.stringify(maskSy.maskFrom.message),
            },
          ]
        }
      ],
    }
    setDetail(result)
  }

  const getAnchorList = () => {
    const result: AnchorLinkProps[] = [
      {
        title: '文件位置',
        href: 'file'
      },
      {
        title: 'Api',
        href: 'Api',
        children: [
          {
            title: 'layoutSy',
            href: 'Api1',
          },
          {
            title: 'pageLayoutSy',
            href: 'Api2',
          },
          {
            title: 'fromSy',
            href: 'Api3',
          },
          {
            title: 'tableSy',
            href: 'Api4',
            children: [
              {
                title: 'SearchProps',
                href: 'Api4-1'
              },
              {
                title: 'PaginationProps',
                href: 'Api4-2'
              },
              {
                title: 'OptionProps',
                href: 'Api4-3'
              },
              {
                title: 'tableList',
                href: 'Api4-4'
              },
              {
                title: 'ToolsProps',
                href: 'Api4-5'
              },
              {
                title: 'ToolBarProps',
                href: 'Api4-6'
              },
            ]
          },
          {
            title: 'RuleProps',
            href: 'Api5',
          },
          {
            title: 'OssUpLoadSy',
            href: 'Api6',
          },
          {
            title: 'maskSy',
            href: 'Api7',
          },
        ]
      },
    ]
    setAnchorList(result)
  }

  return (
    <PageLayout
      content='这是有关部分组件的全局Api，通过修改，从而更好的适配本身的项目~'
    >
      <DetailSetting anchorList={anchorList} {...detail} />
    </PageLayout>
  );
};

export default Hook;
