import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockUpdateEffect, MockUpdate, MockTrackedEffect, MockDebounceEffect, MockThrottleEffect } from './mock'
import type { AnchorLinkProps } from '@/components'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])
  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'LifeCycle'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          wrap: true,
          showCode: [
            {
              component: <Mock />,
              title: '装载与卸载',
              id: 'code1',
              content: <div>
                <div>useMount：组件装载的时候调用，类似于 class 组件的 componentDidMount</div>
                <div>useUnmount：组件卸载的时候调用，类似于 class 组件的 componentWillUnmount</div>
              </div>,
              code: `
  import React from 'react';
  import { Button, message } from 'antd';
  import { useToggle, useMount, useUnmount } from 'ahooks';

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
        <button type="button" onClick={() => toggle()}>
          {state ? '卸载' : '装载'}
        </button>
        {state && <Test />}
      </>
    );
  };

  export default Mock;
              `
            },
            {
              component: <MockUpdateEffect />,
              title: '更新',
              id: 'code2',
              content: 'useUpdateEffect 在使用的时候与 useEffect 一致，不同时是 忽略了首次渲染',
              code: `
  import React, { useState, useEffect } from 'react';
  import { Button, message } from 'antd';
  import { useUpdateEffect } from 'ahooks';

  const Mock: React.FC<any> = () => {
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

  export default Mock;
              `
            },
            {
              component: <MockTrackedEffect />,
              title: '依赖改变',
              id: 'code3',
              content: <div>
                <p>当做一个比较复杂的功能时，我们所依赖的参数较多，我们可能需要做某一项依赖改变的时候才进行触发，这是就有一个非常棒的Api来帮助我们，就是 useTrackedEffect</p>
                <p>changes：第几个依赖项发生了改变</p>
                <p>previousDeps：依赖项当前的值</p>
                <p>currentDeps：依赖项改变后的值</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useTrackedEffect } from 'ahooks';

  const Mock: React.FC<any> = () => {
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
      setText('第几个依赖项改变：: ' + changes);
      setText1('当前的值：: ' + previousDeps);
      setText2('改变后的值：: ' + currentDeps);
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
          setText('')
          setText1('')
          setText2('')
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

  export default Mock;
              `
            },
            {
              component: <MockUpdate />,
              title: '强制更新',
              id: 'code4',
              content: 'useUpdate 可以使组件强制渲染',
              code: `
  import React from 'react';
  import { Button } from 'antd';
  import { useUpdate } from 'ahooks';

  const Mock: React.FC<any> = () => {
    const update = useUpdate();

    return (
      <>
        <p>时间: {Date.now()}</p>
        <Button type='primary' onClick={() => update()}>
          强制更新
        </Button>
      </
  };

  export default Mock;
              `
            },
            {
              component: <MockDebounceEffect />,
              title: '防抖',
              id: 'code5',
              content: 'useDebounceEffect： 增强 effect 的防抖能力',
              code: `
  import React, { useState } from 'react';
  import { useDebounceEffect } from 'ahooks';

  const Mock: React.FC<any> = () => {
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
      <>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Typed value"
          style={{ width: 280 }}
        />
        <p style={{ marginTop: 16 }}>
          <ul>
            {records.map((record, index) => (
              <li key={index}>{record}</li>
            ))}
          </ul>
        </p>
      </>
    );
  };

  export default Mock;
              `
            },
            {
              component: <MockThrottleEffect />,
              title: '节流',
              id: 'code6',
              content: 'useThrottleEffect: 增强 effect 的节流能力',
              code: `
  import React, { useState } from 'react';
  import { useThrottleEffect } from 'ahooks';

  const Mock: React.FC<any> = () => {
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
      <>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Typed value"
          style={{ width: 280 }}
        />
        <p style={{ marginTop: 16 }}>
          <ul>
            {records.map((record, index) => (
              <li key={index}>{record}</li>
            ))}
          </ul>
        </p>
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
    <DetailSetting {...detail} anchorList={anchorList} />
  );
};

export default Index;
