import type { CardLayoutProps, CardLayoutListProps } from './interface';
import ProCard from '@ant-design/pro-card';

import { PageLayout } from '@/components';
import { useState, useEffect } from 'react';

/**
 * @module CardLayOut
 *
 * 通过卡片来实现响应式布局
 *
 */

const colSpanFour = {
  xs: 24,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 3,
};

// const colSpanFour = {
//   xs: 24,
//   sm: 12,
//   md: 12,
//   lg: 12,
//   xl: 6,
// };

const colSpanTwo = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 12,
};

const CardLayout: React.FC<CardLayoutProps> = ({ list = [], ...props }) => {
  useEffect(() => {
    console.log('list', list);
  }, [list]);

  return (
    <ProCard gutter={[24, 24]} ghost {...props} wrap>
      {list.map((item, index) => {
        const { render, ...propsList } = item;
        return (
          <ProCard key={'WrapProCard' + index} {...propsList} colSpan={colSpanFour}>
            {render}
          </ProCard>
        );
      })}
    </ProCard>
  );
};

export default CardLayout;
