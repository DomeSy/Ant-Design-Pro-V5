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
 * position 集中设置 'top' | 'bottom' | 'middle' | 'left' | 'right'， 共五个方向，如果需要设置的不一样，可通过函数的形式去传，（回参）
 * layout 布局,
 * content： 展示的内容。自定义需要 （回参）
 */

/**
 * tooltip 提示语的文字
 *
 * title: 设置title,默认为横坐标的值，字符串，注意一点， 如果值为数据源字段名，则会展示对应的数组，如果不是，直接展示
 * customContent：自定义模板，接收两个参数（title: 横坐标的值，data：当前对应坐标的所有信息），需要注意一点，需要返回 字符串，也就是将所有 dom 转化为自定义
 */

/**
 * column: 有关条形图的其他属性，（层级最高）
 *
 * color：改变图标的颜色， 多个数据时，采用数组的形式传递，也可以采用函数的方式进行计算，此函数需要返回字符串，可通过传递的参数来区别不同的图表
 *
 * slider: 缩略轴，当数据过多时形成的区间，默认是全部展示，如果要修改缩略的一开的展示，可通过 start 和 end 进行修改，需要注意的是 start 和 end 的范围是 0~1
 */
export interface ChartProps {
  type: 'column' | 'line'; // 图表的类型， column（柱状图） line(折线图)
  data?: Array<any>; // 数据源列表
  xField?: string; // 横坐标对应的值
  fields: { // 匹配接口返回字段
    [key: string]: any;
  },
  onRequest?: any; // 请求的接口，这里最好直接返回对应的格式，大多数为数组，环图为对象（如果返回的不是，需要使用calcData 来处理下，让其返回对应的的格式）
  calcData?: (result:any) => [] | {}; // 目前来说返回的一个对象或者一个数组
  payload?: () => {}; // 接口请求的数据，返回一个对象
  legend?: false | LegendProps; // 配置图例
  tooltip?: false | (Types.TooltipCfg & TooltipMapping)
  label?: false | LabelProps;
  colum?: ColumProps;
  line?: Partial<LineConfig>
}

export interface ColumProps extends Partial<ColumnConfig> {
  // method?: 'isGroup' | 'isStack' | 'isRange' | 'isPercent' ; //isGroup: 分组柱状  isStack: 堆积柱状图。 isRange: 区间柱状图 isPercent: 百分比柱状图
}
export interface ChartComponentProps {
  legend?: false | LegendProps; // 配置图例
  label?: false | LabelProps; // 文本标签
  tooltip?: false | (Types.TooltipCfg & TooltipMapping)
}

interface LegendProps extends Types.LegendCfg {
  noSelect?: string[]; //与原本的selected作用一直， 不同的是直接传入 数组，自动设置为置灰效果
}

interface LabelProps extends Types.GeometryLabelCfg {
  fields?: string[]; // 映射的字段
  callback?: Types.LabelCallback; // 回调函数
  formatter?: Types.GeometryLabelCfg['content']; // 功能同 content ，兼容 v1
}
