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
    // <PageLayout
    //   loading={loading}
    // >
    //   <ProCard>
    //     {/* <Anchor targetOffset={targetOffset}>
    //       <Link href="#test" title="Basic demo" />
    //       <Link href="#test1" title="Static demo" />
    //       <Link href="#API" title="API">
    //         <Link href="#test2" title="Anchor Props" />
    //         <Link href="#test3" title="Link Props" />
    //       </Link>
    //     </Anchor> */}
    //     <Anchor list={listTest}/>
    //     <div id='test' style={{height: 500}}>1</div>
    //     <div id='test1' style={{height: 500}}>1</div>
    //     <div id='API' style={{height: 100}}>Api</div>
    //     <div id='test2' style={{height: 500}}>测试</div>
    //     <div id='test3' style={{height: 500}}>1</div>
    //   </ProCard>

    // </PageLayout>
    <DetailSetting />
  );
};

export default UseMemo;
