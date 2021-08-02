import Mask from './Mask'
import MaskFrom from './MaskFrom';

// ======== Type ========
type MaskType = typeof Mask;
type MaskFromType = typeof MaskFrom;
export interface RenderWay extends MaskType {
  Form: MaskFromType;
}

const App = Mask as RenderWay
App.Form = MaskFrom;

export default App;


