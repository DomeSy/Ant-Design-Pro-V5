import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Three, Table, Mask } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { queryRule } from './service'
import MultiCascader from "antd-multi-cascader";
import "antd-multi-cascader/dist/index.css";
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

  const treeData = [
    {
      name: 'Node1',
      values: '0-0',
      ars: '0-0',
      childrens: [
        {
          name: 'Child Node1',
          values: '0-0-0',
          ars: '0-0-0',
        },
      ],
    },
    {
      name: 'Node2',
      values: '0-1',
      ars: '0-1',
      childrens: [
        {
          name: 'Child Node3',
          values: '0-1-0',
          ars: '0-1-0',
        },
        {
          name: 'Child Node4',
          values: '0-1-1',
          ars: '0-1-1',
        },
        {
          name: 'Child Node5',
          values: '0-1-2',
          ars: '0-1-2',
        },
      ],
    },
  ];

  const list: formProps[] = [
    {
      name: 'field3',
      label: '自定义规则',
      type: 'field',
      tooltip: `rules: [{ required: true, message: '欢迎使用自定义组件' }]`,
      fieldRender: (
        <Three.Select
          list={treeData}
          _config={{
            title: 'name',
            value: 'values',
            // key: 'name',
            children: 'childrens'
          }}
          getValues={(values) => {
            setFile(values)
          }}
        />
      ),
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
          _config={{
            back: true
          }}
          fieldValues={[
            {
              name: 'field3',
              value: file
            }
          ]}
          getRef={(fromRef: any) => {
            setRef(fromRef);
          }}
          footer
        />
      </Card>
    </PageLayout>
  );
};

export default Welcome
