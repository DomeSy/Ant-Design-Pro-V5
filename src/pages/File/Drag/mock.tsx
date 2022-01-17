import React, { useState } from 'react';
import { Drag } from '@/components';
import { dragTest, dragTest1 } from './test'
import { Input, message, Button } from 'antd';
import img from './delete.png'

const Mock: React.FC<any> = () => {
  return (
    <Drag
      list={dragTest}
      id="value"
      render={(data) => {
        return <div style={{margin: 3, fontSize: 13, border: '1px dashed #cccccc', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>{data.data}</div>
      }}
      onChange={(list) => {
        message.info('数据置换成功，打卡控制台看看吧~')
        console.log('改变后的数据:', list)
      }}
    />
  );
};

export const MockTools: React.FC<any> = () => {
  const [data, setData] = useState<any>('')
  const [list, setList] = useState<any>(dragTest1)

  return (
    <>
      <Input style={{width: 200}} onChange={(e) => setData(e.target.value)} value={data} />
      <Button style={{marginLeft: 12, marginBottom: 20}} type='primary' onClick={() => {
        if(data){
          const test:any = [ ...list, { data, value: Math.random(), }]
          setList(test)
          setData('')
        }
      }}>增加</Button>
      <Drag
        list={list}
        id="value"
        render={(data) => {
          return <div style={{margin: 3, fontSize: 13, position:'relative',  border: '1px dashed #3b9de9', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>
            <img
              src={img}
              style={{position: 'absolute', top: -1, right: -1, width: 16, height: 16, cursor: 'pointer'}}
              onClick={() => {
                const test = list.filter((item:any) => item.id !== data.id)
                setList(test)
              }}
            />
            {data.data}
          </div>
        }}
        onChange={(list) => {
          message.info('数据置换成功，打卡控制台看看吧~')
          console.log('改变后的数据:', list)
          setList([...list])
        }}
      />
    </>
  );
};

export const MockBlock: React.FC<any> = () => {
  return (
    <Drag
      list={dragTest1}
      id="value"
      render={(data) => {
        return <div style={{margin: 3, fontSize: 13, border: '1px dashed #cccccc', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>{data.data}</div>
      }}
      block
      onChange={(list) => {
        message.info('数据置换成功，打卡控制台看看吧~')
        console.log('改变后的数据:', list)
      }}
    />
  );
};

export const MockBlockTools: React.FC<any> = () => {
  const [data, setData] = useState<any>('')
  const [list, setList] = useState<any>(dragTest1)

  return (
    <>
      <Input style={{width: 200}} onChange={(e) => setData(e.target.value)} value={data} />
      <Button style={{marginLeft: 12, marginBottom: 20}} type='primary' onClick={() => {
        if(data){
          const test:any = [ ...list, { data, value: Math.random(), }]
          setList(test)
          setData('')
        }
      }}>增加</Button>
      <Drag
        list={list}
        id="value"
        block
        render={(data) => {
          return <div style={{margin: 3, fontSize: 13, position:'relative',  border: '1px dashed #3b9de9', borderRadius: 4, padding: '0 8px', lineHeight: '30px', color: '#666666', background: 'rgba(255, 255, 255, 0.7)'}}>
            <img
              src={img}
              style={{position: 'absolute', top: -1, right: -1, width: 16, height: 16, cursor: 'pointer'}}
              onClick={() => {
                const test = list.filter((item:any) => item.id !== data.id)
                setList(test)
              }}
            />
            {data.data}
          </div>
        }}
        onChange={(list) => {
          message.info('数据置换成功，打卡控制台看看吧~')
          console.log('改变后的数据:', list)
          setList([...list])
        }}
      />
    </>
  );
};


export default Mock;
