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
    setKey(res[3])
    // setContent(initialState.content[res[1]][res[2]])
  }, [key, props.location.pathname]);

  const tab = [
    {
      tab: '介绍',
      key: 'Introduce',
    },
    {
      tab: '卡片柱状图',
      key: 'Column',
    },
  ];
  if(children.props.location.pathname === '/charts/introduce') return children

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
