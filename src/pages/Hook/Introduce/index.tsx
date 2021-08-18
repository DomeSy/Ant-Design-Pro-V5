import React, { useState, useEffect } from 'react';
import { PageLayout, Card } from '@/components';
import type { CardLayoutListProps } from '@/components'
import { SendOutlined } from '@ant-design/icons';
import { queryList } from './services'
import { getNotices } from '@/services/ant-design-pro/api';

const Introduce: React.FC<any> = (props) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [list, setList] = useState<CardLayoutListProps[]>([])

  useEffect(() => {
    queryList().then((res) => {
      console.log(res,'---')
    })
    const list: CardLayoutListProps[] = [
      {
        title: 'useMemo',
        render: <div>
          当一个父组件中调用了一个子组件的时候，父组件的state发生变化，会导致父组件更新，而子组件虽然没有发生改变，但也会进行更新。
        </div>,
        extra: <a><SendOutlined /></a>,
        onClick: () => {
          console.log('11')
        }
      }
    ]
    setList(list)
    setLoading(false)
  }, []);

  return (
    <PageLayout
      loading={loading}
      content={
        <div>
          Hook是React16.8的特性,主要解决了函数式组件没有状态的问题，使代码结构更加简单，而在Ant
          Design Pro V5 中也是主推Hook，并设置useModel和useRequest的，大大提高开发效率!
        </div>
      }
    >
      <Card.Layout list={list} type={4}/>
    </PageLayout>
  );
};

export default Introduce;
