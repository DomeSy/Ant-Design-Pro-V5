
import Mask from './Mask';
import MaskFrom from './MaskFrom';


/**
 * @module 模块
 */
type MaskType = typeof Mask;
type MaskFromType = typeof MaskFrom;

export interface RenderWay extends MaskType {
  Form: MaskFromType;
}

const Index = Mask as RenderWay
Index.Form = MaskFrom;

export default Index;
