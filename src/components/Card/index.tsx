
import Card from './Card';
import CardLayout from './CardLayout';

/**
 * @module 卡片 对应 ProCard
 */
type CardType = typeof Card;
type CardLayoutType = typeof CardLayout;


export interface RenderWay extends CardType {
  Layout: CardLayoutType;
}

const Index = Card as RenderWay
Index.Layout = CardLayout

export default Index;
