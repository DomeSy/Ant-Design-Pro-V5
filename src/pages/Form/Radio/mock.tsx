import React from 'react';
import { message } from 'antd';
import { Form } from '@/components';
import type { formProps } from '@/components'

const Mock: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'radio',
      label: 'option(字符串)',
      options: ['React', 'Hook', 'DomesyPro'],
      type: 'radio',
    },
    {
      name: 'radio1',
      label: 'option（对象）',
      options: [
        { label: 'React', value: 0 },
        { label: 'Hook', value: 1 },
        { label: 'DomesyPro', value: 2 },
      ],
      type: 'radio',
    },
    {
      name: 'radio2',
      label: 'enum',
      enum: {
        0: 'React',
        1: 'Hook',
        2: 'DomesyPro',
      },
      type: 'radio',
    },
    {
      name: 'radio3',
      label: 'request',
      request: async () => [
        { label: 'React', value: 0 },
        { label: 'Hook', value: 1 },
        { label: 'DomesyPro', value: 2 },
      ],
      type: 'radio',
    },
    {
      name: 'radio4',
      label: '必填',
      required: true,
      tooltip: 'required: true',
      message: '请选择radio',
      enum: {
        0: 'React',
        1: 'Hook',
        2: 'DomesyPro',
      },
      type: 'radio',
    },
    {
      name: 'radio5',
      label: '默认值',
      tooltip: `default: '2' `,
      default: '2',
      enum: {
        0: 'React',
        1: 'Hook',
        2: 'DomesyPro',
      },
      type: 'radio',
    },
    {
      name: 'radio6',
      label: '禁用',
      tooltip: `disabled: true, default: '2'`,
      disabled: true,
      default: '2',
      enum: {
        0: 'React',
        1: 'Hook',
        2: 'DomesyPro',
      },
      type: 'radio',
    },
    {
      name: 'radio7',
      label: '按钮模式',
      tooltip: `radioType: 'button'`,
      options: ['React', 'Hook', 'DomesyPro'],
      type: 'radio',
      radioType: 'button'
    },
  ];

  return <Form
    onFinish={(values: any) => {
      message.success('打开控制台观看');
      console.log(values, '动态表单的值')
    }}
    formList={list}
  />
}

export default Mock;
