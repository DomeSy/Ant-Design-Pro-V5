import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, {  } from './mock'
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
              title: '管理 setInterval 的函数',
              id: 'code1',
              content: <div>
                <p>setInterval：简单的理解就是，每隔一段时间就执行的函数，类似于轮询</p>
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
