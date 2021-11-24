import { IFillOptions, IAttributeOption, ILabelOption, IPopupOptions, IBubbleOption } from '@antv/l7-district';

export interface MapDistrict {  // 省市区地图公共配置类
  map?: mapProps; // 地图初始化模板
  scene?: sceneProps; // 地图场景配置
  status?: statusProps; // 地图的状态
  config?: configProps; // 地图详细配置
  data?: Array<{ [key: string]: any }>; // 匹配的数据源
  joinBy?: [string, string]; // 数据关联项，与 data 数据源做关联，即，如果data的code码与地图本身的code码相等，则进行匹配，在后续的操作中。 目前只支持  NAME_CHN 与 adcode， 默认: ['adcode', 'code']
  style?: React.CSSProperties; // 渲染图层的css
  addControl?: addControlProps[]; // 增加额外区域显示样式
  configControl?: configControlProps[]; // 配置示例图表层
  getScene?: (scene: any) => void; // 获取Map创的实例
  getLayer?: (layer: any) => void; // 获取图层渲染示例
  initMethod?: initMethodProps[]; // 初始化方法集合
  onClick?: (layer:any) => void; // 点击省份方法，此方法存在，initMethod 的click将无效
  onDoubleClick?: (layer:any) => void; // 双击省份方法 此方法存在，initMethod 的dblclick将无效
  unClick?: (layer:any) => void; // 点击空白处，此方法存在，initMethod 的unclick将无效
  unDoubleClick?: (layer:any) => void; // 双击空白处 此方法存在，initMethod 的undblclick将无效
}

export interface MapChinaProps extends MapDistrict { //全国地图
  id?: string; // 用于区分渲染的图层，默认：mapProvince , 多次渲染的时候需要id不同
}

export interface MapProvinceProps extends MapDistrict { //省地图
  init: string[] | string | number | number[]; // 初始化省地图的编码
  id?: string; // 用于区分渲染的图层，默认：mapProvince , 多次渲染的时候需要id不同
}

export interface MapCityProps extends MapDistrict { //市级地图
  init: string[] | number[]; // 初始化市级地图的编码
  id?: string; // 用于区分渲染的图层，默认：mapCity 多次渲染的时候需要id不同
}

export interface MapAreaProps extends MapDistrict { //区级地图
  init: string[] | number[]; // 初始化区级地图的编码
  id?: string; // 用于区分渲染的图层，默认：mapArea, 多次渲染的时候需要id不同
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
  logoVisible?: boolean, // 是否开启logo true
  antialias?: boolean, // 是否开启抗锯齿 true
  preserveDrawingBuffer?: boolean, // 是否保留缓冲区数据 false
}
interface statusProps {
  dragEnable?: boolean, // 是否允许地图拖拽
  keyboardEnable?: boolean, // 是否允许形键盘事件
  doubleClickZoom?: boolean, // 是否双击放大
  zoomEnable?: boolean, // 是否滚动缩放
  rotateEnable?: boolean; // 是否旋转
  showIndoorMap?: boolean; // 是否展示室内场景，
  resizeEnable?: boolean; // 尺寸变动问题
}
// 包含 field 与 values 需要注意的是，当自定义颜色的时候，接收的是 对应 field 的参数，而 field 是结合数据源data的参数，如果在 joinBy 中没有匹配到，values接收不到对应的参数，即为 undefined
interface configProps { // 这里只展示常用的一些api，详细的查看官网配置
  depth?: 0 | 1 | 2 | 3; // 数据显示的层级，0：国际级，1：省级，2：市级，3：县级
  visible?: boolean; // 地图是否可见
  fill?: Partial<IFillOptions>; // 填充图样式
  fillColor?:  Partial<IAttributeOption>; // 将fill中的color,单独提出，层级 fill > fillColor,
  label?: Partial<ILabelOption>; // 文字显示区域
  noneLabel?: boolean; // 不显示文字
  stroke?: string; // 描边颜色
  strokeWidth?: number, // 描边宽度
  strokeOpacity?: number, // 描边透明度
  popup?: Partial<IPopupOptions>; // 信息窗口, 有三个字段，enable（是否开启，boolean， 默认开启）triggerEvent（触发时间，如  'mousemove' | 'click'， 默认 'mousemove'， Html 接收 当前的 字段，返回 字符串，在字符串中书写 React.Node）
  bubble?: Partial<IBubbleOption>; // 气泡窗
  extra?:{  // 除上述属性外的其他属性
    [key: string]: any;
  }
}

interface initMethodProps {
  type: string;  // 事件类集合，如：click, doubleClick 等
  render: (e) => void //渲染事件的集合
}

interface addControlProps {
  position?: 'topright' | 'topleft' | 'bottomright' | 'bottomleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter'; // 定位的位置，默认为 bottomright
  name?: string; // 类似于id
  onAdd: (Layer?:any) => string; // Layer实例 增加函数的返回字段，返回的为字符串，需要将 React.ReactNode 转化为字符串，如：<span>示例</span>
  [key: string]: any;
}

export interface configControlProps{
  method: 'explain' | 'extra', // explain 地图颜色说明  extra //额外标注
  explain?: {
    class?: 'string'; // 设置class
    position?: 'bottomright' | 'topright' | 'bottomleft' | 'topleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter'; // 位置： 默认bottomright
    title?: string; //标题
    color: explainColor[]; //地图颜色
    topRender?: () => string; //上方样式，返回字符串 `<span>示例</span>`
    bottomRender?: () => string; //下方样式，返回字符串 `<span>示例</span>`
  },
  extra?: {
    class?: 'string'; // 设置class
    position?: 'bottomright' | 'topright' | 'bottomleft' | 'topleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter'; // 位置： 默认topright
    way?: string; // 什么条件触发，默认 mousemove（鼠标移入）
    topRender?: (e) => string; //上方样式，替换原有的title
    bottomRender?: (e) => string; //下方样式，返回字符串 `<span>示例</span>`
    noneRender?: () => string; // 一开始的初始样式，默认为空
  }
}
interface explainColor {
  name: string, // 标记名称
  value: string // 颜色
}
