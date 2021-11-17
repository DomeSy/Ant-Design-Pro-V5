import type { MapsProps } from './interface';
import React, { useState, useEffect } from 'react';
import { MapboxScene, LineLayer, PolygonLayer } from '@antv/l7-react';

const ProvinceData = [
  {
    name: '浙江省',
    code: 330000,
    value: 56197.15
  }
];
/**
 * @module Map // 地图
 *
 */

 function joinData(geodata: any, ncovData: any) {
  const ncovDataObj: any = {};
  ncovData.forEach((item: any) => {
    const {
      countryName,
      countryEnglishName,
      currentConfirmedCount,
      confirmedCount,
      suspectedCount,
      curedCount,
      deadCount,
    } = item;
    if (countryName === '中国') {
      if (!ncovDataObj[countryName]) {
        ncovDataObj[countryName] = {
          countryName: 0,
          countryEnglishName,
          currentConfirmedCount: 0,
          confirmedCount: 0,
          suspectedCount: 0,
          curedCount: 0,
          deadCount: 0,
        };
      } else {
        ncovDataObj[countryName].currentConfirmedCount += currentConfirmedCount;
        ncovDataObj[countryName].confirmedCount += confirmedCount;
        ncovDataObj[countryName].suspectedCount += suspectedCount;
        ncovDataObj[countryName].curedCount += curedCount;
        ncovDataObj[countryName].deadCount += deadCount;
      }
    } else {
      ncovDataObj[countryName] = {
        countryName,
        countryEnglishName,
        currentConfirmedCount,
        confirmedCount,
        suspectedCount,
        curedCount,
        deadCount,
      };
    }
  });
  const geoObj: any = {};
  geodata.features.forEach((feature: any) => {
    const { name } = feature.properties;
    geoObj[name] = feature.properties;
    const ncov = ncovDataObj[name] || {};
    feature.properties = {
      ...feature.properties,
      ...ncov,
    };
  });
  return geodata;
}

const Index: React.FC<MapsProps>  = ({  ...props}) => {
  const [data, setData] = React.useState();

  useEffect(() => {
    const fetchData = async () => {
      const [geoData, ncovData] = await Promise.all([
        fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/e62a2f3b-ea99-4c98-9314-01d7c886263d.json',
        ).then((d) => d.json()),
         // https://lab.isaaclin.cn/nCoV/api/area?latest=1
         fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/55a7dd2e-3fb4-4442-8899-900bb03ee67a.json',
        ).then((d) => d.json()),
      ]);
      console.log(geoData, '--0')
      console.log(ncovData, '--1')
      const res2 = joinData(geoData, ncovData.results)
      console.log(res2, '--')
      setData(res2)
      // setData(joinData(geoData, ncovData.results));
    };
    fetchData();
  }, [])

  return <div id='map' style={{width: '100%', height: '100%',top: 0, left: 0, justifyContent: 'center', position: 'relative'}}>
    <MapboxScene
      map={{
        center: [110.19382669582967, 50.258134],
        pitch: 0,
        style: 'blank',
        zoom: 1,
      }}
      style={{
        position: 'absolute',
        background:'#fff', // 地图背景色
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
        {data && [
          <PolygonLayer
            key={'1'}
            options={{
              autoFit: true,
            }}
            source={{
              data,
            }}
            scale={{
              values: {
                confirmedCount: {
                  type: 'quantile',
                },
              },
            }}
            active={{
              option: {
                color: '#0c2c84',
              },
            }}
            color={{
              field: 'confirmedCount', // 填充颜色
              values: [
                '#732200',
                '#CC3D00',
                '#FF6619',
                '#FF9466',
                '#FFC1A6',
                '#FCE2D7',
              ].reverse()
            }}
            shape={{
              values: 'fill',
            }}
            style={{
              opacity: 1,
            }}
          />,
          <LineLayer
            key={'2'}
            source={{
              data,
            }}
            size={{
              values: 0.6,
            }}
            color={{
              values: '#aaa', // 描边颜色
            }}
            shape={{
              values: 'line',
            }}
            style={{
              opacity: 1,
            }}
          />,
        ]}
      </MapboxScene>
  </div>;
};

export default Index
