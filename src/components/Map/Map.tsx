import type { MapProps } from './interface';
import React, { useState, useEffect } from 'react';
import { Map } from 'react-amap';
import { MapSy } from '@/utils/Setting'

// import { Map } from 'react-amap';
/**
 * @module Map // 地图
 *
 */

const Index: React.FC<MapProps>  = ({  }) => {

  return <div style={{width: '100%', height: '100%'}}>
    <Map amapkey={MapSy.key}/>
  </div>;
};

export default Index
