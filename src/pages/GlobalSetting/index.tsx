import React, { useState, useEffect } from 'react';
import { queryDetail } from './services'
import { DetailSetting } from '@/commonPages'
import { PageLayout } from '@/components'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'

const Hook: React.FC<any> = ({children, ...props}) => {


  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'globalSetting'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail(res.list)
    })
  }, []);

  return (
    <PageLayout
      content='这是有关部分组件的全局Api，通过修改，从而更好的适配本身的项目~'
    >
      <DetailSetting anchorList={anchorList} {...detail} />
    </PageLayout>
  );
};

export default Hook;
