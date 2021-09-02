import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Tooltip, Divider } from 'antd';
import { PageLayout, Card, Anchor } from '@/components';
import ProCard from '@ant-design/pro-card';
import { InfoCircleOutlined, QuestionCircleOutlined, EditOutlined } from '@ant-design/icons';
import type { DetailListProps } from './interface.d'
import Props from './interface'

const DetailContent: React.FC<Props> = ({ list = [] }) => {


  useEffect(() => {

  }, [])

  const tooltipRender = (item: DetailListProps, suffix?: React.ReactNode) => {
    return <Typography.Text >
      <Tooltip title={item.tooltip}>
        {
          item.tooltipHref ?
          <Typography.Link style={{marginLeft: 8}} href={item.tooltipHref} target={item.tooltipBlank ? '_blank' : '_self'}>
            { item.suffix ? item.suffix : suffix ? suffix : <QuestionCircleOutlined /> }
          </Typography.Link> :
          <Typography.Text style={{marginLeft: 8}} >
          { item.suffix ? item.suffix : suffix ? suffix : <QuestionCircleOutlined /> }
        </Typography.Text>
        }
      </Tooltip>
    </Typography.Text>
  }

  const contentRender = (item: DetailListProps) => {
    return (
      <>
       { item.href ?
          <Typography.Link href={item.href} target={item.blank ? '_blank' : '_self'}>{item.render}</Typography.Link>
          : item.red ?
          <Typography.Text code={item.code} type="danger">{item.render}</Typography.Text>
          : item.strong ?
          <Typography.Text code={item.code} strong={item.strong}>{item.render}</Typography.Text>
          :
          <Typography.Text code={item.code}>{item.render}</Typography.Text>
        }
      </>
    )
  }

  return <>
    {
      list.map((item, index) => <div key={index}>
        {
          item.type === 'ellipsis' ?
          <Typography.Paragraph
            style={{...item.style}}
            ellipsis={{
              // expandable: true,
              rows: 2,
              ...item.ellipsis
            }}
          >
            { contentRender(item) }
          </Typography.Paragraph> :
          item.type === 'prv' ?
          <Typography.Paragraph style={{...item.style}}>
            <pre>{item.render}</pre>
          </Typography.Paragraph> :
          item.type === 'title' ?
            <Typography.Title id={item.id} level={item.main ? 2 : 3} style={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center'}} >
              {
                item.render
              }
              <Typography.Text >
                {
                  item.tooltip &&
                  <Tooltip title={item.tooltip}>
                    <Typography.Title style={{marginTop: 8,marginLeft: 10}} level={5}>
                      { item.suffix ? item.suffix : <InfoCircleOutlined /> }
                    </Typography.Title>
                  </Tooltip>
                }
              </Typography.Text>
            </Typography.Title>
          : item.type === 'divider' ?
          <Divider orientation={item.way || 'left'} style={{...item.style}}>
            { contentRender(item) }
            { item.tooltip && tooltipRender(item, <EditOutlined />) }
          </Divider>
          : item.type === 'list' ?
          <Typography.Paragraph style={{...item.style}}>
            <ul>
            {
              Array.isArray(item.list) && item.list.map((ele, eleIndex) => (
                <li key={eleIndex + 'li'}>
                  { contentRender(ele) }
                  { ele.tooltip && tooltipRender(ele) }
                </li>
              ))
            }
            </ul>
          </Typography.Paragraph>
           :
          <Typography.Paragraph style={{...item.style}}>
            { contentRender(item) }
            { item.tooltip && tooltipRender(item) }
          </Typography.Paragraph>
        }
      </div>)
    }
  </>
};

export default DetailContent;
