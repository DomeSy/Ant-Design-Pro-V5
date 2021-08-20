import React, { useState, useEffect, useCallback } from 'react'
import { PageLayout, Card, Anchor } from '@/components'
import ProCard from '@ant-design/pro-card'
import { Typography } from 'antd'
import DetailContent from './DetailContent'

interface Props {

}

const DetailSetting: React.FC<Props> = () => {

  const [size, setSize] = useState<{width: number, height: number}>({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight}) // 屏幕尺寸

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    window.addEventListener('resize', onResize);
    setLoading(false)
  }, [])

  // 监听屏幕尺寸
  const onResize = useCallback(()=>{
    setSize({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight })
  },[])

  return <PageLayout
    loading={loading}
  >
    <ProCard gutter={8} style={{margin: 0}}>
        <div style={{width: '100%'}}>
          <DetailContent
            list={
              [
                {
                  type: 'title',
                  render: '标题1',
                  title: '标题'
                },
                {
                  list: [
                    '我们是一行代码',
                    {
                      text: ',我们很强'
                    }
                  ]
                }
              ]
            }
          />
        </div>
        <ProCard
          style={size.width < 765 ? {display: 'none'} : undefined}
          layout="center"
          colSpan={{
            xs: '10%',
            sm: '10%',
            md: '15%',
            lg: '20%',
            xl: '25%',
          }}
        >
          <Anchor list={[{
            title: '测试1',
            href: 'test1',
            },
            {
              title: '测试2',
              href: 'test2',
              children: [{
                title: '测试3',
                href: 'test3',
              }]
            }
          ]} />
        </ProCard>
    </ProCard>
  </PageLayout>
};

export default DetailSetting;
