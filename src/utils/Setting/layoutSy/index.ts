import { WaterMarkProps } from './interface.d'
import type { WithFalse } from './interface.d'
/**
 * @module 全局配置表单模块部分
 */

interface LayoutProps {
  logo: React.ReactNode; // 设置logo
  footer: boolean; //底部按钮，为true展示Footer组件
  waterMark: false | string | WaterMarkProps; //水印，false关闭，string 设置内容，对象时，满足水印的需求
  rightContent: 'breadcrumb' | WithFalse<(props: any) => React.ReactNode>; // 导航页右侧设置，为false时不设置，为 breadcrumb' 展开面包屑设置， 其余支持原有的rightContentRender属性
}

const layoutSy: LayoutProps = {
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  footer: true,
  waterMark: false,
  rightContent: false,
};

export default layoutSy;
