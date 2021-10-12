import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
} = {
  navTheme: 'dark', // 主题颜色
  primaryColor: '#1890ff', //颜色
  layout: 'side', // 菜单模式 side：右侧导航，top：顶部导航
  contentWidth: 'Fluid', // 内容模式 Fluid：自适应，Fixed：定宽 1200px
  fixedHeader: false, // 是否固定头部
  fixSiderbar: true, // 是否固定导航
  colorWeak: false,
  // headerRender: false, // 是否拥有头部
  // menuRender: false, // 是否拥有菜单
  title: 'Domesy',
  pwa: false,
  iconfontUrl: '', //icon
};

export default Settings;
