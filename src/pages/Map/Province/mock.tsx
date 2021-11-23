import React, { useState } from 'react';
import { Map } from '@/components'
import { Switch, Tooltip, Select, message } from 'antd';
import { ProvinceData, colorData, PdepthData, StyleData } from './test'
import { InfoCircleOutlined } from '@ant-design/icons';
import { useReactive, useResponsive } from 'ahooks';

const { Option } = Select;

const TextShow: React.FC<{text: string, title: string}> = ({text='', title='', children}) => {
  return <span style={{marginTop: 8, fontWeight: 'bolder'}}>{text} <Tooltip title={title}><InfoCircleOutlined /></Tooltip> : {children}</span>
}

const Mock: React.FC<any> = () => {
  const [scene, setScene] = useState<any>()
  const [ init, setInit ] = useState<number>(620000)
  const [layer, setLayer] = useState<any>();

  const responsive = useResponsive();

  const state = useReactive<any>({
    show: true,
    drag: false,
    style: 'blank',
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
    logoInit: false,
    showFontInit: true,
    addControl: false,
    explain: true,
    extra: true
  })

  return (
   <>
    <div>
      <span style={{fontWeight: 500}} >切换省份：</span>
      <Select value={init} style={{ width: 120,marginTop:8, }} onChange={(e) => { setInit(e) }}>
        {ProvinceData.map((province, i) => <Option key={i} value={province.adcode}>
          {province.NAME_CHN}
        </Option>)}
      </Select>
      <span style={{fontWeight: 500, marginLeft: 8}} >改变地图样式：</span>
      <Select value={state.style} style={{ width: 120,marginLeft:8,marginTop:8 }} onChange={(e) => {
        state.show = false;
        setTimeout(() => {state.show = true}, 500)
        state.style = e
      }}>
        {StyleData.map((data, i) => <Option key={i} value={data.value}>
          {data.name}
        </Option>)}
      </Select>
      <span style={{fontWeight: 500, marginLeft: 8}} >改变绘制颜色：</span>
      <Select value={state.color} style={{ width: 120,marginLeft:8,marginTop:8 }} onChange={(e) => {
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
      <Select value={state.depth} style={{ width: 120, marginLeft:8,marginTop:8 }} onChange={(e) => {
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
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>隐藏文字：</span><Switch checked={state.hiddenInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.hiddenInit = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>改变描边颜色：</span><Switch checked={state.strokeInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.strokeInit = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>隐藏Logo：</span><Switch checked={state.logoInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.logoInit = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>修改移入文字：</span><Switch checked={state.showFontInit} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.showFontInit = e
        }}/>
      </TextShow>
    </div>
    {
      responsive.sm && <div style={{marginTop: 8, marginBottom: 8}}>
      <TextShow text={'创建图例'} title="可通过 addControl 自定义实例，或者 configControl 修改已写好的实例" >
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>自定义实例：</span><Switch checked={state.addControl} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.addControl = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>额外信息栏：</span><Switch checked={state.extra} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.extra = e
        }}/>
        <span style={{marginLeft: 12, fontWeight: 'normal'}}>颜色说明栏：</span><Switch checked={state.explain} onChange={(e) => {
          state.show = false;
          setTimeout(() => {state.show = true}, 500)
          state.explain = e
        }}/>
      </TextShow>
    </div>
    }
    <div style={responsive.sm ? {width: '100%', height: '600px'} : {width: '100%', height: '300px'}}>
      {
        state.show && <Map.Province
        init={init}
        map={{
          style: state.style
        }}
        scene={{
          logoVisible: !state.logoInit
        }}
        config={{
          depth: state.depth,
          fillColor: state.colorInit ? {
            values: ['rgb(106,33,29)','rgb(144,55,53)','rgb(181,78,76)','rgb(211,104,101)','rgb(227,147,131)','rgba(255,255,255,0.8)']
          } : undefined,
          label: state.fontInit ? {
            field: 'adcode'
          } : undefined,
          popup: state.showFontInit ? {
           Html: (data:any) => {
             return `${data.NAME_CHN}：${data.adcode}`
           }
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
        addControl={state.addControl && responsive.sm ? [
          {
            position: 'topright',
            onAdd: () => {
              return '<span style="color: #1890ff" >我是右上角的图例</span>'
            }
          },
          {
            position: 'topleft',
            onAdd: () => {
              return '<span style="color: #1890ff" >我是左上角的图例</span>'
            }
          },
          {
            onAdd: () => {
              return '<span style="color: #1890ff" >我是右下角的图例</span>'
            }
          },
        ] : undefined}
        configControl={
          [
            state.explain && responsive.sm && {
              method: 'explain',
              explain: {
                title: '示例图层',
                color: [
                  {
                    name: '<50人',
                    value: '#B8E1FF'
                  },
                  {
                    name: '100-200人',
                    value: '#7DAAFF'
                  },
                  {
                    name: '200-500人',
                    value: '#3D76DD'
                  },
                  {
                    name: '500-1000人',
                    value: '#0047A5'
                  },
                  {
                    name: '1000人以上',
                    value: '#001D70'
                  }
                ]
              }
            },
            state.extra && responsive.sm &&{
              method: 'extra',
              extra: {
                bottomRender: (data:any) => {
                  return `
                    <p>级别： ${data?.properties.level}</p>
                    <p>城市编码：${data?.properties.adcode}</p>
                    <p>城市坐标：x: ${data?.properties.x} y: ${data?.properties.y}</p>
                    <p>类型: ${data?.type}</p>
                  `
                },
                noneRender: () => {
                  return `<div style="width: 240px; padding: 6px 8px; font: 14px/16px Arial, Helvetica, sans-serif; background: rgba(255,255,255,0.9); box-shadow: 0 0 15px rgba(0,0,0,0.2);border-radius: 5px;">
                    鼠标移入看详情
                  </div>`
                }
              }
            }
          ]
        }
      />
      }
    </div>
   </>
  );
};

export default Mock
