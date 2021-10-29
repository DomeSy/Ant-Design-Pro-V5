import React from 'react';
import { Button } from 'antd';
import { useBoolean } from 'ahooks';

const Mock: React.FC<any> = () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);

  return (
    <>
      <p>状态值：{JSON.stringify(state)}</p>
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <Button type='primary' onClick={() => toggle()}>
          切换
        </Button>
        <Button type='primary' onClick={() => setFalse()} style={{margin:'0 30px'}}>
          设置false
        </Button>
        <Button type='primary' onClick={() => setTrue()}>
          设置true
        </Button>
      </div>
    </>
  );
};

export default Mock;
