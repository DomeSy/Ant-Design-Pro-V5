import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockExtra, MockRules, MockOther } from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
const Index: React.FC<any> = () => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'input'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          showCode: [
            {
              id: 'code1',
              component: <Mock />,
              title: '基本使用',
              content: '输入框的基础使用，主要包含 提示语，宽度，占位符， 默认值， 只读， 禁用， 必填等基础属性，同时也是其他类型所拥有的共同属性',
              code: `
  import React from 'react';
  import { message } from 'antd';
  import { Form } from '@/components';
  import type { formProps } from '@/components'

  export const Mock: React.FC<any> = () => {
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
          tooltip: "disabled: true,",
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

  export default Mock;
              `
            },
            {
              id: 'code2',
              component: <MockExtra />,
              title: '装饰',
              content: <div>
                <p>extra、 addonBefore、addonAfter、suffix、prefix 类型都是 React.ReactNode, 也就是说你可以自定义传入图，字等</p>
                <p>无论是addonBefore、addonAfter还是suffix、prefix都不会将值传入，如果想要选择应该自行修改值</p>
              </div>,
              code: `
  import React from 'react';
  import { message, Select } from 'antd';
  import { Form } from '@/components';
  import { MailTwoTone } from '@ant-design/icons';
  import type { formProps } from '@/components'

  export const Mock: React.FC<any> = () => {
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

  export default Mock;
              `
            },
            {
              id: 'code3',
              component: <MockRules />,
              title: '规则',
              content: <div>
                <p>以设置的 method 都与 utils/Regexp 里的值对应，可以根据项目的需求，自行设置</p>
                <p>除了必填，所有规则都在 rules 下</p>
                <p>rules为自定义和已有的正则都有：message(满足规则为校验正确否则不正确), reMessage(为空时的提示语)</p>
                <p>rules为自定义时需要有： pattern(正则)</p>
                <p>所有的正则规则输入都会加入必填这个选项，如果想要达到效果可以选填，但填了必须按照规则，则需要加入 noRequest: true 这个属性</p>
              </div>,
              code: `
  import React from 'react';
  import { message } from 'antd';
  import { Form } from '@/components';
  import type { formProps } from '@/components'

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

  export default MockRules;
              `
            },
            {
              id: 'code4',
              component: <MockOther />,
              title: '其他',
              content: '封装于 ProFormText，但 ProFormText 也是在 input 基础上进行封装，所以支持 input 的原有属性都在 fieldProps 下设置 ',
              code: `
  import React from 'react';
  import { message } from 'antd';
  import { Form } from '@/components';
  import type { formProps } from '@/components'

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

  export default MockOther;
              `
            },
          ]
        },
      })
    })
  }, []);

  return (
    <DetailSetting anchorList={anchorList} {...detail} />
  );
};

export default Index;
