import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'useState'}).then((res) => {
      setDetail({
        ...res,
        code:{
          showCode: [
            {
              component: <Mock />,
              content: '点击按钮加1',
              code: `
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
