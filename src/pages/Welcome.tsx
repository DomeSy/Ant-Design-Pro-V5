import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Table } from '@/components';

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
  const [file, setFile] = useState<any>('');
  const [ref, setRef] = useState<any>(false);

  // input 加入required失效
  const list: any = [
    {
      name: 'date13',
      label: '时间',
      tooltip: `method: 'time'`,
      type: 'date',
      method: 'date',
    },
    {
      name: 'date14',
      label: '时间',
      method: 'time',
      tooltip: `method: 'time'`,
      type: 'date',
    },
    {
      name: 'date15',
      label: '日期+时间',
      method: 'dateTime',
      tooltip: `method: 'dateTime',`,
      type: 'date',
    },
    {
      name: 'date16',
      label: '日期时间段',
      method: 'dateRange',
      tooltip: `method: 'dateRange'`,
      type: 'date',
    },
    {
      name: 'date17',
      label: '时间+时间段',
      method: 'timeRange',
      tooltip: `method: 'timeRange'`,
      type: 'date',
    },
    {
      name: 'date18',
      label: '日期时间+日期时间段',
      method: 'dateTimeRange',
      tooltip: `method: 'dateTimeRange'`,
      type: 'date',
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
      _config={
        {
          // cancelBreadcrumb:true
          // cancelTitle: true
        }
      }
      // ghost
      // title={undefined}
    >
      <Card>
        <Form
          onFinish={(values: any) => {
            message.success('打开控制台观看');
            console.log(values, '---');
          }}
          formList={list}
          getRef={(fromRef: any) => {
            setRef(fromRef);
          }}
        />
      </Card>
    </PageLayout>
  );
};

export default Welcome
