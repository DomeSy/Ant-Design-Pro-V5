import React from 'react';
import { Charts } from '@/components';
import { Switch, Tooltip, Select } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { queryData } from './services';
import { Method } from '@/utils';
import { dateLimitData, dateRangLimitData } from './test'
import { useReactive } from 'ahooks';

const TextShow: React.FC<{text: string, title: string}> = ({text='', title='', children}) => {
  return <span style={{marginTop: 8, fontWeight: 'bolder'}}>{text} <Tooltip title={title}><InfoCircleOutlined /></Tooltip> : {children}</span>
}

const { Option } = Select;

const Mock: React.FC<any> = () => {

  const state = useReactive<any>({
    show: true,
    dateDefault: false,
    dateLimit: 0,
    dateRangDefault: false,
    dateRangLimit: 0,
    radioDefault: false,
    radioDisabled: false,
    dateShow: true,
    dateRangShow: true,
    radioShow:true
  })

  const switchShow = (label:string, name:string, flag?: boolean) => {
    return <>
      <span style={{marginLeft: 12, fontWeight: 'normal'}}>{label}：</span>
      <Switch checked={state[name]} onChange={(e) => { if(flag){
        state.show = false;
        setTimeout(() => {state.show = true}, 200)
      } state[name] = e }}/>
    </>
  }

  const selectShow = (list: Array<any>, label:string, name:string) => {
    return <>
      <span style={{  marginLeft: 8}} >{label}：</span>
      <Select value={state[name]} style={{ width: 120,marginLeft:8, marginTop:8 }} onChange={(e) => { state[name] = e }}>
        {list.map((data, i) => <Option key={i} value={data.value}>
          {data.name}
        </Option>)}
      </Select>
    </>
  }

  const date = () => {
    if(state.dateShow){
      const res:any =  [
        {
          type: 'date',
          default: state.dateDefault ? Method.getDate({add: 1}) : undefined,
          dateLimit: state.dateLimit === 1 ? { type: 0} : state.dateLimit === 2 ? { type: 1 } : state.dateLimit === 3 ? { type: 2 } : state.dateLimit === 4 ? { add: 5, subtract: 3 } : state.dateLimit === 5 ? { add: 1, subtract: 1, methodSubtract: 'month', methodAdd: 'month' } : undefined
        },
      ]
      return res
    }
    return []
  }

  const dateRang = () => {
    if(state.dateRangShow){
      const res:any =  [
        {
          type: 'dateRang',
          default: state.dateRangDefault ?[Method.getDate({subscribe: 0}), Method.getDate({add: 3})] : undefined,
           dateLimit: state.dateRangLimit === 1 ? { type: 0} : state.dateLimit === 2 ? { type: 1 } : state.dateLimit === 3 ? { type: 2 } : state.dateLimit === 4 ? { add: 2, methodAdd: 'month', subtract: 2, methodSubtract: 'month' }  : undefined
        },
      ]
      return res
    }
    return []
  }

  const radio = () => {
    if(state.radioShow){
      const res:any =  [
        {
          type: 'radio',
          default: state.radioDefault ? 2 : undefined,
          radioList: [
            {
              label: '状态1',
              value: 0,
            },
            {
              label: '状态2',
              value: 1,
              disabled: state.radioDisabled
            },
            {
              label: '状态3',
              value: 2,
            }
          ]
        }
      ]
      return res
    }
    return []
  }

  return (
   <>
    <div >
      <TextShow text={'规则'} title="type为dateRang" >
        { switchShow('时间规则', 'dateShow' ) }
        { switchShow('日期规则', 'dateRangShow' ) }
        { switchShow('单选规则', 'radioShow' ) }
      </TextShow>
    </div>
    <div style={{marginTop: 4}}>
      <TextShow text={'时间规则'} title="type为date" >
        { switchShow('增加默认值', 'dateDefault ', true ) }
        { selectShow(dateLimitData, '限制', 'dateLimit') }
      </TextShow>
    </div>
    <div style={{marginTop: 4}}>
      <TextShow text={'日期规则'} title="type为dateRang" >
        { switchShow('增加默认值', 'dateRangDefault', true ) }
        { selectShow(dateRangLimitData, '限制', 'dateRangLimit') }
      </TextShow>
    </div>
    <div style={{marginTop: 8, marginBottom: 8}}>
      <TextShow text={'按钮规则'} title="type为radio，radio不能为空" >
        { switchShow('更改默认值', 'radioDefault', true) }
        { switchShow('是否禁用', 'radioDisabled' ) }
      </TextShow>
    </div>
    {
      state.show && <Charts.Card
        title="卡片柱状图"
        tooltipCard='只支持接口传参的形式，注意 condition 为添加条件，fields 为接口匹配字段，payload 为接口传参'
        fields={{ a: '北方人口', b: '南方人口'}}
        type='column'
        onRequest={queryData}
        payload={(data) => {
          return { detail: 'data', dateInit: data?.dateInit, startTime: data?.dateRangeInit[0], endTime:  data?.dateRangeInit[1], radio: data?.radioInit }
        }}
        condition={[
          ...date(),
          ...dateRang(),
          ...radio(),
        ]}
      ></Charts.Card>
    }
   </>
  );
};

export default Mock

