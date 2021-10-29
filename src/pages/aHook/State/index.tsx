import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, {  } from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'State'}).then((res) => {
      setDetail({
        ...res,
        code:{
          wrap: true,
          showCode: [
            {
              component: <Mock />,
              title: '布尔值',
              content: <div>
                <p>useBoolean：切换布尔值</p>
                <p>toggle：触发可改变其状态值</p>
                <p>setTrue：将状态设置为true</p>
                <p>setFalse：将状态设置为false</p>
              </div>,
              code: `
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
              `
            },
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
