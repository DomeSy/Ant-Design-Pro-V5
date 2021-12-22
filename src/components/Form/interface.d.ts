import { ButtonProps, SpaceProps } from 'antd';

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
interface GroupProps {
  title?: React.ReactNode;
  label?: React.ReactNode;
  tooltip?: LabelTooltipType | string;
  extra?: React.ReactNode;
  /** 组件之前的间隔 */
  size?: SpaceProps['size'];
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  titleRender?: (title: React.ReactNode, props: GroupProps) => React.ReactNode;
  /** 子项的对齐方式 */
  align?: SpaceProps['align'];
  /** 子项的排列方式 */
  direction?: SpaceProps['direction'];
  labelLayout?: 'inline' | 'twoLine';
  /** 是否折叠 * */
  collapsed?: boolean;
  /** 是否可折叠 * */
  collapsible?: boolean;
  /** 默认的折叠状态 */
  defaultCollapsed?: boolean;
  /** 折叠修改的事件 */
  onCollapse?: (collapsed: boolean) => void;
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
export interface RuleProps {
  required?: boolean;
  pattern?: RegExp;
  message?: string;
  reMessage?: string;
  min?: number;
  max?: number;
  len?: number;
  method?: 'tel' | 'password' | 'name' | 'card' | 'sfz' | 'emil' | 'telEmil' | 'number' | 'numberZero' | 'numberFloat';
}
interface DateLimitProps {
  methodAdd?: 'day' | 'month' | 'week' | 'year';
  methodSubtract?: 'day' | 'month' | 'week' | 'year';
  add?: number;
  subtract?: number;
  type?: 1 | 2 | 3;
  start?: string;
  end?: string;
}
interface layoutProps {
  close?: boolean;
  way?: 'horizontal' | 'vertical';
  formLayout?: formLayoutProps;
  formTailLayout?: formLayoutProps;
}

export interface formProps extends GroupProps {
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
    | 'dependency'
    | 'group';
  name?: string | Array<string>;
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
  ranges?: {
    [key: any]: any;
  };
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
  multiple?: boolean;
  search?: boolean;
  getCaptcha?: (phone: any) => void;
  captchaText?: (timing: boolean, count: number) => void;
  fieldRender?: React.ReactNode | Function;
  itemRender?: (getArray: Object) => void;
  captchaTextRender?: (timing: boolean, count: number) => React.ReactNode
  children?: formProps[];
  radioType?: 'button' | 'radio'
}

interface ConfigBackProps extends ButtonProps {
  jump?: number;
  text?: string
}

interface ConfigProps {
  width?: number | 'sm' | 'md' | 'xl' | 'xs' | 'lg';
  back?: ConfigBackProps | number | boolean;
  noRest?: boolean
}
export interface FormCommonProps {
  formList?: formProps[];
  layout?: layoutProps;
  method?: 'none' | 'mask';
  _config?: ConfigProps;
}
interface Props extends ProFormProps {
  getRef?: (ref: any) => void;
  onFinish?: (value: Object) => void;
  fieldValues?: fieldValuesProps[];
  footer?: boolean;
  layout?: layoutProps;
  buttonConfig?: ButtonRenderProps;
  initValues?: Object;
}

export interface FormListProps extends FormCommonProps {}

export default Props;
export interface formLayoutProps {
  labelCol: colProps;
  wrapperCol: colProps;
}
export interface fieldValuesProps {
  name:string,
  value: any
}
