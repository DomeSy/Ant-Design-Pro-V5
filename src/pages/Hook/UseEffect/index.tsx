import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'useEffect'}).then((res) => {
      setDetail({
        ...res,
        code:{
          showCode: [
            {
              component: <Mock />,
              content: '通过接收父组件的值，实现 componentDidMount 和 componentDidUpdate的作用',
              code: `
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
