import logo from '@/assets/logo.svg';

/**
 * @module 全局配置框架部分
 *
 * @param cancelTitle 全局取消文字
 * @param cancelBreadcrumb 全局取消面包屑
 * @param ghost 全局影藏背景色
 * @param fixedHeader 全局固定表头
 */

interface PageLayoutProps {
  cancelTitle: boolean;
  cancelBreadcrumb: boolean;
  ghost: boolean;
  fixedHeader: boolean;
}

export type { PageLayoutProps };

const pageLayoutSy: PageLayoutProps = {
  cancelTitle: false,
  cancelBreadcrumb: false,
  ghost: false,
  fixedHeader: false,
};

export default pageLayoutSy;
