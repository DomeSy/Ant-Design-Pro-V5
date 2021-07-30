import { PageContainer } from '@ant-design/pro-layout';
import { pageLayoutSy } from '@/utils/Setting';
import Props from './interface.d';

/**
 * @module PageLayout 页容器
 * @author Domesy
 *
 * @tab 标签切换栏,支持原有的tabList
 * @onChange 切换标签触发的函数
 * @_config 全局配置
 *
 * @tab下的参数
 * @param tab 列表的的名称
 * @param key 唯一控制的标识，可不写，如果不写则按照 0, 1, 2进行切换
 *
 * @_config下的参数
 * @cancelTitle 全局取消标题
 * @cancelBreadcrumb 全局取消面包屑
 */

const PageLayout: React.FC<Props> = ({
  children,
  onChange,
  breadcrumb,
  title,
  header,
  tab,
  _config,
  ...props
}) => {
  const headerRender = () => {
    let result: any = {};

    if (breadcrumb || pageLayoutSy.cancelBreadcrumb) result.breadcrumb = breadcrumb;
    if (title || pageLayoutSy.cancelTitle) result.title = title;
    if (_config?.cancelTitle) result.title = undefined;
    if (_config?.cancelBreadcrumb) result.breadcrumb = undefined;

    return result;
  };

  return (
    <PageContainer
      {...props}
      tabList={tab ? tab : undefined}
      ghost={pageLayoutSy.ghost || props.ghost}
      fixedHeader={pageLayoutSy.fixedHeader || props.fixedHeader}
      onTabChange={(tab) => {
        if (onChange) onChange(tab);
      }}
      header={{
        // title: undefined,
        ...headerRender(),
        ...header,
      }}
    >
      {children}
    </PageContainer>
  );
};

export default PageLayout;
