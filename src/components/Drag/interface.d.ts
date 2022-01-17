
export interface DragProps {
  list: Array<T>; // 匹配的数据列表
  id?: string; // 列表需要唯一字段，用于匹配，默认id
  render: (data:any, index:number) => React.ReactNode; // 用以渲染子列表，data，当行的数据，index：索引
  onChange?: (tags: Array<any>) => void; // 改变后的数据
  block?: boolean; //子元素是否是块状
}

export interface MaskFromProps extends CommonProps {
  form?: FormPropsSy & FormCommonProps;
  formList?: formProps[];
  onCancel?: (e: any) => void;
  onSubmit?: () => void;
  onEdit?: (values: Object) => void;
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
