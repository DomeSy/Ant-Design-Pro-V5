import React, { useEffect } from 'react';
import { Charts } from '@/components';
import { Switch, Tooltip, Select } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { queryData } from './services';
import { Method } from '@/utils';
import { dateLimitData } from './test'
import { useReactive } from 'ahooks';

const TextShow: React.FC<{text: string, title: string}> = ({text='', title='', children}) => {
  return <span style={{marginTop: 8, fontWeight: 'bolder'}}>{text} <Tooltip title={title}><InfoCircleOutlined /></Tooltip> : {children}</span>
}

const { Option } = Select;

const Mock: React.FC<any> = () => {

  const state = useReactive<any>({
    show: true,
    dateDefault: false,
    dateLimit: 0
  })

  // useEffect(() => {
  //   if(!state.isRequest){
  //     queryData({detail: 'data'}).then((res) => {
  //       state.data = [...res]
  //     })
  //   }
  // }, [state.isRequest])

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

  return (
   <>
    {/* <div>
      <TextShow text={'数据请求onRequest'} title="是否直接传入接口获取数据" >
        <Switch checked={state.isRequest} onChange={(e) => {state.isRequest = e }}/>
      </TextShow>
    </div> */}
     <div style={{marginTop: 4}}>
      <TextShow text={'时间规则'} title="type为date" >
        { switchShow('增加默认值', 'dateDefault', true ) }
        {/* { switchShow('是否垂直', 'layout') } */}
        { selectShow(dateLimitData, '限制', 'dateLimit') }
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
           return { detail: 'data', ...data }
        }}
        condition={[{
          type: 'date',
          default: state.dateDefault ? Method.getDate({add: 1}) : undefined,
          dateLimit: state.dateLimit === 1 ? { type: 0} : state.dateLimit === 2 ? { type: 1 } : state.dateLimit === 3 ? { type: 2 } : state.dateLimit === 4 ? { add: 5, subtract: 3 } : state.dateLimit === 5 ? { add: 1, subtract: 1, methodSubtract: 'month', methodAdd: 'month' } : undefined
        }]}
      ></Charts.Card>
    }
   </>
  );
};

export default Mock

