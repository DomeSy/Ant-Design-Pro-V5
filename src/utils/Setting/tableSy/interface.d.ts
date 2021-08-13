import { RuleProps } from '../commonSy';


interface SearchProps {
  hidden: boolean; //是否影藏搜索框, 如果这个设置为true则其余设置均无用
  show: boolean; //是否默认展开，默认 false 不展开
  cancelShow: boolean; //取消展开收起样式，默认取消
  searchText: string; //查询按钮文案
  resetText: string; //重置按钮文本
  vertical: boolean; //样式是否垂直 默认水平
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
  hidden: boolean; //是否影分页器, 如果这个设置为true则其余设置均无用，默认展示10条数据
  pageSize: number; //配置页数， 统一配置20
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

interface TableProps {
  rowKey: string; // rowKey对应列表中的key，这里只设置string类型，可以统一设置
  search: SearchProps; // 搜索框整体配置
  pagination: PaginationProps; // 分液器整体配置
  options: OptionProps | false; // 工具栏的整体配置
  tableList: TableListProps; // 设置columns全局属性
  tools: ToolsProps; //操作全局配置
}

export default TableProps;
