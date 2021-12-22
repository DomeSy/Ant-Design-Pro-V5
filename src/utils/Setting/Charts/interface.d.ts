import { RuleProps } from '../commonSy';
import { ButtonProps, DatePickerProps } from 'antd';

interface ChartsProps {
  xField: string, // 横坐标默认值
  legend: { // 配置图例
    layout: 'horizontal' | 'vertical'; // 布局方式 'horizontal' | 'vertical' 水平或是垂直
    position: 'top' | 'top-left' | 'top-right' | 'right' | 'right-top' | 'right-bottom' | 'left' | 'left-top' | 'left-bottom' | 'bottom' | 'bottom-left' | 'bottom-right'; // 图例配置方式
  },
  label: { // 样例文字
    position: 'top' | 'bottom' | 'middle' | 'left' | 'right'; //定位方法
  },
  colum: {
    isGroup: boolean; //是否开启分组柱状图
  }
  tooltip: {
    position: 'top' | 'bottom' | 'left' | 'right'; //定位方法
  },
  Card: CardProps; // 卡片列表的配置
}

interface CardProps {
  xField: string, // 横坐标默认值
  buttonText: buttonText, // 横坐标按钮
  headerBordered?: boolean; //卡片横杠
  date: { // 日期
    default: boolean | string; // 默认值，为true时，日期选中为当天，为false时不选中，为字符串默认为当天的日期
    allowClear: boolean; // 是否有自动清除按钮
    config: Partial<DatePickerProps>; // 其余属性
    dateLimit: false | {
      methodAdd?: 'day' | 'month' | 'week' | 'year'; // 后几天的模式，默认为 day
      methodSubtract?: 'day' | 'month' | 'week' | 'year'; // 前几天的模式，默认为 day
      add?: number; // 后几天，
      subtract?: number; // 前几天，包含当天，如果只要当天的，只需要设置为0就行
    }
  },
  dateRang: { //日期选择器
    config: Partial<DatePickerProps>; // 其余属性
    default: boolean | [string, string];
    allowClear: boolean; // 是否有自动清除按钮
    dateLimit: false | {
      methodAdd?: 'day' | 'month' | 'week' | 'year'; // 后几天的模式，默认为 day
      methodSubtract?: 'day' | 'month' | 'week' | 'year'; // 前几天的模式，默认为 day
      add?: number; // 后几天，
      subtract?: number; // 前几天，包含当天，如果只要当天的，只需要设置为0就行
    }
  }
}

export default ChartsProps;
