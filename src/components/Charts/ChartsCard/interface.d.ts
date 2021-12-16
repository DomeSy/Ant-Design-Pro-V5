import { Types } from '@antv/g2';
import { ChartProps } from '../interface'
import { ProCardProps } from '@ant-design/pro-card';
import { DatePickerProps } from 'antd';

export interface ChartsCardProps extends ChartProps {
  condition?: conditionProps[]; // 有关条件的数据
  card?: ProCardProps; // 有关卡片的其余属性
}

interface conditionProps {
  type?: 'date', // 筛选条件，默认为日期， date(日期),
  default?: string | number; // 默认传入的日期对应的值
  date?: DateProps; // 日期对应相关的属性
}

// 日期额外属性
interface DateProps extends Partial<DatePickerProps> {

}
