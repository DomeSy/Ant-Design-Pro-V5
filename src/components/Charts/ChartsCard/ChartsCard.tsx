import type { ChartsCardProps, conditionProps } from './interface';
import ProCard from '@ant-design/pro-card';
import React, { useEffect, useMemo, useCallback } from 'react';
import { useReactive, useUpdateEffect } from 'ahooks';
import { DatePicker, Button } from 'antd';
import { Method } from '@/utils';
import { ChartsSy } from '@/utils/Setting';
import { calcData } from '../components/tools';
import moment from 'moment';
import Charts from '../Charts'

/**
 * @module ChartsCard // 表单与卡片
 *
 */

const { Card } = ChartsSy

const ChartsCard: React.FC<ChartsCardProps>  = ({ title, headerBordered = Card.headerBordered, tooltipCard, payload, onRequest, condition, buttonText, card, ...props }) => {
  const state = useReactive<any>({
    data: props.type === 'dualAxes' ? [[], []] : [],
    dateInit: false,
    loading: true
  })

  useEffect(() => {
    // console.log(JSON.parse(JSON.stringify(state.dateInit)), '998')
    const res = setInit()
    console.log(res, '00')
    getRequest(res)
  }, [])

  const setInit = () => {
    if(!condition) return {}
    let result:any = {}
    condition.map((item) => {
      if(item.type === 'date'){
        const dateInit = item?.default ? item.default : typeof Card.date.default === 'string' ?  Card.date.default : Card.date.default === true ? Method.getDate({subscribe: 1}) : false;
        state.dateInit = dateInit
        result['dateInit'] = dateInit ? dateInit : undefined
      }
    })
    return result
  }

  const getRequest = async (params:any) =>  {
    const payloads = await payload({ ...params })
    const res = await onRequest(payloads)
    const data = calcData(props.calcData ? props.calcData(res) : res, { xField: props.xField || Card.xField , ...props })
    state.data = data
  }

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
      <Button type='primary' {...props.button} onClick={() => {
        getRequest({
          dateInit: state.dateInit ? state.dateInit : undefined,
        })
      }} >{ buttonText || Card.buttonText}</Button>
    </div>
  }

  // 日期规则
  const dateRules = ({ ...props}: conditionProps) => {
    const { dateLimit } = props
    const dateRule = (current: any) => {
      if (!dateLimit || Object.keys(dateLimit).length === 0) return undefined;
      const {
        add = Card.date.dateLimit ? Card.date.dateLimit?.add || 0 : 0,
        subtract = Card.date.dateLimit ? Card.date.dateLimit?.subtract || 0 : 0,
        methodAdd =  Card.date.dateLimit ? Card.date.dateLimit?.methodAdd || 'day' : 'day',
        methodSubtract = Card.date.dateLimit ? Card.date.dateLimit?.methodSubtract || 'day' : 'day',
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
    title={title}
    // loading={state.loading}
    headerBordered
    tooltip={tooltipCard}
    {...card}
    extra={initCondition()}
  >
    <Charts {...props} data={state.data} />
  </ProCard>;
};

export default ChartsCard