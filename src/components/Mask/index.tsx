import { Modal, ModalProps, Drawer, Button } from 'antd';
import { Method } from '@/utils';
import { Props, FromProps, RenderWay } from './interface';
import { useEffect } from 'react';
import MaskFrom from './MaskFrom';

/**
 * @module Mask // 为简化开发将Modal和Drawer,并设置不同的场景以满足开发需要
 * @author Domesy
 *
 * @module Mask.Form 与表单进行结合
 *
 */

const Mask: React.FC<Props> & RenderWay = ({}) => {
  return <div></div>;
};

Mask.Form = MaskFrom;

export default Mask;
