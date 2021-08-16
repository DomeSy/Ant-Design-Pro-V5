import type { CardLayoutProps, CardLayoutListProps } from './interface';
import ProCard from '@ant-design/pro-card';

import { PageLayout } from '@/components'
import { useState, useEffect } from 'react';

/**
 * @module CardLayOut
 *
 * 通过卡片来实现响应式布局
 *
 */

const CardLayout: React.FC<CardLayoutProps>  = ({list, gutter, rowStyle, colStyle, ...props}) => {

  const [cardList, setList] = useState<React.ReactNode[]>([])

  useEffect(() => {
    initCardList()
  }, [])

  const initCardList = () => {
    let result:React.ReactNode[] = []
    list.map((item, index) => {
      console.log(typeof item)
      if(item.render){
        const { render, ...otherProps} = item;
        const arr = cardRender({children: render, ...otherProps})
        result = [...result, arr]
      } else {
        const arr = cardRender({children: item});
        result = [...result, arr]
      }
    })
    setList(result)
  }

  const cardRender = ({children, ...otherProps}:CardLayoutListProps) => {
    return <ProCard
    headerBordered
    hoverable
    {...otherProps}
  >
    {children}
  </ProCard>
  }

  return <>
    {
      Array.isArray(list) && (list.length === 2 || list.length === 4)  ?
        <>
          {cardList.length !== 0 && <PageLayout.Way gutter={gutter} rowStyle={rowStyle} colStyle={colStyle} list={cardList} />}
        </>
      :
      <div style={{color: 'red'}}>list必须为数组，并且元素个数2个或4个</div>
      }
  </>;
};

export default CardLayout
