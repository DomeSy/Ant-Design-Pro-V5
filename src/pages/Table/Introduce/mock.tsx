import React, { useState } from 'react';
import { useRequest } from 'umi';
import { Button, Spin } from 'antd';

const Mock: React.FC<any> = () => {
  const [count,  setCount ] = useState<number>(0)

  const { data, loading , run } = useRequest({
    url: '/api/hook/useRequest/test',
    method: 'POST',
    data: {
      param: '11'
    }
  },{
    manual: true,
    initialData: '未请求',
    onSuccess: (result:any, params) => {
      if (result) {
        setCount(count + params[0]);
      }
    }
  })

  return (
    <div>
      <div style={{marginBottom: 20}}>count: {count}</div>
      <div style={{marginBottom: 20}}>count: {data.message ? data.message : data}</div>
      <Button loading={loading} type='primary' onClick={() => run(count + 1)}>手动请求</Button>
    </div>
  );
};

export const MockCache: React.FC<any> = () => {

  const [show, setShow] = useState<boolean>(false)

  const { data, run, loading } = useRequest('/api/hook/useRequest/cache', {
    manual: true,
    cacheKey: 'article'
  })

  return <>
    <Button type='primary' onClick={() => { setShow(!show); run()}} >{show ? '隐藏' : '展开'}</Button>
    {
      show && <Spin spinning={!data && loading}>
        <p>上次更新的时间：{data?.time}</p>
        <p>更新内容</p>
        <p>{data?.data}</p>
      </Spin>
    }
  </>
}

export const MockPooling: React.FC<any> = () => {

  const { data, loading, run, cancel } = useRequest('/api/hook/useRequest/pooling', {
    manual: true,
    pollingInterval: 1000,
    pollingWhenHidden: false
  })

  return <>
    <Spin spinning={loading}>
      <p>姓名为：{data?.name || '请开始'}</p>
    </Spin>
    <Button style={{marginTop: 20}} type='primary' onClick={run} >开始</Button>
    <Button style={{marginLeft: 24}} onClick={cancel} >停止</Button>
  </>
}


export default Mock;
