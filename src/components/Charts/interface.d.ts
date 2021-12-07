import {  LineConfig, ColumnConfig } from '@ant-design/charts';

/**
 * 1> 获取数据有两种方式，一种是通过直接传data，一种是传接口请求，两者是相对的，其次如果选择接口，需要出入对应的参数 payload，如果不传，则默认为 {}
 */
export interface ChartProps {
  type: 'column'; // 图表的类型， column（柱状图）
  data?: Array<any>; // 数据源列表
  xField?: string; // 横坐标对应的值
  fields: { // 匹配接口返回字段
    [key: string]: any;
  },
  onRequest?: any; // 请求的接口，这里最好直接返回对应的格式，大多数为数组，环图为对象（如果返回的不是，需要使用calcData 来处理下，让其返回对应的的格式）
  calcData?: (result:any) => [] | {}; // 目前来说返回的一个对象或者一个数组
  payload?: () => {}; // 接口请求的数据，返回一个对象
  colum?: ColumnConfig;
}
