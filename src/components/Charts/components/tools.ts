import type { ChartProps, ChartComponentProps } from '../interface';
import { ChartsSy } from '@/utils/Setting'
import { message } from 'antd';

// 处理数据模块
export const calcData = (listAll: Object, { xField, fields, fieldsLine, type, ...props}: ChartProps) => {
  const list = Array.isArray(listAll) ? listAll : [listAll]
  if(type === 'pie' && Array.isArray(fields)){
    if(fields.length !== 2){
      message.error('请输入对应的名称和值')
      return []
    }
    let res:any = [];
    list.map((item) => {
      res = [...res, { ...item, label: item[fields[0]], value: item[fields[1]]}]
    })
    if(props?.pie?.zero){
      res =  res.filter((item:any) => item.value !== 0)
    }
    return res
  } else if(type === 'dualAxes'){
    if(!fieldsLine){
      message.error('请传入对应的折线图数据')
      return [[], []]
    }
    const keys = Object.keys(fields)
    const values = Object.values(fields)
    const keys1 = Object.keys(fieldsLine)
    const values1 = Object.values(fieldsLine)
    let res:any = []
    let res1:any = []
    list.map((item) => {
      keys.map((ele, index) => {
        if((item[ele] || item[ele] === 0) && xField){
          res = [...res, { ...item, label: values[index], value: item[ele], time: item[xField] || index }]
        }
      })
      keys1.map((ele, index) => {
        if((item[ele] || item[ele] === 0) && xField){
          res1 = [...res1, { ...item, label: values1[index], value: item[ele], time: item[xField] || index }]
        }
      })
    })
    return [res, res1]
  } else {
    const keys = Object.keys(fields)
    const values = Object.values(fields)
    let res:any = []
    list.map((item) => {
      keys.map((ele, index) => {
        if((item[ele] || item[ele] === 0) && xField){
          res = [...res, { ...item, label: values[index], value: item[ele], time: type ==='pie' ? undefined : item[xField] || index }]
        }
      })
    })
    if(props?.pie?.zero){
      res =  res.filter((item:any) => item.value !== 0)
    }
    return  res
  }
}

// 柱状图
export const calcColumn = ({ type, ...props}:ChartProps) => {
  return {
    ...labelConfig(),
    ...ComponentConfig({type, ...props})
  }
}

//折现图
export const calcLine = ({ type, ...props}:ChartProps) => {
  return {
    ...labelConfig(),
    ...ComponentConfig({type, ...props})
  }
}

//双轴图
export const calcDualAxes = ({ type, dualAxes, ...props}:ChartProps) => {

  let geometryOptions = [
    {
      geometry: 'column',
      seriesField: 'label',
      isGroup: true,
    },
    {
      geometry: 'line',
      seriesField: 'label',
    },
  ]

  if(dualAxes?.geometryOptions && dualAxes?.geometryOptions[0]) {
    geometryOptions[0] = { ...geometryOptions[0], ...dualAxes.geometryOptions[0]}
  }
  if(dualAxes?.geometryOptions && dualAxes?.geometryOptions[1]) {
    geometryOptions[1] = { ...geometryOptions[1], ...dualAxes.geometryOptions[1]}
  }

  return {
    xField: 'time',
    yField: ['value', 'value'],
    padding: dualAxes?.slider ? [20, 20, 80, 30] : undefined,
    geometryOptions,
    ...ComponentConfig({type, ...props})
  }
}

// 条形图
export const calcBar = ({ type, ...props}:ChartProps) => {
  return {
    xField: 'value',
    yField: 'time',
    seriesField: 'time',
    ...ComponentConfig({type, ...props})
  }
}

// 面积图
export const calcArea = ({ type, ...props}:ChartProps) => {
  return {
    ...labelConfig(),
    ...ComponentConfig({type, ...props})
  }
}

// 饼图
export const calcPie = ({ type, pie, ...props}:ChartProps) => {
  return {
    angleField: 'value',
    colorField: 'label',
    appendPadding: 10,
    innerRadius: pie?.innerRadius ?  pie.innerRadius : pie?.ring ? 0.6 : undefined,
    interactions: [
      {
        type: 'element-active',
      },
    ],
    ...ComponentConfig({type, pie, ...props})
  }
}

// 返回的字段配置
const labelConfig = () => {
  return {
    xField: 'time',
    yField: 'value',
    seriesField: 'label',
  }
}

//  方法类集中配置
const ComponentConfig = ({ type, legend, tooltip, label, ...props }:ChartProps) => {
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
    label: label === false ? false : type === 'pie' ? {
      type: props?.pie?.labelType ||  'outer',
      ...label
    } : {
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
