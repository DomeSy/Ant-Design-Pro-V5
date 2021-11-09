import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { PageLayout } from '@/components';
import { DetailSetting } from '@/commonPages'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'
import type { AnchorLinkProps } from '@/components'
import { queryDetail } from './services'

const Welcome: React.FC<any> = (props) => {

  const [detail, setDetail] = useState<DetailSettingListProps>({})
  const [anchorList, setAnchorList] = useState<AnchorLinkProps[]>([])

  useEffect(() => {
    queryDetail({detail: 'welcome'}).then((res) => {
      setAnchorList(res.anchorList)
      setDetail({
        ...res.list,
      })
    })
  }, []);

  return (
    <PageLayout
      content={'欢迎来到 Domesy 的博客，如果对大家有任何疑问，请联系微信 domesyPro ~'}
    >
      <Card
        title='前言'
      >
        <DetailSetting anchorList={anchorList} {...detail} />
      </Card>
    </PageLayout>
  );
};

export default Welcome
