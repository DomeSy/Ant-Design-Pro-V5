import { ModalProps, message } from 'antd';
import { ProCardProps } from '@ant-design/pro-card';

interface CardLayoutListProps extends ProCardProps{
  render?: ReactNode;
}
export interface CardLayoutProps {
  list: CardLayoutListProps[];
  type?: 2 | 3 | 4 | 6 | 8;
  _config?: ProCardProps
}

export default interface CardProps extends ProCardProps {

}
