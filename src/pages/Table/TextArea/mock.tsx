import React from 'react';
import { message } from 'antd';
import { Form } from '@/components';
import type { formProps } from '@/components'

const Mock: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'select',
      label: 'options(string方式)',
      options: [
        '已选择',
        '未选择',
        '待选择'
      ],
      type: 'select',
    },
    {
      name: 'select1',
      label: 'options(对象方式)',
      options: [
        { label: '全部', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ],
      type: 'select',
    },
    {
      name: 'select2',
      label: 'enum方式',
      enum: {
        0: '已选择',
        1: '未选择',
        2: '待选择',
      },
      type: 'select',
    },
    {
      name: 'select3',
      label: 'request方式',
      request: async () => [
        { label: '全部', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ],
      type: 'select',
    },
    {
      name: 'select4',
      label: '默认值',
      default: 'open',
      options: [
        { label: '全部', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ],
      type: 'select',
    },
    {
      name: 'select5',
      label: '必填',
      enum: {
        0: '已选择',
        1: '未选择',
        2: '代选择',
      },
      placeholder: '选择规则',
      required: true,
      type: 'select',
    },
    {
      name: 'select6',
      label: '自定义下拉框样式',
      tooltip: 'optionItemRender: (item) => void',
      enum: {
        0: '已选择',
        1: '未选择',
        2: '代选择',
      },
      type: 'select',
      optionItemRender: (item: any) => {
        return item.label + ' - ' + item.value;
      },
    },
    {
      name: 'select7',
      label: '多选',
      tooltip: 'multiple: true',
      options: [
        { label: '全部1', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ],
      multiple: true,
      type: 'select',
    },
    {
      name: 'select8',
      label: '搜索',
      tooltip: 'search: true',
      options: [
        { label: '全部1', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ],
      search: true,
      type: 'select',
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
