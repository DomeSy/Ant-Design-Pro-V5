import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockMemo } from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'useCallback'}).then((res) => {
      setDetail({
        ...res,
        code:{
          wrap: true,
          showCode: [
            {
              component: <Mock />,
              title: '基本使用',
              content: '普通的加1会使count累计加1，而 useCallback加1 的值会一直是一，原因是缓存了count的初始值0，所以每次加1都是初始值加1，也就是 0+1',
              code: `
  import React, { useState, useCallback } from 'react';
  import { Button } from 'antd';
import [ from '../../../../config/routes';

  const Mock: React.FC<any> = () => {
    const [count, setCount] = useState(0);

    const callBackCount = useCallback(() => {
      setCount(count + 1)
    }, [])

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Button type='primary' onClick={() => setCount(count + 1)}>加1</Button>
          <Button type='primary' onClick={() => callBackCount()} style={{marginLeft: 24}}>callBack 加1</Button>
        </div>
        <div style={{marginTop: 20}}>count: {count}</div>
      </div>
    );
  };

  export default Mock;
              `
            },
            {
              component: <MockMemo />,
              title: '配合memo优化',
              content: '点击切换按钮，更新父组件时，子组件虽然没有更新，但也会刷新，可以看到，普通点击的按钮执行刷新，但useCallback点击并没有刷新，这样就会起到优化作用',
              contentTooltip: '打开控制台可看',
              code: `
  import React, { useState, useCallback } from 'react';
  import { Button } from 'antd';

  const MockMemo: React.FC<any> = () => {
    const [count,setCount] = useState(0)
    const [show,setShow] = useState(true)

    const  add = useCallback(()=>{
      setCount(count + 1)
    },[count])

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <TestButton title="普通点击" onClick={() => setCount(count + 1) }/>
          <TestButton title="useCallback点击" onClick={add}/>
        </div>
        <div style={{marginTop: 20}}>count: {count}</div>
        <Button onClick={() => {setShow(!show)}}> 切换</Button>
      </div>
    )
  }

  const TestButton = memo((props:any)=>{
    console.log(props.title)
    return <Button type='primary' onClick={props.onClick} style={props.title === 'useCallback点击' ? {
    marginLeft: 20
    } : undefined}>{props.title}</Button>
  })

  export default MockMemo;
              `
            },
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
