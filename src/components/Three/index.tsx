
import Tree from './Tree';
import TreeSelect from './TreeSelect';


/**
 * @module 模块
 */
type TreeType = typeof Tree;
type TreeSelectType = typeof TreeSelect;

export interface RenderWay extends TreeType {
  Select: TreeSelectType;
}

const Index = Tree as RenderWay
Index.Select = TreeSelect;

export default Index;
