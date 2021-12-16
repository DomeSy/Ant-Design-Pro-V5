import React, { useEffect } from 'react';
import { Charts } from '@/components';
import { Switch, Tooltip, Select } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { queryData } from './services';

import { positionData, positionLabel, positionTooltip } from './test'
import { useReactive } from 'ahooks';

const TextShow: React.FC<{text: string, title: string}> = ({text='', title='', children}) => {
  return <span style={{marginTop: 8, fontWeight: 'bolder'}}>{text} <Tooltip title={title}><InfoCircleOutlined /></Tooltip> : {children}</span>
}

const { Option } = Select;

const Mock: React.FC<any> = () => {

  const state = useReactive<any>({
    show: true,

  })

  useEffect(() => {
    if(!state.isRequest){
      queryData({detail: 'data'}).then((res) => {
        state.data = [...res]
      })
    }
  }, [state.isRequest])

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
    <div>
      <TextShow text={'数据请求onRequest'} title="是否直接传入接口获取数据" >
        <Switch checked={state.isRequest} onChange={(e) => {state.isRequest = e }}/>
      </TextShow>
    </div>
    {
      state.show && <Charts.Card
        fields={{ a: '北方人口', b: '南方人口'}}
        type='column'
        onRequest={queryData}
        payload={() => ({ detail: 'data' })}
      ></Charts.Card>
    }
   </>
  );
};

export default Mock

