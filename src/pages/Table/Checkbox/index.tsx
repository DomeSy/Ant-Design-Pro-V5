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
    queryDetail({detail: 'checkbox'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          showCode: [
            {
              id: 'code1',
              component: <Mock />,
              title: '基本使用',
              content: '与选择框一样，不过过多解释',
              code: `
  import React from 'react';
  import { message } from 'antd';
  import { Form } from '@/components';
  import type { formProps } from '@/components'

  export const Mock: React.FC<any> = () => {
      const list: formProps[] = [
    {
      name: 'checkbox',
      label: 'option(字符串)',
      options: [
        'React',
        'Hook',
        'DomesyPro'
      ],
      type: 'checkbox',
    },
    {
      name: 'checkbox1',
      label: 'option(对象)',
      tooltip: “option为对象“,
      options: [
        { label: 'React', value: 0 },
        { label: 'Hook', value: 1 },
        { label: 'DomesyPro', value: 2 },
      ],
      type: 'checkbox',
    },
    {
      name: 'checkbox2',
      label: 'enum',
      enum: {
        0: 'React',
        1: 'Hook',
        2: 'DomesyPro',
      },
      type: 'checkbox',
    },
    {
      name: 'checkbox3',
      label: 'request',
      request: async () => [
        { label: 'React', value: 0 },
        { label: 'Hook', value: 1 },
        { label: 'DomesyPro', value: 2 }
      ],
      type: 'checkbox',
    },
    {
      name: 'checkbox4',
      label: '必填',
      required: true,
      tooltip: 'required: true',
      message: '请选择checkbox',
      enum: {
        0: 'React',
        1: 'Hook',
        2: 'DomesyPro',
      },
      type: 'checkbox',
    },
    {
      name: 'checkbox5',
      label: '默认值',
      tooltip: “default: ['2', '0'] “,
      default: ['2', '0'],
      enum: {
        0: 'React',
        1: 'Hook',
        2: 'DomesyPro',
      },
      type: 'checkbox',
    },
    {
      name: 'checkbox6',
      label: '禁用',
      tooltip: “disabled: true, default: ['2']“,
      disabled: true,
      default: ['2'],
      enum: {
        0: 'React',
        1: 'Hook',
        2: 'DomesyPro',
      },
      type: 'checkbox',
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
