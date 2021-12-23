import React, { useState, useEffect } from 'react';
import { DetailSetting } from '@/commonPages'
import Mock from './mock'
import type { Props as DetailSettingListProps } from '@/commonPages/DetailSetting'

const Index: React.FC<any> = (props) => {
  const [detail, setDetail] = useState<DetailSettingListProps>({})

  useEffect(() => {
    setDetail({
      // ...res.list,
      code:{
        title: '代码演示Charts（type为Pie）',
        showCode: [
          {
            component: <Mock />,
            title: '功能展示',
            id: 'code1',
            content: <div>
              <p>legend tooltip label 三个参数，分别对应 配置图例 提示语 文本标签 三个字段</p>
              <p>原本属性在 pie 中</p>
            </div>,
            code: `
  import React, { useEffect } from 'react';
  import { Charts } from '@/components';
  import { Switch, Tooltip, Select } from 'antd';
  import { InfoCircleOutlined } from '@ant-design/icons';
  import { queryData } from './services';

  import { positionData, typeLabel, positionTooltip } from './test'
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
      ring: true,
      zero: false,
      monthRequest: false,
      labelType: 'inner',
      legend: true,
      layout: false,
      position: 'top-left',
      noSelect: false,
      color: false,
      tooltipCustom: false,
      tooltipTitle: false,
      tooltipPosition: 'right',
    })

    useEffect(() => {
      if(!state.isRequest){
        queryData({detail: state.monthRequest ? 'pie1' : 'pie'}).then((res) => {
          state.data = Array.isArray(res) ? [...res] : [res]
        })
      }
    }, [state.isRequest])

    const switchShow = (label:string, name:string, flag?: boolean, tooltip?: string) => {
      return <>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>{label}{tooltip && <Tooltip title={tooltip}><InfoCircleOutlined /></Tooltip>}：</span>
        <Switch checked={state[name]} onChange={(e) => { if(flag){
          state.show = false;
          setTimeout(() => {state.show = true}, 200)
        } state[name] = e }}/>
      </>
    }

    const selectShow = (list: Array<any>, label:string, name:string, flag?: boolean) => {
      return <>
        <span style={{  marginLeft: 8}} >{label}：</span>
        <Select value={state[name]} style={{ width: 120,marginLeft:8, marginTop:8 }} onChange={(e) => {
          if(flag){
            state.show = false;
            setTimeout(() => {state.show = true}, 200)
          }
          state[name] = e
        }}>
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
          { switchShow('是否匹配接口', 'monthRequest', false, '需要依靠数据请求onRequest的开关看效果') }
          { switchShow('是否为环图', 'ring') }
          { switchShow('清除0的数据', 'zero', false, '需要依靠数据请求onRequest的开关看效果') }
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
          { selectShow(typeLabel, '位置', 'labelType') }
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
        </TextShow>
      </div>
      {
        state.show && <Charts
          fields={state.monthRequest ? ['name', 'a'] : { a: '北方人口', b: '南方人口', c: '北京人口', d: '上海人口', e: '南京人口', f: '江苏人口' }}
          type='pie'
          onRequest={state.isRequest ? queryData : undefined}
          payload={state.isRequest ? () => ({ detail: state.monthRequest ? 'pie1' : 'pie' }) : undefined}
          data={state.isRequest ? undefined : state.data}
          legend={ state.legend ? {
            layout: state.layout ? 'vertical' : 'horizontal',
            position: state.position,
            noSelect: state.noSelect ? ['北方人口'] : undefined,
          } : false}
          tooltip={{
            title: state.tooltipTitle ? 'address' : undefined,
            position: state.tooltipPosition,
            customContent: state.tooltipCustom ? (title:any, data:any) => {
              return ”<div style="padding: 8px 0px">
                <div>title</div>
                <div style="margin-top: 8px">
                  <p>data[0]?.data?.label : data[0]?.data?.name</p>
                  <p>data[1]?.data?.label : data[1]?.data?.name</p>
                </div>
              </div>”
            } : undefined,
          }}
          pie={{
            ring: state.ring,
            zero: state.zero,
            labelType: state.labelType,
            color: state.color ? ['#d62728', '#2ca02c', '#000000', 'yellow', 'blue', 'pink'] : undefined,
          }}
        ></Charts>
      }
      </>
    );
  };
  export default Mock
          `
          }
        ]
      },
    })
  }, []);

  return (
    <DetailSetting {...detail} />
  );
};

export default Index;
