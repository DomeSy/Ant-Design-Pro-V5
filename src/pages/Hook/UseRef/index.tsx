import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { CreateMock } from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'useRef'}).then((res) => {
      setDetail({
        ...res,
        code:{
          wrap: true,
          showCode: [
            {
              component: <Mock />,
              title: '基本使用',
              content: '可通过useRef来获取对应的属性值，比如说监听滚动条事件，可做懒加载等',
              code: `
  import React, { useState, useRef } from 'react';

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

  export default Mock;
              `
            },
            {
              title: '与createRef的区别',
              component: <CreateMock />,
              content: 'useRef 和 createRef 虽然类似，但不同点在于 createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用。所以 refFrom UseRef 的值并不会变',
              code: `
  import React, { useState, useRef, createRef } from 'react';
  import { Button } from 'antd';

  const CreateMock: React.FC<any> = () => {
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
      <p>Current render index: {renderIndex}</p>
      <p>refFrom UseRef: {refFromUseRef.current}</p>
      <p>refFrom CreateRef: {refFromCreateRef.current}</p>
      <Button type='primary' onClick={() => setRenderIndex(renderIndex + 1)} >点击</Button>
    </>
  };

  export default CreateMock;
              `
            }
          ]
        },
      })
    })
  }, []);

  return (
    <DetailSetting {...detail} />
  );
};

export default Index;
