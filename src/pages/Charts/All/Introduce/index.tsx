import React, { useState, useEffect } from 'react';
import { queryDetail } from './services'
import { DetailSetting } from '@/commonPages'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

// 这里借鉴的是 ProComponents 中的 ProForm， 这里会完全支持 ProForm 的所有属性，同时也会再次基础上封装，所以与原有使用 ProForm 有些不同，大家可以根据自己的项目进行相应的设置，使开发更加简单

const Introduce: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'introduce'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
      })
    })
  }, []);

  return (
    <DetailSetting anchorList={anchorList} {...detail} />
  );
};

export default Introduce;
