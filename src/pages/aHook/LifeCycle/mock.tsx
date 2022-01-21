import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { useToggle, useMount, useUnmount, useUpdateEffect, useUpdate, useTrackedEffect, useDebounceEffect, useThrottleEffect } from 'ahooks';

const Test = () => {
  useMount(() => {
    message.info('装载');
  });

  useUnmount(() => {
    message.info('卸载');
  });
  return <div>初始页面</div>;
};

const Mock: React.FC<any> = () => {
  const [state, { toggle }] = useToggle(false);

  return (
    <>
      <Button type='primary' onClick={() => toggle()}>
        {state ? '卸载' : '装载'}
      </Button>
      {state && <Test />}
    </>
  );
};

export const MockUpdateEffect: React.FC<any> = () => {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);

  useEffect(() => {
    setEffectCount((c) => c + 1);
  }, [count]);

  useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
  }, [count]);

  return (
    <>
      <p>使用Effect: {effectCount}</p>
      <p>使用updateEffectCount: {updateEffectCount}</p>
      <Button type='primary' onClick={() => setCount((c) => c + 1)}>
        渲染
      </Button>
    </>
  );
};

export const MockTrackedEffect: React.FC<any> = () => {
  const [dep1, setDep1] = useState(0);
  const [dep2, setDep2] = useState(0);
  const [dep3, setDep3] = useState(0);
  const [depActiveList, setDepActiveList] = useState([false, false, false]);
  const [text, setText] = useState('第几个依赖项改变：')
  const [text1, setText1] = useState('当前的值：')
  const [text2, setText2] = useState('改变后的值：')

  const toggleDep = (index:number) => {
    const res = [...depActiveList];
    res[index] = !res[index]
    setDepActiveList(res)
  }

  useTrackedEffect((changes, previousDeps, currentDeps)=>{
    setText(`第几个依赖项改变：: ` + changes);
    setText1(`当前的值：: ` + previousDeps);
    setText2(`改变后的值：: ` + currentDeps);
  },[dep1, dep2, dep3])

  return (
    <>
      <p><input type="checkbox" checked={depActiveList[0]} onChange={() => toggleDep(0)} />
        &nbsp;第一个值 : {dep1}</p>
        <p>
        <input type="checkbox" checked={depActiveList[1]} onChange={() => toggleDep(1)} />
        &nbsp;第二个值 : {dep2}
      </p>
      <p>
        <input type="checkbox" checked={depActiveList[2]} onChange={() => toggleDep(2)} />
        &nbsp;第三个值 : {dep3}
      </p>
      <Button type='primary' onClick={() => {
        setText(``)
        setText1(``)
        setText2(``)
        depActiveList[0] && setDep1((c) => c + 1);
        depActiveList[1] && setDep2((c) => c + 1);
        depActiveList[2] && setDep3((c) => c + 1);
      }}>
        加 1
      </Button>
      <p>{text}</p>
      <p>{text1}</p>
      <p>{text2}</p>
    </>
  );
};

export const MockUpdate: React.FC<any> = () => {
  const update = useUpdate();

  return (
    <>
      <p>时间: {Date.now()}</p>
      <Button type='primary' onClick={() => update()}>
        强制更新
      </Button>
    </>
  );
};

export const MockDebounceEffect: React.FC<any> = () => {
  const [value, setValue] = useState<string>('hello');
  const [records, setRecords] = useState<string[]>([]);

  useDebounceEffect( () => {
      setRecords((val) => [...val, value]);
    },
    [value],
    {
      wait: 1000,
    },
  );

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <div style={{ marginTop: 16 }}>
        <ul>
          {records.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const MockThrottleEffect: React.FC<any> = () => {
  const [value, setValue] = useState<string>('hello');
  const [records, setRecords] = useState<string[]>([]);

  useThrottleEffect( () => {
      setRecords((val) => [...val, value]);
    },
    [value],
    {
      wait: 1000,
    },
  );

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <div style={{ marginTop: 16 }}>
        <ul>
          {records.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mock;
