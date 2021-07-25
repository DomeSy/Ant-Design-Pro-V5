import type { MaskProps, RenderWay } from './interface';
import MaskFrom from './MaskFrom';

/**
 * @module Mask // 为简化开发将Modal和Drawer,并设置不同的场景以满足开发需要
 * @author Domesy
 *
 * @module Mask.Form 与表单进行结合
 *
 */

const Mask: React.FC<MaskProps> = (props: MaskProps) => {
  return <div>{props.maskTitle}</div>;
};

// const App = Mask as RenderWay
// App.Form = MaskFrom

export default Mask;
// function Demo() {
//   return (
//     <>
//       <App title=""></App>
//       <App.Form title="111" children={<></>}></App.Form>
//     </>
//   )
// }
