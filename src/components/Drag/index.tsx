
import Drag from './Drag';


/**
 * @module 模块
 */
type DragType = typeof Drag;

export interface RenderWay extends DragType {
}

const Index = Drag as RenderWay

export default Index;
