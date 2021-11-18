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

let Layer:any

const Index: React.FC<MapProvinceProps>  = ({ map={}, status={}, ...props}) => {
  const [scene, setScene] = useState<any>()

  useEffect( () => {
    initData()
  }, [])

  useUnmount(() => {
    scene.destroy()
  })

  // 初始化地图
  const initData = async () => {
    const response = await fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/149b599d-21ef-4c24-812c-20deaee90e20.json',
    );
    const provinceData = await response.json();

    const data = Object.keys(provinceData).map((key: string) => {
      return {
        code: key,
        name: provinceData[key][0],
        pop: provinceData[key][2] * 1,
      };
    });
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        token: MapSy.key ? MapSy.key : undefined,
        ...MapSy.district,
        ...map
      }),
      ...MapSy.scene,
      ...props.scene
    })

    console.log(data, '000')

    scene.on('loaded', () => {
      Layer = new ProvinceLayer(scene, {
        data,
        // joinBy: ['adcode', 'code'],
        adcode: ['320000'],
        depth: 2,
        label: {
          field: 'NAME_CHN',
          textAllowOverlap: false,
        },
        fill: {
          color: {
            field: 'NAME_CHN',
            values: [
              'red',
              'green',
              'yellow',
              'blue',
              'orange',
              'pink',
            ],
            // values: (res) => {
            //   console.log(res, '--')
            //   if(res === '拱墅区'){
            //     return 'yellow'
            //   }
            //   return 'red'
            // }
          },
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
    scene.setMapStatus({ ...MapSy.status, ...status})
    setScene(scene)
  }

  return <div id='map' style={{width: '100%', height: '100%',top: 0, left: 0, justifyContent: 'center', position: 'relative'}}></div>;
};

export default Index
