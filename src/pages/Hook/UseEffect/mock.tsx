import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const Mock: React.FC<any> = () => {
  const [count, setCount ] = useState<number>(0)

  return (
    <div>
      <Button type='primary' onClick={() => setCount(count + 1)}>加一</Button>
      <Test count={count} />
    </div>
  );
};

const Test: React.FC<{count: number}> = ({count}) => {

  const [count1, setCount1 ] = useState<number | false>(false)
  const [count2, setCount2 ] = useState<number | false>(false)

  useEffect(() => {
    setCount1(count)
  },[])

  useEffect(() => {
    setCount2(count)
  },[count])

  return <div style={{display: 'flex', justifyContent: 'space-between', marginRight: 200, marginTop: 50}}>
    <div>只执行一次: {count1}</div>
    <div>执行多次: {count2}</div>
  </div>
}

export default Mock;
