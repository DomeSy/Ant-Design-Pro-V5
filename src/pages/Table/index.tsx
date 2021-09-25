import React, { useState, useEffect } from 'react';
import { queryDetail } from './services'
import { DetailSetting } from '@/commonPages'
import { PageLayout } from '@/components'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
import Mock, {  } from './mock'

const Hook: React.FC<any> = ({children, ...props}) => {


  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'table'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          showCode: [
            {
              component: <Mock />,
              title: '统一默认值',
              id: 'code1',
              content: <div>
                <p>我们可以通过 initValues 设置统一的默认值，当然也可以设置 fromList 中的 default 来设置默认值</p>
                <p>自定义组件的情况特殊，不能通过此设置</p>
              </div>,
              code: `
  import React from 'react';
  import { message } from 'antd';
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

  export default Mock
              `
            },
          ]
        },
      })
    })
  }, []);

  return (
    <PageLayout
      // content={
      //   content
      // }
    >
      <DetailSetting anchorList={anchorList} {...detail} />
    </PageLayout>
  );
};

export default Hook;
