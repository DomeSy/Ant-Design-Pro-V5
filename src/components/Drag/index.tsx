
import Drag from './Drag';
import DragList from './DragList';


/**
 * @module 模块
 */
type DragType = typeof Drag;
type DragListType = typeof DragList;

export interface RenderWay extends DragType {
  List: DragListType;
}

const Index = Drag as RenderWay
Index.List = DragList;

export default Index;
