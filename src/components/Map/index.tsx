
import Map from './Map';
import { MapProvince } from './district';

/**
 * @module 地图类类
 */
type MapType = typeof Map;
type MapProvinceType = typeof MapProvince;

export interface RenderWay extends MapType {
  Province: MapProvinceType;
}

const Index = Map as RenderWay
Index.Province = MapProvince; // 省

export default Index;
