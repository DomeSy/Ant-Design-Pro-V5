import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'useReducer'}).then((res) => {
      setDetail({
        ...res,
        code:{
          showCode: [
            {
              component: <Mock />,
              content: '在 useReducer 传入 reducer 函数根据 action 来更新 state',
              code: `
  import React, { useState, useReducer } from 'react';
  import { Button } from 'antd';

  const Mock: React.FC<any> = () => {
    const [count, dispatch] = useReducer((state:any, action: any)=> {
      switch(action?.type){
        case 'add':
          return state + action?.payload;
        case 'sub':
          return state - action?.payload;
        default:
          return state;
      }
    }, 0);

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Button type='primary' onClick={() => dispatch({type: 'add', payload: 1})}>加1</Button>
          <Button type='primary' onClick={() => dispatch({type: 'sub', payload: 1})} style={{marginLeft: 24}}>减1</Button>
        </div>
        <div style={{marginTop: 20}}>count: {count}</div>
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
