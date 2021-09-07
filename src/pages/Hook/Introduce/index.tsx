import React, { useState, useEffect } from 'react';
import { PageLayout, Card } from '@/components';
import DetailContent from '@/commonPages/DetailSetting/DetailContent'
import type { CardLayoutListProps } from '@/components'
import { SendOutlined } from '@ant-design/icons';
import { queryList } from './services'
import { Jump } from '@/utils';

const Introduce: React.FC<any> = (props) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [list, setList] = useState<CardLayoutListProps[]>([])
  const [detail, setDetail] = useState<any>({})

  useEffect(() => {
    queryList().then((res) => {
      const { cardInfo, ...props } = res
      if(Array.isArray(cardInfo) && cardInfo.length !== 0){
        let list: CardLayoutListProps[] = []
        cardInfo.map((item:any) => {
          list = [...list, {
            title: item.title,
            render: <DetailContent  list={[
              {
                type: 'ellipsis',
                render: item.content,
                style: {margin: 0}
              }
            ]} />,
            extra: <a><SendOutlined /></a>,
            onClick: () => {
              Jump.go(`/hook/${item.title}`)
            }
          }]
        })
        setList(list)
      }
      setDetail({...props})
      setLoading(false)
    })
  }, []);

  return (
    <PageLayout
      loading={loading}
      content={detail?.content}
    >
      <Card.Layout list={list} type={4} _config={{style: { minHeight: 215, } }} />
    </PageLayout>
  );
};

export default Introduce;
