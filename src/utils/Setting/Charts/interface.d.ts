import { RuleProps } from '../commonSy';
import { ButtonProps } from 'antd';

interface ChartsProps {
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
}

export default ChartsProps;
