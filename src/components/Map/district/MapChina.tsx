import React, { useState, useEffect } from 'react';
import { useUnmount } from 'ahooks';
import { onLoaded, unmount } from './common'
import { CountryLayer } from '@antv/l7-district';
import { Scene } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';
import { MapSy } from '@/utils/Setting';

import type { MapChinaProps } from './interface';

/**
 * @module Map.Province // 省级地图
 *
 */
const { district, key } = MapSy

const Index: React.FC<MapChinaProps>  = ({ id='mapChina', map={}, ...props}) => {
  const [scene, setScene] = useState<any>(false)

  useEffect(() => {
    initData()
  }, [])

  useUnmount(() => {
    unmount(scene)
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
    onLoaded(scene, 'China', {id, init: [], ...props})   // 初始化方法
    setScene(scene)
  }

  return <div id={id} style={{width: '100%', height: '100%',top: 0, left: 0, justifyContent: 'center', position: 'relative', ...props.style}}></div>;
};

export default Index
