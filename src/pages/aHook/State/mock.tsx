import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { useBoolean, useCountDown } from 'ahooks';
import { Method } from '@/utils'

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
    }}>{countdown === 0 ? '倒计时' : `${Math.round(countdown / 1000)}s`}</Button>
    <Button onClick={() => {
      setTargetDate(undefined);
    }}>停止 </Button>
  </div>
}

export const MockCountDown: React.FC<any> = () => {

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
  );
};

export default Mock;
