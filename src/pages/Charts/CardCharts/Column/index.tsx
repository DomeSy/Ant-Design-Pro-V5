import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import { queryDetail } from './services'
import Mock from './mock'
 import type { AnchorLinkProps } from '@/components'
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'



const Index: React.FC<any> = (props) => {
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])
  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    queryDetail({detail: 'District'}).then((res) => {
      // setAnchorList(res.anchorList)
      setDetail({
        // ...res.list,
        code:{
          title: '代码演示Charts（type为column）',
          showCode: [
            {
              component: <Mock />,
              title: '功能展示',
              id: 'code1',
              content: <div>
                <p>可自由实现地图的初始化，自定义地图颜色，展示名称，边界颜色，图层比例，并实现拖拽，缩放，旋转，点击，双击等功能（包括不限于此）<Tooltip title="更加详细api，参考L7 官网"><InfoCircleOutlined /></Tooltip></p>
              </div>,
              code: ``
            }
          ]
        },
      })
    })
  }, []);

  return (
    <Mock />
    // <DetailSetting {...detail} anchorList={anchorList}  />
  );
};

export default Index;
