import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { useBoolean, useCounter, useCountDown, useNetwork, useSet, useSetState, useToggle, useWhyDidYouUpdate } from 'ahooks';
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
  const [targetDate, setTargetDate] = useState<any>(Method.getDate({add: 3}));
  const [countdown, formattedRes] = useCountDown({
    targetDate,
  });

  useEffect(() => {
    setTargetDate(Method.getDate({add: 2}))
  }, [])

  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  return <div>设置时间为后天，目标时间为大后天：{days} 天， {hours} 小时 {minutes} 分钟 {seconds} 秒 {milliseconds}</div>
}

const CountDownTest2: React.FC<any> = () => {
  const [targetDate, setTargetDate] = useState<any>(Method.getDate({add: 3}));

  const [countdown, formattedRes] = useCountDown({
    targetDate,
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

  const [countdown, formattedRes] = useCountDown({
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

export const MockCounter: React.FC<any> = () => {

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

export const MockNetwork: React.FC<any> = () => {
  const networkState = useNetwork();

  return (
    <>
      <div>监听网络状态</div>
      <div>网络是否在线：{JSON.stringify(networkState.online)}</div>
      <div>在线与不在线最后改变时间：{JSON.stringify(networkState.since)}</div>
      <div>当前连接下评估的往返时延：{JSON.stringify(networkState.rtt)}</div>
      <div>设备使用与所述网络进行通信的连接的类型：{JSON.stringify(networkState.type)}</div>
      <div>有效带宽估算：{JSON.stringify(networkState.downlink)}(兆比特/秒)</div>
      <div>最大下行速度：{JSON.stringify(networkState.downlinkMax)}(兆比特/秒)</div>
      <div>用户代理是否设置了减少数据使用的选项：{JSON.stringify(networkState.saveData)}</div>
      <div>网络连接的类型：{JSON.stringify(networkState.effectiveType)}</div>
    </>
  );
};

export const MockSet: React.FC<any> = () => {
  const [set, { add, remove, reset }] = useSet(['Hello']);
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
        <Button type='primary' style={{marginRight: 8}} onClick={() => remove('Hello')} >删除 Hello</Button>
        <Button type='primary' style={{marginRight: 8}} onClick={() => {reset(); countReset()}} >重置</Button>
      </div>

      <div style={{ marginTop: 16 }}>
        {console.log(set)}
        <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
      </div>
    </>
  );
};

interface State {
  hello: string;
  count: number;
  [key: string]: any;
}

export const MockSetState: React.FC<any> = () => {
  const [state, setState] = useSetState<State>({
    hello: '',
    count: 0,
  });

  return (
    <>
      <div style={{justifyContent: 'flex-start', display:'flex',}}>
        <Button type='primary' style={{marginRight: 8}} onClick={() => setState({ hello: 'domesy' })}>
          设置 hello
        </Button>
        <Button type='primary' style={{marginRight: 8}} onClick={() => setState({ domesy: '欢迎👏🏻' })} >设置任意值，domesy</Button>
        <Button type='primary' style={{marginRight: 8}} onClick={() => setState((prev) => ({ count: prev.count + 1 }))} >加1</Button>
      </div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export const MockToggle: React.FC<any> = () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');
  const [boolean , { toggle:toggleBool, set: toggleSet }] = useToggle(false);

  return (
    <>
      <div style={{fontWeight: 'bolder'}}>基础用法（与useBoolean使用一直）:</div>
      <div style={{marginTop: 8, fontWeight: 'bolder'}}>状态：{JSON.stringify(boolean)}</div>
      <div style={{justifyContent: 'flex-start', display:'flex', marginTop: 8}}>
        <Button type='primary' style={{marginRight: 8}} onClick={() =>  toggleBool()}>切换</Button>
        <Button type='primary' style={{marginRight: 8}} onClick={() =>  toggleSet(false)}>切换1</Button>
        <Button type='primary' style={{marginRight: 8}} onClick={() =>  toggleSet(true)}>切换2</Button>

      </div>
      <div style={{marginTop: 8, fontWeight: 'bolder'}}>高级用法:</div>
      <div style={{marginTop: 8}}>两种状态切换：{state}</div>
      <div style={{justifyContent: 'flex-start', display:'flex', marginTop: 8}}>
        <Button type='primary' style={{marginRight: 8}} onClick={() =>  toggle()}>切换</Button>
        <Button type='primary' style={{marginRight: 8}} onClick={() => set('Hello1')} >切换为 hello</Button>
        <Button type='primary' style={{marginRight: 8}} onClick={() => set('World')} >切换为 World</Button>
      </div>
      <div style={{justifyContent: 'flex-start', display:'flex', marginTop: 8}}>
        <Button type='primary' style={{marginRight: 8}} onClick={() => setLeft()} >设置为Hello</Button>
        <Button type='primary' style={{marginRight: 8}} onClick={() => setRight()} >设置为World</Button>
      </div>
    </>
  );
};

const Demo: React.FC<{ count: number }> = (props) => {
  const [randomNum, setRandomNum] = useState(Math.random());

  useWhyDidYouUpdate('useWhyDidYouUpdateComponent', { ...props, randomNum });

  return (
    <div>
      <p>父传子的 number: {props.count}</p>
      <div>子组件的随机数：{randomNum}</div>
      <Button type="primary" style={{margin: '8px 0'}} onClick={() => setRandomNum(Math.random)}>更改子组件🎲</Button>
    </div>
  )
}

export const MockWhyDidYouUpdate: React.FC<any> = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{fontWeight: 'bolder', marginBottom: 8}}>需要在控制台查看是什么引起的 render</div>
      <Demo count={count} />
      <div style={{justifyContent: 'flex-start', display:'flex', marginTop: 8}}>
        <Button type='primary' style={{marginRight: 8}} onClick={() => setCount((prevCount) => prevCount + 1)}>加1</Button>
        <Button type='primary' style={{marginRight: 8}} onClick={() => setCount((prevCount) => prevCount - 1)} >减1</Button>
      </div>
    </>
  );
};

export default Mock;
