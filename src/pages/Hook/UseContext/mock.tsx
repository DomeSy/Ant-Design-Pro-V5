import React, { useState, createContext, useContext } from 'react';
import { Button } from 'antd';

const CountContext = createContext(-1)

const Mock: React.FC<any> = () => {
  const [count, setCount ] = useState<number>(0)

  return (
    <div>
      <Button type='primary' onClick={() => setCount(count + 1)}>加1</Button>
      <CountContext.Provider value={count}>
        <Test1 />
      </CountContext.Provider>
    </div>
  );
};

const Test1: React.FC<any> = () => {
  const count = useContext(CountContext)

  return <div style={{marginTop: 20}}>
    子组件获取到的count: {count}
    <Test2 />
  </div>
}

const Test2: React.FC<any> = () => {
  const count = useContext(CountContext)

  return <div style={{marginTop: 20}}>
    孙组件获取到的count: {count}
  </div>
}

export default Mock;
