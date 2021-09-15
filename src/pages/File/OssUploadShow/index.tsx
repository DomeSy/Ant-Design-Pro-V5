import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock, { MockMemo } from './mock'

import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'ossUpload'}).then((res) => {
      setDetail({
        ...res.list,
        code:{
          hrefTooltip: '为演示方便结合 Form（表单） 使用 ，点击跳转',
          selfHref: '/table/field',
          wrap: true,
          showCode: [
            {
              component: <Mock />,
              title: '基本使用',
              content: '普通',
              code: `
  import React, { useState, useCallback } from 'react';
  import { Button } from 'antd';
import [ from '../../../../config/routes';

  const Mock: React.FC<any> = () => {
    const [count, setCount] = useState(0);

    const callBackCount = useCallback(() => {
      setCount(count + 1)
    }, [])

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
          <Button type='primary' onClick={() => setCount(count + 1)}>加1</Button>
          <Button type='primary' onClick={() => callBackCount()} style={{marginLeft: 24}}>callBack 加1</Button>
        </div>
        <div style={{marginTop: 20}}>count: {count}</div>
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
    <DetailSetting {...detail} />
  );
};

export default Index;
