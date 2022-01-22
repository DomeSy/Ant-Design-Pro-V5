import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockPooling, MockCache, MockDepth } from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'useRequest'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
        code:{
          wrap: true,
          showCode: [
            {
              component: <Mock />,
              title: '基本使用 + 手动请求',
              content: '手动请求，可设置初始值，配置请求接口的参数，并且能根据请求成功做对应的东西，设置初始请求值，loading状态等',
              code: `
  import React, { useState } from 'react';
  import { useRequest } from 'umi';
  import { Button } from 'antd';

  const Mock: React.FC<any> = () => {
    const [count,  setCount ] = useState<number>(0)

    const { data, loading , run } = useRequest({
      url: 'hook/useRequest/test',
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

  export default Mock;
              `
            },
            {
              component: <MockPooling />,
              title: '轮询',
              content: '可通过 run 和 cancel 轻松实现轮讯效果，pollingInterval 如果存在，则开始轮询效果',
              code: `
  import React from 'react';
  import { useRequest } from 'umi';
  import { Button, Spin } from 'antd';

  const MockPooling: React.FC<any> = () => {
    const { data, loading, run, cancel } = useRequest('hook/useRequest/pooling', {
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
  };

  export default MockPooling;
              `
            },
            {
              component: <MockCache />,
              title: '缓存 & SWR',
              content: '通过设置 cacheKey, 可以将 useRequest 请求的数据缓存， 下次组件初始化，如果有缓存数据，会优先返回缓存数据，同时也在发送新的请求，然后进行替换，这就是 SWR 能力',
              code: `
  import React from 'react';
  import { useRequest } from 'umi';
  import { Button, Spin } from 'antd';
import { Mock } from 'mockjs';

  const MockCache: React.FC<any> = () => {
    const [show, setShow] = useState<boolean>(false)

    const { data, run, loading } = useRequest('hook/useRequest/cache', {
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
  };

  export default MockCache;
              `
            },
            {
              component: <MockDepth />,
              title: '依赖刷新',
              content: '通过某个状态自动请求数据，其 refreshDeps 的用法与 useEffect 使用的方法相同',
              code: `
  import React, { useState } from 'react';
  import { useRequest } from 'umi';
  import { Select } from 'antd';

  const Mock: React.FC<any> = () => {
    const [id,  setId] = useState<string>('1')

    const { data, loading } = useRequest({
      url: 'hook/useRequest/test',
      method: 'POST',
      data: {
        param: '11'
      }
    }, {
      refreshDeps: [id],
    });

    return (
      <>
       <div>
        <Select value={id} style={{ width: 120 }} onChange={(e) => setId(e)}>
            <Select.Option value="1">依赖1</Select.Option>
            <Select.Option value="2">依赖2</Select.Option>
              <Select.Option value="3">依赖3</Select.Option>
          </Select>
       </div>
        <div>当前依赖项：{loading ? 'loading' : data.message: 依赖id改变}</div>
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
    <DetailSetting anchorList={anchorList} {...detail} />
  );
};

export default Index;
