import React, { useState, useEffect, useCallback,  } from 'react'
import { PageLayout, Anchor } from '@/components'
import ProCard from '@ant-design/pro-card'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Typography, Divider } from 'antd'
import DetailContent from './DetailContent'
import type { DetailListProps} from './DetailContent/interface.d'
import type { ShowCodeProps } from './ShowCode'
import Code from './Code'
import ShowCode from './ShowCode'

interface ListProps {
  title?: string;
  tooltip?: string;
}


interface ShowCodeDetailProps extends ShowCodeProps{
  component: React.ReactNode
}
interface CodeListProps extends ListProps {
  showCode?: ShowCodeDetailProps[]
}

interface Props {
  anchorList?: Array<any>;
  use?: ListProps;
  useList?: DetailListProps[];
  code?: CodeListProps;
}

/**
 * 需要
 *  使用场景
 *  代码演示
 *  Api（三级）
 *  心得体会
 */

const DetailSetting: React.FC<Props> = ({use, useList=[], code, anchorList}) => {

  const [size, setSize] = useState<{width: number, height: number}>({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight}) // 屏幕尺寸
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
    window.addEventListener('resize', onResize);
  }, [])

  // 监听屏幕尺寸
  const onResize = useCallback(()=>{
    setSize({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight })
  },[])

  return <PageLayout
    loading={loading}
    content="useMenont"
  >
    <ProCard gutter={8} style={{margin: 0}} >
      <div style={{width: '100%'}}>
        {
          <DetailContent
            list={[
              {
                type: 'title',
                render: use?.title ? use.title : '使用场景',
                tooltip: use?.tooltip ? use.tooltip : undefined,
              },
              ...useList
            ]}
          />
        }
        {
          code && Array.isArray(code.showCode) && code.showCode.length !== 0 && <>
            <DetailContent
              list={[
                {
                  type: 'title',
                  render: code?.title ? code.title : '代码演示',
                  tooltip: code?.tooltip ? code.tooltip : undefined,
                },
              ]}
            />
            {
              code.showCode.map((item, index) => (
                <ShowCode key={index} {...item}>
                  {item.component}
                </ShowCode>
              ))
            }
          </>
        }
        <DetailContent
          list={[
            {
              type: 'table',
              tableList: [
                {
                  name: '名称',
                  desc: <span>'我是一段话'<span>nihao1</span></span>,
                  status: 'React.ReactNode',
                  default: '1',
                  global: true,
                  href: 'https://www.baidu.com/',
                  tooltip: '提示语',
                  mark: '我是特殊的备注'
                }
              ]
            }
          ]}
        />
      </div>
      {
        anchorList && Array.isArray(anchorList) && anchorList.length !== 0 &&
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
          <Anchor list={anchorList} />
        </ProCard>
      }
    </ProCard>
  </PageLayout>
};

export default DetailSetting;
