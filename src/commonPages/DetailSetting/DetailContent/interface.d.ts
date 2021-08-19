import { TypographyProps } from 'antd';

interface DetailListProps {
  type?: 'title',
  title?: string,
  suffix?: React.ReactNode,
  tooltip?: string
}

export default interface Props {
  list?: DetailListProps[]
}
