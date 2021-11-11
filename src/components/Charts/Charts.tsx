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
 * @param seriesField string 区分字段
 * @param width number 图标的宽度， 响应式变化 默认 400
 * @param height number 图标的高度 默认 400
 * @param autoFit boolean 图表是否自适应容器宽高 默认为true
 * @param color 控制颜色， 数组形式，每一个对应第几个的颜色
 *
 */

const Charts: React.FC<ChartProps>  = ({ setFiled = '',  ...props }) => {

  return <Line
    seriesField={setFiled}
    {...props}
  />;
};

export default Charts
