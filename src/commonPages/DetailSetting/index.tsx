import React, { useState, useEffect, useCallback,  } from 'react'
import { PageLayout, Anchor } from '@/components'
import ProCard from '@ant-design/pro-card'
import { Col, Row } from 'antd'
import DetailContent from './DetailContent'
import type { DetailListProps} from './DetailContent/interface.d'
import type { ShowCodeProps } from './ShowCode'
import ShowCode from './ShowCode'

interface ListProps {
  title?: string;
  tooltip?: string;
  id?: string;
  href?: string;
  hrefTooltip?: string;
  selfHref?: string;
  noRed?: boolean; //去除标题的红色
}

interface ShowCodeDetailProps extends ShowCodeProps{
  component: React.ReactNode
}
interface CodeListProps extends ListProps {
  showCode?: ShowCodeDetailProps[]; // code的参数
  wrap?: boolean; //是否换行
  hidden?: boolean; //是否隐藏代码演示区域
}
interface attentionProps extends ListProps {
  children?: DetailListProps[]
}


export interface Props {
  layout?: boolean; //关于头部的layout
  anchorList?: Array<any>; // 图钉
  use?: ListProps; // 使用场景，标题和提示
  useList?: DetailListProps[]; //其余的List
  code?: CodeListProps; // 代码模板， showCode Code的参数
  attention?: attentionProps; // 注意事项
  api?: ListProps; // api
  apiList?: DetailListProps[]; //Api的list
  explain?: ListProps; //心得体会
  explainList?: DetailListProps[]; //心得体会的list
}

/**
 * 需要
 *  使用场景
 *  代码演示
 *  注意事项
 *  Api（三级）
 *  心得体会
 */

const DetailSetting: React.FC<Props> = ({layout, use, useList=[], code, attention, api, apiList=[], explain, explainList=[], anchorList}) => {


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

  const detailRender = <ProCard gutter={8} style={{margin: 0}} >
    <div style={{width: '100%'}}>
        {
          use && <DetailContent
            list={[
              {
                type: 'title',
                id: use?.id,
                render: use?.title ? use.title : '使用场景',
                tooltip: use?.tooltip ? use.tooltip : undefined,
              },
              ...useList
            ]}
          />
        }
        {
          code && Array.isArray(code.showCode) && code.showCode.length !== 0 && <>
            {
              !code.hidden && <DetailContent
                list={[
                  {
                    type: 'title',
                    id: code.id || 'Code',
                    render: code?.title ? code.title : '代码演示',
                    tooltip: code?.tooltip ? code.tooltip : undefined,
                    hrefTooltip: code?.hrefTooltip ? code.hrefTooltip : undefined,
                    href: code?.href ? code.href : undefined,
                    selfHref: code?.selfHref ? code.selfHref : undefined
                  },
                ]}
              />
            }
            {
              code.wrap ?
              <Row
                gutter={24}
              >
                {
                  code.showCode.map((item, index) => (
                    <Col key={index} xs={24} sm={24} md={24} lg={24} xl={12} >
                      <ShowCode id={item.id}  {...item}>
                        {item.component}
                      </ShowCode>
                    </Col>
                  ))
                }
              </Row>
              :
              <>
                {
                  code.showCode.map((item, index) => (
                    <ShowCode id={item.id} key={index} {...item}>
                      {item.component}
                    </ShowCode>
                  ))
                }
              </>
            }
          </>
        }
        {
          attention && <DetailContent
            list={[
              {
                type: 'title',
                render: attention?.title ? attention.title : '注意事项',
                id: attention?.id,
                href: attention?.href ? attention.href : undefined,
                tooltip: attention.tooltip? attention.tooltip : undefined,
                hrefTooltip: attention.hrefTooltip? attention.hrefTooltip : undefined
              },
              {
                type: 'list',
                red: true,
                list: attention?.children ? attention?.children : undefined
              }
            ]}
          />
        }
        {
          api && Array.isArray(apiList) && apiList.length !== 0 &&  <>
            <DetailContent
              list={[{
                type: 'title',
                render: api.title || 'Api',
                id: api.id || 'Api',
                href: api.href? api.href : undefined,
                tooltip: api.tooltip? api.tooltip : undefined,
                hrefTooltip: api.hrefTooltip? api.hrefTooltip : undefined
              }]}
            />
            <DetailContent
              noRed={api?.noRed || false}
              list={apiList}
            />
          </>
        }
        {
        explain && <DetailContent
            list={[
              {
                type: 'title',
                id: explain?.id,
                render: explain?.title ? explain.title : '心得体会',
                tooltip: explain?.tooltip ? explain.tooltip : undefined,
              },
              ...explainList
            ]}
          />
        }
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

  if(!layout) return detailRender

  return <PageLayout
    loading={loading}
    {...layout}
  >
    {detailRender}
  </PageLayout>
};

export default DetailSetting;
