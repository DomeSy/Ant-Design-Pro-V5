import type {  conditionProps } from './interface';
import { ChartsSy } from '@/utils/Setting';
import { Method } from '@/utils';
import moment from 'moment';

const { Card } = ChartsSy


// 日期规则
export const dateRules = ({ ...props}: conditionProps) => {
  const { dateLimit } = props
  const dateRule = (current: any) => {
    if (!dateLimit || Object.keys(dateLimit).length === 0) return undefined;
    let { add = 0, subtract = 0, methodAdd =  'day', methodSubtract = 'day', type } = dateLimit;

    if(type == 0){
      add = Card.date.dateLimit ? Card.date.dateLimit?.add || 0 : 0,
      subtract = Card.date.dateLimit ? Card.date.dateLimit?.subtract || 0 : 0,
      methodAdd =  Card.date.dateLimit ? Card.date.dateLimit?.methodAdd || 'day' : 'day',
      methodSubtract = Card.date.dateLimit ? Card.date.dateLimit?.methodSubtract || 'day' : 'day'
    }
    if (type === 1) return current && current < moment().endOf('day');
    if (type === 2) return current && current > moment().endOf('day');

    return (
      current > moment().add(add, methodAdd) ||
      current <
        moment().subtract(methodSubtract === 'day' ? subtract + 1 : subtract, methodSubtract)
    );
  }

  const defaultRule = () => {
    if(props?.default) return moment(props.default, 'YYYY-MM-DD')
    if(typeof Card.date.default === 'string' ) return moment(Card.date.default, 'YYYY-MM-DD')
    if(Card.date.default === true) return moment(Method.getDate({subscribe: 1}), 'YYYY-MM-DD')
    return undefined
  }

  return {
    allowClear: Card.date.allowClear,
    disabledDate: (current: any) => dateRule(current),
    defaultValue:  defaultRule(),
  }
}

// 日期时间段规则
export const dateRangRules = ({ ...props}: conditionProps) => {
  const { dateLimit } = props
  const dateRule = (current: any) => {
    if (!dateLimit || Object.keys(dateLimit).length === 0) return undefined;
    let { add = 0, subtract = 0, methodAdd =  'month', methodSubtract = 'month', type } = dateLimit;

    if(type == 0){
      add = Card.dateRang.dateLimit ? Card.dateRang.dateLimit?.add || 0 : 0,
      subtract = Card.dateRang.dateLimit ? Card.dateRang.dateLimit?.subtract || 0 : 0,
      methodAdd =  Card.dateRang.dateLimit ? Card.dateRang.dateLimit?.methodAdd || 'day' : 'day',
      methodSubtract = Card.dateRang.dateLimit ? Card.dateRang.dateLimit?.methodSubtract || 'day' : 'day'
    }
    if (type === 1) return current && current < moment().endOf('day');
    if (type === 2) return current && current > moment().endOf('day');

    return (
      current > moment().add(add, methodAdd) ||
      current <
        moment().subtract(methodSubtract === 'day' ? subtract + 1 : subtract, methodSubtract)
    );
  }
  return {
    allowClear: Card.dateRang.allowClear,
    disabledDate: (current: any) => dateRule(current),
  }
}
