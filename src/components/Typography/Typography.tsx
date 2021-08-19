import { Typography } from 'antd';
import type { TypographyProps } from './interface';

/**
 * @module Typography // 为简化开发将Modal和Drawer
 *
 */

const TypographyView: React.FC<TypographyProps>  = ({ children }) => {
  return <Typography.Title type='secondary'>{children}</Typography.Title>;
};

export default TypographyView
