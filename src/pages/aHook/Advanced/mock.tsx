import React, { useState, useRef, useEffect } from 'react';
import { Button, message } from 'antd';
import { useCreation, useEventEmitter, useLockFn, useReactive } from 'ahooks';
import { EventEmitter } from 'ahooks/lib/useEventEmitter';

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

export const MockEventEmitter: React.FC<any> = () => {

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

function mockApiRequest() {
  return new Promise((resolve:any) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export const MockLockFn: React.FC<any> = () => {

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

export const MockReactive: React.FC<any> = () => {

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
