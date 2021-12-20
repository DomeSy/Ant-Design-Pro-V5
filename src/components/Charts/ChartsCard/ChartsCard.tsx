import type { ChartsCardProps, conditionProps } from './interface';
import ProCard from '@ant-design/pro-card';
import React, { useEffect, useMemo, useCallback } from 'react';
import { useReactive, useUpdateEffect } from 'ahooks';
import { DatePicker, Button } from 'antd';
import { Method } from '@/utils';
import { ChartsSy } from '@/utils/Setting';
import moment from 'moment';
import Charts from '../Charts'

/**
 * @module ChartsCard // 表单与卡片得1
 *
 */

const { Card } = ChartsSy

const ChartsCard: React.FC<ChartsCardProps>  = ({  condition, card, ...props }) => {
  const state = useReactive<any>({
    dateInit: false,
    loading: true
  })

  useEffect(() => {
  }, [])

  // 初始化条件
  const initCondition = () => {
    if(!condition || condition?.length === 0) return
    return <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
      {                      
        condition.map((item, index) => <div style={{marginRight: 8}} key={index}>
          {
            item.type === 'date' && <DatePicker {...dateRules(item)} {...Card.date.config} {...item.date} />
          }
        </div>)
      }
      <Button type='primary' {...props.button} onClick={() => {console.log('1')} } >查询</Button>
    </div>
  }

  const dateRules = ({ ...props}: conditionProps) => {
    const { dateLimit } = props
    const dateRule = (current: any) => {
      if (!dateLimit || Object.keys(dateLimit).length === 0) return undefined;
      const {
        add = 0,
        subtract = 0,
        methodAdd = 'day',
        methodSubtract = 'day',
        type = 0,
      } = dateLimit;

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
      onChange:(val:any) => {
        state.dateInit = val?.format('YYYY-MM-DD')
      }
    }
  }

  return <ProCard
    // title="标题"
    // loading={state.loading}
    headerBordered
    // tooltip="这是提示"
    {...card}
    extra={initCondition()}
  >
    <Charts {...props}  />
  </ProCard>;
};

export default ChartsCard
