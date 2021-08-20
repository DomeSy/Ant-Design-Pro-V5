import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Tooltip } from 'antd';
import { PageLayout, Card, Anchor } from '@/components';
import ProCard from '@ant-design/pro-card';
import { InfoCircleOutlined } from '@ant-design/icons';
import Props from './interface'

const DetailContent: React.FC<Props> = ({ list = [] }) => {


  useEffect(() => {

  }, [])

  return <>
    {
      list.map((item, index) => <div key={index}>
        {
          item.type === 'mainTitle' ?
            <Typography.Title id={item.id} level={2} style={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center'}}>
              {
                item.render
              }
              {
                item.tooltip &&
                <Tooltip title={item.tooltip}>
                  <Typography.Title style={{marginTop: 8,marginLeft: 10}} level={5}>
                    { item.suffix ? item.suffix : <InfoCircleOutlined /> }
                  </Typography.Title>
                </Tooltip>
              }
            </Typography.Title>
          :
          item.type === 'title' ?
            <Typography.Title id={item.id} level={3} style={{display: 'flex',justifyContent: 'flex-start', alignItems: 'center'}}>
              {
                item.render
              }
              {
                item.tooltip &&
                <Tooltip title={item.tooltip}>
                  <Typography.Title style={{marginTop: 8,marginLeft: 10}} level={5}>
                    { item.suffix ? item.suffix : <InfoCircleOutlined /> }
                  </Typography.Title>
                </Tooltip>
              }
            </Typography.Title>
          :
          <>
            <Typography.Paragraph>
              {
                Array.isArray(item.list) && item.list.length !== 0 &&
                <>
                  {
                    item.list.map((ele, eleIndex) => {
                      if(typeof ele === 'string') return <Typography.Text>{ele}</Typography.Text>
                      return <Typography.Text></Typography.Text>
                    })
                  }
                </>
              }
              {/* <blockquote>{item.render}</blockquote> */}
            </Typography.Paragraph>
          </>
        }
      </div>)
    }
  </>
};

export default DetailContent;
