import { ModalProps, message } from 'antd';
import type { FormInstance } from 'antd';

interface CommonProps extends ModalProps {}

export interface Props extends CommonProps {
  // children: '11';
}

export interface FromProps extends CommonProps, React.FC {
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
  children?: any;
}

export interface RenderWay {
  Form?: React.FC<FromProps> | any;
}
