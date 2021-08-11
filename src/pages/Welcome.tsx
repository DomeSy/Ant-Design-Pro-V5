import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Table, Mask } from '@/components';
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

  const columns: tableListProps[] = [
    {
      title: '规则名称',
      dataIndex: 'name',
      tip: '规则名称是唯一的 key',
      render: (dom, entity) => {
        return <a>{dom}</a>;
      },
    },
    {
      title: '描述',
      dataIndex: 'desc',
      valueType: 'textarea',
      rules: [
        {
          max: 3,
        },
      ],
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      sorter: true,
      hideInForm: true,
      renderText: (val: string) => `${val} 万`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing' },
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '时间',
      dataIndex: 'updatedAt',
      sorter: true,
      hideInForm: true,
      type: 'date',
      method: 'dateTimeRange',
      required: true,
      hideInSearch: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      render: (_, record) => {
        return (
          <div>
            <a
              onClick={() => {
                // handleUpdateModalVisible(true);
                // setStepFormValues(record);
              }}
            >
              配置
            </a>
            <a href="">订阅警报</a>
          </div>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      type: 'tools',
      tools: [{
        method: 'edit'
      }]
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
        <Table
          getRef={(ref) => setRef(ref)}
          request={(params, sorter, filter) => queryRule({ ...params, sorter, filter })}
          tableList={columns}
          _config={{
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
                onRequest: queryRule
              }
            }
          }}
        />
      </Card>
    </PageLayout>
  );
};

export default Welcome
