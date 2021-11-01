import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockCountDown, MockCounter, MockNetwork, MockSet } from './mock'
import { Method } from '@/utils'
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
import Method from '../../../utils/Method/index';

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
            {
              component: <MockCountDown />,
              title: '倒计时',
              content: <div>
                <p>useCountDown</p>
                <p>首先有两个值，一个是目标值（targetDate），一个是设置值，如果不设置初始值（setTargetDate），则默认为现在</p>
                <p>会自动计算离目标值的天月周等（formattedRes），同时也有据目标值的时间戳（countdown），注意这里的单位是毫秒，所以精确到秒为 Math.round(countdown / 1000) </p>
                <p>有常用的倒计时功能，并能控制停止时所触发的函数（onEnd）</p>
              </div>,
              code: `
  import React, { useEffect } from 'react';
  import { Button, message } from 'antd';
  import { useBoolean } from 'ahooks';
  import { Method } from '@/utils';
  const CountDownTest1: React.FC<any> = () => {
    const [countdown, setTargetDate, formattedRes] = useCountDown({
      targetDate: Method.getDate({add: 3}),
    });

    useEffect(() => {
      setTargetDate(Method.getDate({add: 2}))
    }, [])

    const { days, hours, minutes, seconds, milliseconds } = formattedRes;

    return <div>设置时间为后天，目标时间为大后天：{days} 天， {hours} 小时 {minutes} 分钟 {seconds} 秒 {milliseconds}</div>
  }

  const CountDownTest2: React.FC<any> = () => {
    const [countdown, setTargetDate, formattedRes] = useCountDown({
      onEnd: () => {
        message.info('已停止!')
      }
    });

    return <div style={{display: 'flex',justifyContent: 'flex-start'}}>
      倒计时：
      <Button style={{margin: '0 24px'}} type='primary' onClick={() => {
        setTargetDate(Date.now() + 60000);
      }}>{countdown === 0 ? '倒计时' : "Math.round(countdown / 1000)" +s}</Button>
      <Button onClick={() => {
        setTargetDate(undefined);
      }}>停止 </Button>
    </div>
  }

  const Mock: React.FC<any> = () => {
    const [countdown, setTargetDate, formattedRes] = useCountDown({
      targetDate: Method.getDate({add: 1}),
    });

    const { days, hours, minutes, seconds, milliseconds } = formattedRes;

    return (
      <>
        <div>距离下一天0点的数据：{days} 天， {hours} 小时 {minutes} 分钟 {seconds} 秒 {milliseconds}</div>
        <div></div>
        <CountDownTest1 />
        <div></div>
        <CountDownTest2 />
      </>
    };

  export default Mock;
              `
            },
            {
              component: <MockCounter />,
              title: '数字类型',
              content: <div>
                <p>useCounter: 数字管理器</p>
                <p>可以设置数字的范围，如：最大值、最小值，并有操作 增加，减少，设置，重置四个功能</p>
                <p>无论是初始值还是，增加，减少，所设定的值在 最大、最小值之间，如过高于最大值，则 current 为最大值，反之亦然</p>
              </div>,
              code: `
  import React from 'react';
  import { Button } from 'antd';
  import { useCounter } from 'ahooks';

  const Mock: React.FC<any> = () => {
    const [current, { inc, dec, set, reset }] = useCounter(100, { min: 1, max: 10 });

    return (
      <>
        <div>数字：{ current } 范围（最小：1，最大为：10）</div>
        <div style={{display: 'flex',justifyContent: 'flex-start', marginTop: 8}}>
          <Button type="primary" style={{marginRight: 8}} onClick={() => inc()}>加1</Button>
          <Button type="primary" style={{marginRight: 8}} onClick={() => inc(2)}>加2</Button>
          <Button type="primary" style={{marginRight: 8}} onClick={() => dec()}>减一</Button>
          <Button type="primary" style={{marginRight: 8}} onClick={() => set(3)}>设置为3</Button>
          <Button type="primary" onClick={() => reset()}>重置</Button>
        </div>
      </>
    );
    };

  export default Mock;
              `
            },
            {
              component: <MockSet />,
              title: '可管理的Set类型',
              content: 'MockSet: 包含 set(Set对象)，有功能：添加元素（add）、移除元素（remove）、判断元素是否存在（hsa）、重置（reset）功能',
              code: `
  import React from 'react';
  import { Button } from 'antd';
  import { useSet, useCounter } from 'ahooks';

  const Mock: React.FC<any> = () => {
    const [set, { add, has, remove, reset }] = useSet(['Hello']);
    const [current, { inc, reset:countReset }] = useCounter(1);

    return (
      <>
        <div style={{justifyContent: 'flex-start', display:'flex',}}>
          <Button type='primary' style={{marginRight: 8}} onClick={() => {
            inc()
            add(String(Method.getDate({add: current})))
          }}>
            日期加1
          </Button>
          <Button type='primary' style={{marginRight: 8}} onClick={() => remove('Hello')} disabled={!has('Hello')} >删除 Hello</Button>
          <Button type='primary' style={{marginRight: 8}} onClick={() => {reset(); countReset()}} >重置</Button>
        </div>

        <div style={{ marginTop: 16 }}>
          <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
        </div>
      </>
    );
  }

  export default Mock;
              `
            },
            {
              component: <MockNetwork />,
              title: '网络连接状态',
              content: <div>
                <p>useNetwork: 网络连接状态的一些信息</p>
              </div>,
              code: `
  import React from 'react';
  import { Button } from 'antd';
  import { useCounter } from 'ahooks';

  const Mock: React.FC<any> = () => {
    const [current, { inc, dec, set, reset }] = useCounter(100, { min: 1, max: 10 });

    return (
      <>
        <div>数字：{ current } 范围（最小：1，最大为：10）</div>
        <div style={{display: 'flex',justifyContent: 'flex-start', marginTop: 8}}>
          <Button type="primary" style={{marginRight: 8}} onClick={() => inc()}>加1</Button>
          <Button type="primary" style={{marginRight: 8}} onClick={() => inc(2)}>加2</Button>
          <Button type="primary" style={{marginRight: 8}} onClick={() => dec()}>减一</Button>
          <Button type="primary" style={{marginRight: 8}} onClick={() => set(3)}>设置为3</Button>
          <Button type="primary" onClick={() => reset()}>重置</Button>
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
