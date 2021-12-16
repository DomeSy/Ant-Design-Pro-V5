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
    data: [],
    isRequest: true,
    legend: true,
    layout: false,
    position: 'top-left',
    labelPosition: 'middle',
    noSelect: false,
    label: true,
    labelContent: false,
    color: false,
    slider: true,
    sliderValue: false,
    tooltipCustom: false,
    tooltipTitle: false,
    tooltipPosition: 'right',
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
    <div style={{marginTop: 4}}>
      <TextShow text={'图例'} title="legend的属性" >
        { switchShow('是否展示', 'legend') }
        { switchShow('是否垂直', 'layout') }
        { selectShow(positionData, '位置', 'position') }
        { switchShow('是否置灰', 'noSelect', true) }
      </TextShow>
    </div>
    <div style={{marginTop: 4}}>
      <TextShow text={'文本标签'} title="label的属性" >
        { switchShow('是否展示', 'label') }
        { selectShow(positionLabel, '位置', 'labelPosition') }
        { switchShow('是否改变文字', 'labelContent') }
      </TextShow>
    </div>
    <div style={{marginTop: 4}}>
      <TextShow text={'提示语'} title="tooltip的属性" >
        { switchShow('更改title', 'tooltipTitle') }
        { selectShow(positionTooltip, '位置', 'tooltipPosition') }
        { switchShow('是否自定义', 'tooltipCustom') }
      </TextShow>
    </div>
    <div style={{marginTop: 4}}>
      <TextShow text={'其他'} title="有关的表格其余属性都在 colum" >
        { switchShow('改变颜色', 'color') }
        { switchShow('是否启动缩略轴', 'slider') }
        { switchShow('改变缩略的值', 'sliderValue') }
      </TextShow>
    </div>
    {
      state.show && <Charts
        fields={{ a: '北方人口', b: '南方人口'}}
        type='column'
        onRequest={state.isRequest ? queryData : undefined}
        payload={state.isRequest ? () => ({ detail: 'data' }) : undefined}
        data={state.isRequest ? undefined : state.data}
        legend={ state.legend ? {
          layout: state.layout ? 'vertical' : 'horizontal',
          position: state.position,
          noSelect: state.noSelect ? ['北方人口'] : undefined,
        } : false}
        label={ state.label ? {
          position: state.labelPosition,
          content: state.labelContent ? (data:any) => {
            return data.name
          } : undefined
        } : false}
        tooltip={{
          title: state.tooltipTitle ? 'address' : undefined,
          position: state.tooltipPosition,
          customContent: state.tooltipCustom ? (title:any, data:any) => {
            return `<div style="padding: 8px 0px">
              <div>${title}</div>
              <div style="margin-top: 8px">
                <p>${data[0]?.data?.label} : ${data[0]?.data?.name}</p>
                <p>${data[1]?.data?.label} : ${data[1]?.data?.name}</p>
              </div>
            </div>`
          } : undefined,
        }}
        colum={{
          color: state.color ? ['red', 'yellow'] : undefined,
          slider: state.slider ? state.sliderValue ? {
            start: 0.1,
            end: 0.5
          } : {} : undefined,
        }}
      ></Charts>
    }
   </>
  );
};

export default Mock

