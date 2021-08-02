import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Table } from '@/components';
import type { formProps } from '@/components'
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
  const list: formProps[] = [
    {
      // label: '',
      type: 'group',
      children: [
        {
          label: 'group1',
          name: 'group1'
        },
        {
          label: 'group2',
          name: 'group2'
        }
      ]
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
        }
      }
    >
      <Card>
        <Button onClick={() => {
          console.log('12')
        }}> 跳转11</Button>
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
