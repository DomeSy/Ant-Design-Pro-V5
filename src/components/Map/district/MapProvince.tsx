import React, { useState, useEffect } from 'react';
import { Scene } from '@antv/l7';
import { ProvinceLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
import { useUnmount } from 'ahooks';


import type { MapProvinceProps } from './interface';

/**
 * @module Map.Province // 省级地图
 *
 */

let Layer:any

const Index: React.FC<MapProvinceProps>  = ({  ...props}) => {
  const [scene, setScene] = useState<any>()

  useEffect( () => {
    initData()
  }, [])

  useUnmount(() => {
    scene.destroy()
  })

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
        center: [116.2825, 39.9],
        pitch: 0,
        style: 'blank',
        zoom: 3,
        minZoom: 3,
        maxZoom: 10,
      }),
    })
    scene.on('loaded', () => {
      Layer = new ProvinceLayer(scene, {
        data,
        joinBy: ['adcode', 'code'],
        adcode: ['330000'],
        depth: 3,
        label: {
          field: 'NAME_CHN',
          textAllowOverlap: false,
        },
        fill: {
          color: {
            field: 'name',
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
    scene.setMapStatus({
      dragEnable: false, // 是否允许地图拖拽
      keyboardEnable: false, // 是否允许形键盘事件
      doubleClickZoom: false, // 双击放大
      zoomEnable: false, // 滚动缩放
      rotateEnable: false // 旋转
    })
    setScene(scene)
  }

  return <div id='map' style={{width: '100%', height: '100%',top: 0, left: 0, justifyContent: 'center', position: 'relative'}}></div>;
};

export default Index
