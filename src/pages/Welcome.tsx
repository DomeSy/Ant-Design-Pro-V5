import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Three, Table, Mask } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { queryRule } from './service'
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

  const list: formProps[] = [
    {
      name: 'field3',
      label: '自定义规则',
      type: 'field',
      fieldValue: file,
      tooltip: `rules: [{ required: true, message: '欢迎使用自定义组件' }]`,
      fieldRender: (
        <Three />
      ),
    },
    {
      name: 'select1',
      label: '选择options',
      tooltip: 'onFinish的值是enum的属性名',
      options: [
        { label: '全部1', value: 'all', children: {
          label: '全部2', value: 'al1l',
        }},
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ],
      type: 'select',
    },
    {
      name: 'field31',
      label: '自定义规则',
    },
    {
      name: 'field31',
      label: '自定义规则',
    },
    {
      name: 'field31',
      label: '自定义规则',
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
