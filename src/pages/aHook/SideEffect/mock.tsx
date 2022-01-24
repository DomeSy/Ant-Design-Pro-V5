import React, { useState } from 'react';
import { Button } from 'antd';
import { useInterval, useTimeout, useDebounce, useDebounceFn, useThrottle, useThrottleFn } from 'ahooks';

const Test: React.FC<any> = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <>
      <div style={{fontWeight: 'bolder'}}>基础用法：</div>
      <div style={{marginTop: 8}}>每隔1000ms，数字加 1： {count}</div>
    </>
  );
}

const Mock: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState<number>(1000);

  useInterval(() => {
    setCount(count + 1);
  },
  interval,
  { immediate: true }
  );

  return (
    <>
      <Test />
      <div style={{fontWeight: 'bolder'}}>高阶用法：</div>
      <div style={{marginTop: 8}}>每隔{interval || 0}ms，数字加 1： {count}</div>
      <div style={{marginTop: 8}}>相隔时间：{interval}</div>
      <div style={{marginTop: 8, display: 'flex', justifyContent: 'flex-start'}}>
        <Button type='primary' style={{marginRight: 16}} onClick={() => {
          if(typeof interval === 'number') setInterval(interval + 1000)
        }}>加1s</Button>
        <Button type='primary' style={{marginRight: 16}} onClick={() => setInterval(1000)}>重置</Button>
        <Button type='primary' style={{marginRight: 16}} onClick={() => setInterval(0)}>清除</Button>
      </div>
    </>
  );
};

export const MockTimeout: React.FC<any> = () => {
  const [count, setCount] = useState(1);

  useTimeout(() => {
    setCount(count + 1);
  }, 3000);

  return (
    <div>3000ms 后数字加1： {count}</div>
  );
};

export const MockDebounce: React.FC<any> = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>500ms后才会变化: {debouncedValue}</p>
    </div>
  );
};

export const MockDebounceFn: React.FC<any> = () => {
  const [value, setValue] = useState(0);
  const { run } = useDebounceFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 500,
    },
  );

  return (
    <div>
      <p style={{ marginTop: 16 }}> 有效点击次数: {value} </p>
      <Button type="primary" onClick={() => {run()}}>快速点击</Button>
    </div>
  );
};

export const MockThrottle: React.FC<any> = () => {
  const [value, setValue] = useState<string>();
  const throttledValue = useThrottle(value, { wait: 500 });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="输入值"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>每隔 500ms 变化一次: {throttledValue}</p>
    </div>
  );
};

export const MockThrottleFn: React.FC<any> = () => {
  const [value, setValue] = useState(0);
  const { run } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    { wait: 500 },
  );

  return (
    <div>
      <p style={{ marginBottom: 16 }}> Clicked count: {value} </p>
      <Button type='primary' onClick={run}>快速点击</Button>
    </div>
  );
};

export default Mock;
