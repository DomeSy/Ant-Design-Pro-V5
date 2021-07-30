import type { TabPaneProps } from 'antd';
import type { PageContainerProps } from '@ant-design/pro-layout';

interface ConfigProps {
  cancelTitle?: boolean;
  cancelBreadcrumb?: boolean;
}

interface Props extends PageContainerProps {
  tab?: (TabPaneProps & { key?: React.ReactText })[];
  onChange?: (key?: React.ReactText) => void;
  _config?: ConfigProps;
}
export default Props;
