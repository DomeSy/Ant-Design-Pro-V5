import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockPooling, MockCache } from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'useRequest'}).then((res) => {
      setDetail({
        ...res,
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

  const MockCache: React.FC<any> = () => {
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
  };

  export default MockCache;
              `
            }
          ]
        },
        api: {},
        apiList: [
          {
            type: 'title',
            id: 'Result',
            render: 'Result',
            effect: 4
          },
          {
            type: 'table',
            tableList: [
              {
                name: 'data',
                desc: [
                  'service 返回的数据，默认为 undefined',
                  '如果有 formatResult, 则该数据为被格式化后的数据。'
                ],
                status: 'undefined / any'
              },
              {
                name: 'error',
                desc: 'service 抛出的异常，默认为 undefined',
                status: 'undefined / Error'
              },
              {
                name: 'loading',
                desc: 'service 是否正在执行',
                status: 'boolean'
              },
              {
                name: 'run',
                desc: [
                  '手动触发 service 执行，参数会传递给 service',
                  'debounce 模式与 throttle 模式返回值为 Promise<null>'
                ],
                status: '(...args: any[]) => Promise'
              },
              {
                name: 'params',
                desc: '当次执行的 service 的参数数组。比如你触发了 run(1, 2, 3)，则 params 等于 [1, 2, 3]',
                status: 'any[]'
              },
              {
                name: 'cancel',
                desc: [
                  '取消当前请求',
                  '如果有轮询，停止'
                ],
                status: '() => void'
              }
            ]
          },
          {
            type: 'title',
            id: 'Params',
            render: 'Params',
            effect: 4
          },
          {
            render: '所有的 Options 均是可选的。',
          },
          {
            type: 'table',
            tableList: [
              {
                name: 'manual',
                desc: [
                  '默认 false。 即在初始化时自动执行 service。',
                  '如果设置为 true，则需要手动调用 run 触发执行。'
                ],
                status: 'boolean',
                default: 'false'
              },
              {
                name: 'initialData',
                desc: '默认的 data',
                status: 'any',
              },
              {
                name: 'onSuccess',
                desc: [
                  'service resolve 时触发，参数为 data 和 params',
                  '如果有 formatResult ，则 data 为格式化后数据。'
                ],
                status: '(data: any, params: any[]) => void',
              },
              {
                name: 'onError',
                desc: 'service 报错时触发，参数为 error 和 params。',
                status: '(error: Error, params: any[]) => void',
              },
              {
                name: 'cacheKey',
                desc: [
                  '请求唯一标识。如果设置了 cacheKey，我们会启用缓存机制',
                  '我们会缓存每次请求的 data , error , params , loading',
                  '在缓存机制下，同样的请求我们会先返回缓存中的数据，同时会在背后发送新的请求，待新数据返回后，重新触发数据更新'
                ],
                status: 'string',
              },
              {
                name: 'defaultParams',
                desc: '轮询间隔，单位为毫秒。设置后，将进入轮询模式，定时触发 run',
                status: 'number',
              },
              {
                name: 'pollingWhenHidden',
                desc: [
                  '在页面隐藏时，是否继续轮询。默认为 true，即不会停止轮询',
                  '如果设置为 false , 在页面隐藏时会暂时停止轮询，页面重新显示时继续上次轮询'
                ],
                status: '(error: Error, params: any[]) => void',
              },
              {
                name: 'debounceInterval',
                desc: '防抖间隔, 单位为毫秒，设置后，请求进入防抖模式。',
                status: 'number',
              },
              {
                name: 'throttleInterval',
                desc: '节流间隔, 单位为毫秒，设置后，请求进入节流模式。',
                status: 'number',
              },
            ]
          }
        ]
      })
    })
  }, []);

  return (
    <DetailSetting {...detail} />
  );
};

export default Index;
