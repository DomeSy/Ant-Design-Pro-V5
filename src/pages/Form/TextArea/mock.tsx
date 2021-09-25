import React from 'react';
import { message } from 'antd';
import { Form } from '@/components';
import type { formProps } from '@/components'

const Mock: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'textArea',
      label: '文本框',
      tooltip: `type: 'textArea'`,
      type: 'textArea',
    },
    {
      name: 'textArea1',
      label: '显示字数',
      tooltip: `showCount: true`,
      showCount: true,
      type: 'textArea',
    },
    {
      name: 'textArea2',
      label: '限制最大值',
      tooltip: `max: 200`,
      max: 200,
      type: 'textArea',
    },
    {
      name: 'textArea3',
      label: '自适应高度',
      tooltip: `高度自适应 { autoSize: true }`,
      type: 'textArea',
      autoSize: true
    },
    {
      name: 'textArea4',
      label: '限制高度',
      tooltip: `高度限制 { rows: 8 }`,
      rows: 8,
      type: 'textArea',
    },
    {
      name: 'textArea5',
      label: '默认值',
      tooltip: `default: 'DomeSy TextArea'`,
      default: 'DomeSy TextArea',
      type: 'textArea',
    },
    {
      name: 'textArea6',
      label: '禁用',
      tooltip: `disabled: true`,
      disabled: true,
      type: 'textArea',
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
