import type { ChartProps, ChartComponentProps } from './interface';
import React, { useState, useEffect } from 'react';
import { Column, Line } from '@ant-design/charts';
import { useUpdateEffect, useReactive } from 'ahooks';
import { calcData, calcPayload } from './components/tools';
import { ChartsSy } from '@/utils/Setting'
/**
 * @module Charts // 封装常用图表
 *
 */
const Charts: React.FC<ChartProps>  = ({ xField='time', onRequest, ...props }) => {

  const state = useReactive<any>({
    data: [],
    loading: true
  });

  useEffect(() => {
    if(onRequest){
      getRequest()
    }
  }, [onRequest])

  useUpdateEffect(() => {
    if(props.data && !onRequest){
      state.loading = true
      const data = calcData(props.data, { xField, ...props })
      state.data = data
      state.loading = false
    }
  }, [props.data])

  // 请求接口
  const getRequest = async () => {
    state.loading = true
    let payload = props.payload ? props.payload() : {}
    const res = await onRequest(payload)
    const data = calcData(props.calcData ? props.calcData(res) : res, { xField, ...props })
    state.data = data
    state.loading = false
  }

  // 公共配置类
  const commonConfig = {
    data: state.data,
    loading: state.loading,
  }

  return <>
    {
      props.type === 'column' && <Column isGroup={ChartsSy.colum.isGroup} {...commonConfig} {...calcPayload(props)} {...props.colum} />
    }
    {
      props.type === 'line' && <Line  {...commonConfig} {...calcPayload(props)} {...props.line} />
    }
  </>;
};

export default Charts
