
import Typography from './Typography';
import TypographyList from './TypographyList';


/**
 * @module 排版，主要作用是结合Typography，Divider，Icon，Tooltip结合的小组件，方便直接调用
 */
type TypographyType = typeof Typography;
type TypographyListType = typeof TypographyList;

export interface RenderWay extends TypographyType {
  List: TypographyListType;
}

const Index = Typography as RenderWay
Index.List = TypographyList;

export default Index;
