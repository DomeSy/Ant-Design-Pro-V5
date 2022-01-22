import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockTimeout, MockDebounce, MockDebounceFn, MockThrottle, MockThrottleFn } from './mock'
import type { AnchorLinkProps } from '@/components'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])
  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'SideEffect'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          wrap: true,
          showCode: [
            {
              component: <Mock />,
              title: '管理 setInterval 的函数',
              id: 'code1',
              content: <div>
                <p>useInterval：简单的理解就是，每隔一段时间就执行的函数，类似于轮询</p>
                <p>使用：三个参数 fn delay option</p>
                <p>fn：重复调用的函数</p>
                <p>delay：间隔时间，当值为 null 或 undefined 会停止计时器</p>
                <p>option：对象，包含 immediate（是否在首次进行渲染，默认为false）</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useInterval } from 'ahooks';

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
    const [interval, setInterval] = useState<number | null>(1000);

    useInterval(
      () => {
        setCount(count + 1);
      },
      interval,
      { immediate: true },
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
          <Button type='primary' style={{marginRight: 16}} onClick={() => setInterval(null)}>清除</Button>
        </div>
      </>
    );
  };

  export default Mock;

              `
            },
            {
              component: <MockTimeout />,
              title: '管理 setInterval 的函数',
              id: 'code2',
              content: <div>
                <p>useTimeout：处理计时器函数的Hook</p>
                <p>使用：两个参数 fn delay</p>
                <p>fn：重复调用的函数</p>
                <p>delay：间隔时间，当值为 null 或 undefined 会停止计时器</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useTimeout } from 'ahooks';

  const Mock: React.FC<any> = () => {
    const [count, setCount] = useState(0);

    useTimeout(() => {
      setCount(count + 1);
    }, 2000);

    return (
      <div>2000ms 后数字加1： {count}</div>
    );
  };

  export default Mock;

              `
            },
            {
              component: <MockDebounce />,
              title: '对值的防抖',
              id: 'code3',
              content: <div>
                <p>useDebounce：对值进行防抖的hook</p>
                <p>使用：const debouncedValue = useDebounce(value: any, {'{ wait: number}'}])</p>
                <p>value: 防抖的值， wait：超时时间</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useDebounce } from 'ahooks';

  const Mock: React.FC<any> = () => {
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

  export default Mock;

              `
            },
            {
              component: <MockDebounceFn />,
              title: '对函数的防抖',
              id: 'code4',
              content: <div>
                <p>useDebounceFn：对函数进行防抖的hook</p>
                <p>频繁调用run方法，但只会执行最后一遍</p>
                <p>使用方法： const {`{ run, cancel, flush} = useDebounceFn(fn: (...args:any) => any, { wait: number})`}</p>
                <p>run(防抖进行的函数)、cancel(取消当前防抖)、flush(当前防抖立即调用)</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useDebounceFn } from 'ahooks';

  const Mock: React.FC<any> = () => {
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

  export default Mock;

              `
            },
            {
              component: <MockThrottle />,
              title: '对值的节流',
              id: 'code5',
              content: <div>
                <p>useThrottle：对值进行节流的hook</p>
                <p>频繁调用run方法，但只会执行最后一遍</p>
                <p>使用方法： const {`throttledValue = useThrottle(value: any, { wait: number})`}</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useThrottle } from 'ahooks';

  const Mock: React.FC<any> = () => {
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

  export default Mock;

              `
            },
            {
              component: <MockThrottleFn />,
              title: '对函数的节流',
              id: 'code6',
              content: <div>
                <p>useThrottleFn：对函数进行节流的hook</p>
                <p>频繁调用 run，但只会每隔 500ms 执行一次相关函数。</p>
                <p>使用方法： const {`{ run, cancel, flush} = useThrottleFn(fn: (...args:any) => any, { wait: number})`}</p>
                <p>run(节流进行的函数)、cancel(取消当前节流)、flush(当前节流立即调用)</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useThrottleFn } from 'ahooks';

  const Mock: React.FC<any> = () => {
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

              `
            },
          ]
        },
      })
    })
  }, []);

  return (
    <DetailSetting {...detail} anchorList={anchorList}  />
  );
};

export default Index;
