import { ButtonProps } from 'antd';
import { ProFormProps } from '@ant-design/pro-form';
import { ConfigProps } from 'antd/lib/notification';

interface ButtonRenderProps {
  submitText?: string;
  resetText?: string;
  submitButton?: ButtonProps;
  resetButton?: ButtonProps;
  onSubmit?: () => void;
  onReset?: () => void;
  otherRender?: () => void;
  position?: 'left' | 'right';
  submitFlag?: boolean;
  render?:
    | false
    | ((
        props: SubmitterProps<{}> & {
          form?: FormInstance<any> | undefined;
        } & {
          submit: () => void;
          reset: () => void;
        },
        dom: JSX.Element[],
      ) => React.ReactNode | React.ReactNode[])
    | undefined;
}

interface colProps {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
  xl?: ColSpanType | ColSize;
  xxl?: ColSpanType | ColSize;
  prefixCls?: string;
}

export interface formLayoutProps {
  labelCol: colProps;
  wrapperCol: colProps;
}
export interface RuleProps {
  required?: boolean;
  pattern?: RegExp;
  message?: string;
  reMessage?: string;
  min?: number;
  max?: number;
  len?: number;
  method?: 'tel' | 'password' | 'name' | 'card' | 'sfz' | 'emil' | 'telEmil';
}

interface DateLimitProps {
  methodAdd?: 'day' | 'month' | 'week' | 'year';
  methodSubtract?: 'day' | 'month' | 'week' | 'year';
  add?: number;
  subtract?: number;
  type?: number;
  start?: 'string';
  end?: 'string';
}

interface layoutProps {
  close?: boolean;
  way?: 'horizontal' | 'vertical';
  formLayout?: formLayoutProps;
  formTailLayout?: formLayoutProps;
}

export interface formProps {
  type?:
    | 'input'
    | 'password'
    | 'captcha'
    | 'select'
    | 'date'
    | 'switch'
    | 'checkbox'
    | 'radio'
    | 'textArea'
    | 'rate'
    | 'slider'
    | 'digit'
    | 'field'
    | 'dependency';
  name: string | Array<string>;
  label?: string;
  tooltip?: string;
  readonly?: boolean;
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
  placeholder?: string | string[];
  disabled?: boolean;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  required?: boolean;
  noRequired?: boolean;
  rules?: Array<RuleProps>;
  extra?: React.ReactNode;
  message?: string;
  rulesRender?: Array<any>;
  fieldProps?: Object;
  enum?: any;
  options?: Array<any>;
  request?: (value: string) => void;
  optionItemRender?: (ele: any) => void;
  dateLimit?: DateLimitProps;
  method?: 'date' | 'time' | 'dateTime' | 'dateRange' | 'timeRange' | 'dateTimeRange';
  openText?: React.ReactNode;
  closeText?: React.ReactNode;
  loading?: boolean;
  ranges?: Object;
  default?: any;
  max?: number;
  min?: number;
  showCount?: boolean;
  autoSize?: boolean;
  rows?: number;
  half?: boolean;
  tooltips?: Array<string>;
  styleNode?: React.ReactNode | Function;
  color?: string;
  range?: boolean;
  marks?: Object;
  step?: number;
  precision?: number;
  getCaptcha?: (phone: any) => void;
  captchaText?: (timing: boolean, count: number) => void;
  fieldRender?: React.ReactNode | Function;
  itemRender?: (getArray: Object) => void;
}

interface ConfigProps {
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
}
interface Props extends ProFormProps {
  getRef?: (ref: any) => void;
  onFinish?: (value: Object) => void;
  formList: formProps[];
  footer?: boolean;
  buttonConfig?: ButtonRenderProps;
  initValues?: Object<any>;
  layout?: layoutProps;
  method?: 'none';
  _config?: ConfigProps;
}

export default Props;
