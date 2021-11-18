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

const Index: React.FC<MapProvinceProps>  = ({ map={}, status={}, config={}, ...props}) => {
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
      id: 'map',
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
        adcode: props.init,
        depth: config?.depth || 2,
        label: {
          opacity: config.noneLabel ? 0 : undefined,
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
        popup: {
          enable: true,
          Html: (props) => {
            console.log(props)
            return `<span>${props.NAME_CHN}:</span>`;
          },
        },
      });

      Layer.on('click', (e:any) => {
        console.log(e,'---')
      })
    });

    scene.setMapStatus({ ...district.status, ...status})

    setScene(scene)
  }

  return <div id='map' style={{width: '100%', height: '100%',top: 0, left: 0, justifyContent: 'center', position: 'relative'}}></div>;
};

export default Index
