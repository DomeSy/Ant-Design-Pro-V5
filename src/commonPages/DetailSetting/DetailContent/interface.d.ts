import { TypographyProps } from 'antd';

interface ListProps {
  text?:string
}

interface TableListProps {
  name: string;
  desc?: React.ReactNode;
  status?: string;
  default?: string
  global?: boolean;
  href?: string;
  tooltip?:string;
  mark?: string
}

interface EllipsisProps {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: React.ReactNode;
  onExpand?: React.MouseEventHandler<HTMLElement>;
  onEllipsis?: (ellipsis: boolean) => void;
  tooltip?: React.ReactNode;
}
export interface DetailListProps {
  type?: 'title' | 'content' | 'divider' | 'list' | 'prv' | 'ellipsis' | 'table' | 'img', // 标题 内容 分割线, 内容块, 可省略 默认为content
  main?: boolean; //是否是主要的
  effect?: 3 | 4 | 5; //判断标题的名称
  id?: string, // 唯一索引，对应获取的id值
  render?: React.ReactNode, // 渲染的值
  title?: string,
  suffix?: React.ReactNode, // 提示的上方的字，默认为一个感叹号
  tooltip?: string; // 提示语
  href?: string; // 是否启动超链接,如果有则进行跳转
  selfHref?: string; // 自身的跳转链接
  selfPayload?: Object<any>;
  tooltipHref?: string; // 提示语，是否启动超链接,如果有则进行跳转
  blank?: boolean; //是否打开新的页面
  tooltipBlank?: boolean; //提示语，是否打开新的页面
  red?: boolean; //是否全部标红
  strong?: boolean; //是否加粗
  way?: "center" | "left" | "right"; // 方式
  list?: DetailListProps[]; //列表数据
  style?: React.CSSProperties, //集中样式
  code?: boolean; //code框
  ellipsis?: EllipsisProps; //可省略
  tableList?: TableListProps[]; //表格的列表属性
  hrefTooltip?: string
}

export default interface Props {
  list: DetailListProps[];
  noRed?: boolean; // 不要参数的提示
}
