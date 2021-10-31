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
