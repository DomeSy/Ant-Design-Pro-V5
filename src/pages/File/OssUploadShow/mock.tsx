import React, { useState, useCallback, memo } from 'react';
import { Button, message } from 'antd';

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

export const MockMemo: React.FC<any> = () => {
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

export default Mock;
