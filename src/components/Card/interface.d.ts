import { ModalProps, message } from 'antd';
import { ProCardProps } from '@ant-design/pro-card';
import type { FormInstance } from 'antd';
import type { WayProps } from '@/components/PageLayout/interface.d'

interface CardLayoutListProps extends ProCardProps{
  render?: ReactNode
}
export interface CardLayoutProps extends WayProps {
  list: CardLayoutListProps[]
}

export default interface CardProps extends ProCardProps {

}

