import ProCard from '@ant-design/pro-card';
import { CardSy } from '@/utils/Setting';
import type { CardLayoutProps } from './interface';

/**
 * @module CardLayOut 卡片布局
 *
 * @param list  数据的列表，可以是对象也可以是节点，如果是对象，则必须加入render，在render中做为内容，并且可以配置ProCard其他属性，
 * @param type 一行显示的数量， 目前有 2 3 4 6 8，会更具页面的大小自动换行，默认为2
 * @param 其他的ProCard布局
 * @param _config 通知设置子组件的属性
 * @param height 设置统一高度
 */

const CardLayout: React.FC<CardLayoutProps> = ({ list = [], type = 2, _config={}, ...props }) => {

  const colSpan = type === 8 ? colSpanEight : type === 3 ? colSpanThree : type === 4 ? colSpanFour : type === 6 ? colSpanSix : colSpanTwo


  return (
    <ProCard gutter={[24, 24]} ghost {...props} wrap>
      {list.map((item, index) => {
        const { render, ...propsList } = item;
        return (
          <ProCard
            key={'WrapProCard' + index}
            {...CardSy.Layout}
            {..._config}
            {...propsList}
            colSpan={colSpan}
          >
            {item.render ? item.render : item}
          </ProCard>
        );
      })}
    </ProCard>
  );
};

export default CardLayout;


const colSpanTwo = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 12,
};

const colSpanThree = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
};

const colSpanFour = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
};

const colSpanSix = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 4,
};

const colSpanEight = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 3,
};
