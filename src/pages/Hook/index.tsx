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
    console.log(children, '000')
  }, []);

  if(children.props.location.pathname === '/hook/introduce') return children

  return (
    <PageLayout
      // loading={loading}
      content={
        <div>{detail?.content}</div>
      }
    >
      {children}
    </PageLayout>
  );
};

export default Hook;
