import {  LineConfig } from '@ant-design/charts';

export interface ChartProps {
  type: 'column'; // 图表的类型， column（柱状图）
  data?: Array<any>; // 数据源列表
  xField?: string; // 横坐标对应的值
  fields: { // 匹配接口返回字段
    [key: string]: any;
  },
}
