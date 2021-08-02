import type { MaskProps } from './interface';

/**
 * @module Mask // 为简化开发将Modal和Drawer,并设置不同的场景以满足开发需要
 * @author Domesy
 *
 * @module Mask.Form 与表单进行结合
 *
 */

const Mask: React.FC<MaskProps>  = (props: MaskProps) => {
  return <div>{props.maskTitle}</div>;
};

export default Mask;
