import { Col, Row,} from 'antd';
import { WayProps } from './interface.d';

/**
 * @module PageLayoutWay 响应式布局，可根据页面尺寸判断展示类型，如 4个内容块，在屏幕大的时候一行展示4个，屏幕中等一行展示两个，移动端一行展示一个
 * @author Domesy
 *
 * @param list 数据， 接收React.ReactNode，并且个数为2或者4个
 * @param gutter 对应Row中的gutter
 * @param rowStyle Row的样式
 * @param colStyle Col
 */

const topColFour = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
};

const topColTwo = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 12,
};

const PageLayoutWay: React.FC<WayProps> = ({
  list = [],
  gutter,
  rowStyle,
  colStyle,
}) => {

  return (
    <Row
      gutter={gutter || 24}
      style={{...rowStyle}}
    >
      {
        Array.isArray(list) && (list.length === 2 || list.length === 4)  ?
          <>
            {
              list.map((item, index) => {
                const topCol = list.length === 2 ? topColTwo : topColFour
                return <Col key={'RowCol' + index} style={{ marginBottom: 24, ...colStyle}} {...topCol}>
                  {item}
                </Col>
              })
            }
          </>
        :
        <div style={{color: 'red'}}>list必须为数组，并且元素个数2个或4个</div>
      }
    </Row>
  );
};

export default PageLayoutWay;
