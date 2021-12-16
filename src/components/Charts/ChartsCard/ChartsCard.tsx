import type { ChartsCardProps } from './interface';
import React, { useEffect } from 'react';
import Charts from '../Charts'

/**
 * @module ChartsCard // 表单与卡片得1
 *
 */
const ChartsCard: React.FC<ChartsCardProps>  = ({ ...props }) => {


  return <>
    <Charts {...props} />
  </>;
};

export default ChartsCard
