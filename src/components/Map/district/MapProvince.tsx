import React, { useState, useEffect } from 'react';
import { Scene } from '@antv/l7';
import { ProvinceLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
import { useUnmount } from 'ahooks';
import { MapSy } from '@/utils/Setting';


import type { MapProvinceProps } from './interface';

/**
 * @module Map.Province // 省级地图
 *
 */

const { district, key } = MapSy
let Layer:any

const Index: React.FC<MapProvinceProps>  = ({ id='mapProvince', map={}, status={}, config={}, getScene, getLayer, initMethod, ...props}) => {
  const [scene, setScene] = useState<any>()

  useEffect( () => {
    initData()
  }, [])

  useUnmount(() => {
    scene.destroy()
  })

  // 初始化地图
  const initData = async () => {
    const scene = new Scene({
      id,
      map: new Mapbox({
        token: key ? key : undefined,
        ...district.map,
        ...map
      }),
      ...district.scene,
      ...props.scene
    })

    scene.on('loaded', () => {
      Layer = new ProvinceLayer(scene, {
        data: props.data ? props.data : undefined,
        joinBy: props.joinBy || district.joinBy,
        visible: config?.visible,
        adcode: props.init,
        depth: config?.depth || 2,
        stroke: config?.stroke || district.config.stroke,
        strokeWidth: config?.strokeWidth || district.config.strokeWidth,
        strokeOpacity: config?.strokeOpacity || district.config.strokeOpacity,
        label: {
          opacity: config.noneLabel ? 0 : district.config.noneLabel ? 0 : undefined,
          ...district?.config?.label,
          ...config?.label
        },
        fill: {
          color: {
            field: config?.fillColor?.field || 'NAME_CHN',
            values: config?.fillColor?.values || district.config.fillColor,
          },
          ...config?.fill
        },
        popup: { ...config?.popup },
        bubble:{ ...config?.bubble },
        ...config?.extra
      });
      if(getLayer) getLayer(Layer)

      if(initMethod && initMethod.length !== 0){
        initMethod.map((item) => {
          if(props.onClick || props.onDoubleClick) return
          Layer.on(item.type, (e:any) => {
            item.render(e)
          })
        })
      }
      if(props.onClick){
        Layer.on('click', (e:any) => {
          if(props.onClick) props.onClick(e)
        })
      }
      if(props.onDoubleClick){
        Layer.on('dblclick', (e:any) => {
          if(props.onDoubleClick) props.onDoubleClick(e)
        })
      }
      if(props.unClick){
        Layer.on('unclick', (e:any) => {
          if(props.unClick) props.unClick(e)
        })
      }
      if(props.unDoubleClick){
        Layer.on('undblclick', (e:any) => {
          if(props.unDoubleClick) props.unDoubleClick(e)
        })
      }
    });

    scene.setMapStatus({ ...district.status, ...status})
    if(getScene) getScene(scene)
    setScene(scene)
  }

  return <div id={id} style={{width: '100%', height: '100%',top: 0, left: 0, justifyContent: 'center', position: 'relative', ...props.style}}></div>;
};

export default Index
