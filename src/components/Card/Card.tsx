
import ProCard from '@ant-design/pro-card';
import type CardProps from './interface';

/**
 * @module Card 对应 ProCard
 * @author Domesy
 *
 */
const Card: React.FC<CardProps>  = ({ children, ...props}) => {

  return (
    <ProCard
      // tabs={{
      //   tabPosition: 'left'
      // }}
      // type='inner'
      // layout="center"
      bordered
      {...props}
    >
      {children}
    </ProCard>
  );
};

export default Card
