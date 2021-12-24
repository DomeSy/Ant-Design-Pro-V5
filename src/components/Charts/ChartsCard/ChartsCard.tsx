import type { ChartsCardProps } from './interface';
import ProCard from '@ant-design/pro-card';
import React, { useEffect } from 'react';
import { useReactive } from 'ahooks';
import { DatePicker, Button, Radio,  } from 'antd';
import { Method } from '@/utils';
import { ChartsSy } from '@/utils/Setting';
import { calcData } from '../components/tools';
import { dateRules, dateRangRules } from './tools'
import moment from 'moment';
import Charts from '../Charts'

/**
 * @module ChartsCard // 表单与卡片
 *
 */

const { Card } = ChartsSy

const ChartsCard: React.FC<ChartsCardProps>  = ({ title, hoverable =false, headerBordered = Card.headerBordered, tooltipCard, payload, onRequest, condition, buttonText, card, ...props }) => {
  const state = useReactive<any>({
    data: props.type === 'dualAxes' ? [[], []] : [],
    dateInit: false,
    dateRangeInit: false,
    radioInit: false,
    loading: true
  })

  useEffect(() => {
    const res = setInit()
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
      }else if(item.type === 'dateRang') {
        const dateRangeInit = (item.default && Array.isArray(item.default) && item.default.length ===2) ? item.default : Array.isArray(Card.dateRang.default) ? Card.dateRang.default : false
        state.dateRangeInit = dateRangeInit
        result['dateRangeInit'] = dateRangeInit ? dateRangeInit : undefined
      }else if(item.type === 'radio' && item.radioList && item.radioList.length !== 0) {
        const radioInit = item.default ? item.default : item.radioList[0].value;
        state.radioInit = radioInit
        result['radioInit'] = radioInit
      }
    })
    return result
  }

  // 请求模板
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
            item.type === 'date' && <DatePicker  {...dateRules(item)} onChange={(val:any) => { state.dateInit = val?.format('YYYY-MM-DD') }} {...Card.date.config} {...item.date} />
          }
          {
            item.type === 'dateRang' &&
            <DatePicker.RangePicker
              defaultValue={(item.default && Array.isArray(item.default) && item.default.length ===2) ? [moment(item.default[0], 'YYYY-MM-DD'), moment(item.default[1], 'YYYY-MM-DD')] : Array.isArray(Card.dateRang.default) ? [moment(Card.dateRang.default[0], 'YYYY-MM-DD'), moment(Card.dateRang.default[1], 'YYYY-MM-DD')] : undefined}
              onChange={(val:any) => {
                state.dateRangeInit = [val[0]?.format('YYYY-MM-DD'), val[1]?.format('YYYY-MM-DD')]
              }}
              {...dateRangRules(item)}
              {...item.date}
            />
          }
          {
            item.type === 'radio' && item.radioList && item.radioList.length !== 0 &&
            <Radio.Group defaultValue={item.default || item.radioList[0].value} buttonStyle="solid" {...item.radio} onChange={(e) => {
              state.radioInit = e.target.value;
              getRequest({
                dateInit: state.dateInit ? state.dateInit : undefined,
                dateRangeInit: state.dateRangeInit ? state.dateRangeInit : undefined,
                radioInit: e.target.value
              })
            }}>
              {
                item.radioList.map((item, index) => (
                  <Radio.Button value={item.value} key={index} disabled={item?.disabled}>{item.label}</Radio.Button>
                ))
              }
            </Radio.Group>
          }
        </div>)
      }
      {
        ( condition.length !== 1 || condition[0].type !== 'radio' ) &&
        <Button type='primary' {...props.button} onClick={() => {
          getRequest({
            dateInit: state.dateInit ? state.dateInit : undefined,
            dateRangeInit: state.dateRangeInit ? state.dateRangeInit : undefined,
            radioInit: (state.radioInit || state.radioInit === 0) ? state.radioInit : undefined
          })
        }} >{ buttonText || Card.buttonText }</Button>
      }
    </div>
  }

  return <ProCard
    title={title}
    headerBordered
    hoverable
    tooltip={tooltipCard}
    {...card}
    extra={initCondition()}
  >
    <Charts {...props} data={state.data} />
  </ProCard>;
};

export default ChartsCard
