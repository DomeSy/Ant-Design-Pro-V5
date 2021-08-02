import { ModalProps, message } from 'antd';
import type { FormInstance } from 'antd';

interface CommonProps extends ModalProps {

}

export interface Props extends CommonProps {

}

export interface MaskProps {
  maskTitle?: staring
}

export interface MaskFromProps extends CommonProps {
  formRef?: { current?: FormInstance };
  onCancel?: (e: any) => void;
  onSubmit?: () => void;
  onEdit?: (values: Object<any>) => void;
  onReset?: () => void;
  onRequest?: any;
  cancelText?: string;
  resetText?: string;
  submitText?: string;
  message?: string;
}

export interface RenderWay {
  Form?: React.FC<MaskFromProps> | any;
}
