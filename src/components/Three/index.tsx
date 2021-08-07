
import Tree from './Tree';
import TreeSelect from './TreeSelect';


type TreeType = typeof Tree;
type TreeSelectType = typeof TreeSelect;

export interface RenderWay extends TreeType {
  Select: TreeSelectType;
}

const Index = Tree as RenderWay
Index.Select = TreeSelect;

export default Index;
