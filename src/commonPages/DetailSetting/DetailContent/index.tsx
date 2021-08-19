import React, { useState, useEffect, useCallback } from 'react';
import { Typography } from 'antd';
import { PageLayout, Card, Anchor } from '@/components';
import ProCard from '@ant-design/pro-card';
import Props from './interface'

const DetailContent: React.FC<Props> = ({ list = [] }) => {


  useEffect(() => {

  }, [])

  return <>
    <Typography.Title level={2} >标题</Typography.Title>
    {
      list.map((item, index) => <div key={index}>

      </div>)
    }
  </>
};

export default DetailContent;
