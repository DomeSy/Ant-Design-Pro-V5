import React from 'react';
import { useModel } from 'umi';
import { Button, message } from 'antd';

const Mock: React.FC<any> = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  return (
    <div>
      <div style={{marginBottom: 20}}>initialState 是指的对象</div>
      <div style={{marginBottom: 20}}>setInitialState 是设置值的方法</div>
      <Button onClick={() => {
        message.success('打开控制台看看')
        console.log(initialState)
      }}>获取initialState值</Button>
    </div>
  );
};

export const MockModel: React.FC<any> = () => {
  const { init, setInit, setAdd, loading } = useModel('test.modelTest');

  return <div>
    <div style={{ marginBottom: 14 }}> count 对应的值{init.count}</div>
    <Button loading={loading} style={{ marginBottom: 18 }} type='primary' onClick={() => setInit(5)} >设置count为5</Button>
    <br />
    <Button type='primary' onClick={() => setAdd(init.count)} >累加1</Button>
  </div>
}

export const MockModelRet: React.FC<any> = () => {
  const { init, setAdds } = useModel('test.modelTest', (ret) => {
    return {
      init: ret.init,
      setAdds: ret.setAdd
    }
  });

  return <div>
    <div style={{ marginBottom: 14 }}> count 对应的值{init.count}</div>
    <Button type='primary' onClick={() => setAdds(init.count)} >累加1</Button>
  </div>
}

export default Mock;
