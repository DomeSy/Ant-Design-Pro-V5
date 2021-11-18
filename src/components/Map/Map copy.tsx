import type { MapsProps } from './interface';
import React, { useState, useEffect } from 'react';
import { Scene } from '@antv/l7';
import { ProvinceLayer, CountryLayer, CityLayer } from '@antv/l7-district';
import { GaodeMap, Mapbox } from '@antv/l7-maps';
import { Select } from 'antd';
import { useUnmount } from 'ahooks';
import { AMapScene, LineLayer, PolygonLayer, LoadImage, PointLayer } from '@antv/l7-react';
import dataPoint from './data.json';
// 市级地图
const { Option } = Select;

// 颜色支持自定义，
const colors = [ '#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70' ];

/**
 * @module Map // 地图
 *
 */

const ProvinceData = [
  {
    NAME_CHN: '云南省',
    adcode: 530000,
    value: 17881.12,
  },
  {
    NAME_CHN: '黑龙江省',
    adcode: 230000,
    value: 16361.62,
  },
  {
    NAME_CHN: '贵州省',
    adcode: 520000,
    value: 14806.45,
  },
  {
    NAME_CHN: '北京市',
    adcode: 110000,
    value: 30319.98,
  },
  {
    NAME_CHN: '河北省',
    adcode: 130000,
    value: 36010.27,
  },
  {
    NAME_CHN: '山西省',
    adcode: 140000,
    value: 16818.11,
  },
  {
    NAME_CHN: '吉林省',
    adcode: 220000,
    value: 15074,
  },
  {
    NAME_CHN: '宁夏回族自治区',
    adcode: 640000,
    value: 3705.18,
  },
  {
    NAME_CHN: '辽宁省',
    adcode: 210000,
    value: 25315.35,
  },
  {
    NAME_CHN: '海南省',
    adcode: 460000,
    value: 4832.05,
  },
  {
    NAME_CHN: '内蒙古自治区',
    adcode: 150000,
    value: 17289.22,
  },
  {
    NAME_CHN: '天津市',
    adcode: 120000,
    value: 18809.64,
  },
  {
    NAME_CHN: '新疆维吾尔自治区',
    adcode: 650000,
    value: 12199.08,
  },
  {
    NAME_CHN: '上海市',
    adcode: 310000,
    value: 32679.87,
  },
  {
    NAME_CHN: '陕西省',
    adcode: 610000,
    value: 24438.32,
  },
  {
    NAME_CHN: '甘肃省',
    adcode: 620000,
    value: 8246.07,
  },
  {
    NAME_CHN: '安徽省',
    adcode: 340000,
    value: 30006.82,
  },
  {
    NAME_CHN: '香港特别行政区',
    adcode: 810000,
    value: 0,
  },
  {
    NAME_CHN: '广东省',
    adcode: 440000,
    value: 97277.77,
  },
  {
    NAME_CHN: '河南省',
    adcode: 410000,
    value: 48055.86,
  },
  {
    NAME_CHN: '湖南省',
    adcode: 430000,
    value: 36425.78,
  },
  {
    NAME_CHN: '江西省',
    adcode: 360000,
    value: 21984.78,
  },
  {
    NAME_CHN: '四川省',
    adcode: 510000,
    value: 40678.13,
  },
  {
    NAME_CHN: '广西壮族自治区',
    adcode: 450000,
    value: 20353.51,
  },
  {
    NAME_CHN: '江苏省',
    adcode: 320000,
    value: 92595.4,
  },
  {
    NAME_CHN: '澳门特别行政区',
    adcode: 820000,
    value: null,
  },
  {
    NAME_CHN: '浙江省',
    adcode: 330000,
    value: 56197.15,
  },
  {
    NAME_CHN: '山东省',
    adcode: 370000,
    value: 76469.67,
  },
  {
    NAME_CHN: '青海省',
    adcode: 630000,
    value: 2865.23,
  },
  {
    NAME_CHN: '重庆市',
    adcode: 500000,
    value: 20363.19,
  },
  {
    NAME_CHN: '福建省',
    adcode: 350000,
    value: 35804.04,
  },
  {
    NAME_CHN: '湖北省',
    adcode: 420000,
    value: 39366.55,
  },
  {
    NAME_CHN: '西藏自治区',
    adcode: 540000,
    value: 1477.63,
  },
  {
    NAME_CHN: '台湾省',
    adcode: 710000,
    value: null,
  },
];

let cityLayer:any

const Index: React.FC<MapsProps>  = ({  ...props}) => {
  const [province, setProvinced] = useState<any>(610000)
  const [scene, setScene] = useState<any>()
  // const [provinceLayer, setProvinceLayer] = useState<any>(ProvinceLayer)


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
      cityLayer = new CityLayer(scene, {
        data,
        joinBy: ['adcode', 'code'],
        adcode: ['330000', '330100'],
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

      cityLayer.on('click', (e:any) => {
        console.log(e,'---')
      })
    });
    setScene(scene)
  }

  return <>
    <AMapScene map />
    <div id='map' style={{width: '100%', height: '100%',top: 0, left: 0, justifyContent: 'center', position: 'relative'}}></div>
  </>;
};

export default Index
