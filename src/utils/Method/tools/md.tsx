import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Table, Mask } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { queryRule, exportExcel } from './service'
import { Method } from '@/utils';
const { Option } = Select;

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Welcome: React.FC<any> = (props) => {
  useEffect(() => {}, []);
  const [file, setFile] = useState<any>([]);
  const [ref, setRef] = useState<any>(false);

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
  ];
  const tab = [
    {
      tab: '基本信息',
      key: 'base',
    },
    {
      tab: '详细信息',
      key: 'info',
    },
  ];
  return (
    <PageLayout
      tab={tab}
    >
      <Button onClick={() => {
        const res = [
          {headers: columns, data: file, sheetName: '导出1'},
          {headers: columns, data: file, sheetName: '导出2'}
        ]
        Method.ExportExcel(res)
        }}>导出</Button>
      <Table
        search={false}
        pagination={false}
        options={false}
        rowKey={'name'}
        getRef={(ref) => setRef(ref)}
        request={async (params, sorter, filter) => {
          const res = await exportExcel({params, sorter, filter})
          setFile(res.data)
          return res
        }}
        tableList={columns}
      />
    </PageLayout>
  );
};

export default Welcome
