import React, { useState, useEffect } from 'react';
import { PageLayout, Card, Anchor } from '@/components';
import type { CardLayoutListProps, AnchorLinkProps } from '@/components'
import ProCard from '@ant-design/pro-card';
import { DetailSetting } from '@/commonPages'
import { Jump } from '@/utils';


const listTest:AnchorLinkProps[] = [
  {
    title: '测试1',
    href: 'test1',
  },
  {
    title: '测试2',
    href: 'test2',
    children: [{
      title: '测试3',
      href: 'test3',
    }]
  }
]
const UseMemo: React.FC<any> = (props) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [list, setList] = useState<CardLayoutListProps[]>([])
  const [detail, setDetail] = useState<any>({})

  const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined);
  useEffect(() => {
    setLoading(false)

  }, []);
  return (
    <DetailSetting />
  );
};

export default UseMemo;
