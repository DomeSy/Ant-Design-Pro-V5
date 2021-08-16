import type { CardLayoutProps } from './interface';
import ProCard from '@ant-design/pro-card';
import { Col, Row, message, Modal, Button } from 'antd';

/**
 * @module Mask // 为简化开发将Modal和Drawer
 *
 */

const topColResponsiveProps = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 12,
  style: { marginBottom: 24 },
};

// xl={12} lg={24} md={24} sm={24} xs={24}
// const topColResponsiveProps = {
//   xs: 24,
//   sm: 12,
//   md: 12,
//   lg: 12,
//   xl: 6,
//   style: { marginBottom: 24 },
// };

const CardLayout: React.FC<CardLayoutProps>  = (props) => {
  return <>
         <Row
            gutter={24}
            style={{
            }}
          >
        <Col {...topColResponsiveProps}>
          <ProCard>
            <div>1</div>
          </ProCard>
        </Col>
        <Col {...topColResponsiveProps}>
          <ProCard>
            <div>2</div>
          </ProCard>
        </Col>
        <Col {...topColResponsiveProps}>
          <ProCard>
            <div>3</div>
          </ProCard>
        </Col>
        <Col {...topColResponsiveProps}>
          <ProCard>
            <div>4</div>
          </ProCard>
        </Col>
        {/* <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <ProCard>
            <div>2</div>
          </ProCard>
        </Col> */}
      </Row>
  </>;
};

export default CardLayout
