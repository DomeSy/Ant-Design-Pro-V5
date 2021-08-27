import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Space, Dropdown, Menu, Row, Tooltip } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Table, Mask } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;
import { queryRule, queryRule1 } from './services'


const Welcome: React.FC<any> = (props) => {
  const [ref, setRef] = useState<any>(false);
  const [maskFormRef, setMaskFormRef] = useState<any>(false);
  const [maskVisible, setMaskVisible] = useState<boolean>(false);

  useEffect(() => {}, []);

  const getListData = ({detail:Object = {}}) => {
    const result: formProps[] = [
      {
        name: 'test1',
        label: '首重',
        addonAfter: 'kg',
        rules: [{
          method: 'numberFloat'
        }]
      },
      {
        name: 'test1',
        label: '首重成本',
        addonAfter: '元',
        rules: [{
          method: 'numberFloat'
        }]
      },
      {
        name: 'test1',
        label: '首重运费',
        noRequired: true,
        addonAfter: '元',
        rules: [{
          method: 'numberFloat'
        }]
      },
      {
        name: 'test1',
        label: '续重',
        addonAfter: 'kg',
        rules: [{
          method: 'numberFloat'
        }]
      },
      {
        name: 'test1',
        label: '续重成本',
        addonAfter: '元',
        noRequired: true,
        rules: [{
          method: 'numberFloat'
        }]
      },
      {
        name: 'test1',
        label: '续重运费',
        addonAfter: '元',
        rules: [{
          method: 'numberFloat'
        }]
      },
    ]
    return result
  }

  const columns: tableListProps[] = [
    {
      title: '地区',
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: '首重（kg）',
      dataIndex: 'callNo',
    },
    {
      title: '首重成本（元）',
      dataIndex: 'callNo',
    },
    {
      title: '首重运费（元）',
      dataIndex: 'callNo',
    },
    {
      title: '续重（kg）',
      dataIndex: 'callNo',
    },
    {
      title: '续重成本（元）',
      dataIndex: 'callNo',
    },
    {
      title: '续重运费（元）',
      dataIndex: 'callNo',
    },
    {
      title: '操作',
      dataIndex: 'option',
      type: 'tools',
      tools: [
        {
          method: 'edit',
          edit: {
            onBeforeStart: (data:any) => {
              return getListData({})
            },
            form: {
            },
            maskFrom: {
              onRequest: queryRule
            },
            onEdit: (values: any, record: any) => {
              return {
                ...values,
                key: record.key
              };
            },
          }
        },
      ]
    },
  ];

  const columnsAppoint: tableListProps[] = [
    {
      title: '排序',
      dataIndex: 'name',
      render: (dom, entity) => {
        return <a>{dom}</a>;
      },
    },
    {
      title: '地区',
      dataIndex: 'desc',
      valueType: 'textarea',
    },
    {
      title: '首重（kg）',
      dataIndex: 'callNo',
    },
    {
      title: '首重成本（元）',
      dataIndex: 'callNo',
    },
    {
      title: '首重运费（元）',
      dataIndex: 'callNo',
    },
    {
      title: '续重（kg）',
      dataIndex: 'callNo',
    },
    {
      title: '续重成本（元）',
      dataIndex: 'callNo',
    },
    {
      title: '续重运费（元）',
      dataIndex: 'callNo',
    },
    {
      title: '操作',
      dataIndex: 'option',
      type: 'tools',
      tools: [
        {
          method: 'edit',
          edit: {
            onBeforeStart: (data:any) => {
              return getListData({})
            },
            form: {
            },
            maskFrom: {
              onRequest: queryRule
            },
            onEdit: (values: any, record: any) => {
              return {
                ...values,
                key: record.key
              };
            },
          }
        },
      ]
    },
  ];

  return (
    <PageLayout
      title={'极兔速递'}
    >
      <Mask.Form
        title="批量编辑"
        message={"编辑成功"}
        visible={maskVisible}
        formRef={maskFormRef}
        onRequest={queryRule}
        onCancel={() => setMaskVisible(false)}
        onSubmit={() => setMaskVisible(false)}
      >
        <Form
          method="mask"
          formList={getListData({})}
          getRef={(formRef: any) => {
            setMaskFormRef(formRef);
          }}
        />
      </Mask.Form>
    </PageLayout>
  );
};

export default Welcome
