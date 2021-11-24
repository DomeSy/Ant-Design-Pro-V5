import React from 'react';
import { Map } from '@/components'
import { useReactive, useResponsive } from 'ahooks';


const Mock: React.FC<any> = () => {

  const responsive = useResponsive();

  const state = useReactive<any>({
    show: 'China',
    ProvinceInit: [],
    CityInit: []
  })

  const configProps = (name: string) => {
    const result:any = {
      configControl: [
        {
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
        {
          method: 'extra',
          extra: {
            bottomRender: (data:any) => {
              return `
                <p>区域名称：${data?.properties.REGION_NAME}</p>
                <p>城市编码：${data?.properties.adcode}</p>
                <p>城市坐标：x: ${data?.properties.x} y: ${data?.properties.y}</p>
                ${name === 'China' ? `<p>类型: ${data?.type}</p>` : `<p>城市编码：${data?.properties.adcode}</p>`}
                <p style="color: red">双击地图进入下级</p>
                <p style="color: red">双击空白处进入上级</p>
              `
            },
            noneRender: () => {
              return `<div style="width: 240px; padding: 6px 8px; font: 14px/16px Arial, Helvetica, sans-serif; background: rgba(255,255,255,0.9); box-shadow: 0 0 15px rgba(0,0,0,0.2);border-radius: 5px;">
                <p>鼠标移入看详情</p>
                <p style="color: red">双击地图进入下级</p>
                <p style="color: red">双击空白处进入上级</p>
              </div>`
            }
          }
        }
      ],
      status: {
        dragEnable: true
      },
      onDoubleClick: (e:any) => {
        if(name === 'China'){
          state.ProvinceInit = [e.feature.properties.adcode];
          setTimeout(() => {
            state.show = 'Province';
          }, 500)
        } else if(name === 'Province'){
          state.CityInit = [e.feature.properties.adcode, e.feature.properties.adcode_cit];
          setTimeout(() => {
            state.show = 'City';
          }, 500)
        }
      },
      unDoubleClick: (e: any) => {
        if(name === 'Province') {
          state.show = 'China';
        }else if(name === 'City'){
          state.show = 'Province';
        }
      }
    }

    return result
  }

  return (
   <>
    <div style={responsive.sm ? {width: '100%', height: '700px'} : {width: '100%', height: '300px'}}>
      {
        state.show === 'China' && <Map.China {...configProps('China')} />
      }
      {
        state.show === 'Province' && <Map.Province init={state.ProvinceInit}  {...configProps('Province')} />
      }
      {
        state.show === 'City' && <Map.City  init={state.CityInit}  {...configProps('City')} />
      }
    </div>
   </>
  );
};

export default Mock
