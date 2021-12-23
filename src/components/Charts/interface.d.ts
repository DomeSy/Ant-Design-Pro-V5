import { Types } from '@antv/g2';
import {  LineConfig, ColumnConfig, DualAxesConfig, BarConfig, AreaConfig, PieConfig } from '@ant-design/charts';

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

/**
 * type 为 dualAxes 双轴图
 *
 * geometryOptions：指定了双轴各自对应的图形配置，默认第一个为柱状图，第二个为折线图，并且不用设置 、 seriesField（会自动处理），geometry 默认是[柱状图, 折线图]。如果不是可自行配置 其余的参数与配置一样
 */

/**
 * type 为 bar 条形图
 *
 *  需要注意的是，这里请求的数据 与其他格式相反的形式，xField 对应的是纵坐标的形式， fields对应的字段只能有一个对应的值
 */

/**
 * type 为 pie 饼图
 *
 * 饼图与其他图有些不同，饼图的数据源有可能会变，也就是接口字段不确定行，为此提供两种方式，一种是固定的，只需要传对象即可（这种方式不能返回多个数组），另一种是通过接口字段自动生成
 */
export interface ChartProps {
  type: 'column' | 'line' | 'dualAxes' | 'bar' | 'area' | 'pie'; // 图表的类型， column（柱状图） line(折线图) dualAxes(双轴图) bar(条形图) area(面积图) pie(饼图)
  data?: Array<any>; // 数据源列表
  xField?: string; // 横坐标对应的值
  fields: { // 匹配接口返回字段, 为数组时，目前只支持
    [key: string]: any;
  } | [string, string],
  fieldsLine?: { // 匹配接口(双轴图-折现图操作)
    [key: string]: any;
  },
  onRequest?: any; // 请求的接口，这里最好直接返回对应的格式，大多数为数组，环图为对象（如果返回的不是，需要使用calcData 来处理下，让其返回对应的的格式）
  calcData?: (result:any) => [] | {}; // 目前来说返回的一个对象或者一个数组
  payload?: () => {}; // 接口请求的数据，返回一个对象
  legend?: false | LegendProps; // 配置图例
  tooltip?: false | (Types.TooltipCfg) // 提示语
  label?: false | LabelProps; // 文本标签
  colum?: ColumProps;
  line?: LineProps;
  dualAxes?: DualAxesProps;
  bar?: BarProps;
  area?: AreaProps;
  pie?: PieProps;
}


/** 饼图 */
export interface PieProps extends Partial<PieConfig>{
  ring?: boolean; // 是否为环图， 默认 0.6
  zero?: boolean; // 去除含0的数据，可全局配置
  labelType?: 'inner' | 'outer' | 'spider' //对应三种不同的文字
}

/** 面积图 */
export interface AreaProps extends Partial<AreaConfig>{
}

/** 条形图 */
export interface BarProps extends Partial<BarConfig>{
}

/** 双轴图 */
export interface DualAxesProps extends Partial<DualAxesConfig>{
  // geometryOptions?: DualAxesConfig['geometryOptions']
}

/** 折现图 */
export interface LineProps extends Partial<LineConfig> {
  stepType?: 'hv' | 'vh' | 'hvh' | 'vhv'
}

/** 柱状图 */
export interface ColumProps extends Partial<ColumnConfig> {
  // method?: 'isGroup' | 'isStack' | 'isRange' | 'isPercent' ; //isGroup: 分组柱状  isStack: 堆积柱状图。 isRange: 区间柱状图 isPercent: 百分比柱状图
}

/**公共配置 */
export interface ChartComponentProps {
  legend?: false | LegendProps; // 配置图例
  label?: false | LabelProps; // 文本标签
  tooltip?: false | (Types.TooltipCfg)
}

interface LegendProps extends Types.LegendCfg {
  noSelect?: string[]; //与原本的selected作用一直， 不同的是直接传入 数组，自动设置为置灰效果
}

interface LabelProps extends Types.GeometryLabelCfg {
  fields?: string[]; // 映射的字段
  callback?: Types.LabelCallback; // 回调函数
  formatter?: Types.GeometryLabelCfg['content']; // 功能同 content ，兼容 v1
}
