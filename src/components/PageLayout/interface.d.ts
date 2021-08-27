import type { TabPaneProps } from 'antd';
import type { PageContainerProps } from '@ant-design/pro-layout';

interface ConfigProps {
  cancelTitle?: boolean;
  cancelBreadcrumb?: boolean;
}

interface Props extends PageContainerProps {
  tab?: (TabPaneProps & { key?: React.ReactText })[];
  onChange?: (key?: React.ReactText) => void;
  keepAlive?: boolean;
  _config?: ConfigProps;
}

export interface WayProps {
  list: React.ReactNode[];
  gutter?: number;
  rowStyle?: React.CSSProperties;
  colStyle?: React.CSSProperties;
}

export default Props;
