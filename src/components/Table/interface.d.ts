import { ProTableProps } from '@ant-design/pro-table';
import type { ParamsType } from '@ant-design/pro-provider';
import type { BaseQueryFilterProps } from '@ant-design/pro-form';
import { TablePaginationConfig } from './data.d';
import { ButtonProps, message } from 'antd';
import { TableProps } from '@/utils/Setting/tableSy';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import type { MaskFromProps, formProps, FormPropsSy, FormCommonProps } from '@/components';
import { extend } from 'umi-request';
export interface TableListProps {
  type: string;
  key: number;
}

export interface SearchConfigProps extends BaseQueryFilterProps {
  filterType?: 'query' | 'light';
  show?: boolean;
  layout?: 'horizontal' | 'vertical';
  cancel?: boolean;
  searchProps?: ButtonProps;
  resetProps?: ButtonProps;
  searchPrefix?: React.ReactNode;
  resetPrefix?: React.ReactNode;
  searchStyle?: React.CSSProperties;
  resetStyle?: React.CSSProperties;
  options?: SearchOptionsProps[];
}

interface optionButtonProps {
  type?: "link" | "text" | "ghost" | "primary" | "default" | "dashed";
  onClick?: () => void;
  text: string,
  style?: React.CSSProperties,
  prefix?: React.ReactNode;
  props?: ButtonProps
}
interface SearchOptionsProps {
  method?: 'export' | 'search' | 'reset' | 'button';
  fieldRender?: (searchConfig: any, formProps: any) => React.ReactNode;
  export?: {
    text?: string;
    message?: string;
    onExportBefore?: (searchConfig: any, formProps: any) => void;
    onExportAfter?: () => void;
    button?: ButtonProps;
    style?: React.CSSProperties;
    prefix?: React.ReactNode;
  };
  button?: optionButtonProps
}
export interface PaginationConfigProps extends TablePaginationConfig {}
export interface editTools extends createProps {
  style?: React.CSSProperties;
  onBeforeFiled?: any;
  onBeforeStart?: any;
  onEdit?: (values: Object, record: Object) => void;
}
export interface deleteTools {
  text?: string;
  okText?: string;
  cancelText?: string;
  message?: string;
  title?: string;
  onEdit: (values: Object) => void;
  onSuccess?: (data: any) => void;
  onRequest: any;
  style?: React.CSSProperties;
}
export interface stateTools {
  openText?: string;
  closeText?: string;
  okText?: string;
  cancelText?: string;
  title?: string;
  onState: (values: Object) => void;
  onEdit: (values: Object) => void;
  onSuccess?: (data: any, flag: boolean) => void;
  onRequest: any;
  onRequestClose?: any;
  style?: React.CSSProperties;
}
interface ToolsProps {
  //工具
  method?: 'edit' | 'delete' | 'state';
  edit?: editTools;
  delete?: deleteTools;
  state?: stateTools;
  fieldRender?: (data: any) => void;
}
interface ConfigProps {
  add?: number;
  subtract?: number;
  range?: number;
  methodAdd?: 'day' | 'week' | 'month' | 'year';
  methodSubtract?: 'day' | 'week' | 'month' | 'year';
  methodRange?: 'day' | 'week' | 'month' | 'year';
  defaultInitTime?:
    | false
    | Array<any>
    | {
        showStartTime?: string; // 默认开始时间，如 '00:00:00'
        showStartType?: string; // 默认开始时间类型，如 'HH:mm:ss'
        showEndTime?: string; // 默认结束时间，如 '23:59:59'
        showEndType?: string;
      };
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

export type tableListProps = ProColumns<TableListProps> & {
  type?: 'date' | 'tools';
  method?: 'dateTimeRange' | 'dateRange';
  required?: boolean;
  message?: string;
  readonly?: boolean;
  rules?: Array<RuleProps>;
  rulesRender?: Array<any>;
  noRequired?: boolean;
  config?: ConfigProps;
  tools?: ToolsProps[];
};
export interface createProps {
  text?: string;
  button?: ButtonProps;
  go?: string;
  payload?: Object;
  maskFrom?: MaskFromProps;
  form?: FormPropsSy & FormCommonProps;
  formList?: formProps[];
  prefix?: React.ReactNode;
  onBeforeFormList?: any
  onBefore?: () => void;
}
interface TableConfigProps {}
interface ToolBar {
  method?: 'create' | 'button';
  create?: createProps;
  button?: optionButtonProps;
  fieldRender?: (data: any) => React.ReactNode[];
}
interface Props extends ProTableProps<TableListProps, ParamsType> {
  getFormRef?: (ref: any) => void;
  getRef?: (ref: any) => void;
  tableList?: tableListProps[];
  search?: false | SearchConfigProps;
  pagination?: false | PaginationConfigProps;
  _config?: TableConfigProps;
  toolBar?: ToolBar[];
}

export default Props;
