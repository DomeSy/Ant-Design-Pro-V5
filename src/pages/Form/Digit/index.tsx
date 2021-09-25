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
    queryDetail({detail: 'digit'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          showCode: [
            {
              id: 'code1',
              component: <Mock />,
              title: '基本使用',
              content: '步进器可以设置小数，可以设置金额等，数字类型非常方便',
              code: `
  import React from 'react';
  import { message } from 'antd';
  import { Form } from '@/components';
  import type { formProps } from '@/components'

  export const Mock: React.FC<any> = () => {
    const list: formProps[] = [
      {
        name: 'digit',
        label: '步进器',
        type: 'digit',
        tooltip: 'type: digit',
      },
      {
        name: 'digit1',
        label: '必填',
        type: 'digit',
        required: true,
        tooltip: 'required: true',
      },
      {
        name: 'digit2',
        label: '禁用',
        type: 'digit',
        disabled: true,
        tooltip: 'disabled: true',
      },
      {
        name: 'digit3',
        label: '默认',
        type: 'digit',
        default: 3,
        tooltip: 'type: digit',
      },
      {
        name: 'digit5',
        label: '限制10~0',
        type: 'digit',
        max: 10,
        min: 0,
        tooltip: 'max: 10, min: 0',
      },
      {
        name: 'digit4',
        label: '限制小数点: 3',
        type: 'digit',
        precision: 3,
        tooltip: 'precision: 3',
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
