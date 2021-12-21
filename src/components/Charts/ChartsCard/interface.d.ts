import { Types } from '@antv/g2';
import { ChartProps } from '../interface'
import { ProCardProps } from '@ant-design/pro-card';
import { DatePickerProps, ButtonProps } from 'antd';

export interface ChartsCardProps extends ChartProps {
  title?: React.ReactNode; // 卡片标题
  tooltipCard?: string; // 卡片提示语
  headerBordered?: boolean; //是否增加横杠
  payload: (data:any) => {}; //必须存在，包含条件
  condition?: conditionProps[]; // 有关条件的数据
  card?: ProCardProps; // 有关卡片的其余属性
  button?: ButtonProps; // 按钮相关的属性
  buttonText?: React.ReactNode; // 默认的查询文字
}

export interface conditionProps {
  type?: 'date' | 'dateRang', // 筛选条件，默认为日期， date(日期),
  default?: any; // 默认传入的日期对应的值
  date?: DateProps; // 日期对应相关的属性
  dateLimit?: {
    methodAdd?: 'day' | 'month' | 'week' | 'year'; // 后几天的模式，默认为 day
    methodSubtract?: 'day' | 'month' | 'week' | 'year'; // 前几天的模式，默认为 day
    add?: number; // 后几天，
    subtract?: number; // 前几天，包含当天，如果只要当天的，只需要设置为0就行
    type?: 0 | 1 | 2 ; // 特殊类型，科技定义，为0时则走Setting Charts所设置公共的部分 为 1 时，不包括当天的时间，为2时，包括今天的之前日期
  },
}

// 日期额外属性
interface DateProps extends Partial<DatePickerProps> {

}
