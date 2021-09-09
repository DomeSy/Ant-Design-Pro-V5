import React, { useState, useRef, createRef } from 'react';
import { Button } from 'antd';

const Mock: React.FC<any> = () => {
  const scrollRef = useRef<any>(null);
  const [clientHeight, setClientHeight ] = useState<number>(0)
  const [scrollTop, setScrollTop ] = useState<number>(0)
  const [scrollHeight, setScrollHeight ] = useState<number>(0)

  const onScroll = () => {
    if(scrollRef?.current){
      let clientHeight = scrollRef?.current.clientHeight; //可视区域高度
      let scrollTop  = scrollRef.current.scrollTop;  //滚动条滚动高度
      let scrollHeight = scrollRef.current.scrollHeight; //滚动内容高度
      setClientHeight(clientHeight)
      setScrollTop(scrollTop)
      setScrollHeight(scrollHeight)
    }
  }

  return (
    <div >
      <div >
        <p>可视区域高度：{clientHeight}</p>
        <p>滚动条滚动高度：{scrollTop}</p>
        <p>滚动内容高度：{scrollHeight}</p>
      </div>
      <div style={{height: 200, overflowY: 'auto'}} ref={scrollRef} onScroll={onScroll} >
        <div style={{height: 2000}}></div>
      </div>
    </div>
  );
};

export const CreateMock: React.FC<any> = () => {
  const [renderIndex, setRenderIndex] = React.useState(1);
  const refFromUseRef = React.useRef<number>();
  const refFromCreateRef = createRef<any>();

  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex;
  }

  if (!refFromCreateRef.current) {
    // @ts-ignore
    refFromCreateRef.current = renderIndex;
  }

  return <>
    <p style={{marginBottom: 50}}>Current render index: {renderIndex}</p>
    <p style={{marginBottom: 50}}>refFrom UseRef: {refFromUseRef.current}</p>
    <p style={{marginBottom: 50}}>refFrom CreateRef: {refFromCreateRef.current}</p>
    <Button type='primary' style={{marginBottom: 17}} onClick={() => setRenderIndex(renderIndex + 1)} >点击</Button>
  </>
}

export default Mock;
