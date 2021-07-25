import type { ModalProps } from 'antd';
import type { FormInstance } from 'antd';

import type Mask from './index1';
import type MaskFrom from './MaskFrom';

// ======== Props ========

/** 公共 Props */
interface CommonProps extends ModalProps {
  test?: string;
}
/** Mask Props */
export interface MaskProps extends CommonProps {
  maskTitle?: string;
  // children: '11';
}
/** Mask From Props */
export interface MaskFromProps extends CommonProps {
  formRef?: { current?: FormInstance };
  onCancel?: (e: any) => void;
  onSubmit?: (values: any) => void;
  onEdit?: (values: any) => void;
  onReset?: () => void;
  onRequest?: any;
  cancelText?: string;
  resetText?: string;
  submitText?: string;
  message?: string;
  children?: any;
}

// ======== Type ========
type MaskType = typeof Mask;
type MaskFromType = typeof MaskFrom;
export interface RenderWay extends MaskType {
  Form: MaskFromType;
}
