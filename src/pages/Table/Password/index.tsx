import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockCaptcha } from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'password'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          showCode: [
            {
              id: 'code1',
              component: <Mock />,
              title: '密码-基本使用',
              content: '密码的属性与input相同，所以这里不多做介绍',
              code: `
  import React from 'react';
  import { message } from 'antd';
  import { Form } from '@/components';
  import type { formProps } from '@/components'

  export const Mock: React.FC<any> = () => {
    const list: formProps[] = [
      {
        name: 'password',
        label: '密码',
        tooltip: "type: 'password'",
        type: 'password',
      },
      {
        name: 'password1',
        label: '密码图标',
        tooltip: 'prefix: <MailTwoTone />',
        prefix: <MailTwoTone />,
        type: 'password',
      },
      {
        name: 'password2',
        label: '密码规则',
        tooltip: 'rules: [{ }]',
        rules: [
          {
            method: 'password',
            message: '密码，长度必须为6至20位',
          },
        ],
        type: 'password',
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
              id: 'code2',
              component: <MockCaptcha />,
              title: '验证码-基础使用',
              content: '主要有获取点击按钮事件，设置秒数等功能',
              code: `
  import React from 'react';
  import { message, Select } from 'antd';
  import { Form } from '@/components';
  import { MailTwoTone } from '@ant-design/icons';
  import type { formProps } from '@/components'

  export const Mock: React.FC<any> = () => {

    const list: formProps[] = [
      {
        name: 'captcha',
        label: '验证码',
        tooltip: "type: captcha",
        type: 'captcha',
      },
      {
        name: 'captcha1',
        label: '图标',
        tooltip: "prefix: <MailTwoTone />",
        prefix: <MailTwoTone />,
        type: 'captcha',
      },
      {
        name: 'captcha2',
        label: '点击事件',
        tooltip: "getCaptcha:async (phone:any) => message.success('获取点击事件')",
        type: 'captcha',
        getCaptcha: async (phone: any) => message.success('获取点击事件'),
      },
      {
        name: 'captcha3',
        label: '渲染时的文案',
        tooltip: ”getCaptcha:async (phone:any) => message.success('获取点击事件')”,
        type: 'captcha',
        captchaTextRender: (timing: boolean, count: number) => <div>文案：{count}</div>
      },
      {
        name: 'captcha4',
        label: '点击后的计时',
        tooltip: ”max: 30”,
        type: 'captcha',
        max: 30,
        extra: '按钮的样式可以调，直接captchaProps可直接控制，跟Button样式一样',
      },
      {
        name: 'captcha5',
        label: '可设置按钮样式',
        tooltip: ”captchaProps属性”,
        type: 'captcha',
        extra: '按钮的样式可以调，直接captchaProps可直接控制，跟Button样式一样',
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
