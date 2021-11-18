/**
 * @module 配置地图信息
 *
 */

interface MapSyProps {
  key: string | false; // 此处的key，需要在高德官网上去申请
  district: { // 地图整体的配置项
    center: [number, number], // 地图中心点
    style: 'dark' | 'light' | 'normal' | 'blank',
    zoom: number, // 地图缩放等级
    pitch: number, //地图倾角
  };
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
  }
}


const MapSy: MapSyProps = {
  key: false,
  district: {
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
    logoVisible: false,
    antialias: true,
    preserveDrawingBuffer: false
  }
}

export default MapSy;
