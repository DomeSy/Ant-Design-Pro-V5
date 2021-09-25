import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'switch'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          showCode: [
            {
              id: 'code1',
              component: <Mock />,
              title: '基本使用',
              content: '开关的基本使用，可自定开关的文字，或是图表，也可支持是否在加载状态',
              code: `
  import React from 'react';
  import { message } from 'antd';
  import { Form } from '@/components';
  import { MailTwoTone } from '@ant-design/icons';
  import type { formProps } from '@/components'

  export const Mock: React.FC<any> = () => {
    const list: formProps[] = [
      {
        name: 'switch',
        label: '开关',
        tooltip: "type: 'switch'",
        type: 'switch',
      },
      {
        name: 'switch1',
        label: '开关文字',
        openText: '开启',
        closeText: '关闭',
        tooltip: "openText: '开启',closeText: '关闭',",
        type: 'switch',
      },
      {
        name: 'switch2',
        label: '开关图标',
        openText: <MailTwoTone />,
        tooltip: " openText: <MailTwoTone />,",
        type: 'switch',
      },
      {
        name: 'switch3',
        label: '默认开启',
        default: true,
        tooltip: "default: true,",
        type: 'switch',
      },
      {
        name: 'switch4',
        label: '开关加载',
        default: true,
        loading: true,
        tooltip: "default: true, loading: true,",
        type: 'switch',
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
