
import Charts from './Charts';
import ChartsCard from './ChartsCard/ChartsCard';


/**
 * @module 图标类
 */
type ChartsType = typeof Charts;
type ChartsCardType = typeof ChartsCard;

export interface RenderWay extends ChartsType {
  Card: ChartsCardType;
}

const Index = Charts as RenderWay
Index.Card = ChartsCard;

export default Index;
