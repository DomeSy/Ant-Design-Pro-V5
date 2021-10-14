import { RuleProps } from '../commonSy';
import { ButtonProps } from 'antd';

interface SearchOptionsProps {
  export: { //导出
    text: string, //导出的文字
    style: React.CSSProperties,
    prefix: React.ReactNode
  }
}
interface SearchProps {
  hidden: boolean; //是否影藏搜索框, 如果这个设置为true则其余设置均无用
  show: boolean; //取消展开收起样式，默认取消
  searchText: string; //查询按钮文案
  resetText: string; //重置按钮文本
  vertical: boolean; //样式是否垂直 默认水平
  options: SearchOptionsProps; // 搜索框配置样式
  searchStyle: React.CSSProperties; //搜索按钮集中管理样式
  resetStyle: React.CSSProperties; // 重置按钮集中管理样式
  commonStyle: React.CSSProperties; // 所有按钮集中管理样式
  searchPrefix: React.ReactNode; // 搜索按钮前置图标
  resetPrefix: React.ReactNode; // 重置按钮前置图标
  span:
    | false
    | number
    | {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
      };
}
interface PaginationProps {
  hidden: boolean; //是否隐藏分页器, 如果这个设置为true则其余设置均无用，默认展示10条数据
  pageSize: number; //配置页数， 统一配置 10
  jump: boolean; //是否增加跳转页数，如果总页数为一页时则不显示
  size: 'small' | 'default'; // 分页器的大小，默认small
}

interface OptionProps {
  density: boolean; // 密度
  fullScreen: boolean; // 全屏
  setting: boolean; // 设置
  reload: boolean; // 刷新按钮
}

interface TableListProps {
  rule: RuleProps;
  defaultInitShowTime?:
    | false
    | {
        //默认时间选择器的时分秒的位置，为false时，时分秒为当前时间
        showStartTime?: string; // 默认开始时间，如 '00:00:00'
        showStartType?: string; // 默认开始时间类型，如 'HH:mm:ss'
        showEndTime?: string; // 默认结束时间，如 '23:59:59'
        showEndType?: string;
      };
}

interface ToolsProps {
  edit: { //编辑
    text:string
    style: React.CSSProperties
  }
  delete: { //删除
    text:string
    style: React.CSSProperties
  }
  state: { //状态
    okText:string
    cancelText:string
    style: React.CSSProperties
  }
  commonStyle: React.CSSProperties //工具模块配置样式
}

interface ToolBarProps {
  create: {
    text: string //新建按钮文字
    style: React.CSSProperties //单独设置样式
    prefix: React.ReactNode // 前置图标
  },
  commonStyle: React.CSSProperties //统一按钮样式
}

interface TableProps {
  rowKey: string; // rowKey对应列表中的key，这里只设置string类型，可以统一设置
  search: SearchProps; // 搜索框整体配置
  pagination: PaginationProps; // 分液器整体配置
  options: OptionProps | false; // 工具栏的整体配置
  tableList: TableListProps; // 设置columns全局属性
  tools: ToolsProps; //操作全局配置
  toolBar: ToolBarProps; //定义操作属性
}

export default TableProps;
