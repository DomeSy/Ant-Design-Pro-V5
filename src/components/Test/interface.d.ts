import type { ModalProps } from 'antd';
import type { FormInstance } from 'antd';

// ======== Props ========

/** 公共 Props */
interface CommonProps extends ModalProps {
  test?: string;
}
/** Mask Props */
export interface MaskProps extends CommonProps {
  /** Mask title 不同的属性 */
  maskTitle?: string;
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
  /** Mask from title 不同的属性 */
  maskFromTitle?: string;
}
