import React, { useState, useEffect } from 'react';
import { PageLayout, Card } from '@/components';
import type { CardLayoutListProps } from '@/components'
import { SendOutlined } from '@ant-design/icons';
import { useModel } from 'umi';
import { Jump } from '@/utils';

const Hook: React.FC<any> = ({children, ...props}) => {
  const { initialState } = useModel('@@initialState');
  const [content, setContent] = useState<string>('');
  const [key, setKey] = useState<string>('useMemo');

  useEffect(() => {
    const { pathname } = props.location;
    const res = pathname.split('/')
    setKey(res[2])
    // setContent(initialState.content[res[1]][res[2]])
  }, [key, props.location.pathname]);

  const tab = [
    {
      tab: '介绍',
      key: 'introduce',
    },
    {
      tab: '输入框',
      key: 'input',
    },
    {
      tab: '密码/验证码',
      key: 'password',
    },
    {
      tab: '日期',
      key: 'date',
    },
    {
      tab: '选择框',
      key: 'select',
    },
    {
      tab: '多选',
      key: 'checkbox',
    },
    {
      tab: '单选',
      key: 'radio',
    },
    {
      tab: '开关',
      key: 'switch',
    },
    {
      tab: '文本框',
      key: 'textArea',
    },
    {
      tab: '星级评价',
      key: 'rate',
    },
    {
      tab: '滑动输入条',
      key: 'slider',
    },
    {
      tab: '步进器',
      key: 'digit',
    },
    {
      tab: '自定义',
      key: 'field',
    },
  ];

  return (
    <PageLayout
      tab={tab}
      tabActiveKey={key}
      content={
        content
      }
      onChange={(key) => {
        const { url } = props.match
        if(url !== '/'){
          Jump.go(`${url}/${key}`)
        }
        setKey(String(key))
      }}
    >
      {children}
    </PageLayout>
  );
};

export default Hook;
