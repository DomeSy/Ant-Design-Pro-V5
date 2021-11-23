
import Map from './Map';
import { MapProvince, MapCity, MapArea } from './district';

/**
 * @module 地图类类
 */
type MapType = typeof Map;
type MapProvinceType = typeof MapProvince;
type MapCityType = typeof MapCity
type MapAreaType = typeof MapArea
export interface RenderWay extends MapType {
  Province: MapProvinceType;
  City: MapCityType;
  Area: MapAreaType;
}

const Index = Map as RenderWay
Index.Province = MapProvince; // 省
Index.City = MapCity; // 市
Index.Area = MapArea; // 区

export default Index;
