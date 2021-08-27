import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Select, message, Col, Dropdown, Menu, Row } from 'antd';
import { Button, OssUpLoad, Form, PageLayout, Three, Table, Mask } from '@/components';
import type { formProps, tableListProps } from '@/components'
import { queryRule } from './services'
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
  const [maskFormRef, setMaskFormRef] = useState<any>(false);
  const [maskVisible, setMaskVisible] = useState<boolean>(false);
  useEffect(() => {
    setFile('http://bmx-system.oss-cn-shanghai.aliyuncs.com/web/domesy/images/1629963410227undefined.jpeg')
  }, []);
  const [file, setFile] = useState<any>('');
  const [ref, setRef] = useState<any>(false);

  const list: formProps[] = [
    {
      name: 'field3',
      label: '自定义',
      type: 'field',
      required: true,
      fieldRender: (
        <OssUpLoad
          initFile={
          [{ uid: 1, name: 'logo', url: 'http://bmx-system.oss-cn-shanghai.aliyuncs.com/web/domesy/images/1629963410227undefined.jpeg' }]}
          getFiles={(file: Array<any>) => {
            setFile(file[0]);
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
        <Button onClick={() => {
          setMaskVisible(true)
        }}>测试</Button>
        <Form
          onFinish={(values: any) => {
            message.success('打开控制台观看');
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
        />
      </Card>
      <Mask.Form
        title="批量编辑"
        message={"编辑成功"}
        visible={maskVisible}
        onRequest={queryRule}
        formList={list}
        form={
          {
            fieldValues: [
              {
                name: 'field3',
                value: file
              }
            ]
          }
        }
        onCancel={() => setMaskVisible(false)}
        onSubmit={() => setMaskVisible(false)}
        onEdit={(value) => {
          return value
        }}
      />
    </PageLayout>
  );
};

export default Welcome
