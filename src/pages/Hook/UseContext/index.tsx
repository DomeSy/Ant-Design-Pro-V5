import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'useContext'}).then((res) => {
      setDetail({
        ...res,
        code:{
          showCode: [
            {
              component: <Mock />,
              content: '通过父组件点击，任意层级都可获取对应的值',
              code: `
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
              `
            }
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
