import { ProCardProps } from '@ant-design/pro-card';

/**
 * @module 配置全局Card信息
 *
 */

interface CardProps {
  Layout: ProCardProps //对应 Card.Layout 组件
}


const CardSy: CardProps = {
  Layout:{
    hoverable: true,
    headerBordered: true
  }
}

export default CardSy;
