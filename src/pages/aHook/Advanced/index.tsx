import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockEventEmitter, MockLockFn, MockReactive } from './mock'
import type { AnchorLinkProps } from '@/components'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])
  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'Advanced'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          showCode: [
            {
              component: <Mock />,
              title: '结合 useMemo 或 useRef',
              id: 'code1',
              content: <div>
                <p>useCreation：是 useMemo 或 useRef 的替代品。</p>
                <p>useMemo 不能保证被 memo 的值一定不会被重计算，而 useCreation 可以保证这一点</p>
                <p>useRef 在基础上与 useCreation 使用场景类似，但在复杂常量的创建，useRef 却容易出现潜在的性能隐患</p>
                <p>如何使用：{`function useCreation<T>(factory: () => T, deps: any[]): T`}</p>
                <p>factory: 用来创建所需对象的函数，deps：触发的依赖项</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useCreation } from 'ahooks';

  class Foo {
    constructor() {
      this.data = Math.random();
    }

    data: number;
  }

  const Mock: React.FC<any> = () => {
    const foo1 =  new Foo();
    const foo = useCreation(() => new Foo(), []);
    const [, setFlag] = useState({});

    return (
      <>
        <div>未加入useCreation：{foo1.data}</div>
        <div style={{marginTop: 8}}>组件渲染，却不会影响Foo的实例：{foo.data}</div>
        <Button type='primary' style={{marginTop: 8}} onClick={() => {
          setFlag({});
        }}>渲染</Button>
      </>
    );
  };

  export default Mock;
              `
            },
            {
              component: <MockEventEmitter />,
              title: '共享事件通知',
              id: 'code2',
              content: <div>
                <p>useEventEmitter：适合的是在距离较远的组件之间进行事件通知，或是在多个组件之间共享事件通知。</p>
                <p>当页面十分复杂的时候，我们需要事件的共享（而非参数的共享），这时我们需要 useEventEmitter </p>
                <p>useEventEmitter 相当于 useImperativeHandle 的增强版，他可以多层级的传递，多个组件进行共享事件通知</p>
                <p>如何使用： const click = useEventEmitter();</p>
                <p>绑定事件（订阅事件）： click.useSubscription({"callback: (val: T) => void)=> void"} </p>
                <p>调取事件（发送通知）： click.emit{"(val: T) => void"} </p>
              </div>,
              code: `
  import React, { useState, useRef } from 'react';
  import { Button } from 'antd';
  import { useEventEmitter } from 'ahooks';
  import { EventEmitter } from 'ahooks/lib/useEventEmitter';

  const Children: React.FC<{click: EventEmitter<number>}> = ({ click }) => {

    const [ count, setCount ] = useState<number>(0);
    const ref = useRef<any>(null)

    click.useSubscription((val) => {
      val === 1 ? message.info('父组件点击的') : message.info('兄弟节点点击的')
      ref.current.click();
    })

    const onClick = () => {
      setCount(v => v+1)
    }

    return <>
      <div>点击次数：{count}</div>
      <Button ref={ref} type='primary' style={{margin: '8px 0'}} onClick={onClick} >子组件点击</Button>
    </>
  }

  const Children1:  React.FC<{click: EventEmitter<number>}> = ({click}) => {
    return <Button style={{marginTop: 8}} type="primary" onClick={() => click.emit(2)}>兄弟节点点击</Button>
  }

  const Mock: React.FC<any> = () => {
    const click = useEventEmitter<number>();

    return (
      <>
        <Children click={click} />
        <div>
          <Button  type='primary' onClick={() => {
            click.emit(1)
          }} >父组件组件点击</Button>
        </div>
        <Children1 click={click} ></Children1>
      </>
    );
  };

  export default Mock;
              `
            },
            {
              component: <MockLockFn />,
              title: '竞态锁',
              id: 'code3',
              content: 'useLockFn：用于给一个异步函数增加竞态锁，防止并发执行。',
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useLockFn } from 'ahooks';

  function mockApiRequest() {
    return new Promise((resolve:any) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  const Mock: React.FC<any> = () => {
    const [count, setCount] = useState(0);

    const submit = useLockFn(async () => {
      message.info('开始执行')
      await mockApiRequest();
      setCount((v) => v + 1)
      message.info('执行结束')
    })

    return (
      <>
        <div>点击次数：{count}</div>
        <Button style={{marginTop: 8}} type='primary' onClick={submit} >点击</Button>
      </>
    );
  };

  export default Mock;
              `
            },
            {
              component: <MockReactive />,
              title: '另一种useState',
              id: 'code4',
              content: <div>
                <p>useReactive：一种数据响应式的操作体验,定义数据状态不需要写useState , 直接修改属性即可刷新视图。</p>
                <p>可进行任意属性的复制，包括操作属性，类似于全局变量，可以直接改变</p>
              </div>,
              code: `
  import React, { useState } from 'react';
  import { Button } from 'antd';
  import { useReactive } from 'ahooks';

  const Mock: React.FC<any> = () => {

    const state = useReactive<any>({
      count: 0,
      inputVal: 'hello',
      bool: false,
      arr: [],
      bug: '',
      bugs: ['domesy', 'react', 'hook'],
      addBug(bug:string) {
        this.bugs.push(bug);
      },
      get bugsCount() {
        return this.bugs.length;
      },
    });

    return (
      <>
        <div style={{fontWeight: 'bold'}}>基本使用：</div>
        <div style={{marginTop: 8}}> 对数字进行操作：{state.count}</div>
        <div style={{margin: '8px 0', display: 'flex',justifyContent: 'flex-start'}}>
          <Button type="primary" onClick={() => state.count++ } >加1</Button>
          <Button type="primary" style={{marginLeft: 8}} onClick={() => state.count-- } >减1</Button>
          <Button type="primary" style={{marginLeft: 8}} onClick={() => state.count = 5 } >设置为5</Button>
        </div>
        <div style={{marginTop: 8}}> 对Boolean进行操作：{state.bool ? 'true' : 'false'}</div>
        <div style={{margin: '8px 0', display: 'flex',justifyContent: 'flex-start'}}>
          <Button type="primary" onClick={() => state.bool = !state.bool } >切换状态</Button>
        </div>
        <div style={{marginTop: 8}}> 对字符串进行操作：{state.inputVal}</div>
        <div style={{margin: '8px 0', display: 'flex',justifyContent: 'flex-start'}}>
          <Button type="primary" onClick={() => state.inputVal = 'hello' } >设置为 hello</Button>
          <Button type="primary" style={{marginLeft: 8}} onClick={() => state.inputVal = 'word' } >设置为 word</Button>
          <Button type="primary" style={{marginLeft: 8}}
          onClick={() => {
            if(state.inputVal === 'word'){
              state.inputVal = 'hello'
            }else{
              state.inputVal = 'word'
            }
          }} >切换</Button>
        </div>
        <div style={{marginTop: 8}}> 对数组进行操作：{JSON.stringify(state.arr)}</div>
        <div style={{margin: '8px 0', display: 'flex',justifyContent: 'flex-start'}}>
          <Button type="primary" onClick={() => state.arr.push(Math.floor(Math.random() * 100))} >push</Button>
          <Button type="primary" style={{marginLeft: 8}} onClick={() => state.arr.pop()} >pop</Button>
          <Button type="primary" style={{marginLeft: 8}} onClick={() => state.arr.shift()} >shift</Button>
          <Button type="primary" style={{marginLeft: 8}} onClick={() => state.arr.unshift(Math.floor(Math.random() * 100))} >unshift</Button>
          <Button type="primary" style={{marginLeft: 8}} onClick={() => state.arr.reverse()} >reverse</Button>
          <Button type="primary" style={{marginLeft: 8}} onClick={() => state.arr.sort()} >sort</Button>
        </div>
        <div style={{fontWeight: 'bold', marginTop: 8}}>计算属性：</div>
        <div style={{marginTop: 8}}>数量：{ state.bugsCount } 个</div>
        <div style={{margin: '8px 0'}}>
          <form
            onSubmit={(e) => {
              state.bug ? state.addBug(state.bug) : state.addBug('domesy')
              state.bug = '';
              e.preventDefault();
            }}
          >
            <input type="text" value={state.bug} onChange={(e) => (state.bug = e.target.value)} />
            <button type="submit"  style={{marginLeft: 8}} >增加</button>
            <Button type="primary" style={{marginLeft: 8}} onClick={() => state.bugs.pop()}>删除</Button>
          </form>

        </div>
        <ul>
          {
            state.bugs.map((bug:any, index:number) => (
              <li key={index}>{bug}</li>
            ))
          }
        </ul>
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
    <DetailSetting {...detail} anchorList={anchorList}  />
  );
};

export default Index;
