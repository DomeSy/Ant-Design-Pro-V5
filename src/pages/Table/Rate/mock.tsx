import React from 'react';
import { message } from 'antd';
import { Form } from '@/components';
import { HeartOutlined } from '@ant-design/icons';
import type { formProps } from '@/components'

const Mock: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'rate1',
      label: '评分',
      tooltip: `type: 'rate'`,
      type: 'rate',
    },
    {
      name: 'rate2',
      label: '全心',
      half: true,
      tooltip: `half: true'`,
      type: 'rate',
    },
    {
      name: 'rate3',
      label: '设置星数',
      max: 8,
      tooltip: `max: 8`,
      type: 'rate',
    },
    {
      name: 'rate3',
      label: '额外配置信息',
      half: true,
      tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
      tooltip: `type: 'rate'`,
      type: 'rate',
    },
    {
      name: 'rate4',
      label: '设置颜色',
      color: 'rgba(12,218,22,.8)',
      tooltip: `color: 'rgba(12,218,22,.8)'' | yellow | #000`,
      type: 'rate',
    },
    {
      name: 'rate5',
      label: '必填',
      required: true,
      tooltip: `{ required: true }`,
      type: 'rate',
    },
    {
      name: 'rate6',
      label: '默认',
      default: 1.5,
      tooltip: `disabled: 1.5`,
      type: 'rate',
    },
    {
      name: 'rate7',
      label: '不可修改',
      default: 2.5,
      tooltip: `disabled: true`,
      disabled: true,
      type: 'rate',
    },
    {
      name: 'rate8',
      label: '自定义图标',
      styleNode: <HeartOutlined />,
      tooltip: `styleNode: <HeartOutlined />`,
      type: 'rate',
    },
    {
      name: 'rate9',
      label: '自定义字母',
      styleNode: 'D',
      tooltip: `styleNode: 'D'`,
      type: 'rate',
    },
    {
      name: 'rate10',
      label: '自定义文字',
      styleNode: '好',
      tooltip: `styleNode: '好'`,
      type: 'rate',
    },
    {
      name: 'rate11',
      label: '自定义字符',
      max: 6,
      default: 6,
      styleNode: ({ index }: any) => {
        const data = ['D', 'O', 'M', 'E', 'S', 'Y'];
        return data[index];
      },
      tooltip: `styleNode: ({index}:any) => Array[index]`,
      type: 'rate',
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
