import React, { useState, useEffect, useCallback } from 'react'
import { PageLayout, Card, Anchor } from '@/components'
import ProCard from '@ant-design/pro-card'
import { Typography } from 'antd'
import DetailContent from './DetailContent'
import Code from './Code'
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
                  blank: true
                },
                {
                  render: '字体变红',
                  red: true,
                },
                {
                  render: 'code框',
                  code: true,
                },
                {
                  render: '字体变粗',
                  strong: true,
                },
                {
                  render: `我们是多行数据
第一行数据
第二行数据`,
                  type: "prv"
                },
                {
                  render: '分割线',
                  type: 'divider',
                  tooltip: 'strong: true,'
                },
                {
                  render: '分割提示按钮跳转',
                  type: 'divider',
                  tooltip: 'strong: true,',
                  tooltipHref: 'https://www.baidu.com/'
                },
                {
                  render: '字体变红',
                  red: true,
                  tooltip: 'way: right,',
                  way: 'right',
                  type: 'divider',
                },
                {
                  type: 'list',
                  list: [
                    {
                      render: '这是一个超链接',
                      href: 'https://www.baidu.com/',
                      tooltip: 'href: https://www.baidu.com/, blank: true',
                      blank: true
                    },
                    {
                      render: '字体变红',
                      red: true,
                      tooltip: 'red: true,'
                    },
                    {
                      render: '字体变粗',
                      strong: true,
                      tooltip: 'strong: true,'
                    }
                  ]
                },
                {
                  type: 'ellipsis',
                  red: true,
                  render: '当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，'
                },
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
    <Code>
        {`
          <ProCard gutter={9} style={{margin: 0}}>
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
                    blank: true
                  },
                  {
                    render: '字体变红',
                    red: true,
                  },
                  {
                    render: 'code框',
                    code: true,
                  },
                  {
                    render: '字体变粗',
                    strong: true,
                  },
                  {
                    render: '我们是多行数据
  第一行数据
  第二行数据',
                    type: "prv"
                  },
                  {
                    render: '分割线',
                    type: 'divider',
                    tooltip: 'strong: true,'
                  },
                  {
                    render: '字体变红',
                    red: true,
                    tooltip: 'way: right,',
                    way: 'right',
                    type: 'divider',
                  },
                  {
                    type: 'list',
                    list: [
                      {
                        render: '这是一个超链接',
                        href: 'https://www.baidu.com/',
                        tooltip: 'href: https://www.baidu.com/, blank: true',
                        blank: true
                      },
                      {
                        render: '字体变红',
                        red: true,
                        tooltip: 'red: true,'
                      },
                      {
                        render: '字体变粗',
                        strong: true,
                        tooltip: 'strong: true,'
                      }
                    ]
                  },
                  {
                    type: 'ellipsis',
                    red: true,
                    render: '当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，当一首歌产生了海底，我们可以找到圣卡罗阿萨德哈solid加红爱山东11，'
                  },
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
        `}
    </Code>
  </PageLayout>
};

export default DetailSetting;
