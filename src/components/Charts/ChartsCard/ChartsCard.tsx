import type { ChartsCardProps } from './interface';
import ProCard from '@ant-design/pro-card';
import React, { useEffect, useMemo, useCallback } from 'react';
import { useReactive, useUpdateEffect } from 'ahooks';
import { DatePicker, Button } from 'antd';
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
    // initCondition()
  }, [])

  // 初始化条件
  const initCondition = () => {
    if(!condition || condition?.length === 0) return

    return <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
      {
        condition.map((item, index) => <div style={{marginRight: 8}} key={index}>
          {
            item.type === 'date' && <DatePicker
              onChange={(val) => {
                state.dateInit = val?.format('YYYY-MM-DD')
              }}
            />
          }
        </div>)
      }
      <Button type='primary' onClick={() => {console.log('1')}} > 查询</Button>
    </div>
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
