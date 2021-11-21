import { ILabelOption } from '@antv/l7-district';
/**
 * @module 配置地图信息
 *
 */

interface MapSyProps {
  key: string | false; // 此处的key，需要在高德官网上去申请
  district: { // 地图整体的配置项
    joinBy: [string, string]; // 数据关联项，与 data 数据源做关联，即，如果data的code码与地图本身的code码相等，则进行匹配，在后续的操作中。 目前只支持  NAME_CHN 与 adcode， 默认: ['adcode', 'code']
    map: { //初始化配置
      center: [number, number], // 地图中心点
      style: 'dark' | 'light' | 'normal' | 'blank',
      zoom: number, // 地图缩放等级
      pitch: number, //地图倾角
    }
    status: { //地图设置配置
      dragEnable: boolean, // 是否允许地图拖拽
      keyboardEnable: boolean, // 是否允许形键盘事件
      doubleClickZoom: boolean, // 是否双击放大
      zoomEnable: boolean, // 是否滚动缩放
      rotateEnable: boolean; // 是否旋转
    };
    scene: { // 额外配置
      logoPosition: 'bottomright' | 'topright' | 'bottomleft' | 'topleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter', //logo 的位置 bottomleft
      logoVisible: boolean, // 是否开启logo false
      antialias: boolean, // 是否开启抗锯齿 true
      preserveDrawingBuffer: boolean, // 是否保留缓冲区数据 false
    };
    config: { // 地图详细配置
      fillColor: string[]; //填充颜色
      label: Partial<ILabelOption>; // 全局配置
      noneLabel: boolean; // 不显示文字
      stroke: string; // 描边颜色
      strokeWidth: number; // 描边宽度
      strokeOpacity: number; // 描边透明度
    }
  };

}


const MapSy: MapSyProps = {
  key: false,
  district: {
    joinBy: ['adcode', 'code'],
    map:{
      style: 'blank',
      center: [116.2825, 39.9],
      zoom: 3,
      pitch: 0
    },
    status: {
      dragEnable: false,
      keyboardEnable: false,
      doubleClickZoom: false,
      zoomEnable: false,
      rotateEnable: false
    },
    scene: {
      logoPosition: 'bottomleft',
      logoVisible: true,
      antialias: true,
      preserveDrawingBuffer: false
    },
    config: {
      noneLabel: false, // 是否显示省份名
      stroke: "#ffffff", // 描边颜色
      strokeWidth: 0.5, // 描边宽度
      strokeOpacity: 1, // 描边透明度
      fillColor: [ '#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70' ],
      label: {
        field: 'NAME_CHN',
        textAllowOverlap: false,
      }
    }
  },

}

export default MapSy;
