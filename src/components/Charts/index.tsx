
import Charts from './Charts';
import MaskFrom from './MaskFrom';


/**
 * @module 图标类
 */
type ChartsType = typeof Charts;
type MaskFromType = typeof MaskFrom;

export interface RenderWay extends ChartsType {
  Form: MaskFromType;
}

const Index = Charts as RenderWay
Index.Form = MaskFrom;

export default Index;
