import React, { useState } from 'react';
import { Switch, Tooltip, Input, Button } from 'antd';
import { Table } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { InfoCircleOutlined } from '@ant-design/icons';

import { queryTable } from './services'
import './mock.less'

const searchInit = {
  show: false,
  layout: false,
  with: 100,
  span: 8
}
const paginationInit = {
  jump: false,
  size: true,
  pageSize: 10
}

const optionsInit = {
  reload: true,
  density: true,
  fullScreen: true,
  setting: true,
}

const TextShow: React.FC<{text: string, title: string}> = ({text='', title='', children}) => {
  return <div>{text} <Tooltip title={title}><InfoCircleOutlined /></Tooltip> : {children}</div>
}

const Mock: React.FC<any> = () => {
  const [ref, setRef] = useState<any>(false);
  const [flag, setFlag] = useState<boolean>(true)

  const [openSearch, setOpenSearch] = useState<boolean>(true)
  const [openPagination, setOpenPagination] = useState<boolean>(true)
  const [openOptions, setOpenOptions] = useState<boolean>(true)

  const [searchConfig, setSearchConfig] = useState<any>(searchInit)
  const [paginationConfig, setPaginationConfig] = useState<any>(paginationInit)
  const [optionsConfig, setOptionsConfig] = useState<any>(optionsInit)

  const columns: tableListProps[] = [
    {
      title: 'id',
      dataIndex: 'key',
      tip: '对应key',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '颜色',
      hideInSearch: true,
      render: (dome:any) => {
        return <p style={{ background: dome.color, width: 15, height: 15}}></p>
      }
    },
    {
      title: '时间',
      dataIndex: 'time',
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        0: { text: '仙去', status: 'Default' },
        1: { text: '活着', status: 'Processing'},
        2: { text: '开心', status: 'Success' },
        3: { text: '生病', status: 'Error' },
      },
    },
    // {
    //   title: '操作',
    //   dataIndex: 'option',
    //   valueType: 'option',
    //   type: 'tools',
    //   tools: [
    //     {
    //       method: 'edit',
    //       edit: {
    //         // go: '/list',   //跳转
    //         // payload: {text: '1'},
    //         onBeforeStart: (data:any) => {
    //           const list: formProps[] = [
    //             {
    //               name: 'test1',
    //               label: '编辑测试1'
    //             },
    //             {
    //               name: 'test2',
    //               default: data.callNo,
    //               label: '服务器调用次数'
    //             },
    //           ]
    //           // return '暂未配置' // 返回对应字符串
    //           return list // 返回列表
    //         },
    //         form: {
    //           layout: {
    //             way: 'vertical'
    //           },
    //         },
    //         maskFrom: {
    //           onRequest: queryTable
    //         },
    //         onEdit: (values: any, record: any) => {
    //           return {
    //             ...values,
    //             key: record.key
    //           };
    //         },
    //       }
    //     },
    //     {
    //       method: 'state',
    //       state: {
    //         onState: (value: any) => {
    //           return value.status === 1 ? true : false
    //         },
    //         onEdit: (value: any) => {
    //           return {
    //             open: { status: '0' },
    //             close: { status: '1' },
    //           }
    //         },
    //         onRequest: queryTable
    //       }
    //     },
    //     {
    //       method: 'delete',
    //       delete: {
    //         onEdit:(values: any) => {
    //           return {
    //             key: values.key
    //           };
    //         },
    //         onRequest: queryTable
    //       }
    //     },
    //     {
    //       fieldRender: (data:any) => {
    //         return <a>自定义获取{data.key}</a>
    //       }
    //     }
    //   ]
    // },
  ];

  return <>
    <div className="TableMockBasic">
      <div className="TableMockBasic-title">是否开启：</div>
      <div className="TableMockBasic-content">
        <TextShow text={'搜索'} title="search={false}" >
          <Switch checked={openSearch} onChange={(e) => {
            setFlag(false)
            setOpenSearch(e)
            setTimeout(() => {
              setFlag(true)
            }, 100)
          }}/>
        </TextShow>
        <TextShow text={'分页器'} title="pagination={false}" >
          <Switch checked={openPagination} onChange={(e) => setOpenPagination(e)}/>
        </TextShow>
        <TextShow text={'密度'} title="options={false}" >
          <Switch checked={openOptions} onChange={(e) => setOpenOptions(e)}/>
        </TextShow>
      </div>
      <div className="TableMockBasic-title">搜索配置 <Tooltip title="search下的属性，搜索时只有id有效"><InfoCircleOutlined /></Tooltip> ：</div>
      <div className="TableMockBasic-content">
        <TextShow text={'是否有展开'} title="show: true (这里的show是与全局配置相反的)" >
          <Switch checked={searchConfig.show} onChange={(e) => setSearchConfig({...searchConfig, show: e})}/>
        </TextShow>
        <TextShow text={'是否垂直'} title="layout: 'vertical' | 'horizontal'" >
          <Switch checked={searchConfig.layout} onChange={(e) => {
            setFlag(false)
            setSearchConfig({...searchConfig, layout: e})
            setTimeout(() => {
              setFlag(true)
            }, 100)
          }}/>
        </TextShow>
        <TextShow text={'宽度'} title="labelWidth (默认为100))" >
          <Input placeholder="请输入宽度"  defaultValue={100} onBlur={(e) => {
            setFlag(false)
            setSearchConfig({...searchConfig, width: e.target.value})
            setTimeout(() => {
              setFlag(true)
            }, 100)
          }}/>
        </TextShow>
        <TextShow text={'占格'} title="span (默认为8，与 响应式有关，区间为0~24))">
          <Input placeholder="请输入宽度"  defaultValue={8} onBlur={(e) => {
            setFlag(false)
            setSearchConfig({...searchConfig, span: Number(e.target.value)})
            setTimeout(() => {
              setFlag(true)
            }, 100)
          }}/>
        </TextShow>
      </div>
      <div className="TableMockBasic-title">页脚配置 <Tooltip title="pagination下的属性"><InfoCircleOutlined /></Tooltip> ：</div>
      <div className="TableMockBasic-content">
        <TextShow text={'是否有跳转'} title="showQuickJumper: true" >
          <Switch checked={paginationConfig.jump} onChange={(e) => setPaginationConfig({...paginationConfig, jump: e})}/>
        </TextShow>
        <TextShow text={'页脚尺寸'} title="size（默认：'small' ）" >
          <Switch checked={paginationConfig.size} onChange={(e) => setPaginationConfig({...paginationConfig, size: e})}/>
        </TextShow>
        <TextShow text={'数量'} title="pageSize (默认为10))" >
          <Input placeholder="请输入每页数量"  defaultValue={10} onBlur={(e) => {
            setPaginationConfig({...paginationConfig, pageSize: e.target.value})
          }}/>
        </TextShow>
      </div>
      <div className="TableMockBasic-title">配置栏 <Tooltip title="options下的属性"><InfoCircleOutlined /></Tooltip> ：</div>
      <div className="TableMockBasic-content">
        <TextShow text={'刷新'} title="reload: true" >
          <Switch checked={optionsConfig.reload} onChange={(e) => setOptionsConfig({...optionsConfig, reload: e})}/>
        </TextShow>
        <TextShow text={'密度'} title="density: true" >
          <Switch checked={optionsConfig.density} onChange={(e) => setOptionsConfig({...optionsConfig, density: e})}/>
        </TextShow>
        <TextShow text={'设置'} title="setting: true" >
          <Switch checked={optionsConfig.setting} onChange={(e) => setOptionsConfig({...optionsConfig, setting: e})}/>
        </TextShow>
        <TextShow text={'全屏'} title="fullScreen: true" >
          <Switch checked={optionsConfig.fullScreen} onChange={(e) => setOptionsConfig({...optionsConfig, fullScreen: e})}/>
        </TextShow>
      </div>
    </div>
    {
      flag && <Table
        headerTitle={'基础配置'}
        tooltip={'包括搜索栏，密度，页脚的设置'}
        search={openSearch ? {
          show: searchConfig.show,
          layout: searchConfig.layout ? 'vertical' : 'horizontal',
          labelWidth: searchConfig.width,
          span: searchConfig.span
        } : false}
        pagination={openPagination ? {
          showQuickJumper: paginationConfig.jump,
          size: paginationConfig.size ? 'small' : 'default',
          pageSize: paginationConfig.pageSize
        } : false}
        getRef={(ref) => setRef(ref)}
        options={openOptions ? {
          reload: optionsConfig.reload,
          density: optionsConfig.density,
          fullScreen: optionsConfig.fullScreen,
          setting: optionsConfig.setting,
        } : false}
        request={(params, sorter, filter) => queryTable({ ...params, sorter, filter })}
        tableList={columns}
        rowKey="key"
      />
    }
  </>
}

