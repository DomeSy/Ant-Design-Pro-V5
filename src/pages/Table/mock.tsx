import React, { useState } from 'react';
import { message, Switch, Tooltip } from 'antd';
import { Table } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { InfoCircleOutlined } from '@ant-design/icons';

import { queryTable } from './services'
import './mock.less'

const searchInit = {
  layout: false
}

const TextShow: React.FC<{text: string, title: string}> = ({text='', title='', children}) => {
  return <p>{text} <Tooltip title={title}><InfoCircleOutlined /></Tooltip> : {children}</p>
}

const Mock: React.FC<any> = () => {
  const [ref, setRef] = useState<any>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(true)
  const [openPagination, setOpenPagination] = useState<boolean>(true)
  const [openOptions, setOpenOptions] = useState<boolean>(true)

  const [searchConfig, setSearchConfig] = useState<any>(searchInit)

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
        return <p style={{ background: dome, width: 15, height: 15}}></p>
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
        <TextShow text={'搜索'} title="search={false}" >
          <Switch checked={openSearch} onChange={(e) => setOpenSearch(e)}/>
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
          <Switch checked={searchConfig.layout} onChange={(e) => setSearchConfig({...searchConfig, layout: e})}/>
        </TextShow>
        <TextShow text={'是否垂直'} title="layout: 'vertical' | 'horizontal'" >
          <Switch checked={searchConfig.layout} onChange={(e) => setSearchConfig({...searchConfig, layout: e})}/>
        </TextShow>
      </div>
    </div>

    <Table
      headerTitle={'基础配置'}
      tooltip={'包括搜索栏，密度，页脚的设置'}
      search={openSearch ? {
        show: true,
        layout: searchConfig.layout ? 'vertical' : 'horizontal',
      } : false}
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
