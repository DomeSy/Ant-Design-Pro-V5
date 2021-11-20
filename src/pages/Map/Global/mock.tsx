import React, { useState } from 'react';
import { Map } from '@/components'
import { Switch, Tooltip, Select, message } from 'antd';
import { ProvinceData, colorData, PdepthData } from './test'
import { InfoCircleOutlined } from '@ant-design/icons';
import { useReactive } from 'ahooks';

const { Option } = Select;

const TextShow: React.FC<{text: string, title: string}> = ({text='', title='', children}) => {
  return <span style={{marginTop: 8, fontWeight: 'bolder'}}>{text} <Tooltip title={title}><InfoCircleOutlined /></Tooltip> : {children}</span>
}

const Mock: React.FC<any> = () => {
  const [scene, setScene] = useState<any>()
  const [ init, setInit ] = useState<number>(320000)
  const [layer, setLayer] = useState<any>();

  const state = useReactive<any>({
    show: true,
    drag: false,
    depth: 2,
    color: 0,
    zoom: false,
    rotate: false,
    dbZoom: false,
    click: false,
    dbclick: false,
    unClick: false,
    unDbclick: false,
    hidden: false,
    allMethod: true,
    initMethod: [
      {
        type: 'click',
        render: (e:any) => {
          console.log(e, '初始化点击')
          message.info('我是初始化点击的省份：' + e.feature.properties.NAME_CHN)
        }
      },
      {
        type: 'dblclick',
        render: (e:any) => {
          console.log(e, '初始化双击')
          message.info('我是初始化双击击的省份：' + e.feature.properties.NAME_CHN)
        }
      }
    ],
    clickInit: false,
    dbclickInit: false,
    unclickInit: true,
    undbclickInit: true,
    colorInit: false,
    fontInit: false,
    hiddenInit: false,
    strokeInit: false,
  })

  return (
   <>
    <div>
      <span style={{fontWeight: 500}} >切换省份：</span>
      <Select value={init} style={{ width: 120,marginTop:8 }} onChange={(e) => { setInit(e) }}>
        {ProvinceData.map((province, i) => <Option key={i} value={province.adcode}>
          {province.NAME_CHN}
        </Option>)}
      </Select>
      <span style={{fontWeight: 500, marginLeft: 8}} >改变绘制颜色：</span>
      <Select value={state.color} style={{ width: 120,marginLeft:8 }} onChange={(e) => {
        if(e !== 0){
          layer.updateLayerAttribute('fill', 'color', String(e));
        }else{
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
        }
        state.color = e
      }}>
        {colorData.map((data, i) => <Option key={i} value={data.value}>
          {data.name}
        </Option>)}
      </Select>
      <span style={{fontWeight: 500, marginLeft: 8}} >改变层级：</span>
      <Select value={state.depth} style={{ width: 120, marginLeft:8 }} onChange={(e) => {
        state.show = false;
        setTimeout(() => {state.show = true}, 500)
        state.depth = e
      }}>
        {PdepthData.map((data, i) => <Option key={i} value={data.value}>
          {data.name}
        </Option>)}
      </Select>
    </div>
    <div style={{marginTop: 8}}>
      <TextShow text={'地图功能'} title="通过 getScene 获取 scene 实例" >
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>拖拽：</span><Switch checked={state.drag} onChange={(e) => {scene.setMapStatus({ dragEnable: e }); state.drag = e}}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>缩放：</span><Switch checked={state.zoom} onChange={(e) => {scene.setMapStatus({ zoomEnable: e }); state.zoom = e}}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>旋转：</span><Switch checked={state.rotate} onChange={(e) => {scene.setMapStatus({ rotateEnable: e }); state.rotate = e}}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>双击放大：</span><Switch checked={state.dbZoom} onChange={(e) => {scene.setMapStatus({ doubleClickZoom: e }); state.dbZoom = e}}/>
      </TextShow>
    </div>
    <div style={{marginTop: 8}}>
      <TextShow text={'地图事件'} title="通过 getLayer 获取 layer 实例" >
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>点击：</span><Switch checked={state.click} onChange={(e) => {
          if(e) {
            layer.on('click', (e:any) => {
              message.info('自定义点击名称：' + e.feature.properties.NAME_CHN)
            });
          }else{
            layer.off('click')
          }
          state.click = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>双击：</span><Switch checked={state.dbclick} onChange={(e) => {
          if(e) {
            layer.on('dblclick', (e:any) => {
              message.info('自定义双击击名称：' + e.feature.properties.NAME_CHN)
            });
          }else{
            layer.off('dblclick')
          }
          state.dbclick = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>空白点击：</span><Switch checked={state.unClick} onChange={(e) => {
          if(e) {
            layer.on('unclick', (e:any) => {
              message.info('空白处自定义点击')
            });
          }else{
            layer.off('unclick')
          }
          state.unClick = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>空白双击击：</span><Switch checked={state.unDbclick} onChange={(e) => {
          if(e) {
            layer.on('undblclick', (e:any) => {
              message.info('空白处自定义双击')
            });
          }else{
            layer.off('undblclick')
          }
          state.unDbclick = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>隐藏图层：</span><Switch checked={state.hidden} onChange={(e) => {
          e ? layer.hide() : layer.show()
          state.hidden = e
        }}/>
      </TextShow>
    </div>
    <div style={{marginTop: 8}}>
      <TextShow text={'初始化事件'} title="通过 initMethod 集中设置，或者通过 onClick、onDoubleClick单独设置也可以" >
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>集中设置点击双击事件：</span><Switch checked={state.allMethod} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.allMethod = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>初始化点击：</span><Switch checked={state.clickInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.clickInit = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>初始化双击：</span><Switch checked={state.dbclickInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.dbclickInit = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>初始化空白单击：</span><Switch checked={state.unclickInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.unclickInit = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>初始化空白双击：</span><Switch checked={state.undbclickInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.undbclickInit = e
        }}/>
      </TextShow>
    </div>
    <div style={{marginTop: 8}}>
      <TextShow text={'初始化配置'} title="通过 config 进行详细配置" >
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>改变地图颜色：</span><Switch checked={state.colorInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.colorInit = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>改变文字：</span><Switch checked={state.fontInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.fontInit = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>影藏文字：</span><Switch checked={state.hiddenInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.hiddenInit = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>改变描边颜色：</span><Switch checked={state.strokeInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.strokeInit = e
        }}/>
      </TextShow>
    </div>
    <div style={{width: '100%', height: '600px'}}>
      {
        state.show && <Map.Province
        init={init}
        config={{
          depth: state.depth,
          fillColor: state.colorInit ? {
            values: ['rgb(106,33,29)','rgb(144,55,53)','rgb(181,78,76)','rgb(211,104,101)','rgb(227,147,131)','rgba(255,255,255,0.8)']
          } : undefined,
          label: state.fontInit ? {
            field: 'adcode'
          } : undefined,
          noneLabel: state.hiddenInit ? true : undefined,
          stroke: state.strokeInit ? 'pink' : undefined
        }}
        getScene={(scene) => { setScene(scene)}}
        initMethod={state.allMethod ? state.initMethod : undefined}
        onClick={state.clickInit ? (e) => {console.log(e, '初始化点击'); message.info('高于initMethod' + e.feature.properties.NAME_CHN)} : undefined}
        onDoubleClick={state.dbclickInit ? (e) => {console.log(e, '初始化双击'); message.info('高于initMethod' + e.feature.properties.NAME_CHN)} : undefined}
        unClick={state.unclickInit ? (e) => {console.log(e, '初始化空白单击'); message.info('初始化空白单击,高于initMethod')} : undefined}
        unDoubleClick={state.undbclickInit ? (e) => {console.log(e, '初始化空白双击'); message.info('初始化空白双击,高于initMethod')} : undefined}
        getLayer={(layer) => { setLayer(layer) }}
      />
      }
    </div>
   </>
  );
};

export default Mock
