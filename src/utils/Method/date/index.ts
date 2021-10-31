import moment from 'moment';
/**
 * @module 日期转化
 *
 * @param type 默认为 1 格式 YYYY-MM-DD HH:mm:ss 年月日 时分秒
 * @param type 2 格式 YYYY-MM-DD
 */
export const Moment = (data: string, type: number = 1) => {
  let result = '';
  if (type === 1) {
    result = moment(data).format('YYYY-MM-DD HH:mm:ss');
  } else if (type === 2) {
    result = moment(data).format('YYYY-MM-DD');
  }
  return result;
};

interface getDataProps {
  format?: string; // 默认时间格式
  initData?: string; //自定义时间格式
  method?: 'year' | 'month' | 'day' | 'week' | 'hour' | 'minute' | 'second'
  | 'millisecond'; // 默认时间的方式 默认为天
  subscribe?: number; // 前几天
  add?: number; // 后几天
  startOne?: number;
  endOne?: number;
}

/**
 * @module 时间转化
 *
 * @param format 时间格式 默认 YYYY-MM-DD
 * @param initData 初始的默认值
 * @param method 模式： 年 月 日 周 时 分 秒 毫秒
 * @param subscribe 前几天的示例
 * @param add 后几天的示例
 */
export const getDate = ({initData, method='day', subscribe, add, format= 'YYYY-MM-DD'}:getDataProps) => {

  const date = initData || moment().format(format)

  if(subscribe){
    return moment(date).subtract(subscribe, method).format(format)
  }else if(add){
    return moment(date).add(add, method).format(format);
  }
  // 返回今天
  return moment().format(format)
}
