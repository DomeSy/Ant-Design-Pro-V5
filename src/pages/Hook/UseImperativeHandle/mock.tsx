import React, { useState, useMemo } from 'react';
import { Button } from 'antd';

const Mock: React.FC<any> = () => {
  const [count, setCount ] = useState<number>(0)

  const add = useMemo(() => {
    return count + 1
  }, [count])

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', paddingRight: 50}}>
      <Button type='primary' onClick={() => setCount(count + 1)}>加1</Button>
      <div>count: {count}</div>
      <div>次数： {add}</div>
    </div>
  );
};

export default Mock;
