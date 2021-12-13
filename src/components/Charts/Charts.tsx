import type { ChartProps } from './interface';
import React, { useEffect } from 'react';
import { Column, Line, DualAxes, Bar } from '@ant-design/charts';
import { useUpdateEffect, useReactive } from 'ahooks';
import { calcData, calcColumn, calcLine, calcDualAxes, calcBar } from './components/tools';
import { ChartsSy } from '@/utils/Setting'
/**
 * @module Charts // 封装常用图表
 *
 */
const Charts: React.FC<ChartProps>  = ({ xField='time', onRequest, ...props }) => {

  const state = useReactive<any>({
    data: props.type === 'dualAxes' ? [[], []] : [],
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
      props.type === 'column' && <Column isGroup={ChartsSy.colum.isGroup} {...commonConfig}  {...props.colum} {...calcColumn(props)} />
    }
    {
      props.type === 'line' && <Line {...commonConfig} {...props.line}  {...calcLine(props)} />
    }
    {
      props.type === 'dualAxes' && <DualAxes {...commonConfig} {...props.dualAxes} {...calcDualAxes(props)} />
    }
    {
      props.type === 'bar' && <Bar {...commonConfig}  {...props.colum} {...calcBar(props)} />
    }
  </>;
};

export default Charts
