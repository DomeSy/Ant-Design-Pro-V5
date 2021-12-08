import { Types } from '@antv/g2';
import {  LineConfig, ColumnConfig } from '@ant-design/charts';

/**
 * 1> 获取数据有两种方式，一种是通过直接传data，一种是传接口请求，两者是相对的，其次如果选择接口，需要出入对应的参数 payload，如果不传，则默认为 {}
 */

/**
 * legend: 为false时不显示，为对象显示
 *
 * layout： 布局方式 'horizontal' | 'vertical' 水平或是垂直，可全局配置
 * position: 图例位置方向 ‘top' | 'top-left' | 'top-right' | 'right' | 'right-top' | 'right-bottom' | 'left' | 'left-top' | 'left-bottom' | 'bottom' | 'bottom-left' | 'bottom-right'， 共12个方向，可全局配置
 * noSelect: 与原本的selected作用一直， 不同的是直接传入 数组，自动设置为置灰效果
 */

/**
 * label: 为false时不显示，为对象显示
 *
 * 回参： 包含三个参数(data(数据映射全量数据), mappingData（有关图表的对象）, index(索引)) 最终还是返回上面五个方向
 *
 * position 集中设置 'top' | 'bottom' | 'middle' | 'left' | 'right'， 共五个方向，如果需要设置的不一样，可通过函数的形式去传，（回参：）
 * layout 布局,
 * content： 展示的内容。自定义需要 （回参）
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
  legend?: false | LegendProps; // 配置图例
  label?: false | LabelProps;
  colum?: ColumnConfig;
}


export interface ChartComponentProps {
  legend?: false | LegendProps; // 配置图例
  label?: false | LabelProps; // 文本标签
}

interface LegendProps extends Types.LegendCfg {
  noSelect?: string[]; //与原本的selected作用一直， 不同的是直接传入 数组，自动设置为置灰效果
}

interface LabelProps extends Types.GeometryLabelCfg {
  fields?: string[]; // 映射的字段
  callback?: Types.LabelCallback; // 回调函数
  formatter?: Types.GeometryLabelCfg['content']; // 功能同 content ，兼容 v1
}
