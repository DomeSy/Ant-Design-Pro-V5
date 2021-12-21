import ChartsProps from './interface'
import { Method } from '@/utils';

/**
 * @module 图标模块
 *
 */

const ChartsSy: ChartsProps = {
  xField: 'time',
  legend: {
    layout: 'horizontal',
    position: 'top-left'
  },
  label: {
    position: 'middle'
  },
  colum: {
    isGroup: true
  },
  tooltip: {
    position: 'right'
  },
  Card: {
    xField: 'time',
    buttonText: '查询',
    headerBordered: true,
    date: {
      default: Method.getDate({subscribe: 1}), // 自定义默认时间，为 true 则是当天
      allowClear: false,
      config:{}
    }
  }
}

export default ChartsSy;
