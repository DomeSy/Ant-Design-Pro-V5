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
                  render: '一级标题',
                  tooltip: '提示语',
                  main: true
                },
                {
                  type: 'title',
                  render: '二级标题',
                  tooltip: '提示语'
                },
                {
                  render: '这是一段描述的话语，可能会引起你描述的关注点，请期待，我们可已完成',
                },
                {
                  render: '这是一个超链接',
                  href: 'https://www.baidu.com/',
                  tooltip: 'href: https://www.baidu.com/, blank: true',
                  blank: true
                },
                {
                  render: '这是一段描述的话语，可能会引起你的关注点，请期待，我们可已完成',
                  red: true,
                  tooltip: 'red: true,'
                },
                {
                  render: '这是一段描述的话语，可能会引起你的关注点，请期待，我们可已完成',
                  strong: true,
                  tooltip: 'strong: true,'
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
