import type { RenderWay } from './interface';
import MaskFrom from './MaskFrom';
import Mask from './index1';
const App = Mask as RenderWay;
App.Form = MaskFrom;

export default App;
