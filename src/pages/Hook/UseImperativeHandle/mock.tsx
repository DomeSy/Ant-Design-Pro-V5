import React, { useState, useImperativeHandle, useRef } from 'react';
import { Button } from 'antd';

const Children: React.FC<any> = ({cRef}) => {

  const [count, setCount] = useState<number>(0)

  const add = () => {
    setCount((c) => c + 1)
  }

  useImperativeHandle(cRef, () => ({
    add
  }))

  return <div style={{marginBottom: 20}}>
    <p>点击次数：{count}</p>
    <Button type='primary' onClick={() => add()}>加1</Button>
  </div>
}


const Mock: React.FC<any> = () => {
  const ref = useRef<any>(null)

  return (
    <div>
      <Children cRef={ref} />
      <Button type='primary' onClick={() => {
        ref.current.add()
      }}>父节点加1</Button>
    </div>
  );
};

export default Mock;
