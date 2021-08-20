import { TypographyProps } from 'antd';


interface ListProps {

}
interface DetailListProps {
  type?: 'mainTitle' | 'title' | 'content', // 一级标题 二级标题 内容, 默认为content
  id?: string,
  render?: React.ReactNode,
  title?: string,
  suffix?: React.ReactNode,
  tooltip?: string;
  list?: ListProps[] | string[]
}

export default interface Props {
  list?: DetailListProps[]
}
