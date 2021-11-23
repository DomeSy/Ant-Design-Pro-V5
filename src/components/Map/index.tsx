
import Map from './Map';
import { MapProvince, MapCity } from './district';

/**
 * @module 地图类类
 */
type MapType = typeof Map;
type MapProvinceType = typeof MapProvince;
type MapCityType = typeof MapCity
export interface RenderWay extends MapType {
  Province: MapProvinceType;
  City: MapCityType;
}

const Index = Map as RenderWay
Index.Province = MapProvince; // 省
Index.City = MapCity; // 市

export default Index;
