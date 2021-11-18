
interface MapDistrict {  // 省市区地图公共配置类
  map?: mapProps; // 地图初始化样式
  scene?: sceneProps; // 地图场景配置
  status?: statusProps; // 地图的状态
  data?: Array<{ [key: string]: any }>; // 匹配的数据源
}

export interface MapProvinceProps extends MapDistrict { //省地图
  init: [string | number]; // 初始化省地图的编码
}

interface mapProps { // 其他配置，查看高德地图的Api https://lbs.amap.com/api/javascript-api/reference/map
  token?: string; // 地图密钥，需要平台申请
  style?: 'dark' | 'light' | 'normal' | 'blank';  // 提供默认四种样式，'light'
  plugin?: string[]; // 高德地图API插件， 使用示例 ['AMap.ToolBar','AMap.Driving']
  center?: [number, number]; // 地图中心点 [经度，纬度]
  pitch?: number; // 地图倾角 0
  rotation?: number; // 地图旋转角 0
  zoom?: number; // 地图缩放等级 3
  maxZoom?: number; // 最大缩放等级
  minZoom?: number; // 最小缩放等级
  [key: string]: any;
}

interface sceneProps {
  logoPosition?: 'bottomright' | 'topright' | 'bottomleft' | 'topleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter', //logo 的位置 bottomleft
  logoVisible?: boolean, // 是否开启logo flase
  antialias?: boolean, // 是否开启抗锯齿 false
  preserveDrawingBuffer?: boolean, // 是否保留缓冲区数据 false
}
interface statusProps {
  dragEnable: boolean, // 是否允许地图拖拽
  keyboardEnable: boolean, // 是否允许形键盘事件
  doubleClickZoom: boolean, // 是否双击放大
  zoomEnable: boolean, // 是否滚动缩放
  rotateEnable: boolean; // 是否旋转
  showIndoorMap: boolean; // 是否展示室内场景，
  resizeEnable: boolean; // 尺寸变动问题
}
