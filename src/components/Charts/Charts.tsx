import type { ChartProps } from './interface';
import React, { useState, useEffect } from 'react';
import { Column, ColumnConfig } from '@ant-design/charts';
import { useUpdateEffect, useReactive } from 'ahooks';
import { calcData } from './components/tools';
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
    console.log(props, '===')
  }, [])

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
    xField: 'time',
    yField: 'value',
    seriesField: 'label',
    data: state.data,
    loading: state.loading,
  }

  return <>
    <Column isGroup={true} {...commonConfig} />
  </>;
};

export default Charts
