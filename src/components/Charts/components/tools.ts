import type { ChartProps, ChartComponentProps } from '../interface';
import { ChartsSy } from '@/utils/Setting'

// 处理数据模块
export const calcData = (list: Array<any>, { xField, fields }: ChartProps) => {
  const keys = Object.keys(fields)
  const values = Object.values(fields)
  let res:any = []
  list.map((item) => {
    keys.map((ele, index) => {
      if((item[ele] || item[ele] === 0) && xField){
        res = [...res, { ...item, label: values[index], value: item[ele], time: item[xField] || index }]
      }
    })
  })
  return  res
}

// 处理多余参数
export const calcPayload = ({ type, ...props}:ChartProps) => {
  return {
    ...labelConfig(type),
    ...ComponentConfig({type, ...props})
  }
}

// 返回的字段配置
const labelConfig = (type:ChartProps["type"]) => {
  return {
    xField: 'time',
    yField: 'value',
    seriesField: 'label',
  }
}

//  方法类集中配置
const ComponentConfig = ({ type, legend, tooltip, label }:ChartProps) => {
  let selected:any = {}
  if(legend && legend.noSelect){
    legend.noSelect.map((item) => {
      selected[item] = false
    })
  }

  const result:ChartComponentProps = {
    legend: legend === false ? false : {
      selected,
      ...ChartsSy.legend,
      ...legend
    },
    label: label === false ? false : {
      ...ChartsSy.label,
      layout: type === 'column' ? [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ] : undefined,
      ...label
    },
    tooltip: tooltip === false ? false : {
      ...ChartsSy.tooltip,
      ...tooltip
    }
  }

  return result
}
