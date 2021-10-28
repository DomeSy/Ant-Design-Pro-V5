import React, { useState } from 'react';
import { Button } from 'antd';

const Mock: React.FC<any> = () => {
  const [count, setCount ] = useState<number>(0)

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', paddingRight: 200}}>
      <Button type='primary' onClick={() => setCount(count + 1)}>加1</Button>
      <div>{count}</div>
    </div>
  );
};

export default Mock;
