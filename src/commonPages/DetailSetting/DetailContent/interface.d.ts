import { TypographyProps } from 'antd';


interface ListProps {
  text?:string
}
export interface DetailListProps {
  type?: 'title' | 'content', // 一级标题 二级标题 内容, 默认为content
  main?: boolean; //是否是主要的
  id?: string, // 唯一索引，对应获取的id值
  render?: React.ReactNode, // 渲染的值
  title?: string,
  suffix?: React.ReactNode, // 提示的上方的字，默认为一个感叹号
  tooltip?: string; // 提示语
  href?: string; // 是否启动超链接,如果有则进行跳转
  blank?: boolean; //是否打开新的页面
  red?: boolean; //是否全部标红
  strong?: boolean; //是否加粗
}

export default interface Props {
  list: DetailListProps[]
}
