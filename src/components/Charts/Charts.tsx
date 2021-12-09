import type { ChartProps, ChartComponentProps } from './interface';
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';
import { useUpdateEffect, useReactive } from 'ahooks';
import { calcData } from './components/tools';
import { ChartsSy } from '@/utils/Setting'
/**
 * @module Charts // 封装常用图表
 *
 */
const { legend, label } = ChartsSy

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
    xField: 'time',
    yField: 'value',
    seriesField: 'label',
    data: state.data,
    loading: state.loading,
  }

  const commonComponent = () => {

    let selected:any = {}
    if(props.legend && props.legend.noSelect){
      props.legend.noSelect.map((item) => {
        selected[item] = false
      })
    }

    const result:ChartComponentProps = {
      legend: props.legend === false ? false : {
        selected,
        ...legend,
        ...props.legend
      },
      label: props.label === false ? false : {
        ...label,
        layout: [
          {
            type: 'interval-adjust-position',
          },
          {
            type: 'interval-hide-overlap',
          },
          {
            type: 'adjust-color',
          },
        ],
        ...props.label
      },
    }

    return result
  }


  return <>
    <Column isGroup={ChartsSy.colum.isGroup} {...commonConfig} {...commonComponent()} {...props.colum} />
  </>;
};

export default Charts
