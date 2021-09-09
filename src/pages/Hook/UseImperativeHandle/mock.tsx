import React, { useState, useRef, useImperativeHandle } from 'react';
import { Button, message } from 'antd';

const Mock: React.FC<any> = () => {
  const childRef = useRef<any>(null);
  return (
    <div>
      <Test cRef={childRef} />
      <Button type='primary' style={{marginTop: 24}} onClick={() => {
        message.success('父组件点击调用子组件')
        childRef?.current?.clickNumber(5)
      }} >父组件点击 + 5</Button>
    </div>
  );
};

const Test: React.FC<{cRef: any}> = ({cRef}) => {
  const [count, setCount ] = useState<number>(0)

  const onClick = (number:number) => {
    message.success(`点击加次数：${number}`)
    setCount(count + number)
  }

  useImperativeHandle(cRef, () => ({
    clickNumber: (number: number) => {
      onClick(number)
    }
  }))

  return <div>
    <div>点击次数: {count}</div>
    <Button style={{marginTop: 24}} onClick={() => onClick(1)}>子组件点击 + 1</Button>
  </div>
}

export default Mock;
