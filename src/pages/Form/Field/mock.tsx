import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import { OssUpLoad, Form } from '@/components';
import type { formProps } from '@/components'

const Mock: React.FC<any> = () => {
  const [file, setFile] = useState<any>('');
  const [file1, setFile1] = useState<any>('');

  const list: formProps[] = [
    {
      name: 'field',
      label: '自定义',
      type: 'field',
      fieldRender: (
        <OssUpLoad
          getFiles={(file: Array<any>) => {
            setFile(file)
          }}
        />
      ),
    },
    {
      name: 'field1',
      label: '必填',
      type: 'field',
      // required: true,
      fieldRender: (
        <OssUpLoad
          getFiles={(file: Array<any>) => {
            setFile1(file)
          }}
        />
      ),
    },
  ];

  return <Form
    onFinish={(values: any) => {
      message.success('打开控制台观看');
      console.log(values, '动态表单的值')
    }}
    fieldValues={[
      {
        name: 'field',
        value: file
      },
      {
        name: 'field1',
        value: file1
      }
    ]}
    formList={list}
  />
}

export const MockDefault: React.FC<any> = () => {

  const [file, setFile] = useState<any>('');
  useEffect(() => {
    setFile('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png')
  }, [])

  const list: formProps[] = [
    {
      name: 'field',
      label: '自定义',
      type: 'field',
      required: true,
      fieldRender: (
        <OssUpLoad
          initFile={['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png']}
          getFiles={(file: Array<any>) => {
            setFile(file)
          }}
        />
      ),
    },
  ];

  return <Form
    onFinish={(values: any) => {
      message.success('打开控制台观看');
      console.log(values, '动态表单的值')
    }}
    fieldValues={[
      {
        name: 'field',
        value: file
      },
    ]}
    formList={list}
  />
}

export default Mock;
