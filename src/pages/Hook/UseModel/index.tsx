import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockModel, MockModelRet } from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'useModel'}).then((res) => {
      setDetail({
        ...res,
        code:{
          wrap: true,
          showCode: [
            {
              title: '基本使用',
              component: <Mock />,
              content: '获取当前的值，@@initialState 为 Ant Design ProV5 中内部封装好的',
              code: `
  import React from 'react';
  import { useModel } from 'umi';
  import { Button, message } from 'antd';

  const Mock: React.FC<any> = () => {
    const { initialState, setInitialState } = useModel('@@initialState');

    return (
      <div>
        <div style={{marginBottom: 20}}>initialState 是指的对象</div>
        <div style={{marginBottom: 20}}>setInitialState 是设置值的方法</div>
        <Button onClick={() => {
          message.success('打开控制台看看')
          console.log(initialState)
        }}>获取initialState值</Button>
      </div>>
    );
  };

  export default Mock;
              `
            },
            {
              title: '自定义Model',
              component: <MockModel />,
              content: '着这里暴露了一个值(init)，和两个方法: 设置初始值（setInit）累加值（setAdd），设置初始值会有2s的延迟',
              code: `
  import React from 'react';
  import { useModel } from 'umi';
  import { Button } from 'antd';

  const MockModel: React.FC<any> = () => {
    const { init, setInit, setAdd, loading } = useModel('test.modelTest');

    return <div>
      <div style={{ marginBottom: 14 }}> count 对应的值{init.count}</div>
      <Button loading={loading} style={{ marginBottom: 18 }} type='primary' onClick={() => setInit(5)} >设置count为5</Button>
      <br />
      <Button type='primary' onClick={() => setAdd(init.count)} >累加1</Button>
    </div>
  }

  export default MockModel;

  // src/models/test/modelTest.ts 文件下
  import { useState, useCallback } from 'react';

  interface Props {
    count?: number
  }

  const initInfoValue: Props = {
    count: 1,
  }

  export default function modelTest() {

    const [init, setInitValue] = useState(initInfoValue);

    const setInit = useCallback((res:any) => {
      setInitValue({count: res})
    }, [init])

    const setAdd= useCallback((res:any) => {
      setInitValue({ count: res +1})
    }, [init])

    return {
      init,
      setAdd,
      setInit
    };
  }
              `
            },
            {
              title: '性能优化',
              component: <MockModelRet />,
              content: 'useModel 有一个可选的第二个参数，用于性能优化，你可以理解为，当需要这个方法就写入，不需要就不要，返回的值就是解析的值',
              code: `
  import React from 'react';
  import { useModel } from 'umi';
  import { Button } from 'antd';

  const MockModel: React.FC<any> = () => {
    const { init, setInit, setAdd } = useModel('test.modelTest');

    return <div>
      <div style={{ marginBottom: 14 }}> count 对应的值{init.count}</div>
      <Button style={{ marginBottom: 18 }} type='primary' onClick={() => setInit(5)} >设置count为5</Button>
      <br />
      <Button type='primary' onClick={() => setAdd(init.count)} >累加1</Button>
    </div>
  }

  export default MockModel;

  // src/models/test/modelTest.ts 文件下
  import { useState, useCallback } from 'react';

  interface Props {
    count?: number
  }

  const initInfoValue: Props = {
    count: 1,
  }

  export default function modelTest() {

    const [init, setInitValue] = useState(initInfoValue);

    const setInit = useCallback((res:any) => {
      setInitValue({count: res})
    }, [init])

    const setAdd= useCallback((res:any) => {
      setInitValue({ count: res +1})
    }, [init])

    return {
      init,
      setAdd,
      setInit
    };
  }
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
