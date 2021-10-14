import React, { useState } from 'react';
import { message, Switch } from 'antd';
import { Form } from '@/components';
import type { formProps } from '@/components'

const Mock: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'input',
      label: '输入框',
    },
    {
      name: 'password',
      label: '密码',
      type: 'password'
    },
    {
      name: 'select',
      label: '选择',
      request: async () => [
        { label: '全部', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ],
      type: 'select',
    },
    {
      name: 'checkbox',
      label: '多选',
      request: async () => [
        { label: 'React', value: 0 },
        { label: 'Hook', value: 1 },
        { label: 'DomesyPro', value: 2 }
      ],
      type: 'checkbox',
    },
    {
      name: 'radio',
      label: '单选',
      request: async () => [
        { label: 'React', value: 0 },
        { label: 'Hook', value: 1 },
        { label: 'DomesyPro', value: 2 },
      ],
      type: 'radio',
    },
    {
      name: 'switch',
      label: '开关',
      type: 'switch',
    },
    {
      name: 'textArea',
      label: '文本框',
      type: 'textArea',
    },
    {
      name: 'rate',
      label: '评分',
      type: 'rate',
    },
    {
      name: 'slider',
      label: '双向滑动',
      range: true,
      type: 'slider',
    },
    {
      name: 'digit',
      label: '步进器',
      type: 'digit',
    },
  ];

  return <Form
    initValues={{
      input: 'Domesy',
      password: 'Domesy',
      select: 'all',
      checkbox: [1, 2],
      radio: 2,
      switch: true,
      textArea: '欢迎来到 DomeSy',
      rate: 3.5,
      slider: [10, 70],
      digit: 2.5
    }}
    onFinish={(values: any) => {
      message.success('打开控制台观看');
      console.log(values, '动态表单的值')
    }}
    formList={list}
  />
}

export const MockLayout: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'input',
      label: '布局样式1',
    },
    {
      name: 'input2',
      label: '布局样式2',
    },
  ];

  return <div>
    <div style={{fontSize: 16,fontWeight: 500, marginBottom: 20}}>关闭样式，自动填充</div>
    <div>
      <Form
        layout={{
          close: true
        }}
        onFinish={(values: any) => {
          message.success('打开控制台观看');
          console.log(values, '动态表单的值')
        }}
        formList={list}
      />
    </div>
    <div style={{fontSize: 16,fontWeight: 500, marginBottom: 20}}>按钮样式，默认 horizontal（水平）</div>
    <div>
      <Form
        layout={{
          way: 'vertical'
        }}
        onFinish={(values: any) => {
          message.success('打开控制台观看');
          console.log(values, '动态表单的值')
        }}
        formList={list}
      />
    </div>
    <div style={{fontSize: 16,fontWeight: 500, marginBottom: 20}}>无底部按钮</div>
    <div>
      <Form
        method={'none'}
        onFinish={(values: any) => {
          message.success('打开控制台观看');
          console.log(values, '动态表单的值')
        }}
        formList={list}
      />
    </div>
    <div style={{fontSize: 16,fontWeight: 500, marginBottom: 20}}>mask模式，无底部按钮，并且宽度填满</div>
    <div>
      <Form
        method={'mask'}
        onFinish={(values: any) => {
          message.success('打开控制台观看');
          console.log(values, '动态表单的值')
        }}
        formList={list}
      />
    </div>
  </div>
}

export const MockButton: React.FC<any> = () => {

  const [open, setOpen] = useState<boolean>(false)

  const list: formProps[] = [
    {
      name: 'input',
      label: '布局样式1',
    },
    {
      name: 'input2',
      label: '布局样式2',
    },
  ];

  return <div>
    <div style={{fontSize: 16,fontWeight: 500, marginBottom: 20}}>是否打开页脚(不打开则展示返回按钮)： <Switch checked={open} onChange={(e) => setOpen(e)}/></div>
    <div>
      <Form
        onFinish={(values: any) => {
          message.success('打开控制台观看');
          console.log(values, '动态表单的值')
        }}
        footer={open ? true : false}
        _config={open ? undefined : {
          back: -1
        }}
        formList={list}
      />
    </div>
    <div style={{fontSize: 16,fontWeight: 500, marginBottom: 20}}>无重置按钮</div>
    <div>
      <Form
        onFinish={(values: any) => {
          message.success('打开控制台观看');
          console.log(values, '动态表单的值')
        }}
        _config={{
          noRest: true
        }}
        formList={list}
      />
    </div>
  </div>
}

export const MockOther: React.FC<any> = () => {

  const list: formProps[] = [
    {
      name: 'input',
      default:'React',
      label: '技术栈',
    },
    {
      name: 'input1',
      default: 'Domesy',
      label: '作者',
    },
    {
      type: 'dependency',
      name: ['input', 'input1'],
      itemRender: (data:any) => {
        return [
          {
            name: 'input3',
            label: `你使用的技术栈${data?.input || ''}`,
          },
          {
            name: 'input4',
            label: `你欣赏的作者${data?.input1 || ''}`,
          },
        ]
      }
    }
  ];

  return <div>
    <div style={{fontSize: 16,fontWeight: 500, marginBottom: 20}}>表单联动 dependency</div>
    <Form
      layout={{
        way: 'vertical'
      }}
      onFinish={(values: any) => {
        message.success('打开控制台观看');
        console.log(values, '动态表单的值')
      }}
      formList={list}
    />
  </div>
}

export default Mock
