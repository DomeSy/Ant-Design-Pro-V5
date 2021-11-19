import { IFillOptions, IAttributeOption, ILabelOption } from '@antv/l7-district';

interface MapDistrict {  // 省市区地图公共配置类
  map?: mapProps; // 地图初始化模板
  scene?: sceneProps; // 地图场景配置
  status?: statusProps; // 地图的状态
  config?: configProps; // 地图详细配置
  data?: Array<{ [key: string]: any }>; // 匹配的数据源
  joinBy?: [string, string]; // 数据关联项，与 data 数据源做关联，即，如果data的code码与地图本身的code码相等，则进行匹配，在后续的操作中。 目前只支持  NAME_CHN 与 adcode， 默认: ['adcode', 'code']
}

export interface MapProvinceProps extends MapDistrict { //省地图
  init: string[] | string | number | number[]; // 初始化省地图的编码
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
// 包含 field 与 values 需要注意的是，当自定义颜色的时候，接收的是 对应 field 的参数，而 field 是结合数据源data的参数，如果在 joinBy 中没有匹配到，values接收不到对应的参数，即为 undefined
interface configProps { // 这里只展示常用的一些api，详细的查看官网配置
  depth?: 0 | 1 | 2 | 3; // 数据显示的层级，0：国际级，1：省级，2：市级，3：县级
  visible?: boolean; // 地图是否可见
  fill?: Partial<IFillOptions>; // 填充图样式
  fillColor?: IAttributeOption; // 将fill中的color,单独提出，层级 fill > fillColor,
  label?: Partial<ILabelOption>; // 文字显示区域
  noneLabel?: boolean; // 不显示文字
  stroke?: string; // 描边颜色
  strokeWidth?: number, // 描边宽度
  strokeOpacity?: number, // 描边透明度
  extra?:{  // 除上述属性外的其他属性
    [key: string]: any;
  }
}