export const MockTool: React.FC<any> = () => {

  const columns: tableListProps[] = [
    {
      title: 'id',
      dataIndex: 'key',
      tip: '对应key',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      hideInSearch: true,
    },
    {
      title: '地址',
      dataIndex: 'address',
      hideInSearch: true,
    },
    {
      title: '颜色',
      hideInSearch: true,
      render: (dome:any) => {
        return <p style={{ background: dome.color, width: 15, height: 15}}></p>
      }
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      type: 'tools',
      tools: [
        {
          method: 'edit',
          edit: {
            // go: '/list',   //跳转
            // payload: {text: '1'},
            onBeforeStart: (data:any) => {
              const list: formProps[] = [
                {
                  name: 'test1',
                  default: data.name,
                  label: '姓名'
                },
                {
                  name: 'test2',
                  label: '随意字符串'
                },
              ]
              // return '暂未配置' // 返回对应字符串
              return list // 返回列表
            },
            form: {
              layout: {
                way: 'vertical'
              },
            },
            maskFrom: {
              onRequest: queryTable
            },
            onEdit: (values: any, record: any) => {
              return {
                ...values,
                key: record.key
              };
            },
          }
        },
        {
          method: 'state',
          state: {
            onState: (value: any) => {
              return value.status === 1 ? true : false
            },
            onEdit: (value: any) => {
              return {
                open: { status: '0' },
                close: { status: '1' },
              }
            },
            onRequest: queryTable
          }
        },
        {
          method: 'delete',
          delete: {
            onEdit:(values: any) => {
              return {
                key: values.key
              };
            },
            onRequest: queryTable
          }
        },
        {
          fieldRender: (data:any) => {
            return <a>自定义获取{data.key}</a>
          }
        }
      ]
    },
  ];

  return <Table
    headerTitle={'操作配置'}
    tooltip={'主要包括新增、删除、状态转化、编辑、导出、自定义功能'}
    request={(params, sorter, filter) => queryTable({ ...params, sorter, filter })}
    tableList={columns}
    search={{
      options: [
        {
          method: 'export',
          export: {
            onExportBefore: () => {
              const columns: tableListProps[] = [
                {
                  title: '组件',
                  dataIndex: 'name',
                },
                {
                  title: '组件',
                  dataIndex: 'component',
                },
                {
                  title: '描述',
                  dataIndex: 'desc',
                },
              ]
              const file =[
                { name: 'Form', component: '动态表单', desc: '帮助快速开发的工具'},
                { name: 'Table', component: '动态表格', desc: '对ProForm进行封装'},
                { name: 'PageLayout', component: '页面容器', desc: '对PageContainer进行封装'},
              ]
              const list = [
                {headers: columns, data: file, sheetName: '导出1'},
                {headers: columns, data: file, sheetName: '导出2'}
              ]
              return {
                title: '表单导出Excle',
                list
              }
            }
          }
        },

      ]
    }}
    toolBar={[
      {
        method: 'create',
        create: {
          formList: [
            {
              name: 'test1',
              label: 'MaskFrom111asdasd1'
            },
            {
              name: 'test2',
              label: 'MaskFrom3'
            },
          ],
          form: {
          },
          maskFrom: {
            onEdit:(values: any) => {
              return values;
            },
            onRequest: queryTable
          }
        }
      },
      {
        fieldRender: (action:any) => {
          return [<Button>测试</Button>]
        }
      }
    ]}
    rowKey="key"
  />
}

export default Mock
