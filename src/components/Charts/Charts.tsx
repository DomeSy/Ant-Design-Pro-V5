import type { ChartProps } from './interface';
import React, { useState, useEffect } from 'react';
import { Line, ColumnConfig } from '@ant-design/charts';
/**
 * @module Charts // 为简化开发将Modal和Drawer
 *
 * 通用属性
 * @param data 数组（必填），数据里的值
 * @param xField string 横坐标对应的值
 * @param yField string 纵坐标对应的值
 * @param width number 图标的宽度， 响应式变化 默认 400
 * @param height number 图标的高度 默认 400
 * @param autoFit boolean 图表是否自适应容器宽高 默认为true
 *
 */

const Charts: React.FC<ChartProps>  = ({ data, xField, yField,  ...props }) => {
  var datas = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];

  return <Line  data={datas} xField='type' yField='sales'  {...props} />;
};

export default Charts
