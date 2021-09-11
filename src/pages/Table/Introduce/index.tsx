import React, { useState, useEffect } from 'react';
import { queryDetail } from './services'
import { DetailSetting } from '@/commonPages'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
import Mock, { MockPooling, MockCache } from './mock'

// 这里借鉴的是 ProComponents 中的 ProForm， 这里会完全支持 ProForm 的所有属性，同时也会再次基础上封装，所以与原有使用 ProForm 有些不同，大家可以根据自己的项目进行相应的设置，使开发更加简单

const Introduce: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'introduce'}).then((res) => {
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
          ]
        },
      })
    })
  }, []);

  return (
    <DetailSetting anchorList={anchorList} {...detail} />
  );
};

export default Introduce;
