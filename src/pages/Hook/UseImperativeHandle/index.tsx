import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'useImperativeHandle'}).then((res) => {
      setDetail({
        ...res,
        code:{
          showCode: [
            {
              component: <Mock />,
              content: '子组件的功能是每次点击加1，父组件通过传递ref，然后子组件通过 useImperativeHandle 暴露点击方法给父组件，每次执行加5',
              code: `
  import React, { useState, useRef, useImperativeHandle } from 'react';
  import { Button, message } from 'antd';

  const Mock: React.FC<any> = () => {
    const childRef = useRef<any>(null);
    return (
      <div>
        <Test cRef={childRef} />
        <Button type='primary' style={{marginTop: 24}} onClick={() => {
          message.success('父组件点击调用子组件')
          childRef?.current?.clickNumber(5)
        }} >父组件点击 + 5</Button>
      </div>
    );
  };

  const Test: React.FC<{cRef: any}> = ({cRef}) => {
    const [count, setCount ] = useState<number>(0)

    const onClick = (number:number) => {
      message.success('点击加次数: '+ number)
      setCount(count + number)
    }

    useImperativeHandle(cRef, () => ({
      clickNumber: (number: number) => {
        onClick(number)
      }
    }))

    return <div>
      <div>点击次数: {count}</div>
      <Button style={{marginTop: 24}} onClick={() => onClick(1)}>子组件点击 + 1</Button>
    </div>
  }

  export default Mock;
              `
            }
          ]
        },
      })
    })
  }, []);

  return (
    <DetailSetting {...detail} />
  );
};

export default Index;
