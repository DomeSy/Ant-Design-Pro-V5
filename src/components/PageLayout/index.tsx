import PayLayout from './PageLayout'
import PageLayoutWay from './PageLayoutWay'

type PayLayoutType = typeof PayLayout
type PageLayoutWayType = typeof PageLayoutWay
export interface RenderWay extends PayLayoutType {
  Way: PageLayoutWayType;
}

const Index = PayLayout as RenderWay
Index.Way = PageLayoutWay

export default Index
