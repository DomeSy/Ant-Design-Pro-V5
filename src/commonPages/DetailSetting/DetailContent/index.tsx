import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Tooltip } from 'antd';
import { PageLayout, Card, Anchor } from '@/components';
import ProCard from '@ant-design/pro-card';
import { InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { DetailListProps } from './interface.d'
import Props from './interface'

const DetailContent: React.FC<Props> = ({ list = [] }) => {


  useEffect(() => {

  }, [])

  return <>
    {
      list.map((item, index) => <div key={index}>
        {
          item.type === 'title' ?
            <Typography.Title id={item.id} level={item.main ? 2 : 3} style={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center'}}>
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
          :
          <>
            <Typography.Paragraph>
              { item.href ?
                <Typography.Link href={item.href} target={item.blank ? '_blank' : '_self'}>{item.render}</Typography.Link>
                : item.red ?
                <Typography.Text type="danger">{item.render}</Typography.Text>
                : item.strong ?
                <Typography.Text strong={item.strong}>{item.render}</Typography.Text>
                : item.render
              }
              {
                item.tooltip &&
                <Typography.Text >
                  <Tooltip title={item.tooltip}>
                    <Typography.Text style={{marginLeft: 8}} >
                      { item.suffix ? item.suffix : <QuestionCircleOutlined /> }
                    </Typography.Text>
                  </Tooltip>
                </Typography.Text>
              }
            </Typography.Paragraph>
          </>
        }
      </div>)
    }
  </>
};

export default DetailContent;
