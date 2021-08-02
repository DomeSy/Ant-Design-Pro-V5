import { ProTableProps } from '@ant-design/pro-table';
import type { ParamsType } from '@ant-design/pro-provider';
import type { BaseQueryFilterProps } from '@ant-design/pro-form';
import { TablePaginationConfig } from './data.d';
import { ButtonProps } from 'antd';
import { TableProps } from '@/utils/Setting/tableSy';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import type { MaskFromProps, formProps, FromPropsSy } from '@/components'
import { extend } from 'umi-request';
export interface TableListProps {
  type: string;
  key: number;
  disabled?: boolean;
  href: string;
  avatar: string;
  name: string;
  owner: string;
  desc: string;
  callNo: number;
  status: string;
  updatedAt: Date;
  createdAt: Date;
  progress: number;
}

export interface SearchConfigProps extends BaseQueryFilterProps {
  filterType?: 'query' | 'light';
  show?: boolean;
  cancelShow?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export interface PaginationConfigProps extends TablePaginationConfig {}

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
  method?: 'tel' | 'password' | 'name' | 'card' | 'sfz' | 'emil' | 'telEmil';
}

export type tableListProps = ProColumns<TableListProps> & {
  type?: 'date';
  method?: 'dateTimeRange' | 'dateRange';
  required?: boolean;
  message?: string;
  readonly?: boolean;
  rules?: Array<RuleProps>;
  rulesRender?: Array<any>;
  noRequired?: boolean;
  config?: ConfigProps;
};

interface createProps {
  button?: ButtonProps;
  go?: string,
  payload?: Object;
  maskFrom?: MaskFromProps;
  from?: FromPropsSy;
  formList?: formProps[];
}
interface TableConfigProps {
  create?: false | createProps
}

interface Props extends ProTableProps<TableListProps, ParamsType> {
  getFromRef?: (ref: any) => void;
  getRef?: (ref: Object<ActionType>) => void;
  tableList?: tableListProps[];
  search?: false | SearchConfigProps;
  pagination?: false | PaginationConfigProps;
  _config?: TableConfigProps
}

export default Props;
