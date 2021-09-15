import { UploadProps, ButtonProps } from 'antd';

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

interface cropConfigProps {
  title?: string;
  cropText?: string;
  cancelText?: string;
  cropProps?:  ButtonProps;
  cancelProps?: ButtonProps;
  cropStyle?: React.CSSProperties;
  cancelStyle?: React.CSSProperties;
}

interface Props extends UploadProps {
  getFiles: (resultList: any[], flag?: boolean) => void;
  amount?: number;
  rules?: rulesProps;
  _config?: configProps;
  OSS?: boolean;
  crop?: boolean;
  button?: ButtonProps;
  initFile?: Array<any>;
  cropConfig?: cropConfigProps;
}

export default Props;
