import React from 'react';
import { message } from 'antd';
import { Form } from '@/components';
import type { formProps } from '@/components'

const Mock: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'slider',
      label: '滑动输入条',
      tooltip: `type: 'slider'`,
      range: false,
      type: 'slider',
    },
    {
      name: 'slider2',
      label: '双向滑动',
      tooltip: `range: true`,
      range: true,
      type: 'slider',
    },
    {
      name: 'slider3',
      label: '默认值单项',
      default: 70,
      tooltip: `default: 70`,
      type: 'slider',
    },
    {
      name: 'slider4',
      label: '默认值双向',
      default: [10, 70],
      range: true,
      tooltip: `default: [10, 70]`,
      type: 'slider',
    },
    {
      name: 'slider5',
      label: '设置文本',
      tooltip: `通过marks进行设置，属性值为刻度尺，属性名为对应刻度尺下方展示的值，也可以通过style自定义样式`,
      marks: {
        0: '0°C',
        100: '100°C',
      },
      default: [26, 57],
      range: true,
      type: 'slider',
    },
    {
      name: 'slider6',
      label: '设置文本',
      marks: {
        0: '0°C',
        26: '26°C',
        57: '57°C',
        100: {
          style: {
            color: '#f50',
          },
          label: <strong>100°C</strong>,
        },
      },
      default: [26, 57],
      tooltip: `marks:{ 100: { style: { color: '#f50' } label: <strong>100°C</strong> } }`,
      range: true,
      type: 'slider',
    },
    {
      name: 'slider7',
      label: '设置最大值和最小值',
      marks: {
        20: '20',
        50: '50',
      },
      max: 50,
      min: 20,
      tooltip: `max: 50, min:20`,
      range: true,
      type: 'slider',
    },
    {
      name: 'slider8',
      label: '步长为5',
      step: 5,
      tooltip: `step: 5`,
      type: 'slider',
    },
    {
      name: 'slider9',
      label: '禁用',
      disabled: true,
      default: 11,
      tooltip: `disabled: tru'`,
      type: 'slider',
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
