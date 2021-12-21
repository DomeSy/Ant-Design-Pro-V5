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
  date: { // 日期
    default: boolean | string; // 默认值，为true时，日期选中为当天，为false时不选中，为字符串默认为当天的日期
    allowClear: boolean; // 是否有自动清除按钮
    config: Partial<DatePickerProps>; // 其余属性
  }
}

export default ChartsProps;
