import type { ChartsCardProps, conditionProps } from './interface';
import ProCard from '@ant-design/pro-card';
import React, { useEffect, useMemo, useCallback } from 'react';
import { useReactive, useUpdateEffect } from 'ahooks';
import { DatePicker, Button } from 'antd';
import moment from 'moment';
import Charts from '../Charts'

/**
 * @module ChartsCard // 表单与卡片得1
 *
 */
const ChartsCard: React.FC<ChartsCardProps>  = ({ condition, card, ...props }) => {
  const state = useReactive<any>({
    dateInit: false,
    loading: true
  })

  useEffect(() => {
  }, [ ])

  // 初始化条件
  const initCondition = () => {
    if(!condition || condition?.length === 0) return

    return <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
      {                      
        condition.map((item, index) => <div style={{marginRight: 8}} key={index}>
          {
            item.type === 'date' && <DatePicker
              {...dateRules(item)}
            />
          }
        </div>)
      }
      <Button type='primary' onClick={() => {console.log('1')}} >查询</Button>
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

    return {
      disabledDate: (current: any) => dateRule(current),
      // defaultValue: default ? default : undefined,
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
