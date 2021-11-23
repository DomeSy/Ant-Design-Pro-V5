import React, { useState, useEffect } from 'react';
import { useUnmount, useUpdateEffect } from 'ahooks';
import { updateInit, onLoaded, unmount } from './common'
import { Scene } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';
import { MapSy } from '@/utils/Setting';

import type { MapCityProps } from './interface';

/**
 * @module Map.Province // 省级地图
 *
 */
const { district, key } = MapSy

const Index: React.FC<MapCityProps>  = ({ id='mapArea', map={}, ...props}) => {
  const [scene, setScene] = useState<any>(false)

  useEffect(() => {
    initData()
  }, [])

  useUpdateEffect(() => {
    updateInit(props.init)
  }, [props.init])

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
    onLoaded(scene, 'Area', {id, ...props})   // 初始化方法
    setScene(scene)
  }

  return <div id={id} style={{width: '100%', height: '100%',top: 0, left: 0, justifyContent: 'center', position: 'relative', ...props.style}}></div>;
};

export default Index
