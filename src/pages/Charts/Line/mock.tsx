import React, { useEffect, useState } from 'react';
import { PageLayout, Charts } from '@/components';
import { mockDataLine } from './mockData'
import { Method } from '@/utils'

const Mock: React.FC<any> = () => {

  return (
    <>
      <p>状态值：</p>
      <Charts color={['#E8684A', '#5AD8A6', '#5B8FF9']} data={mockDataLine} seriesField="country" xField='year' yField='value'/>
    </>
  );
};

export default Mock
