
import Map from './Map';
import MaskFrom from './MaskFrom';


/**
 * @module 图标类
 */
type MapType = typeof Map;
type MaskFromType = typeof MaskFrom;

export interface RenderWay extends MapType {
  Form: MaskFromType;
}

const Index = Map as RenderWay
Index.Form = MaskFrom;

export default Index;
