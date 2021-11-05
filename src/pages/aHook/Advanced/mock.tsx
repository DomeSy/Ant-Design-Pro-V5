import React, { useState } from 'react';
import { Button } from 'antd';
import { useInterval } from 'ahooks';

const Mock: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState<number | null>(1000);

  useInterval(
    () => {
      setCount(count + 1);
    },
    interval,
    { immediate: true },
  );


  return (
    <>
      <div style={{fontWeight: 'bolder'}}>高阶用法：</div>
      <div style={{marginTop: 8}}>每隔{interval || 0}ms，数字加 1： {count}</div>
      <div style={{marginTop: 8}}>相隔时间：{interval}</div>
      <div style={{marginTop: 8, display: 'flex', justifyContent: 'flex-start'}}>
        <Button type='primary' style={{marginRight: 16}} onClick={() => {
          if(typeof interval === 'number') setInterval(interval + 1000)
        }}>加1s</Button>
        <Button type='primary' style={{marginRight: 16}} onClick={() => setInterval(1000)}>重置</Button>
        <Button type='primary' style={{marginRight: 16}} onClick={() => setInterval(null)}>清除</Button>
      </div>
    </>
  );
};


export default Mock;
