import React, { useState } from 'react';
import { message, Switch } from 'antd';
import { Table } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { InfoCircleOutlined } from '@ant-design/icons';

import { queryTable } from './services'
import './mock.less'

const Mock: React.FC<any> = () => {
  const [ref, setRef] = useState<any>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(true)
  const [openPagination, setOpenPagination] = useState<boolean>(true)
  const [openOptions, setOpenOptions] = useState<boolean>(true)

  const columns: tableListProps[] = [
    {
      title: 'id',
      dataIndex: 'key',
      tip: '对应key',
    },
    {
      title: '姓名',
      hideInSearch: true,
      dataIndex: 'name',
    },
    {
      title: '地址',
      hideInSearch: true,
      dataIndex: 'address',
    },
    {
      title: '颜色',
      dataIndex: 'color',
      hideInSearch: true,
      render: (dome:any) => {
        return <p style={{ background: dome, width: 15, height: 15}}></p>
      }
    },
    {
      title: '时间',
      dataIndex: 'time',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing'},
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
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
        <p>搜索<InfoCircleOutlined />：<Switch checked={openSearch} onChange={(e) => setOpenSearch(e)}/></p>
        <p>分页器： <Switch checked={openPagination} onChange={(e) => setOpenPagination(e)}/></p>
        <p>密度： <Switch checked={openOptions} onChange={(e) => setOpenOptions(e)}/></p>
      </div>
    </div>
    <Table
      headerTitle={'基础配置'}
      tooltip={'包括搜索栏，密度，页脚的设置'}
      search={openSearch ? undefined : false}
      pagination={openPagination ? undefined : false}
      getRef={(ref) => setRef(ref)}
      options={openOptions ? undefined : false}
      request={(params, sorter, filter) => queryTable({ ...params, sorter, filter })}
      tableList={columns}
      rowKey="key"
    />
  </>
}


export default Mock
