import React, { useEffect, useState } from 'react';
import { PageLayout, Charts } from '@/components';
import { Method } from '@/utils'

const Mock: React.FC<any> = () => {

  return (
    <>
      <p>状态值：</p>
      <Charts data={[]} xField='1' yField='2' />
    </>
  );
};

export default Mock
