import React, { useState, useEffect } from 'react';
import { PageLayout, Card } from '@/components';
import type { CardLayoutListProps } from '@/components'
import { SendOutlined } from '@ant-design/icons';
import { Jump } from '@/utils';

const Hook: React.FC<any> = ({children, ...props}) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [list, setList] = useState<CardLayoutListProps[]>([])
  const [detail, setDetail] = useState<any>({})

  useEffect(() => {
  }, []);

  const tab = [
    {
      tab: 'useState',
      key: 'useState',
    },
    {
      tab: 'useMemo',
      key: 'useMemo',
    },
  ];

  if(children.props.location.pathname === '/hook/introduce') return children

  return (
    <PageLayout
      // loading={loading}
      tab={tab}
      content={
        <div>Domesy</div>
      }
      onChange={(key) => {
        const { url } = props.match
        if(url !== '/'){
          Jump.go(`${url}/${key}`)
        }
      }}
    >
      {children}
    </PageLayout>
  );
};

export default Hook;
