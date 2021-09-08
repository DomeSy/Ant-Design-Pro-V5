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
    setContent(initialState.content[res[1]][res[2]])
  }, [key, props.location.pathname]);

  const tab = [
    {
      tab: 'useState',
      key: 'useState',
    },
    {
      tab: 'useEffect',
      key: 'useEffect',
    },
    {
      tab: 'useContext',
      key: 'useContext',
    },
    {
      tab: 'useReducer',
      key: 'useReducer',
    },
    {
      tab: 'useMemo',
      key: 'useMemo',
    },
    {
      tab: 'useCallback',
      key: 'useCallback',
    },
    {
      tab: 'useRef',
      key: 'useRef',
    },
    {
      tab: 'useImperativeHandle',
      key: 'useImperativeHandle',
    },
    {
      tab: 'useModel',
      key: 'useModel',
    },
    {
      tab: 'useRequest',
      key: 'useRequest',
    },
  ];

  if(children.props.location.pathname === '/hook/introduce') return children

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
