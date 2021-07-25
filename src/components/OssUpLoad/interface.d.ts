import { UploadProps, ButtonProps } from 'antd';
import { Button } from '@/components';

interface rulesProps {
  type?: string | Array<string>;
  typeMsg?: string;
  size?: number;
  sizeMsg?: string;
}

interface configProps {
  noCheck?: boolean;
  text?: string;
  uploadNode?: Function | React.ReactNode;
  ossUrl?: string;
  ossText?: string;
  radio?: boolean;
  pictureCardTip?: string;
}

interface Props extends UploadProps {
  getFiles: Function;
  amount?: number;
  rules?: rulesProps;
  _config?: configProps;
  OSS?: boolean;
  crop?: boolean;
  button?: ButtonProps;
  initFile?: Array<any>;
  cropConfig?: Object<any>;
}

export default Props;
