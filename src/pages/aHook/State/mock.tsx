import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useBoolean, useCountDown } from 'ahooks';

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

export const MockCountDown: React.FC<any> = () => {


  const [countdown, setTargetDate, formattedRes] = useCountDown({
    targetDate: '2021-10-31 24:00:00',

  });
  const [ show, setShow ] = useState<boolean>(false)
  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  useEffect(() => {
    setTargetDate('2021-10-31 13:58:00')
    setShow(true)
  }, [])

  // if(!show) return <div></div>

  return (
    <>
      {/* <p>{countdown === 0 ? 'Start Interval' : `Reset After ${Math.round(countdown / 1000)}s`}</p> */}
     <p>
        天数：{days} 天， {hours} 小时 {minutes} 分钟 {seconds} 秒 {milliseconds}
        {/* There are {days} days {hours} hours {minutes} minutes {seconds} seconds {milliseconds}{' '} */}
      </p>
    </>
  );
};

export default Mock;
