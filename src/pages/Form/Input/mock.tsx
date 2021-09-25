import React from 'react';
import { message, Select } from 'antd';
import { Form } from '@/components';
import { MailTwoTone } from '@ant-design/icons';
import type { formProps } from '@/components'

const Mock: React.FC<any> = () => {
  const list: formProps[] = [
      {
        name: 'input',
        label: '普通输入框',
      },
      {
        name: 'input1',
        label: '提示语',
        tooltip: "tooltip: '提示语'",
      },
      {
        name: 'input2',
        label: '宽度',
        tooltip: "width: 'sm'",
        width: 'sm',
      },
      {
        name: 'input3',
        label: '占位符',
        tooltip: "placeholder: '自定义placeholder'",
        placeholder: '自定义placeholder',
      },
      {
        name: 'input4',
        label: '默认值',
        default: 'Domesy',
        tooltip: "default: 'domesy'",
      },
      {
        name: 'input5',
        label: '只读',
        default: '欢迎使用动态表单',
        readonly: true,
        tooltip: "readonly: true",
      },
      {
        name: 'input6',
        label: '禁用',
        default: '禁用选项',
        tooltip: "disabled: true",
        disabled: true,
      },
      {
        name: 'input7',
        label: '必填',
        tooltip: "required: true",
        required: true,
      }
  ];

  return <Form
    onFinish={(values: any) => {
      message.success('打开控制台观看');
      console.log(values, '动态表单的值')
    }}
    formList={list}
  />
}

export const MockExtra: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'input8',
      label: '额外配置',
      tooltip: "extra: <span style={{ color: 'red' }}>欢迎使用动态表单</span>",
      extra: <span style={{ color: 'red' }}>欢迎使用动态表单</span>
    },
    {
      name: 'input9',
      label: '前缀图标',
      tooltip: 'prefix: <MailTwoTone />',
      prefix: <MailTwoTone />,
    },
    {
      name: 'input10',
      label: '后缀图标',
      tooltip: 'suffix: <MailTwoTone />',
      suffix: <MailTwoTone />,
    },
    {
      name: 'input11',
      label: '前置',
      tooltip: "addonBefore: 'http'",
      addonBefore: 'http',
    },
    {
      name: 'input12',
      label: '后置',
      tooltip: "addonAfter: '.com'",
      addonAfter: '.com',
    },
    {
      name: 'input13',
      label: '前后置',
      addonBefore: (
        <Select defaultValue="http://" className="select-before">
          <Select.Option value="http://">http://</Select.Option>
          <Select.Option value="https://">https://</Select.Option>
        </Select>
      ),
      addonAfter: (
        <Select defaultValue=".com" className="select-after">
          <Select.Option value=".com">.com</Select.Option>
          <Select.Option value=".jp">.jp</Select.Option>
          <Select.Option value=".cn">.cn</Select.Option>
          <Select.Option value=".org">.org</Select.Option>
        </Select>
      ),
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

export const MockRules: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'input14',
      label: '必填',
      tooltip: "rules: [{ required: true, message: '此选项必填' }]",
      rules: [{ required: true, message: '此选项必填' }]
    },
    {
      name: 'input15',
      label: '必填Request',
      tooltip: "如果不需要输入message，直接输入 required: true 即可",
      required: true
    },
    {
      name: 'input16',
      label: '自定义正则',
      tooltip: '手机号， rules: [{ pattern: /^1\d{10}$/, message: "满足规则为校验正确否则不正确",reMessage: "为空时的提示语"}]',
      rules: [
        {
          pattern: /^1\d{10}$/,
          message: '满足规则为校验正确否则不正确',
          reMessage: '为空时的提示语'
        },
      ],
    },
    {
      name: 'input17',
      label: '最小位数',
      tooltip: "3位： min: 3",
      rules: [
        {
          min: 3,
        },
      ],
    },
    {
      name: 'input18',
      label: '最大位数',
      tooltip: "5位： max: 5",
      rules: [
        {
          max: 5,
        },
      ],
    },
    {
      name: 'input19',
      label: '最小和最大',
      tooltip: "3位到5位",
      rules: [
        {
          min: 3,
        },
        {
          max: 5
        }
      ],
    },
    {
      name: 'input20',
      label: '选填',
      tooltip: "可以不填，但填必须为最小3位",
      noRequired: true,
      rules: [
        {
          min: 3,
        },
      ],
    },
    {
      name: 'input21',
      label: '手机号验证',
      tooltip: "method: 'tel'",
      rules: [
        {
          method: 'tel',
        },
      ],
    },
    {
      name: 'input22',
      label: '密码',
      tooltip: "method: 'password'",
      rules: [
        {
          method: 'password',
        },
      ],
    },
    {
      name: 'input23',
      label: '姓名',
      tooltip: "method: 'name'",
      rules: [
        {
          method: 'name',
        },
      ],
    },
    {
      name: 'input24',
      label: '身份证',
      tooltip: "method: 'sfz'",
      rules: [
        {
          method: 'sfz',
        },
      ],
    },
    {
      name: 'input25',
      label: '银行卡号',
      tooltip: "method: 'card'",
      rules: [
        {
          method: 'card',
        },
      ],
    },
    {
      name: 'input26',
      label: '邮箱',
      tooltip: "method: 'emil'",
      rules: [
        {
          method: 'emil',
        },
      ],
    },
    {
      name: 'input27',
      label: '电话或邮箱',
      tooltip: "method: 'telEmil'",
      rules: [
        {
          method: 'telEmil',
        },
      ],
    },
    {
      name: 'input28',
      label: '数字',
      tooltip: "method: 'number'",
      rules: [
        {
          method: 'number',
        },
      ],
    },
    {
      name: 'input29',
      label: '非0数字',
      tooltip: "method: 'numberZero'",
      rules: [
        {
          method: 'numberZero'
        },
      ],
    },
    {
      name: 'input28',
      label: '小数点后两位',
      tooltip: "method: 'numberFloat'",
      rules: [
        {
          method: 'numberFloat',
        },
      ],
    }
  ];

  return <Form
    onFinish={(values: any) => {
      message.success('打开控制台观看');
      console.log(values, '动态表单的值')
    }}
    formList={list}
  />
}

export const MockOther: React.FC<any> = () => {
  const list: formProps[] = [
    {
      name: 'input29',
      label: '其他设置',
      tooltip: '支持原本的输入组件，如大小，placeholder',
      fieldProps: {
        size: 'large',
      },
    },
    {
      name: 'input30',
      placeholder: '没有 label，自动对齐',
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
